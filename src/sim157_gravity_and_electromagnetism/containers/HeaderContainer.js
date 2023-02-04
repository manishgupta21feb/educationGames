import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  infoLabel: data.buttonLabels.info,
  resetLabel: data.buttonLabels.reset,
  disabled: state.resetBtnState,
  setFocusOnReset: state.resetFocusState,
  hideImmediately: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  preventAutoHide:
    state.currentPopup.indexOf(5) >= 0 || state.currentPopup.indexOf(5) >= 0,
});

const mapDispatch = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    dispatch(common.ariaLiveText(" "));
  },
  setResetFocusState: (focus) => {
    dispatch(common.setResetFocusState(focus));
  },
  onInfoClick: () => {
    dispatch(common.togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 500);
  },
});

export default connect(mapState, mapDispatch)(Header);
