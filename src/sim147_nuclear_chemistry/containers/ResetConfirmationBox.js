import { connect } from "react-redux";
import ResetConfirmationBox from "../../app/components/DialogBox";
import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  header: "",
  id: "resetBox",
  resetDialog: true,
  dialogType: "attention",
  resetButtonText: data.buttonLabels.yes,
  resetButtonLabel: data.buttonLabels.yes,
  buttonContinueText: data.buttonLabels.no,
  buttonContinueLabel: data.buttonLabels.no,
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
