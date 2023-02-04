import { connect } from "react-redux";
import ResetConfirmationBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  id: "resetBox",
  resetDialog: true,
  dialogType: "attention",
  resetButtonText: data.buttonLabels.yes,
  buttonContinueText: data.buttonLabels.no,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(8));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(8));
    dispatch(thunks.resetActivity(false));
  },
});

export default connect(mapState, matchDispatch)(ResetConfirmationBox);
