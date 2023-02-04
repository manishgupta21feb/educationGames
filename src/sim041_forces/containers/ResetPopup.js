import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { togglePopup } from "../actions";
import { thunk } from "../actions/activity";

const mapState = (state) => ({
  id: "reset1",
  resetDialog: true,
  dialogType: "attention",
  resetButtonText: data.yesButton,
  buttonContinueText: data.noButton,
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(2));
    dispatch(thunk.allCompleted());
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.resetActivity());
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
