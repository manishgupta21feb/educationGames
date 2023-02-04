import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../data";
import { togglePopup } from "../actions";
import { setResetFocusState } from "../actions/activity";

const mapState = (state) => ({
  infoLabel: data.info,
  resetLabel: data.reset,
  disabled: state.resetBtnState,
  setFocusOnReset: state.setFocusOnReset,
  isPopupActive: !!state.currentPopup.length,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
});

const mapDispatch = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(6));
  },
  setResetFocusState: (focus) => {
    dispatch(setResetFocusState(focus));
  },
  onInfoClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 350);
    dispatch(togglePopup(3));
  },
  // onAudioClick: () => {
  //   EventManager.broadcast("AUDIO_STARTSECONDARY_CLICK");
  //   dispatch(setAudioStatePlay());
  // },
});

export default connect(mapState, mapDispatch)(Header);
