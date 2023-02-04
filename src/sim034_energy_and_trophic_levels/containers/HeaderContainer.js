import { connect } from "react-redux";
import Header from "../../app/components/Header";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  infoLabel: data.info,
  resetLabel: data.reset,
  disabled: state.resetBtnState,
  setFocusOnReset: state.resetFocusState,
  isPopupActive: !!state.currentPopup.length,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  preventAutoHide:
    state.currentPopup.indexOf(7) >= 0 || state.currentPopup.indexOf(8) >= 0,
});

const mapDispatch = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
  },
  setResetFocusState: (focus) => {
    dispatch(common.setResetFocusState(focus));
  },
  onInfoClick: () => {
    dispatch(common.togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 550);
  },
});

export default connect(mapState, mapDispatch)(Header);
