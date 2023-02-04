import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks, setActivityCompletion } from "../actions";

const mapState = (state) => {
  return {
    id: "resetDialog",
    dialogType: "attention",
    resetButtonText: data.buttonLabels.yes,
    resetButtonTextLabel: data.buttonLabels.yes,
    buttonContinueText: data.buttonLabels.no,
    buttonContinueLabel: data.buttonLabels.no,
    resetDialog: true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetToLaunch());
    dispatch(setActivityCompletion([0, 0]));
    dispatch(common.updateResetBtnState(true));
    dispatch(common.togglePopup(3));
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
