import React, { PureComponent } from "react";
import Bar from "./bar";
import api from "../../api";
import translate from "../../helpers/translate/standalone";
class Results extends PureComponent {
  state = {
    results: []
  };

  childrefs = [];

  componentDidMount = async () => {
    await this.getData();
    this.iterate();
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.results.length !== this.state.results.length)
      await this.getData();
  };

  getData = async () => {
    const questionnaireId = this.props.match.params.id;
    const { language } = this.props;
    const initResults = await api.getResults(questionnaireId, language);
    const results = initResults
      ? initResults.scores.map((result, index) => {
          const { similarity, name, description, link } = result;
          return {
            id: index,
            percentage: similarity * 100,
            name,
            description,
            link
          };
        })
      : [];

    this.setState({ results });
  };

  iterate() {
    for (let i = 0; i < this.childrefs.length; i++) {
      this.childrefs[i].render();
    }
  }

  render() {
    const { results } = this.state;
    const { language } = this.props;
    const items = results.map(function(item, index) {
      return (
        <Bar
          key={index}
          name={item.name}
          percentage={item.percentage}
          description={item.description}
          link={item.link}
          ref={ref => (this.childrefs[index] = ref)}
          language={language}
        />
      );
    }, this);

    return (
      <div className="App">
        <h1 style={styles.headerText}>{translate(language, "results")}</h1>
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
  }
};
