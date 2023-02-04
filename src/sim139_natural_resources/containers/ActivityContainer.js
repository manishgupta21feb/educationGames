import Activity from "../components/activity";
import { connect } from "react-redux";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  showToastMessage: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  correctAnswerSubmitted: state.correctAnswerSubmitted,
  textContent: {
    infoPopupText: data.infoPopupText,
    resetPopupText: data.resetPopupText,
    activityDescription: data.activityDescription,
    introductionPopupText: data.introductionPopupText,
    answerFeedbackPopupText: state.answerFeedbackPopupText,
  },
});

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
