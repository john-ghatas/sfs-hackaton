import React from "react";
import PropTypes from "prop-types";

const Option = props => {
  const { multiSelect, onClick, selected, text } = props;

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.outerIndicator,
          ...{ borderRadius: multiSelect ? 2 : 12 }
        }}
        onClick={onClick}
      >
        {selected && (
          <div
            style={{
              ...styles.innerIndicator,
              ...{ borderRadius: multiSelect ? 1 : 6 }
            }}
          />
        )}
      </div>

      {/* TODO: Review font size */}
      <span>{text}</span>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 4
  },
  outerIndicator: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    marginRight: 8,
    cursor: "pointer",
    backgroundColor: "rgb(221,221,221)"
  },
  innerIndicator: {
    width: 12,
    height: 12,
    backgroundColor: "rgb(34,102,221)"
  }
};

Option.propTypes = {
  selected: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  multiSelect: PropTypes.bool.isRequired
};

export default Option;
