import { connect } from "react-redux";
import VideoOutput from "../components/Screens/ScreenOne/VideoOutput";
import data from "../data";
import { thunks, videoEnded, setVideoState } from "../actions";
const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    isVideoVisible: state.isVideoVisible,
    btnText: data.buttonLabels.continue,
    btnDisabled: !state.isVideoEnded,
    currentPopup: state.currentPopup,
    buttonLabels: data.buttonLabels,
    hotspots: state.hotspots,
    selectedHotspot: state.selectedHotspot,
    introImageAlt: data.introImageAlt,
  };
};

const mapDispatch = (dispatch) => ({
  continuePressed: () => {
    dispatch(thunks.videoContinuePressed());
  },
});

export default connect(mapState, mapDispatch)(VideoOutput);
