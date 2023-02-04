import { connect } from "react-redux";
import Graph from "../components/graph/index";
import data from "../data";

const mapState = (state) => {
  const questionCount = state.getQuestionNumber;
  return {
    dataItem: data.graphData[questionCount],
    graphAriaLabels: data.graphAriaLabels[questionCount],
    graphYaxisHeading: data.graphYaxisHeading,
    graphXaxisHeading: data.graphXaxisHeading,
    largeBeakedLabel: data.largeBeakedLabel,
    smallBeakedLabel: data.smallBeakedLabel,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Graph);
