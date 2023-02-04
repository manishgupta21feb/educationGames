import { connect } from "react-redux";
import { common } from "../actions";
import Header from "../../app/components/Header";

import data from "../data";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => ({
  infoLabel: data.buttonInfo,
  resetLabel: data.buttonReset,
  disabled: state.resetBtnState,
  setFocusOnReset: state.resetFocusState,
  hideImmediately: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  preventAutoHide:
    state.currentPopup.indexOf(7) >= 0 || state.currentPopup.indexOf(4) >= 0,
});
const mapDispatchToProps = (dispatch) => ({
  onInfoClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
