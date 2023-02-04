import { connect } from "react-redux";
import Video from "../../app/components/Video";
import data from "../data";
import { videoEnded, thunks } from "../actions";
const mapState = (state) => {
  const activeHotspot = state.fetchHotspots.allHotspot.filter(
    (a) =>
      state.hotspotSequence &&
      state.hotspotSequence.length &&
      a.id == state.hotspotSequence[0]
  )[0];
  const hotspotQuestion = {
    ...activeHotspot.assets,
    //alt: activeHotspot.assets.alt
  };
  const fullvideoQuestion = {
    ...data.fullCircuit,
    alt: data.fullCircuit.alt
  };
  const videoContent = state.showFullCircuit
    ? fullvideoQuestion
    : hotspotQuestion;
  return {
    currentPopup: state.currentPopup,
    autoPlay: true,
    loop: false,
    question: videoContent,
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
