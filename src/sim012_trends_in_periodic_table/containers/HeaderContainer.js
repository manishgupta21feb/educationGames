import { connect } from "react-redux";
import Header from "../../app/components/Header";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => ({
  infoLabel: data.buttonInfo,
  resetLabel: data.buttonReset,
  disabled: state.resetBtnState,
  setFocusOnReset: state.resetFocusState,
  hideImmediately: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
});

const mapDispatchToProps = (dispatch) => ({
  onInfoClick: () => {
    EventManager.broadcast("INFO_POPUP_OPEN");
    dispatch(common.togglePopup(5));
  },

  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },

  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
