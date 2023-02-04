import { connect } from "react-redux";
import Root from "../components/activity";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  isSimulationStart: state.startSimulation,
  isActivityFinish: state.activityFinish,
  data: data,
  infoDialogBox: data.infoBoxContent,
  isPopupActive: !!state.currentPopup.length,
  showToastMessage: state.showToastMessage,
  submitButtonPressed: state.submitButtonPressed,
  answerAttempt: state.submitAnswer,
  wrongAnswer: state.wrongAnswer,
  question: state.questionsData[state.questionCount - 1],
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(thunks.setQuestion());
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Root);
