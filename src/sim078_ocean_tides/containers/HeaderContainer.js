import { connect } from "react-redux";
import Header from "../../app/components/Header";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  infoLabel: data.infoText,
  resetLabel: data.resetText,
  disabled: state.resetBtnState,
  setFocusOnReset: state.resetFocusState,
  hideImmediately: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  preventAutoHide:
    state.currentPopup.indexOf(6) >= 0 || state.currentPopup.indexOf(7) >= 0,
});

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
