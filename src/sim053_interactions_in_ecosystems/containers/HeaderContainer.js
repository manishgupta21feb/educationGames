import { connect } from "react-redux";
import Header from "../../app/components/Header";
import { thunk, common } from "../actions";
import data from "../data/index";

const mapState = (state) => {
  const preventAutoHide = state.currentPopup.indexOf(7) >= 0;
  return {
    preventAutoHide,
    infoLabel: data.infoText,
    resetLabel: data.resetText,
    disabled: state.resetBtnState,
    setFocusOnReset: state.resetFocusState,
    hideTooltip: true,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    startInfoPopup: state.currentPopup.indexOf(1) >= 0,
    // audioStatePlay: state.audioStatePlay,
    // audioAriaLabel: state.audioStatePlay ? data.audioAriaLabel : "",
    // audioLabel: state.audioStatePlay ? data.audioPlay : data.audioStop,
  };
};

const matchDispatch = (dispatch) => ({
  onResetClick: () => {
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    }, 0);
    dispatch(common.togglePopup(8));
    EventManager.broadcast("STOP_ALL_AND_PLAY");
  },
  onInfoClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    dispatch(thunk.checkAudioOnInfo());
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 550);
  },
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
  onAudioClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.setAudioStatePlay(false));
  },
});

export default connect(mapState, matchDispatch)(Header);
