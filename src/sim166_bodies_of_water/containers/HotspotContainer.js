import { connect } from "react-redux";
import Hotspot from "../components/Screens/ScreenOne/Hotspot";
import data from "../data";
import { thunks, videoEnded, common } from "../actions";
const mapState = (state) => {
  const activeHotspot = state.hotspots.find(
    (a) => a.id == state.selectedHotspot
  );
  return {
    bgAlt: data.bgAltText,
    heading: data.screen0,
    subHeading: data.screen0_subHeading,
    hotspots: state.hotspots,
    isPopupActive: !!state.currentPopup.length,
    selectedHotspot: state.selectedHotspot,
    hotspotVisitAlt: data.hotspotVisitAlt,
    isVideoVisible: state.isVideoVisible,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.selectHotspot(id));
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, mapDispatch)(Hotspot);
