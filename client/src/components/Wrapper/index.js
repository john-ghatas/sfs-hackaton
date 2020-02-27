import React from "react";
import { Jumbotron as Div } from "react-bootstrap";
import PropTypes from "prop-types";
import image from "../../assets/background-blank-empty-light-62693.jpg";

let wrapper = props => {
  const { style, children } = props;
  return <Div style={style}>{children}</Div>;
};

wrapper.defaultProps = {
  style: {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundBlendMode: "multiply",
    display: "block",
    width: "100%",
    height: "100%",
    position: "absolute",
    padding: "1rem",
    borderRadius: "0px",
    overflow: "auto"
  }
};

wrapper.propTypes = {
  style: PropTypes.object
};

export default wrapper;
