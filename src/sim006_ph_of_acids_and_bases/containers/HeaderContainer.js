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
    disabled: state.resetBtnState,
    infoLabel: data.buttonLabels.info,
    resetLabel: data.buttonLabels.reset,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onInfoClick: () => {
    EventManager.broadcast("INFO_POPUP_OPEN");
    dispatch(common.togglePopup(2));
  },
  onResetClick: () => {
    EventManager.broadcast("INFO_POPUP_OPEN");
    dispatch(common.togglePopup(3));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
