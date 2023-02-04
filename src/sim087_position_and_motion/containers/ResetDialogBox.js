import { connect } from "react-redux";
import ResetDialogBox from "../../app/components/DialogBox";

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
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
  disabled: state.resetBtnState,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(8));
    dispatch(thunk.setResetDialogNoSelected(true));
  },
  onClick2: () => {
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    }, 0);
    dispatch(common.togglePopup(8));
    dispatch(thunk.resetActivity());
  },
});

export default connect(mapState, matchDispatch)(ResetDialogBox);
