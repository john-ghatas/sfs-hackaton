import React from "react";
import PropTypes from "prop-types";

const Option = props => {
  const { selected, text, multiSelect } = props;

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.outerIndicator,
          ...{ borderRadius: multiSelect ? 2 : 12 }
        }}
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
    flexDirection: "row"
  },
  outerIndicator: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    backgroundColor: "rgb(196,196,196)",
    marginRight: 8
  },
  innerIndicator: {
    width: 12,
    height: 12,
    backgroundColor: "rgb(98,98,98)"
  }
};

Option.propTypes = {
  selected: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  multiSelect: PropTypes.bool.isRequired
};

export default Option;
