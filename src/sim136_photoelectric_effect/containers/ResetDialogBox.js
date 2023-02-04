import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunk, setActivityreset, common } from "../actions";

const mapStateToProps = (state) => {
  return {
    id: "resetDialogPT",
    dialogType: "attention",
    content: "",
    resetButtonText: data.buttonYes,
    buttonContinueText: data.buttonNo,
    resetDialog: true,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: (id) => {
    dispatch(common.togglePopup(6));
    dispatch(thunk.resetActivity(false));
    dispatch(common.ariaLiveText(data.resetConfirmationText));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 200);
    dispatch(setActivityreset(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
