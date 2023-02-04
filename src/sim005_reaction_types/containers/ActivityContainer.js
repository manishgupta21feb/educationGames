import { connect } from "react-redux";
import Root from "../components/activity";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  data: data,
  wrongAnswer: state.wrongAnswer,
  answerAttempt: state.submitAnswer,
  isActivityFinish: state.activityFinish,
  showToastMessage: state.showToastMessage,
  isSimulationStart: state.startSimulation,
  isPopupActive: !!state.currentPopup.length,
  submitButtonPressed: state.submitButtonPressed,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.setQuestion());
  },
});

export default connect(mapState, mapDispatch)(Root);
