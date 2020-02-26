import React, { Component } from "react";
import { withNavBar } from "../../helpers/HOC";
import { Container } from "react-bootstrap";

import { Questionnaire } from "../../components";

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <Questionnaire {...this.props} />
      </Container>
    );
  }
}

export default withNavBar(LandingPage);
