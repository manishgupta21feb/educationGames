import { connect } from "react-redux";
import ResetDialogBox from "../../app/components/DialogBox";
import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
    dialogType: "attention",
    id: "3",
    resetDialog: true,
    header: "",
    buttonContinueText: data.buttonLabels.no,
    buttonContinueLabel: data.buttonLabels.no,
    resetButtonText: data.buttonLabels.yes,
    resetButtonLabel: data.buttonLabels.yes,
    resetBtnState: state.resetBtnState,
    // startActivity: state.startSimulation,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetActivity(false));
  },
});

export default connect(mapState, matchDispatch)(ResetDialogBox);
