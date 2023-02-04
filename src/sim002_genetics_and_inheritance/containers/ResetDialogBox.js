import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunk } from "../actions/activity";
import { togglePopup, ariaLiveText } from "../actions";

const mapState = (state) => {
  const reset = state.appData.messages["reset"];
  return {
    id: "db3",
    resetDialog: true,
    dialogType: "attention",
    resetButtonText: reset.resetButtonText,
    resetButtonLabel: reset.resetButtonLabel,
    buttonContinueText: reset.buttonContinueText,
    buttonContinueLabel: reset.buttonContinueLabel,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(3));
  },
  onClick2: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(ariaLiveText(data.resetLiveText));
    dispatch(togglePopup(3));
    dispatch(togglePopup(1));
    setTimeout(() => {
      dispatch(ariaLiveText(" "));
    }, 300);
    dispatch(thunk.reset());
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
