import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  const preventAutoHide =
    state.currentPopup.indexOf(7) >= 0 ||
    state.currentPopup.indexOf(8) >= 0 ||
    state.currentPopup.indexOf(9) >= 0;
  return {
    disabled: state.resetBtnState,
    infoLabel: data.buttonLabels.info,
    resetLabel: data.buttonLabels.reset,
    setFocusOnReset: state.resetFocusState,
    hideImmediately: state.showToastMessage || state.currentPopup.length,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
    preventAutoHide,
  };
};

const mapDispatch = (dispatch) => ({
  onResetClick: () => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },

  onInfoClick: () => {
    dispatch(common.togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
  },

  setResetFocusState: (focus) => {
    dispatch(common.setResetFocusState(focus));
  },
});

export default connect(mapState, mapDispatch)(Header);
