import { connect } from "react-redux";

import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  id: "resetBox",
  header: "",
  resetDialog: true,
  dialogType: "attention",
  buttonContinueText: data.buttonNo,
  buttonContinueLabel: data.buttonNo,
  resetButtonText: data.buttonYes,
  resetButtonLabel: data.buttonYes,
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");

    dispatch(common.togglePopup(6));
    dispatch(thunks.resetActivity());
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
