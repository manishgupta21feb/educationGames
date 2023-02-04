import { connect } from "react-redux";
import Root from "../components/activity";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => ({
  data: data,
  wrongAnswer: state.wrongAnswer,
  answerAttempt: state.submitAnswer,
  isActivityFinish: state.activityFinish,
  isSimulationStart: state.startSimulation,
  showToastMessage: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  submitButtonPressed: state.submitButtonPressed,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(thunk.setQuestion());
    dispatch(common.togglePopup(1));
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, mapDispatch)(Root);
