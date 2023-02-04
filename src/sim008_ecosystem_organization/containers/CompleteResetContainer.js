import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import {
  common,
  setStatic,
  resetQuestion,
  setActivityStart,
  setAudioPlayState,
  selectOption,
} from "../actions";

const mapState = (state) => ({
  id: "completionReset",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(7));
    dispatch(setStatic(false));
    dispatch(resetQuestion());
    dispatch(common.togglePopup(1));
    dispatch(common.ariaLiveText(data.resetLiveText));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
    dispatch(common.updateResetBtnState(true));
    dispatch(setActivityStart(false));
    EventManager.broadcast("SECONDARY_CLICK");

    // EventManager.broadcast("STOP_ALL_AND_PLAY", { id: "SECONDARY_CLICK" });
    dispatch(setAudioPlayState(true));
    dispatch(selectOption(""));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
