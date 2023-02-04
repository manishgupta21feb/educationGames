import { connect } from "react-redux";
import ResetConfirmationBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks } from "../actions";

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
    dispatch(common.togglePopup(5));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(5));
    dispatch(thunks.resetActivity());
  },
});

export default connect(mapState, matchDispatch)(ResetConfirmationBox);
