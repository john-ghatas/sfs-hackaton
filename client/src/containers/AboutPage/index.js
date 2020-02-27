import React, { Component } from "react";
import { withNavBar } from "../../helpers/HOC";
import { Container } from "react-bootstrap";

import { About } from "../../components";
class AboutPage extends Component {
  render() {
    return (
      <Container>
        <About {...this.props} />
      </Container>
    );
  }
}

export default withNavBar(AboutPage);
