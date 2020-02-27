import React, { Fragment } from "react";
import PropTypes from "prop-types";
class Bar extends React.Component {
    constructor(props) {
        super(props)
        this.name = props.name;
        this.percentage = props.percentage;
    }

    cycle() {
        console.log(this.percentage);

        let elem = document.getElementById(this.name);
        
        let width = 10;
        let id = setInterval(() => {
            if (width >= this.percentage) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
               
            }
        }, 25);

    }

    render() {
        return (
            <Fragment>
                <div style={styles.progress_container}>
                    <h3 id="name" style={styles.title_minor}>
                        {this.name}
                    </h3>
                    <div id="myProgress" style={styles.myProgress}>
                        <div id={this.name} style={styles.myBar}>
                            <p style={styles.barText}>10%</p>
                        </div>
                    </div>
                    <div style={styles.container_description}>
                        <p> Description </p>
                        <button style={styles.button_share}>HvA Link</button>
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
    headerText: {
        alignSelf: 'center',
        textAlign: 'center'
    },
    progress_container: {
        margin: '10px',
        borderRadius: '20px',
        borderColor: '#000',
        flexDirection: 'column',
        display: 'flex',
    },
    myProgress: {
        width: '100%',
        backgroundColor: 'ghostwhite',
        borderRadius: '20px'
    },
    title_minor: {
        selfAlign: 'center',
        textAlign: 'center',
    },
    myBar: {
        width: '10%',
        height: '30px',
        backgroundColor: 'darkturquoise',
        textAlign: 'end',
        lineHeight: '30px',
        color: '#fff',
        borderRadius: '20px'
    },
    barText: {
        marginRight:'150px'
    },
    container_description: {
        flexDirection: 'row',
        display: 'flex',
    },
    button_share: {
        justifyContent: 'end',
        alignSelf: 'center',
        marginLeft: 'auto',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: 'darkturquoise',
        color: 'white',
        padding: '6px'
    }
}
export default Bar;
