import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, doReset } from "../actions";

const mapState = (state) => {
  return {
    resetDialog: true,
    id: "resetDialogPT",
    dialogType: "attention",
    resetButtonText: data.buttonLabels.yes,
    resetButtonTextLabel: data.buttonLabels.yes,
    buttonContinueText: data.buttonLabels.no,
    buttonContinueLabel: data.buttonLabels.no,
  };
};

const matchDispatch = (dispatch, state) => {
  return {
    onClick: () => {
      dispatch(common.togglePopup(3));
      EventManager.broadcast("SECONDARY_CLICK");
    },
    onClick2: () => {
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(common.togglePopup(3));
      dispatch(common.togglePopup(1));
      dispatch(common.onChangeScreen(0));
      dispatch(common.setResetFocusState(true));
      dispatch(common.updateResetBtnState(true));
      dispatch(doReset());
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    },
  };
};

export default connect(mapState, matchDispatch)(DialogBox);
