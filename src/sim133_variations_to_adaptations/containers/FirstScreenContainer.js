import { connect } from "react-redux";
import LaunchScreen from "../components/firstScreen";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunk, updateTabsData } from "../actions";

const mapState = (state) => {
  return {
    hotSpots: state.updateTabsData,
    currentLocation: state.currentLocation,
    isPopupActive: !!state.currentPopup.length,
    mainScreenData: data.mainScreen.content,
    firstScreenImgAria: data.firstScreenImgAria,
  };
};

const matchDispatch = (dispatch) => ({
  onTabLunch: (currentWindow, currentLocation) => {
    dispatch(thunk.launchScreenUpdate(currentWindow, currentLocation));
  },
  hotSpotUpdate: (data) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(updateTabsData(data));
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, matchDispatch)(LaunchScreen);
