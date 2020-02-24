import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/logo.png";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width={"7%"}
              height={"7%"}
              style={{ padding: "0px" }}
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;
