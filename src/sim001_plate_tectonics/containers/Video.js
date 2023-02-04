import { connect } from "react-redux";
import Video from "../../app/components/Video";
import videoSrc from "../assets/videos/finalPlateVideo.mp4";

import data from "../config/index";
import _data from "../data";

const mapState = (state) => ({
  autoPlay: false,
  question: {
    videoSrc,
    id: "question1",
    alt: _data.completionVideoLiveText,
  },
  buttonLabels: {
    playVideo: data.playVideo,
    pauseVideo: data.pauseVideo,
  },
  currentPopup: state.currentPopup,
});
const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Video);
