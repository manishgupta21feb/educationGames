import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  disabled: state.resetBtnState,
  infoLabel: data.buttonLabels.info,
  resetLabel: data.buttonLabels.reset,
  setFocusOnReset: state.resetFocusState,
  isPopupActive: !!state.currentPopup.length,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
});

const matchDispatch = (dispatch) => ({
  onInfoClick: () => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
  },
  setResetFocusState: (focus) => {
    dispatch(common.setResetFocusState(focus));
  },
});

export default connect(mapState, matchDispatch)(Header);
