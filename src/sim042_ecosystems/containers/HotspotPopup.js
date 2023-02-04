import { connect } from "react-redux";
import HotspotPopup from "../components/HotspotArea/HotspotPopup";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks, selectHotspot } from "../actions";

const mapState = (state) => {
  const hotspot = state.hotspots.filter(
    (h) => h.id == state.selectedHotspot.id
  )[0];
  return {
    hotspot,
    hotspotOptions: data.answerOptions,
    selectedHotspot: state.selectedHotspot,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (type) => {
    dispatch(thunks.selectHotspotType(type));
    EventManager.broadcast("PRIMARY_CLICK");
  },
  selectHotspot: (id) => {
    dispatch(selectHotspot(id));
  },
});

export default connect(mapState, matchDispatch)(HotspotPopup);
