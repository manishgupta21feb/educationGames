import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import { ariaLiveText, thunks } from "../actions";
import { togglePopup } from "../actions";
import EventManager from "../../app/events/manager";
import data from "../data";
import { updateResetBtnState, setResetFocusState, thunk } from "../actions/activity";

const mapState = (state) => {
  return {
    id: "resetDialogPT",
    dialogType: "attention",
    header: "",
    content: "",
    resetButtonText: data.buttonLabels.yes,
    resetButtonTextLabel: data.buttonLabels.yes,
    buttonContinueText: data.buttonLabels.no,
    buttonContinueLabel: data.buttonLabels.no,
    resetDialog: true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: () => {
    dispatch(ariaLiveText(data.resetLiveText));
    dispatch(togglePopup(3));
    dispatch(togglePopup(1));
    // dispatch(thunks.onChangeScreen(0));
    dispatch(setResetFocusState(true));
    dispatch(updateResetBtnState(false));
    dispatch(thunk.doReset());
    dispatch(ariaLiveText(""));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
