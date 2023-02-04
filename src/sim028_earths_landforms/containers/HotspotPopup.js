import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import HotspotPopup from "../components/HotspotArea/HotspotPopup";

import data from "../data";
import { selectHotspot } from "../actions";

const mapState = (state) => ({
  hotspotOptions: data.answerOptions,
  selectedHotspot: state.selectedHotspot,
});

const matchDispatch = (dispatch) => ({
  selectHotspot: (id) => {
    dispatch(selectHotspot(id));
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(HotspotPopup);
