import { connect } from "react-redux";
import Video from "../components/activity/Video";
import { isVideoEnded } from "../actions";

import data from "../data";
import { common, setVideoPlayState } from "../actions";

const mapState = (state) => {
  return {
    autoPlay: true,
    buttonLabels: data.buttonLabels,
    currentPopup: state.currentPopup,
    togglePlayState: state.videoPlayState,
    question: state.questionsData[state.questionCount - 1],
  };
};

const matchDispatch = (dispatch) => ({
  onVideoEnded: () => {
    dispatch(setVideoPlayState("pause"));
    dispatch(isVideoEnded(true));
  },

  onLoad: (data) => {
    if (data.liveText) {
      dispatch(common.ariaLiveText(data.liveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 400);
    }
  },
});

export default connect(mapState, matchDispatch)(Video);
