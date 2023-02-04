import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../data";
import { togglePopup, toggleToastMessage } from "../actions";
import { setResetFocusState } from "../actions/activity";

const mapState = (state) => {
  const preventAutoHide = state.currentPopup.indexOf(4) >= 0;
  return {
    preventAutoHide,
    infoLabel: data.infoText,
    resetLabel: data.resetText,
    disabled: state.resetBtnState,
    setFocusOnReset: state.setFocusOnReset,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  };
};

const matchDispatch = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("STOP_ALL_AND_PLAY", { id: "SECONDARY_CLICK" });
    dispatch(toggleToastMessage(false));
    dispatch(togglePopup(2));
  },
  onInfoClick: () => {
    EventManager.broadcast("STOP_ALL_AND_PLAY", { id: "SECONDARY_CLICK" });
    dispatch(toggleToastMessage(false));
    dispatch(togglePopup(3));
  },
  setResetFocusState: (focus) => {
    dispatch(setResetFocusState(focus));
  },
});

export default connect(mapState, matchDispatch)(Header);
