import { connect } from "react-redux";
import { togglePopup, ariaLiveText } from "../actions";
import { thunk, setActivityreset } from "../actions/activity";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    id: "resetDialogPT",
    dialogType: "attention",
    content: "",
    resetButtonText: data.yes,
    buttonContinueText: data.no,
    resetDialog: true,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    dispatch(togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: (id) => {
    dispatch(togglePopup(6));
    dispatch(thunk.resetActivity(false));
    dispatch(ariaLiveText(data.resetConfirmationText));
    setTimeout(() => {
      dispatch(ariaLiveText(" "));
    }, 200);
    dispatch(setActivityreset(true));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.resetTimeout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
