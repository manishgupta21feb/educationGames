import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    helpPopupText: data.helpPopupText,
    resetPopupText: data.resetPopupText,
    isPopupActive: !!state.currentPopup.length,
    initialInfoPopupText: data.initialInfoPopupText,
    showToastMessage: state.showToastMessage,
    answerAttempted: state.answerAttempted,
    correctAttempt: state.correctAnswer,
    partiallyCorrect: state.partiallyCorrect,
  };
};

const mapDispatch = (dispatch) => ({
  onMount: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.activityLoaded());
    dispatch(common.updateResetBtnState(true));
  },
});

export default connect(mapState, mapDispatch)(Activity);
