import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks, common, clickedButtonValue } from "../actions";

const mapState = (state) => {
  return {
    buttonText: data.submitAnswer,
    question: data.instructionTwo,
    submitButtonPressed: state.submitButtonPressed,
    isPopupActive: !!state.currentPopup.length,
    disabled:
      state.currentPopup.length ||
      !state.clickedSecond ||
      state.submitAnswer ||
      !state.showFinishButton.length,
    question: data.instructionTwo[state.setSecondScreenQuestion],
    headingLevel: "2",
    // disabled: state.currentPopup.length ||
    // state.selectedAnswerOption || state.showFinishButton.length  == 0 ||
    // (state.submitAnswer && state.submitButtonPressed),
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.submitAnswerButtons());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(MCQArea);
