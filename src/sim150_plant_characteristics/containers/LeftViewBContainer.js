import { connect } from "react-redux";
import simData from "../data";
import { common } from "../actions";
import LeftViewB from "../components/LeftView/ViewB";

const mapState = (state) => {
  return {
    questionImage:
      state.getAssessmentData[state.getCurrentQuestion].questionImage,
    imgAlt: state.getAssessmentData[state.getCurrentQuestion].imageAltText,
    imgContent: state.getAssessmentData[state.getCurrentQuestion].imgContent,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftViewB);
