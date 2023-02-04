import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import {
  common,
  setStatic,
  resetQuestion,
  setActivityStart,
  setAudioPlayState,
  thunks,
  selectOption,
} from "../actions";

const mapState = (state) => ({
  id: "db10",
  resetDialog: true,
  dialogType: "attention",
  header: data.resetText[0].header,
  content: data.resetText[0].content,
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
  resetButtonText: data.resetText[0].resetButtonText,
  buttonContinueText: data.resetText[0].buttonContinueText,
  audioStatePlay: state.audioStatePlay,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
    dispatch(thunks.resumeNaration());
  },
  onClick2: (id) => {
    // EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("STOP_ALL_AND_PLAY", { id: "SECONDARY_CLICK" });
    TincanManager.data.percentage = 0;
    TincanManager.resetTincanData();
    dispatch(common.togglePopup(6));
    dispatch(common.togglePopup(1));
    dispatch(setStatic(false));
    dispatch(resetQuestion());
    dispatch(common.ariaLiveText(data.resetLiveText));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
    dispatch(common.updateResetBtnState(true));
    dispatch(setActivityStart(false));
    dispatch(setAudioPlayState(true));
    dispatch(selectOption(""));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
