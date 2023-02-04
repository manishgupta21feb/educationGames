import { connect } from "react-redux";
import Graph from "../components/graph/index";
import data from "../data";
import { setAnimationEnd } from "../actions";


const mapState = (state) => {
  return {
    dataItem: data.graphData[state.setQuestionValue],
    graphLabel: data.graphData[state.setQuestionValue].graphlabel,
    graphYaxisHeading: data.graphYaxisHeading,
    graphXaxisHeading: data.graphXaxisHeading,
    graphHeading: data.graphHeading,
    graphLegend:data.graphData[state.setQuestionValue].legends,
  };
};

const mapDispatch = (dispatch) => ({
  animationEnd: () => {
    dispatch(setAnimationEnd(false));
    // EventManager.broadcast("SECONDARY_CLICK");
    // dispatch(common.togglePopup(4));
  },
});

export default connect(mapState, mapDispatch)(Graph);
