import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => {
  const preventAutoHide =
    state.currentPopup.indexOf(4) >= 0 || state.currentPopup.indexOf(5) >= 0;
  return {
    preventAutoHide,
    infoLabel: data.info,
    resetLabel: data.reset,
    disabled: state.resetBtnState,
    setFocusOnReset: state.resetFocusState,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
  onInfoClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 550);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
