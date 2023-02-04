import { connect } from "react-redux";
import BottomArea from "../components/Screens/ScreenOne/Bottom";
import data from "../data/data.en";
import { thunks, videoEnded, setVideoState } from "../actions";

const mapState = (state) => {
  const activeHotspot = state.hotspots.find(
    (a) => a.id == state.selectedHotspot
  );
  return {
    heading: data.screen0,
    subHeading: data.screen0_subHeading,
    btnText: data.buttonLabels.continue,
    btnDisabled: !state.selectedHotspot,
    currentPopup: state.currentPopup,
    buttonLabels: data.buttonLabels,
    hotspots: state.hotspots,
    selectedHotspot: state.selectedHotspot,
    isPopupActive: !!state.currentPopup.length,
    isVideoVisible: state.isVideoVisible,
    screenNumber: state.screenNumber,
  };
};

const mapDispatch = (dispatch) => ({
  continuePressed: () => {
    dispatch(thunks.videoContinuePressed());
  },
});

export default connect(mapState, mapDispatch)(BottomArea);
