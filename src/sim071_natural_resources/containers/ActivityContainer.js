import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    data: data,
    resetPopupText: data.resetPopupText,
    initialInformationText: data,
    showToastMessage: state.showToastMessage,
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
    wrongAnswer: state.wrongAnswer,
    correctAttempt: state.submittedAnswer,
    answerSubmitted: state.answerSubmitted,
    toastMsg: state.toastMsg,
    secondScreen: state.secondScreen,
    partiallyCorrect: state.partiallyCorrect,
    startPopupAltText: data.startPopupAltText,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
