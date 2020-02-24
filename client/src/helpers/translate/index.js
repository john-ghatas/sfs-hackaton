import React, { Component, Fragment } from "react";
import withRedux from "../HOC/withRedux";
import translateFile from "./localeEN-NL";

class Translate extends Component {
  getTranslation = () => {
    try {
      const { language, text } = this.props;
      const translation = translateFile[text][language];
      return translation;
    } catch (e) {
      console.log(e);
    }
  };

  generateText = () => {
    const { type, style } = this.props;
    switch (true) {
      case type === "p":
        return <p style={style}>{this.getTranslation()}</p>;
      case type === "span":
        return <span style={style}>{this.getTranslation()}</span>;
      case type === "h1":
        return <h1 style={style}>{this.getTranslation()}</h1>;
      case type === "h2":
        return <h2 style={style}>{this.getTranslation()}</h2>;
      case type === "h3":
        return <h3 style={style}>{this.getTranslation()}</h3>;
      default:
        return <span style={style}>{this.getTranslation()}</span>;
    }
  };

  render() {
    const generatedText = this.generateText();
    return <Fragment>{generatedText}</Fragment>;
  }
}

export default withRedux(Translate);
