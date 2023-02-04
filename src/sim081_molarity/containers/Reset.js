import { connect } from "react-redux";
import ResetConfirmationBox from "../../app/components/DialogBox";
import { common, thunk } from "../actions";

import data from "../data";

const mapState = (state) => ({
  resetDialog: true,
  id: "resetDialogPT",
  dialogType: "attention",
  buttonContinueText: data.buttonNo,
  buttonContinueLabel: data.buttonNo,
  resetButtonText: data.buttonYes,
  resetButtonLabel: data.buttonYes,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
  onClick2: () => {
    dispatch(thunk.resetActivity(true));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
});

export default connect(mapState, matchDispatch)(ResetConfirmationBox);
