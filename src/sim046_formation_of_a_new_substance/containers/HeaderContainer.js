import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";
import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    disabled: state.resetBtnState,
    infoLabel: data.buttonLabels.info,
    resetLabel: data.buttonLabels.reset,
    setFocusOnReset: state.resetFocusState,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
    preventAutoHide: state.currentPopup.indexOf(4) >= 0 || state.currentPopup.indexOf(5) >= 0,
  };
};

const mapDispatch = (dispatch) => ({
  onResetClick: () => {
    dispatch(common.togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onInfoClick: () => {
    dispatch(common.togglePopup(2));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  setResetFocusState: (val) => {
    dispatch(common.setResetFocusState(val));
  },
});

export default connect(mapState, mapDispatch)(Header);
