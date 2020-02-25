import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Jumbotron as Div } from "react-bootstrap";
import Option from "./option";

class Questionnaire extends PureComponent {
  state = {
    questions: [],
    questionIndex: 0
    // vragen inladen als object met een array options en tags
  };

  render() {
    return (
      <Div style={styles.container}>
        <h3 style={styles.question}>
          question name fsfsdfiosdhfuosdjfpsdfuosdfsdfi
          <div style={styles.divider} />
        </h3>

        <Option selected={true} text="Dit is een vraag" multiSelect={false} />
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
    backgroundColor: "rgba(100,100,100,.1)",
    width: "100%"
  },
  question: {
    ...flexCenter,
    color: "black",
    textAlign: "center"
  },
  divider: {
    height: 1,
    width: "80%",
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 4,
    marginBottom: 8,
    backgroundColor: "black"
  },
  options: {}
};

export default Questionnaire;
