import React, { Fragment } from "react";
import PropTypes from "prop-types";
import getTranslation from "../../helpers/translate/standalone";
const Progress = props => {
  const { length, current, language } = props;
  const circles = [];

  for (let i = 0; i <= length; i++) {
    circles.push(
      <div
        key={i}
        style={{
          ...styles.circle,
          ...{
            left: `${(i / length) * 100 - 1}%`,
            backgroundColor: i > current ? "ghostwhite" : "darkturquoise"
          }
        }}
      />
    );
  }

  return (
    <Fragment>
      <div style={styles.background}>
        <div
          style={{
            ...styles.foreground,
            ...{ width: `${(current / length) * 100}%` }
          }}
        />
        {circles}
      </div>

      <span style={styles.text}>{`${getTranslation(
        language,
        "question"
      )} ${current + 1}/${length + 1}`}</span>
    </Fragment>
  );
};

const styles = {
  background: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "90%",
    height: 6,
    backgroundColor: "ghostwhite"
  },
  foreground: {
    position: "absolute",
    height: 6,
    backgroundColor: "darkturquoise"
  },
  circle: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "ghostwhite"
  },
  text: {
    fontSize: 12,
    color: "rgb(34,34,34)",
    marginTop: 8
  }
};

Progress.propTypes = {
  current: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
};

export default Progress;
