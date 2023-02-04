import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    introText: data.introText,
    infoText: data.infoText[state.getLevel],
    resetPopupText: data.resetPopupText,
    observationMotive: data.observationMotive,
    data: data,

    isPopupActive: !!state.currentPopup.length,
    checkAnswer: state.getIsAnswerCorrect,
    showToastMessage: state.showToastMessage,
    answerSubmitted: state.answerSubmitted,
    correctAttempt: state.submittedAnswer,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
