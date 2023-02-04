import { connect } from "react-redux";
import Header from "../../app/components/Header";
import { common } from "../actions";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => {
  return {
    infoLabel: data.buttonLabels.info,
    resetLabel: data.buttonLabels.reset,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.resetBtnState,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
    setFocusOnReset: state.resetFocusState,
    hideImmediately: state.showToastMessage,
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
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
