import React, { Component } from "react";
import { withNavBar } from "../../helpers/HOC";
import { Container } from "react-bootstrap";

class LandingPage extends Component {
  render() {
    return <Container></Container>;
  }
}

export default withNavBar(LandingPage);
