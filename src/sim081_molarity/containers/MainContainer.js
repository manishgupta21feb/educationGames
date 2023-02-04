import { connect } from "react-redux";
import Main from "../components/activity/Main";
import data from "../data";
import EventManager from "../../app/events/manager";
import {
  common,
  correctAttempt,
  thunk,
  setStepperValue,
  resetCounterValues,
  setIsVideoEnd,
} from "../actions";

const mapState = (state) => {
  let videoDetails = state.questionsData[state.questionCount - 1];
  return {
    isPopupActive: !!state.currentPopup.length,
    stepperValue: state.stepperValue,
    answer: state.questionsData[state.questionCount - 1].answer,
    questionCount: state.questionCount - 1,
    getIsVideoPause: state.getIsVideoPause,
    resetCounterValues: state.resetCounterValues,
    videoDetails: videoDetails,
  };
};

const matchDispatch = (dispatch) => ({
  stepperCheck: (value) => {
    dispatch(correctAttempt(value));
    dispatch(common.toggleToastMessage(true));
  },

  toggleResetValue: (val, data) => {
    if (val == "reset") {
      dispatch(resetCounterValues(false));
    } else if (val == "livetext") {
      dispatch(common.ariaLiveText(data.altVideoPlay));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 200);
    }
  },
  nextContainer: (item) => {
    if (item == "continue") {
      dispatch(setStepperValue(0));
    }
    dispatch(thunk.onNextButton());
    dispatch(setIsVideoEnd(false));
    // dispatch(setStepperValue(0));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(Main);
