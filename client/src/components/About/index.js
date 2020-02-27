import React from "react";
import { Jumbotron as Div } from "react-bootstrap";
import translate from "../../helpers/translate/standalone";

const About = props => {
    const { language } = props;
    return <Div style={styles.container}><p style={styles.headerText}>{translate(language,'aboutPageText')}</p></Div>
  };
  
  const flexCenter = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const styles = {
    container: {
        ...flexCenter,
        width: "100%",
        padding: "2rem",
        backgroundColor: "rgba(100,100,100,.1)"
      },
    headerText: {
      alignSelf: "center",
      whiteSpace: 'pre-wrap',
      textAlign: "center",
    }
  };
  
export default About;
  