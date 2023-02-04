import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => ({
  data: data,
  isPopupActive: !!state.currentPopup.length,
  showToastMessage: state.showToastMessage,
  correctAttempt: state.correctAnswer,
  answerAttempted: state.answerAttempted,
  activityHeading: data.activityHeading,
  start: state.startSimulation,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
