import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => ({
  data: data,
  time1:data.time1,
  time2:data.time2,
  setViewScreen: state.setViewScreen,
  setViewVideo: state.setViewVideo,
  isPopupActive: !!state.currentPopup.length,
  showToastMessage: state.showToastMessage,
  submitButtonPressed: state.submitButtonPressed,
  answerAttempt: state.submitAnswer,
  wrongAnswer: state.wrongAnswer,
  activityHeading: data.activityHeading,
  visitedHotspots: state.visitedHotspots,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    EventManager.broadcast("OUTDOOR_SCREEN");

    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
