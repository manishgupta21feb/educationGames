import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => {
  const preventAutoHide = state.currentPopup.indexOf(4) >= 0;
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
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 550);
  },
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
