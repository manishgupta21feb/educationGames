import { connect } from "react-redux";
import ResetDialogBox from "../../app/components/DialogBox";
import data from "../data";
import { common,thunk } from "../actions";

const mapState = (state) => ({
  dialogType: "attention",
  id: "resetBox",
  resetDialog: true,
  header: "",
  buttonContinueText: data.buttonNo,
  buttonContinueLabel: data.buttonNo,
  resetButtonText: data.buttonYes,
  resetButtonLabel: data.buttonYes,
  resetBtnState: state.resetBtnState,
  startActivity: state.startSimulation,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(5));
    dispatch(thunk.setResetDialogNoSelected(true));

  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.resetActivity(false));
  },
});

export default connect(mapState, matchDispatch)(ResetDialogBox);
