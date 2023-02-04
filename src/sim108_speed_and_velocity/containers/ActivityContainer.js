import { connect } from "react-redux";
import Root from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  data: data,
  isPopupActive: !!state.currentPopup.length,
  showToastMessage: state.showToastMessage,
  submitButtonPressed: state.submitButtonPressed,
  answerAttempt: state.submitAnswer,
  wrongAnswer: state.wrongAnswer,
  activityHeading: data.activityHeading,
  getNextClick: state.getNextClick,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    setTimeout(() => {
      dispatch(common.toggleToastMessage(true));
    }, 20);
    setTimeout(() => {
      dispatch(common.togglePopup(1));
    }, 50);
  },
});

export default connect(mapState, mapDispatch)(Root);
