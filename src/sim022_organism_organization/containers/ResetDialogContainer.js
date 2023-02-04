import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import {
  setStatic,
  resetQuestion,
  setActivityStart,
  updateResetBtnState,
  setResetFocusState,
  thunk,
} from "../actions/activity";
import data from "../data";
import { ariaLiveText, togglePopup } from "../actions";

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
    dispatch(togglePopup(6));
  },
  onClick2: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");

    dispatch(thunk.reset());

    // dispatch(togglePopup(6));
    // dispatch(togglePopup(1));
    // dispatch(setStatic(false));
    // dispatch(resetQuestion());
    // dispatch(ariaLiveText(data.resetLiveText));
    // dispatch(updateResetBtnState(true));
    // dispatch(setActivityStart(false));
    // dispatch(setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
