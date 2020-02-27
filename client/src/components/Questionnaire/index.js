import React, { PureComponent } from "react";
import api from "../../api";
import { Jumbotron as Div } from "react-bootstrap";
import Progress from "./progress";
import Option from "./option";
import { Spinner, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import translate from "../../helpers/translate/standalone";
class Questionnaire extends PureComponent {
  init = {
    questions: [],
    questionIndex: 0,
    selectedOptions: [],
    programme: "",
    tags: []
  };
  state = {
    ...this.init
  };
  componentDidMount = async () => {
    await this.setQuestions();
  };

  componentDidUpdate = async prevProps => {
    if (prevProps.language !== this.props.language) {
      await this.setQuestions();
    }
  };

  flattenArray = arr => {
    return arr.toString().split(",");
  };

  setQuestions = async () => {
    const { language } = this.props;
    const questions = await api.getAllQuestions(language);
    this.setState({ questions });
  };

  selectOption = (index, question, option) => {
    const { multi_select, tags } = question;
    const { questionIndex, selectedOptions } = this.state;
    let newOptions;
    let newTags = [...this.state.tags];

    if (questionIndex === 0) {
      this.setState({ programme: option });
    }

    if (multi_select) {
      newOptions = this.state.selectedOptions.includes(index)
        ? selectedOptions.filter(option => option !== index)
        : [...selectedOptions, index];

      newTags[questionIndex - 1] = this.flattenArray(
        newOptions.map(current => {
          return tags[current];
        })
      );
    } else {
      if (questionIndex > 0) {
        newTags[questionIndex - 1] = tags[index];
      }

      newOptions = [index];
    }

    this.setState({ selectedOptions: newOptions, tags: newTags });
  };

  finishForm = async () => {
    const { tags, programme } = this.state;
    const flattened = this.flattenArray(tags);
    const counts = {};

    for (let i = 0; i < flattened.length; i++) {
      counts[flattened[i]] = 1 + (counts[flattened[i]] || 0);
    }
    try {
      await api.parseResults(programme, counts);
    } catch (e) {
      console.log(e);
    }
  };

  changeQuestion = action => {
    const { questionIndex } = this.state;
    switch (action) {
      case "NEXT":
        this.setState({
          questionIndex: questionIndex + 1,
          selectedOptions: []
        });
        break;
      case "PREV":
        this.setState({
          questionIndex: questionIndex - 1,
          selectedOptions: []
        });
        break;
      default:
        break;
    }
    this.setState({ questonIndex: questionIndex + 1 });
  };

  render() {
    const { questions, questionIndex, selectedOptions } = this.state;
    const { language } = this.props;
    const question = questions[questionIndex];
    const isLast = questionIndex === questions.length - 1;

    return questions.length !== 0 ? (
      <Div style={styles.container}>
        <Progress
          current={this.state.questionIndex}
          length={this.state.questions.length - 1}
          language={this.props.language}
        />

        <h3 style={styles.question}>
          {question.name}
          <div style={styles.divider} />
        </h3>

        <div style={styles.options}>
          {question.answers.map((option, index) => {
            return (
              <Option
                selected={this.state.selectedOptions.includes(index)}
                onClick={() => this.selectOption(index, question, option)}
                text={option}
                multiSelect={question.multi_select}
                key={index}
              />
            );
          })}
        </div>
        <Div
          style={{
            ...styles.container,
            backgroundColor: "rgba(100,100,100,0)"
          }}
        >
          <ButtonToolbar>
            <ButtonGroup className="mr-2">
              <Button
                variant="dark"
                disabled={questionIndex === 0}
                onClick={() => this.changeQuestion("PREV")}
              >
                {translate(language, "previous")}
              </Button>
            </ButtonGroup>

            <ButtonGroup className="mr-2">
              <Button
                disabled={selectedOptions.length === 0}
                variant={isLast ? "info" : "dark"}
                onClick={
                  isLast ? this.finishForm : () => this.changeQuestion("NEXT")
                }
              >
                {isLast
                  ? translate(language, "finish")
                  : translate(language, "next")}
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Div>
      </Div>
    ) : (
      <Spinner animation="border" />
    );
  }
}

// TODO: Responsiveness
const flexCenter = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const styles = {
  container: {
    ...flexCenter,
    width: "100%",
    padding: "2rem",
    backgroundColor: "rgba(100,100,100,.1)"
  },
  question: {
    ...flexCenter,
    color: "black",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16
  },
  divider: {
    height: 1,
    width: "80%",
    marginTop: 14,
    marginBottom: 8,
    backgroundColor: "black"
  },
  options: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }
};

export default Questionnaire;
