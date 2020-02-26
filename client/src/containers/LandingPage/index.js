import React, { Component } from "react";
import { withNavBar } from "../../helpers/HOC";
import { Container } from "react-bootstrap";

import { Questionnaire } from "../../components";
import { Results } from "../../components";
class LandingPage extends Component {
  render() {
    return (
      <Container>
        <Results />
      </Container>
    );
  }
}

export default withNavBar(LandingPage);
