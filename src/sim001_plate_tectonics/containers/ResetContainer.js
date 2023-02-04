import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../config/index";
import {
  common,
  thunks,
  updateToastMsg,
  updateResetYesClicked,
} from "../actions";

const mapState = (state) => {
  return {
    resetDialog: true,
    id: "resetDialogPT",
    dialogType: "attention",
    resetButtonText: data.yes,
    buttonContinueText: data.no,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
    dispatch(updateToastMsg(""));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.ariaLiveText(data.resetLiveText));
    dispatch(common.togglePopup(2));
    dispatch(common.togglePopup(1));
    dispatch(updateResetYesClicked(true));
    dispatch(thunks.resetGamePT());
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
