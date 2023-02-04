import { connect } from "react-redux";
import VideoFeedback from "../components/Screens/VideoFeedback";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  loop: false,
  autoPlay: true,
  currentPopup: state.currentPopup,
  buttonLabels: {
    playVideo: data.buttonLabels.playVideo,
    pauseVideo: data.buttonLabels.pauseVideo,
  },
  question: {
    id: "wooden-material",
    videoSrc: data.assetURL,
    alt: data.backgroundAltText,
  },
});

const mapDispatch = (dispatch) => ({
  playStateToggled: (videoPlayState) => {
    if (videoPlayState) {
    } else {
    }
  },
});

export default connect(mapState, mapDispatch)(VideoFeedback);
