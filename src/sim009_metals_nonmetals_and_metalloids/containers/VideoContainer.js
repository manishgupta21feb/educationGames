import { connect } from "react-redux";
import VideoFeedback from "../components/Screens/Screen0/FullView/VideoFeedback";

import data from "../data";
import { thunks, toggleVideoState } from "../actions";

const mapState = (state) => ({
  autoPlay: true,
  feedbackData: state.feedback,
  videoPlayState: state.videoPlayState,
  videoStop: data.buttonLabels.pauseVideo,
  videoPlay: data.buttonLabels.playVideo,
});

const mapDispatch = (dispatch) => ({
  toggleVideoState: (videoPlayState) => {
    dispatch(thunks.toggleVideo(videoPlayState));
  },
  stopVideo: () => {
    dispatch(toggleVideoState());
  },
});

export default connect(mapState, mapDispatch)(VideoFeedback);
