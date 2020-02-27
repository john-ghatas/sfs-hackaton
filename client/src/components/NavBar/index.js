import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NL, EN } from "../../helpers/constants/languages";
import { Link } from "../../components";
import Translate from "../../helpers/translate";
class NavBar extends Component {
  changeLanguage = () => {
    const { language } = this.props;

    switch (true) {
      case language === EN:
        this.switchLanguage(NL);
        break;
      default:
        this.switchLanguage(EN);
        break;
    }
  };

  switchLanguage = language => {
    this.props.changeLanguage(language);
  };
  render() {
    const spacer = {
      marginRight: "15px",
      color: "black",
      fontSize: "20px"
    };

    return (
      <Fragment>
        <Navbar
          bg="transparant"
          expand="lg"
          className="shadow-lg p-3 mb-5 rounded"
          style={{ backgroundColor: "rgba(255,255,255,.60)" }}
        >
          <Nav className="ml-left">
            <Navbar.Brand style={{ color: "black", fontSize: "22px" }}>
              <strong>
                <Translate text="hva" />
              </strong>
            </Navbar.Brand>
          </Nav>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ml-center"
              variant="pills"
              style={{ marginLeft: "40%" }}
            >
              <Nav.Item style={spacer}>
                <strong>
                  <Link url="/" text="homepage" type="span" />
                </strong>
              </Nav.Item>
              <Nav.Item style={spacer}>
                <strong>
                  <Link url="/about" text="about" type="span" />
                </strong>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ml-right">
            <Nav.Link
              style={{
                ...spacer,
                color: "grey",
                boxShadow: "0 0 1px",
                borderRadius: "15px",
                width: "100%",
                textAlign: "center"
              }}
              onClick={this.changeLanguage}
            >
              <strong>{this.props.language}</strong>
            </Nav.Link>
          </Nav>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ marginRight: "10%" }}
          />
        </Navbar>
      </Fragment>
    );
  }
}

export default NavBar;
