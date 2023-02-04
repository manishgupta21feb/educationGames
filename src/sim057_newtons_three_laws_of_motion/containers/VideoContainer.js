import { connect } from "react-redux";
import Video from "../components/Video";
import data from "../data";

import { thunk, setVideoPlayState } from "../actions";

const mapState = (state) => {

  let videoData = state.investigatingStatus && state.investigatingQuestionId === 2
    ? data.investigatingData[2].videoStart
    : data.nonInvestigatingData[state.nonInvestigatingId].videoStart

  return {
    loop: false,
    autoPlay: true,
    question: {
      id: videoData.videoClass,
      videoSrc: videoData.videoSrc,
      alt: '',
    },
    currentPopup: state.currentPopup,
    buttonLabels: {
      playVideo: data.buttonLabels.playVideo,
      pauseVideo: data.buttonLabels.pauseVideo,
    },
    videoStopText: data.videoStop,
    videoPlayText: data.videoPlay,
    videoContent: '',
    disablePlayPauseButton: false
  }
};

const matchDispatch = (dispatch, state) => ({
  playStateToggled: () => {
    dispatch(thunk.playStateToggleLiveText())
  },
  isVideoEnd: () => {
    dispatch(setVideoPlayState(false))
    dispatch(thunk.endVideoAnimation())
    dispatch(thunk.updateScreenText())
  }
});

export default connect(mapState, matchDispatch)(Video);