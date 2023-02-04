import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import HotspotArea from "../components/HotspotArea";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  landforms: data.landforms,
  scaleChange: state.scaleChange,
  buttonLabels: data.buttonLabels,
  currentPopup: state.currentPopup,
  selectedHotspot: state.selectedHotspot,
  fossilsBGAltText: data.fossilsBGAltText,
  selectedLandform: state.selectedLandform,
  earthAnimationAlt: data.earthAnimationAlt,
  isPopupActive: !!state.currentPopup.length,
  selectedOption: state.selectedHotspotOption,
});

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.selectHotspot(id));
  },
  playSfx: (earthAnimationState) => {
    EventManager.broadcast("PRIMARY_CLICK");
    const liveText = earthAnimationState
      ? data.earthAnimationLiveText.played
      : data.earthAnimationLiveText.paused;
    dispatch(common.ariaLiveText(liveText));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
});

export default connect(mapState, matchDispatch)(HotspotArea);
