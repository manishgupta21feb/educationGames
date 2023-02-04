import { connect } from "react-redux";
import { thunks,setShowLabels } from "../actions";
import data from "../data";
import Top from "../components/Screens/ScreenOne/Top/TopView";

const mapState = (state) => {
  const activeHotspot = state.fetchHotspots.allHotspot.filter(
    (a) =>
      state.hotspotSequence &&
      state.hotspotSequence.length &&
      a.id == state.hotspotSequence[0]
  )[0];
  return {
    isPopupActive: !!state.currentPopup.length,
    hotspots: state.fetchHotspots.allHotspot,
    activeHotspot: activeHotspot,
    isActivitystart: state.isActivitystart,
    isScreenToggle: state.isScreenToggle,
    showFullCircuit: state.showFullCircuit,
    activityHeading: data.activityHeading,
    bgAltText: data.bgAltText,
    hotspotCount:state.getHotspotCount,
    isVideoEnded:state.isVideoEnded,
    showLabels:state.showLabels
  };
};

const mapDispatch = (dispatch) => ({
  selectHotspot: () => {
    dispatch(thunks.hotspotClicked());
  },
  setShowLabels:(val)=>{
    dispatch(setShowLabels(val));
  }
});

export default connect(mapState, mapDispatch)(Top);
