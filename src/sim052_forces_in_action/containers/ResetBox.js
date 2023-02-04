import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import { common, thunk, setViewPlayed } from "../actions";

const mapState = (state) => {
  const data = state.getData;
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
    dispatch(thunk.exitHandler());
    dispatch(common.togglePopup(3));
    dispatch(common.updateResetBtnState(true));
    dispatch(common.togglePopup(1));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setViewPlayed([]));
    TincanManager.data.percentage = 0;
    TincanManager.data.completed = false;
    TincanManager.resetTincanData();
    TincanManager.saveTincanData();
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
