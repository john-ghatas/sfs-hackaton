import { Wrapper } from "../../components";
import React, { Component } from "react";
import PropTypes from "prop-types";
import routes from "../../routes/links";

class NotFound extends Component {
  goBack = () => {
    const { history } = this.props;
    history.push(routes.root);
  };

  render() {
    const { style } = this.props;
    return (
      <Wrapper style={style}>
        <h1>
          <font color="salmon">
            <strong>404</strong>
          </font>
        </h1>
        <h2>
          Page not found, click
          <span onClick={() => this.goBack()}>
            <font color="salmon" style={{ margin: "0.5%" }}>
              {"here"}
            </font>
          </span>
          to go back to the previous page
        </h2>
      </Wrapper>
    );
  }
}

const centerWrapper = {
  display: "block",
  position: "absolute",
  margin: "auto",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};

NotFound.defaultProps = {
  style: centerWrapper
};

NotFound.propTypes = {
  style: PropTypes.object
};
export default NotFound;
