import Video from "../../app/components/Video";
import { connect } from "react-redux";

import simData from "../data";
import { common, setVideoEnded } from "../actions";

const mapState = (state) => {
  const videoState = state.getVideoEnded;
  const updateAltEndGravity = () => {
    const videoData = {
      ...simData[state.getCurrentSection].videoData[state.getCurrentBall - 1],
    };
    if (videoState) {
      videoData.alt = videoData.altEnd;
    }
    return videoData;
  };
  const updateAltEndFriction = () => {
    const videoData =
      state.getCurrentFriction == ""
        ? ""
        : {
            ...simData[state.getCurrentSection][state.getCurrentFriction][
              state.getCurrentLevel
            ],
          };
    if (videoState) {
      videoData.alt = videoData.altEnd;
    }

    return videoData;
  };
  return {
    isPopupActive: !!state.currentPopup.length,
    question:
      state.getCurrentSection == "gravity"
        ? updateAltEndGravity()
        : updateAltEndFriction(),
    buttonLabels: simData.buttonLabels,
    currentPopup: state.currentPopup,
    autoPlay: false,
    togglePlayState: state.getRunningTest ? "play" : "",
    simData,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Video);
