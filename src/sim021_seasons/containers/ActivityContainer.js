import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    correctAttempt: state.correctAnswer,
    showToastMessage: state.showToastMessage,
    answerAttempted: state.answerAttempted,
    initialInformationText: data,

    selectedQuestion: state.selectedQuestion,
    showStatic: state.showStatic,
    introPopupLabels: data.introPopupLabels,
    introImageAlt: data.introImageAlt,
    resetPopupText: data.resetPopupText,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
