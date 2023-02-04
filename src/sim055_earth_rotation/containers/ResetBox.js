import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunk } from "../actions";

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
    dispatch(thunk.resetActivity());
    dispatch(common.togglePopup(3));
    dispatch(common.updateResetBtnState(true));
    dispatch(common.togglePopup(1));
    EventManager.broadcast("SECONDARY_CLICK");

    TincanManager.data.percentage = 0;
    TincanManager.data.completed = false;
    TincanManager.resetTincanData();
    TincanManager.saveTincanData();
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
