import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks, updateToastMsg } from "../actions";

const mapState = (state) => {
  return {
    id: "resetDialogPT",
    dialogType: "attention",
    header: "",
    content: "",
    resetButtonText: data.reset.resetButtonText,
    resetButtonTextLabel: data.reset.resetButtonLabel,
    buttonContinueText: data.reset.buttonContinueText,
    buttonContinueLabel: data.reset.buttonContinueLabel,
    resetDialog: true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(3));
    dispatch(updateToastMsg(""));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: () => {
    dispatch(common.ariaLiveText(data.resetLiveText));
    dispatch(common.togglePopup(3));
    dispatch(thunks.resetGame());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
