import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RightSection from "../components/RightSection";

import data from "../data";
import { thunks, selectHotspot } from "../actions";

const mapState = (state) => ({
  landforms: data.landforms,
  actionButtons: data.landforms,
  hotspotOptions: data.hotspotOptions,
  selectedHotspot: state.selectedHotspot,
  isPopupOpen: !!state.currentPopup.length,
  selectedLandform: state.selectedLandform,
  selectedOption: state.selectedHotspotOption,
  selectedPopupButton: state.selectedPopupButton,
  activityInstructions: data.activityInstructions,
  selectedActionButton: state.selectedActionButton,
  weatheringOrErosionText: data.weatheringOrErosionText,
  erosionInfoText: data.erosionInfoText,
  weatheringInfoText: data.weatheringInfoText,
});

const matchDispatch = (dispatch) => ({
  onLandformClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.selectLandform(id));
    dispatch(selectHotspot(""));
  },
  onSubsectionClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.selectHotspotOption(id));
  },
  playSfx: (id) => {
    console.log("playSfx: ", id);
    EventManager.broadcast(id);
  },
});

export default connect(mapState, matchDispatch)(RightSection);
