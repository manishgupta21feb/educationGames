import { connect } from "react-redux";
import { common } from "../actions";
import data from "../data";
import Bottom from "../components/Screens/ScreenOne/Bottom/BottomView";

const mapState = (state) => {
  const activeHotspot = state.fetchHotspots.allHotspot.filter(
    (a) =>
      state.hotspotSequence &&
      state.hotspotSequence.length &&
      a.id == state.hotspotSequence[0]
  )[0];
  return {
    activeHotspot: activeHotspot,
    isScreenToggle: state.isScreenToggle,
    showFullCircuit: state.showFullCircuit,
    isPopupActive: !!state.currentPopup.length,
    btndisabled: !state.isVideoEnded,
    btnText: data.buttonLabels.next,
  };
};

const mapDispatch = (dispatch) => ({
  activateTransition: () => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 0);
  },
});

export default connect(mapState, mapDispatch)(Bottom);
