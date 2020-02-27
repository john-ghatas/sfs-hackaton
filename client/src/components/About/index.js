import React from "react";
import { Jumbotron as Div } from "react-bootstrap";
import translate from "../../helpers/translate/standalone";

const About = props => {
    const { language } = props;
    //translate(language,'aboutPageText')}
    return <Div><p style={styles.headerText}>{translate(language,'aboutPageText')}</p></Div>
  };
  
  const styles = {
    headerText: {
      alignSelf: "center",
      whiteSpace: 'pre-wrap',
      textAlign: "center",
      
    }
  };
  
export default About;
  