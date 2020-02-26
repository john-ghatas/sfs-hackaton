import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Progress = props => {
  const { length, current } = props;
  console.log(props);

  const circles = [];
  for (let i = 0; i <= length; i++) {
    circles.push(
      <div
        style={{
          ...styles.circle,
          ...{ left: `${(i / length) * 100 - 1}%` },
          ...{
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

      <p style={styles.text}>{`Vraag ${current + 1}/${length + 1}`}</p>
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
