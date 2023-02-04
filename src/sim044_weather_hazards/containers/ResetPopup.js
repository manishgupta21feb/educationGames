import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";
import data from "../data";
import { togglePopup } from "../actions";
import { thunk, common } from "../actions/activity";

const mapState = (state) => ({
  id: "reset1",
  resetDialog: true,
  dialogType: "attention",
  resetButtonText: data.yesButton,
  buttonContinueText: data.noButton,
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
  disabled: state.resetBtnState,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(3));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(3));
    dispatch(thunk.resetActivity(true));
    dispatch(common.onChangeScreen(0));
    // dispatch(common.setResetBtnState(true));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
