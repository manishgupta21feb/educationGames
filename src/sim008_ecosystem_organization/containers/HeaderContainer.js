import { connect } from "react-redux";
import Header from "../../app/components/Header";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  infoLabel: data.info,
  resetLabel: data.reset,
  disabled: state.resetBtnState,
  audioStatePlay: state.audioPlayState,
  setFocusOnReset: state.resetFocusState,
  hideImmediately: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  audioAriaLable: state.audioStatePlay ? data.audioAriaLable : "",
  audioLabel: state.audioStatePlay ? data.audioPlay : data.audioStop,
  preventAutoHide:
    state.currentPopup.indexOf(7) >= 0 || state.currentPopup.indexOf(8) >= 0,
});

const mapDispatch = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
    EventManager.broadcast("STOP_ALL");
  },
  setResetFocusState: (focus) => {
    dispatch(common.setResetFocusState(focus));
  },
  onInfoClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 350);
    dispatch(common.togglePopup(3));
    EventManager.broadcast("STOP_ALL");
  },
  onAudioClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("STOP_ALL");
    dispatch(thunks.setAudioPlayState());
  },
});

export default connect(mapState, mapDispatch)(Header);
