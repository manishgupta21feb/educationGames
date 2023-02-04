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
  };
};

const mapDispatch = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
  onInfoClick: () => {
    dispatch(common.togglePopup(2));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 550);
  },
  setResetFocusState: (val) => {
    dispatch(common.setResetFocusState(val));
  },
});

export default connect(mapState, mapDispatch)(Header);
