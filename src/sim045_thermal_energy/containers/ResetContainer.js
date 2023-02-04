import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => ({
  id: "teReset",
  header: "",
  resetDialog: true,
  dialogType: "attention",
  // resetBtnState: state.resetBtnState,
  resetButtonText: data.messages[0].resetButtonText,
  buttonContinueText: data.messages[0].buttonContinueText,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
    dispatch(thunk.resetActivity(true));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
