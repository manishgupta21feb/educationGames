import { connect } from "react-redux";
import Header from "../../app/components/Header";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => ({
  infoLabel: data.buttonInfo,
  resetLabel: data.buttonReset,
  disabled: state.resetBtnState,
  hideImmediately: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  preventAutoHide: state.currentPopup.indexOf(3) >= 0,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
});

const mapDispatchToProps = (dispatch) => ({
  onInfoClick: () => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 550);
  },
  onResetClick: () => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  setResetFocusState: (focus) => {
    dispatch(common.setResetFocusState(focus));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
