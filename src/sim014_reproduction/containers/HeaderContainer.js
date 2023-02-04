import { connect } from "react-redux";
import Header from "../../app/components/Header";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  const preventAutoHide =
    state.currentPopup.indexOf(6) >= 0 || state.currentPopup.indexOf(7) >= 0;
  return {
    preventAutoHide,
    infoLabel: data.infoText,
    resetLabel: data.resetText,
    disabled: state.resetBtnState,
    audioStatePlay: state.audioStatePlay,
    setFocusOnReset: state.resetFocusState,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
    audioAriaLabel: state.audioStatePlay ? data.audioAriaLabel : "",
    audioLabel: state.audioStatePlay ? data.audioPlay : data.audioStop,
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
    dispatch(thunks.checkAudioOnInfo());
  },
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
  onAudioClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.setAudioStatePlay());
  },
});

export default connect(mapState, matchDispatch)(Header);
