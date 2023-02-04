import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import HotspotArea from "../components/HotspotArea";

import data from "../data";
import { thunk, setResetBtnState, common } from "../actions/activity";
import { updateResetBtnState } from "../../app/actions";

const mapState = (state) => ({
  hotspots: data.hotspots,
  selectedHotspot: state.selectedHotspot,
  fossilsBGAltText: data.fossilsBGAltText,
  isPopupActive: !!state.currentPopup.length,
  viewType: state.viewType == "burger",
});

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.selectHotspot(id));
  },
});

export default connect(mapState, matchDispatch)(HotspotArea);
