import { connect } from "react-redux";
import { togglePopup } from "../actions";
import { thunk, common } from "../actions/activity";
import Activity from "../components/activity";

import data from "../data";

const mapState = (state) => {
  return {
    toastMsg: state.toastMsg,
    wrongAnswer: state.wrongAnswer,
    currentPopup: state.currentPopup,
    answerAttempt: state.submitAnswer,
    helpPopupText: data.helpPopupText,
    resetPopupText: data.resetPopupText,
    transitionPopup: data.transitionPopup,
    correctAttempt: state.submittedAnswer,
    answerSubmitted: state.answerSubmitted,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    submitButtonPressed: state.submitButtonPressed,
    initialInfoPopupText: data.initialInfoPopupText,
  };
};

const mapDispatch = (dispatch) => ({
  onMount: () => {
    dispatch(togglePopup(1));
    dispatch(thunk.setQuestion());
    dispatch(thunk.activityLoaded());
    // dispatch(common.setResetBtnState(true));
  },
});

export default connect(mapState, mapDispatch)(Activity);
