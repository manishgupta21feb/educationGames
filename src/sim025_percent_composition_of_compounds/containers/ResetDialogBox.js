import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks, updateToastMsg } from "../actions";

const mapState = (state) => {
  return {
    resetDialog: true,
    id: "resetDialogPT",
    dialogType: "attention",
    resetBtnState: state.resetBtnState,
    resetButtonText: data.buttonLabels.yes,
    buttonContinueText: data.buttonLabels.no,
    buttonContinueLabel: data.buttonLabels.no,
    resetButtonTextLabel: data.buttonLabels.yes,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(3));
    dispatch(updateToastMsg(""));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: () => {
    dispatch(common.ariaLiveText("Your activity has been reset"));
    dispatch(common.togglePopup(3));
    dispatch(thunks.resetGame());
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
