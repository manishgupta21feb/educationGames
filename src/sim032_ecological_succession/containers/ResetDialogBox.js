import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import { common, thunks } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    id: "resetDialogPT",
    dialogType: "attention",
    header: "",
    content: "",
    resetButtonText: data.reset.resetButtonText,
    resetButtonTextLabel: data.reset.resetButtonLabel,
    buttonContinueText: data.reset.buttonContinueText,
    buttonContinueLabel: data.reset.buttonContinueLabel,
    resetDialog: true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: () => {
    dispatch(thunks.onReset());
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
