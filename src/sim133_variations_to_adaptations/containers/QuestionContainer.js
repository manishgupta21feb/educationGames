import { connect } from "react-redux";
import Question from "../components/Question";

import data from "../data";
import { thunk, common, currentWindow } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  const questionCount = state.getQuestionNumber;

  return {
    buttonLabels:
      questionCount == 3 ? data.buttonLabels.next : data.buttonLabels.continue,
    isAnswerSubmitted: state.getAnswer,
    countTotal: data.questions.length,
    isPopupActive: !!state.currentPopup.length,
    screen: state.screen,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onSetReset: () => {
      dispatch(common.setResetFocusState(true));
    },

    updateLocation: (window) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(thunk.setSceneData(window));
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);
    },
  };
};

export default connect(mapState, matchDispatch)(Question);
