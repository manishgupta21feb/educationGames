import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RightSection from "../components/RightSection";

import data from "../data";
import { selectHotspot } from "../actions/activity";

const mapState = (state) => ({
  hotspots: data.hotspots,
  selectedHotspot: state.selectedHotspot,
  isPopupOpen: !!state.currentPopup.length,
  activityInstructions: data.activityInstructions,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(selectHotspot(""));
  },
});

export default connect(mapState, matchDispatch)(RightSection);
