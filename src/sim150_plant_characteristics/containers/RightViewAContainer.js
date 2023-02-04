import RightViewA from "../components/RightView/ViewA";
import { connect } from "react-redux";
import simData from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    question: state.getLocationQuestion[state.getCurrentPart],
    currentLevel: state.getQuestionLevel,
    submitActive: state.getSubmitActive,
    isPopupActive: !!state.currentPopup.length,
    submitFocus: state.getSubmitFocus,
    submitData: simData.buttonLabels,
  };
};

const mapDispatch = (dispatch) => ({
  checkAnswers: () => {
    dispatch(thunk.submitAnswer());
  },
});

export default connect(mapState, mapDispatch)(RightViewA);
