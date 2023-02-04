import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  disabled: state.resetBtnState,
  infoLabel: data.buttonInfo,
  resetLabel: data.buttonLabels.reset,
  setFocusOnReset: state.resetFocusState,
  hideImmediately: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  resetLabel: data.resetText,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
});

const matchDispatch = (dispatch) => ({
  onResetClick: () => {
    dispatch(common.togglePopup(5));
    EventManager.broadcast("SECONDARY_CLICK");
  },

  onInfoClick: () => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
  },

  setResetFocusState: (focus) => {
    dispatch(common.setResetFocusState(focus));
  },
});

export default connect(mapState, matchDispatch)(Header);
