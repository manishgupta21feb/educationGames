import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks, common, clickedButtonValue } from "../actions";

const mapState = (state) => {
  return {
    buttonText: data.submitAnswer,
    // question: state.questionsData[state.questionCount - 1].question,
    question: state.clickedButtonValue,
    isPopupActive: !!state.currentPopup.length,
    disabled:
      state.currentPopup.length ||
      !state.selectedAnswerOption ||
      (state.submitAnswer && state.submitButtonPressed),
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.submitAnswer());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
