import { connect } from "react-redux";
import ResetConfirmationBox from "../../app/components/DialogBox";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => ({
  dialogType: "attention",
  id: "resetBox",
  resetDialog: true,
  header: "",
  buttonContinueText: data.buttonLabels.no,
  buttonContinueLabel: data.buttonLabels.no,
  resetButtonText: data.buttonLabels.yes,
  resetButtonLabel: data.buttonLabels.yes,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(8));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(8));
    dispatch(thunk.resetActivity(false));
  },
});

export default connect(mapState, matchDispatch)(ResetConfirmationBox);
