import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../data";
import { togglePopup } from "../actions";
import { setResetFocusState } from "../actions/activity";

const mapState = (state) => {
  const preventAutoHide =
    state.currentPopup.indexOf(4) >= 0;
  return {
    preventAutoHide,
    infoLabel: data.buttonLabels.info,
    resetLabel: data.buttonLabels.reset,
    isPopupActive: !!state.currentPopup.length,
    disabled: !state.resetBtnState,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
    setFocusOnReset: state.resetFocusState,
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
    dispatch(setResetFocusState(state));
  },
});

export default connect(mapState, matchDispatch)(Header);
