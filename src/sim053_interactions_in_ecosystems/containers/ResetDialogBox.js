import { connect } from "react-redux";
import ResetDialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunk, common } from "../actions";

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
    startActivity: state.startActivity,
});

const matchDispatch = (dispatch) => ({
    onClick: () => {
        EventManager.broadcast("SECONDARY_CLICK");
        dispatch(common.togglePopup(8));
        dispatch(thunk.setResetDialogNoSelected(true));
      },
      onClick2: () => {
        EventManager.broadcast("SECONDARY_CLICK");
        dispatch(thunk.resetActivity());
      },
});

export default connect(mapState, matchDispatch)(ResetDialogBox);
