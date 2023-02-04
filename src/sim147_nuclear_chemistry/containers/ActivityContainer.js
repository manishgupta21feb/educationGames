import { connect } from "react-redux";
import Root from "../components/activity";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    isActivityFinish: state.activityFinish,
    data: data,
    startScreenContent: data.startScreenContent,
    infoDialogBox: data.infoBoxContent,
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
    wrongAnswer: state.wrongAnswer,
  };
};
const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(thunks.setQuestion());
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Root);
