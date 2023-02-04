import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";
// import { setResetFocusState, setAudioStatePlay } from "../actions/activity";
import { setResetFocusState, common } from "../actions/activity";
import { togglePopup } from "../actions/";
import data from "../data";

const mapState = (state) => {
  const preventAutoHide =
    state.currentPopup.indexOf(6) >= 0 || state.currentPopup.indexOf(7) >= 0;
  return {
    preventAutoHide,
    infoLabel: data.infoText,
    resetLabel: data.resetText,
    disabled: state.resetBtnState,
    setFocusOnReset: state.resetFocusState,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
    hideImmediately: state.showToastMessage,
  };
};

const matchDispatch = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(3));
  },
  onInfoClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(2));
  },

  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
});

export default connect(mapState, matchDispatch)(Header);
