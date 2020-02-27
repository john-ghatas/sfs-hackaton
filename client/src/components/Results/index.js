import React, { PureComponent } from "react";
import Bar from "./bar";

class Results extends PureComponent {
  state = {
    listOfPorgressBars: [
      { id: "myBar", percentage: 85, name: "AI" },
      { id: "myBar1", percentage: 75, name: "ICT-TEACHING" },
      { id: "myBar2", percentage: 65, name: "Software for Science" },
      { id: "myBar3", percentage: 55, name: "Virtual Reality" },
      { id: "myBar4", percentage: 55, name: "Virtual" }
    ]
  };

  childrefs = [];

  componentDidMount() {
    for (let i = 0; i < this.childrefs.length; i++) {
      this.childrefs[i].cycle();
    }
  }
  render() {
    const items = this.state.listOfPorgressBars.map(function(item, index) {
      return (
        <Bar
          key={index}
          name={item.name}
          percentage={item.percentage}
          ref={ref => (this.childrefs[index] = ref)}
        />
      );
    }, this);

    return (
      <div className="App">
        <h1 style={styles.headerText}>Minor results</h1>
        {items}
      </div>
    );
  }
}

export default Results;

const styles = {
  headerText: {
    alignSelf: "center",
    textAlign: "center"
  },
};
