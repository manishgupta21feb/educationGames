import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const heading = data.questionHeading.replace("1", state.countMcq + 1);
  return {
    heading,
    buttonText: data.buttonLabels.submitAnswer,
    question: data.questionHeading2,
    isPopupActive: !!state.currentPopup.length,
    disabled:
      state.currentPopup.length ||
      !state.selectAnswerOption ||
      (state.answerSubmitted && state.correctAnswer),
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.submitAnswer());
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
