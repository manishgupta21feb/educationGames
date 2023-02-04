import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";
import data from "../data";
import { togglePopup } from "../actions";

const mapState = (state) => {
  const preventAutoHide =
    state.currentPopup.indexOf(6) >= 0 || state.currentPopup.indexOf(7) >= 0;
  return {
    preventAutoHide,
    infoLabel: data.infoText,
    resetLabel: data.resetText,
    disabled: state.resetBtnState,
    setFocusOnReset: state.resetFocusState,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  };
};

const matchDispatch = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(3));
  },
  onInfoClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(2));
  },
});

export default connect(mapState, matchDispatch)(Header);
