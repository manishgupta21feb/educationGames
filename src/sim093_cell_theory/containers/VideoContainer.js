import { connect } from "react-redux";
import Video from "../components/ActivityScreen/LeftScreen/Video";
import data from "../data";
import {
  isLabelled,
  isVideoEnded,
  disableContinueButton,
  videoEnded,
  common,
} from "../actions";
const mapState = (state) => {
  const question = data.videoData[0];
  return {
    loop: false,
    autoPlay: true,
    label: data.label,
    // question: data.videoData[0],
    question: {
      id: question.id,
      videoSrc: question.videoSrc,
      alt: state.isVideoEnded ? question.altEnd : question.alt,
    },
    isLabelled: state.isLabelled,
    buttonLabels: data.buttonLabels,
    currentPopup: state.currentPopup,
  };
};
const mapDispatch = (dispatch) => ({
  playStateToggled: (state) => {
    dispatch(videoEnded(false));
    if (state) {
      setTimeout(() => {
        dispatch(common.thunks.ariaLiveAssertive(data.liveText));
      }, 300);
    }
  },
  onVideoEnded: () => {
    dispatch(disableContinueButton(false));
    dispatch(videoEnded(true));
  },
});
export default connect(mapState, mapDispatch)(Video);
