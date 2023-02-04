import { connect } from "react-redux";
import Video from "../components/Video";
import data from "../data";
import { thunk, setVideoStart, onVideoEnded } from "../actions";

const mapState = (state) => {
  const question = data.questions[state.getQuestionNumber];
  return {
    autoPlay: false,
    togglePlayState: state.videoPlayState,
    question: {
      id: question.id,
      videoSrc: question.videoSrc,
      alt: state.videoEnded ? question.altEnd : question.alt,
    },
    currentPopup: state.currentPopup,
    buttonLabels: {
      playVideo: data.buttonLabels.playVideo,
      pauseVideo: data.buttonLabels.pauseVideo,
    },
    buttonLabels: data.buttonLabels,
    videoStopText: data.videoStop,
    videoPlayText: data.videoPlay,
  };
};

const matchDispatch = (dispatch) => ({
  playStateToggled: (state) => {
    if (state) {
      dispatch(onVideoEnded(false));
    }
    dispatch(setVideoStart(true));
    dispatch(thunk.videoLiveText());
  },

  onVideoEnded: () => {
    dispatch(onVideoEnded(true));
  },
});

export default connect(mapState, matchDispatch)(Video);
