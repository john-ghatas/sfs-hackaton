import React, { PureComponent } from "react";
import { Jumbotron as Div } from "react-bootstrap";
import Progress from "./progress";
import Option from "./option";

class Questionnaire extends PureComponent {
  state = {
    // Example data
    questions: [
      {
        question: "question goes here",
        options: [
          "answer 1",
          "answer 2 is better",
          "answer 3 is best",
          "answer 4 is worst"
        ],
        multiSelect: true
      },
      {
        question: "question goes here",
        options: [
          "answer 1",
          "answer 2 is better",
          "answer 3 is best",
          "answer 4 is worst"
        ],
        multiSelect: false
      }
    ],
    questionIndex: 0,
    selectedOptions: []
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
    const question = this.state.questions[this.state.questionIndex];
    return (
      <Div style={styles.container}>
        <Progress
          current={this.state.questionIndex}
          length={this.state.questions.length - 1}
        />

        <h3 style={styles.question}>
          {question.question}
          <div style={styles.divider} />
        </h3>

        <div style={styles.options}>
          {question.options.map((option, index) => {
            return (
              <Option
                selected={this.state.selectedOptions.includes(index)}
                onClick={() => this.selectOption(index, question.multiSelect)}
                text={option}
                multiSelect={question.multiSelect}
              />
            );
          })}
        </div>
      </Div>
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
    marginTop: 4,
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
