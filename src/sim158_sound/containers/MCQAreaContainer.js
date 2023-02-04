import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    buttonText: data.submitAnswer,
    question:
      data.hotspots[state.questionIndexReducer].question[
        state.questionNumberReducer
      ].questionText,
    heading: " ",
    isPopupActive: !!state.currentPopup.length,
    disabled:
      state.currentPopup.length ||
      !state.selectedAnswerOption ||
      (state.answerSubmitted && state.submittedAnswer),
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: (val) => {
      dispatch(thunks.submitAnswer());
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
