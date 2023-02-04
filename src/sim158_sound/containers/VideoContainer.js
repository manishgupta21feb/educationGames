import { connect } from "react-redux";
import Video from "../../app/components/Video";
import data from "../data";
import { videoEnded, thunks } from "../actions";
const mapState = (state) => {
  const activeHotspot = state.hotspots.filter(
    (a) => a.id == state.selectedHotspot
  )[0];
  return {
    currentPopup: state.currentPopup,
    autoPlay: true,
    loop: false,
    // question: activeHotspot.details,
    question: { ...data.hotspots[state.questionIndexReducer].details, alt: "" },
    buttonLabels: data.buttonLabels,
  };
};
const mapDispatch = (dispatch) => ({
  onVideoEnded: () => {
    dispatch(videoEnded(true));
  },
  playStateToggled: (state) => {
    dispatch(thunks.setVideoLiveText());
  },
});

export default connect(mapState, mapDispatch)(Video);
