import React, { Fragment, Component } from "react";
import { changeLanguage } from "../../redux/actions/language";
import { connect } from "react-redux";
const withRedux = (Wrapped, mapStateToProps = {}, mapDispatchToProps = {}) => {
  class HOC extends Component {
    render() {
      return (
        <Fragment>
          <Wrapped {...this.props} />
        </Fragment>
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

export default withRedux;
