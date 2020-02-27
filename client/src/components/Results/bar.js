import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import translate from "../../helpers/translate/standalone";

class Bar extends PureComponent {
  componentDidMount() {
    this.cycle();
  }

  cycle() {
    const { percentage, name } = this.props;

    if (percentage) {
      let elem = document.getElementById(name);

      let width = 10;
      let id = setInterval(() => {
        if (width >= percentage) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }, 25);
    }
  }

  render() {
    const { percentage, name, description, link } = this.props;
    return (
      <Fragment>
        <div style={styles.progress_container}>
          <h3 id="name" style={styles.title_minor}>
            {name}
          </h3>
          <div id="myProgress" style={styles.myProgress}>
            <div id={name} style={styles.myBar}>
              <p style={styles.barText}>{`${percentage}%`}</p>
            </div>
          </div>
          <div style={styles.container_description}>
            <span> {description} </span>
            <button style={styles.button_share}>
              <a href={link} style={styles.linkText}>
                {translate(this.props.language, "link")}
              </a>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

Bar.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};
const styles = {
  linkText: {
    color: "white",
    textDecoration: "none"
  },
  headerText: {
    alignSelf: "center",
    textAlign: "center"
  },
  progress_container: {
    margin: "10px",
    borderRadius: "20px",
    borderColor: "#000",
    flexDirection: "column",
    display: "flex"
  },
  myProgress: {
    width: "100%",
    backgroundColor: "ghostwhite",
    borderRadius: "20px"
  },
  title_minor: {
    selfAlign: "center",
    textAlign: "center"
  },
  myBar: {
    width: "10%",
    height: "30px",
    backgroundColor: "darkturquoise",
    textAlign: "end",
    lineHeight: "30px",
    color: "#fff",
    borderRadius: "20px"
  },
  barText: {
    marginRight: "150px"
  },
  container_description: {
    flexDirection: "row",
    display: "flex"
  },
  button_share: {
    justifyContent: "end",
    alignSelf: "center",
    marginLeft: "auto",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "darkturquoise",
    color: "white",
    padding: "6px"
  }
};
export default Bar;
