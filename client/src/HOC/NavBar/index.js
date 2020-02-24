import React, { Fragment, Component } from "react";
// import { changeLanguage } from "../../redux/actions/language";
// import { NavBar } from "../../components";
// import { connect } from "react-redux";
// import { Wrapper } from "../../components";

const withNavBar = Wrapped => {
  class HOC extends Component {
    render() {
      return (
        <Fragment>
          <Wrapped {...this.props} />
        </Fragment>
      );
    }
  }

  return HOC;
};

export default withNavBar;