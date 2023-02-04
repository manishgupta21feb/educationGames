import { connect } from "react-redux";
import Video from "../components/TopSection/VideoContainer";
import data from "../data";
import { isLabelled, isVideoEnded, thunks } from "../actions";
const mapState = (state) => {
  return {
    currentPopup: state.currentPopup,
    autoPlay: true,
    loop: false,
    question: data.videoData,
    buttonLabels: data.buttonLabels,
    label: data.label,
    isLabelled: state.isLabelled,
  };
};
const mapDispatch = (dispatch) => ({
  playStateToggled: () => {
    dispatch(isLabelled(true));
    dispatch(thunks.setVideoLiveText());
  },
  onVideoEnded: () => {
    dispatch(isVideoEnded(false));
    dispatch(isLabelled(false));
  },
});
export default connect(mapState, mapDispatch)(Video);
