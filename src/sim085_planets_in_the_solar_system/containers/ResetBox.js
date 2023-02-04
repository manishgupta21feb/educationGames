import { connect } from "react-redux";
import ResetConfirmationBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";

import { common, thunks } from "../actions";
const mapState = (state) => ({
  dialogType: "attention",
  id: "resetBox",
  resetDialog: true,
  buttonContinueText: data.buttonNo,
  buttonContinueLabel: data.buttonNo,
  resetButtonText: data.buttonYes,
  resetButtonLabel: data.buttonYes,
  disabled: state.showFinishButton > 0 ? true : false,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
    dispatch(thunks.resetActivity(false));
  },
});

export default connect(mapState, matchDispatch)(ResetConfirmationBox);
