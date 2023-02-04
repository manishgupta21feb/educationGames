import { connect } from "react-redux";
import Header from "../../app/components/Header";
import {common ,thunk} from "../actions";
import data from "../data";

const mapStateToProps = (state) => {
  const preventAutoHide =
     state.currentPopup.indexOf(3) >= 0 || state.currentPopup.indexOf(4) >= 0;
 return {
  preventAutoHide,
  infoLabel: data.buttonLabels.info,
  resetLabel: data.buttonLabels.reset,
  disabled: state.resetBtnState,
  audioStatePlay: state.audioStatePlay,
  setFocusOnReset: state.resetFocusState,
  isPopupActive: !!state.currentPopup.length,
  audioAriaLable: state.audioStatePlay ? data.audioAriaLable : "",
  audioLabel: state.audioStatePlay ? data.audioPlay : data.audioStop,
  startInfoPopup: state.currentPopup.indexOf(1) >= 0,
  hideImmediately: state.showToastMessage,
};
};
const mapDispatchToProps = (dispatch) => ({
  onResetClick: () => {
    EventManager.broadcast("STOP_ALL");
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(5));
  },
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
  onInfoClick: () => {
    EventManager.broadcast("STOP_ALL");
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
    setTimeout(() => {
      EventManager.broadcast("INFO_POPUP_OPEN");
    }, 550);
  },
  
  onAudioClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.setAudioStatePlay());  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
