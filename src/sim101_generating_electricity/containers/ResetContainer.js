import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import { common, thunks } from "../actions";
import EventManager from "../../app/events/manager";
import data from "../data";

const mapState = (state) => {
  return {
    id: "resetDialogPT",
    dialogType: "attention",
    header: "",
    content: "",
    resetButtonText: data.buttonLabels.yes,
    resetButtonTextLabel: data.buttonLabels.yes,
    buttonContinueText: data.buttonLabels.no,
    buttonContinueLabel: data.buttonLabels.no,
    resetDialog: true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
    dispatch(thunks.reset());
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
