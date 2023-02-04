import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../config/index";
import { common } from "../actions";

const mapState = (state) => {
  const preventAutoHide = state.currentPopup.indexOf(6) >= 0;
  return {
    preventAutoHide,
    infoLabel: data.info,
    resetLabel: data.reset,
    disabled: state.resetBtnState,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  };
};

const mapDispatch = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
  onInfoClick: () => {
    dispatch(common.togglePopup(5));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 550);
  },
  setResetFocusState: (focus) => {
    dispatch(common.setResetFocusState(focus));
  },
});

export default connect(mapState, mapDispatch)(Header);
