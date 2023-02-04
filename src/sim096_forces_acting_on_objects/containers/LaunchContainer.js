import LaunchPage from "../components/launch";
import { connect } from "react-redux";

import simData from "../data";
import { common, setCurrentSection, thunks } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    launchData: simData.launchPage,
    resetEnabled: state.resetFocusState,
  };
};

const mapDispatch = (dispatch) => ({
  updateLocation: (data) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setCurrentSection(data));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    dispatch(thunks.setScreenData(data));
  },
  setFocusReset: () => {
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(LaunchPage);
