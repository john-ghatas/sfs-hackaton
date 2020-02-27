import React, { Component } from "react";
import { withNavBar } from "../../helpers/HOC";
import { Container } from "react-bootstrap";
import { Results } from "../../components";
class ResultsWrapper extends Component {
  render() {
    return (
      <Container>
        <Results {...this.props} />
      </Container>
    );
  }
}

export default withNavBar(ResultsWrapper);
