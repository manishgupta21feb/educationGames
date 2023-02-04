import { connect } from "react-redux";
import Video from "../components/Video";

import { cloneDeep } from "lodash";
import { setVideoEnded, common } from "../actions";

const mapState = (state) => {
  const data = state.getData;
  const tugOfWarVideos = cloneDeep(
    data.tugOfWarVideos[state.getCurrentVideo - 1]
  );
  const ballForceVideos = cloneDeep(
    data.ballForceVideos[state.getUpdateSlider]
  );

  const getUpdatedAlt = (videoObj) => {
    if (state.getVideoEnded) {
      videoObj.alt = videoObj.altEnd;
    }
    if (!videoObj) {
      videoObj = "";
    }
    return videoObj;
  };
  return {
    autoPlay: false,
    togglePlayState: state.getForceBegin ? "play" : "stop",
    question:
      state.getLevel == 1
        ? getUpdatedAlt(tugOfWarVideos)
        : getUpdatedAlt(ballForceVideos),
    currentPopup: state.currentPopup,
    buttonLabels: {
      playVideo: data.buttonLabels.playVideo,
      pauseVideo: data.buttonLabels.pauseVideo,
    },
    buttonLabels: data.buttonLabels,
    videoStopText: data.videoStop,
    videoPlayText: data.videoPlay,
    disablePlayPauseButton: true,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Video);
