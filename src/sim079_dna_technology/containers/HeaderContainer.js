import { connect } from "react-redux";
import Header from "../../app/components/Header";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  return {
    infoLabel: data.infoText,
    resetLabel: data.resetText,
    disabled: state.resetBtnState,
    setFocusOnReset: state.resetFocusState,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopUp: state.currentPopup.indexOf(1) >= 0,
  };
};

const matchDispatch = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(8));
  },
  onInfoClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
  },
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
});

export default connect(mapState, matchDispatch)(Header);
