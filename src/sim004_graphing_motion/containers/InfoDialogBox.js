import { connect } from "react-redux";
import data from "../data";
import { togglePopup } from "../actions/index";
import { setActivityreset, setResetDisable } from "../actions/activity";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  id: "infoDialogBox",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.startButton,
  buttonContinueLabel: data.startButton,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(togglePopup(1));
    dispatch(setActivityreset(false));
    dispatch(setResetDisable(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
