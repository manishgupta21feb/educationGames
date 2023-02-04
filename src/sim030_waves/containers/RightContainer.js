import { connect } from "react-redux";
import Right from "../components/activity/Main/Right";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  pushForces: data.pushForces,
  playedVideos: state.playedVideos,
  selectedVideo: state.selectedVideo,
  selectedForce: state.selectedForce,
  instructionText: data.instructionText,
  activityCompleted: state.activityCompleted,
});

const matchDispatch = (dispatch) => ({
  selectForce: (force) => {
    dispatch(thunks.selectForce(force));
  },
});

export default connect(mapState, matchDispatch)(Right);
