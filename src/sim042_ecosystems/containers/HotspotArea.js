import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import HotspotArea from "../components/HotspotArea";

import data from "../data";
import { thunks, selectHotspot } from "../actions";

const mapState = (state) => ({
  hotspots: state.hotspots,
  helpPopupText: data.helpPopupText,
  selectedHotspot: state.selectedHotspot,
  fossilsBGAltText: data.fossilsBGAltText,
  isPopupActive: !!state.currentPopup.length,
});

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.selectHotspot(id));
  },
  selectHotspot: (id) => {
    dispatch(selectHotspot(id));
  },
});

export default connect(mapState, matchDispatch)(HotspotArea);
