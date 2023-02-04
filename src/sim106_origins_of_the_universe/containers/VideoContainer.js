import { connect } from "react-redux";
import Video from "../components/Video";
import data from "../data";
import { setVideoEnd } from "../actions";

const mapState = (state) => {
  return {
    autoPlay: true,
    question: data.view[0].questions[0],
    currentPopup: state.currentPopup,
    buttonLabels: {
      playVideo: data.buttonLabels.playVideo,
      pauseVideo: data.buttonLabels.pauseVideo,
    },
    ariaLable : data.view[0].questions[0].ariaLiveText,
    
    buttonLabels: data.buttonLabels,
    videoStopText: data.videoStop,
    videoPlayText: data.videoPlay,
  };
};

const matchDispatch = (dispatch) => ({
  onVideoEnded: () => {
    dispatch(setVideoEnd(true));
  },

});

export default connect(mapState, matchDispatch)(Video);
