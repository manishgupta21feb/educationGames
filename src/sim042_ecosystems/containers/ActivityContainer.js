import { connect } from "react-redux";
import Activity from "../components/activity";

import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    correctAttempt: state.correctAttempt,
    answerSubmitted: state.answerSubmitted,
    showToastMessage: state.showToastMessage,
    correctAttempt: state.correctAnswer,
    showToastMessage: state.showToastMessage,
    answerAttempted: state.answerAttempted,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
