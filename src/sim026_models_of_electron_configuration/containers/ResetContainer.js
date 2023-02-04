import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunk, doReset } from "../actions";

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
      dispatch(thunk.doReset(3));
      dispatch(doReset());
    },
  };
};

export default connect(mapState, matchDispatch)(DialogBox);
