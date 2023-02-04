import { connect } from "react-redux";
import Root from "../components/activity";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  data: data,
  isPopupActive: !!state.currentPopup.length,
  showToastMessage: state.showToastMessage,
  submitButtonPressed: state.submitButtonPressed,
  answerAttempt: state.submitAnswer,
  wrongAnswer: state.wrongAnswer,
  activityHeading: data.activityHeading,
  infoText: state.isMCQ ? data.infoBoxContentScene2 : data.infoBoxContentScene1,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(thunks.setQuestion());
    dispatch(common.togglePopup(1));
    dispatch(thunks.onLoad());
  },
});

export default connect(mapState, mapDispatch)(Root);
