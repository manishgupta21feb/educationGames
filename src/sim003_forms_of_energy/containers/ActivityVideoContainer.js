import { connect } from "react-redux";
import ActivityVideo from "../components/activity/ActivityVideo";

import data from "../data";
import { common, toggleVideoState, setVideoState } from "../actions";

const mapState = (state) => ({
  loop: true,
  unmuted: true,
  autoPlay: true,
  question: state.selectedQuestion,
  currentPopup: state.currentPopup,
  buttonLabels: {
    playVideo: data.buttonLabels.playVideo,
    pauseVideo: data.buttonLabels.pauseVideo,
  },
});

const matchDispatch = (dispatch) => ({
  playStateToggled: (state) => {
    dispatch(toggleVideoState());
    if (state) {
      dispatch(common.ariaLiveText(data.videoPlayState));
    } else {
      dispatch(common.ariaLiveText(data.videoStopState));
    }
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 500);
  },

  canPlayThrough: () => {
    dispatch(setVideoState(true));
  },
});

export default connect(mapState, matchDispatch)(ActivityVideo);
