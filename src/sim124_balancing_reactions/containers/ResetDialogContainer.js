import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks } from "../actions";

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
  // audioStatePlay: state.audioStatePlay,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
  },
  onClick2: (id) => {
    console.log("cliked yes:::::::::::::::")
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
    dispatch(thunks.setQuestion());
    dispatch(thunks.reset());
    dispatch(common.ariaLiveText(data.resetLiveText));
    dispatch(common.updateResetBtnState(true));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
