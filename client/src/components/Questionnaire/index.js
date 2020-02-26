import React, { PureComponent } from "react";
import api from "../../api";
import { Jumbotron as Div } from "react-bootstrap";
import Progress from "./progress";
import Option from "./option";
import { Spinner } from "react-bootstrap";
class Questionnaire extends PureComponent {
  state = {
    questions: [
      // {
      //   question: "Placeholder",
      //   answers: ["Placeholer"],
      //   multiSelect: true
      // }
    ],
    questionIndex: 0,
    selectedOptions: []
  };
  componentDidMount = async () => {
    const { language } = this.props;
    const questions = await api.getAllQuestions(language);
    this.setState({ questions });
  };

  selectOption = (index, multiSelect) => {
    let newOptions;

    if (multiSelect) {
      newOptions = this.state.selectedOptions.includes(index)
        ? this.state.selectedOptions.filter(option => option !== index)
        : [...this.state.selectedOptions, index];
    } else {
      newOptions = [index];
    }

    this.setState({ selectedOptions: newOptions });
  };

  render() {
    const { questions, questionIndex } = this.state;
    const question = questions[questionIndex];
    console.log(this.state);
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
                onClick={() => this.selectOption(index, question.multi_select)}
                text={option}
                multiSelect={question.multi_select}
                key={index}
              />
            );
          })}
        </div>
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
