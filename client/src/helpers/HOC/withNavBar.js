import React, { Component } from "react";
import { changeLanguage } from "../../redux/actions/language";
import { NavBar } from "../../components";
import { connect } from "react-redux";
import { Wrapper } from "../../components";
const withNavBar = (Wrapped, mapStateToProps = {}, mapDispatchToProps = {}) => {
  class HOC extends Component {
    render() {
      return (
        <Wrapper>
          <NavBar {...this.props} />
          <Wrapped {...this.props} />
        </Wrapper>
      );
    }
  }

  mapStateToProps = state => ({
    ...mapStateToProps,
    language: state.language.current
  });

  mapDispatchToProps = dispatch => {
    return {
      ...mapDispatchToProps,
      changeLanguage: lang => dispatch(changeLanguage(lang))
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(HOC);
};

export default withNavBar;
