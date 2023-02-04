import { connect } from "react-redux";
import { thunks } from "../actions";
import data from "../data";
import Top from "../components/Screens/ScreenTwo/Top/Top";

const mapState = (state) => {
  const activeHotspot = state.fetchHotspots.allHotspot.filter(
    (a) =>
      state.hotspotSequence &&
      state.hotspotSequence.length &&
      a &&
      a.id == state.hotspotSequence[0]
  )[0];
  return {
    isPopupActive: !!state.currentPopup.length,
    hotspots: state.fetchHotspots.allHotspot,
    activeHotspot: activeHotspot,
    isActivitystart: state.isActivitystart,
    activityHeading: data.activityHeading,
    isScreenToggle: state.isScreenToggle,
    getHotspotCount: state.getHotspotCount,
    noOfArrows:state.showArrow
  };
};

const mapDispatch = (dispatch) => ({
  selectHotspot: () => {
    dispatch(thunks.hotspotClicked());
  },
});

export default connect(mapState, mapDispatch)(Top);
