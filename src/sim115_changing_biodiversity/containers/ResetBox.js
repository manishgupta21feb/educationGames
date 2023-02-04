import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunk } from "../actions";

const mapState = (state) => {
  return {
    id: "resetBox",
    dialogType: "attention",
    resetDialog: true,
    header: "",
    resetButtonText: data.buttonLabels.yes,
    resetButtonTextLabel: data.buttonLabels.yes,
    resetBtnState: state.resetBtnState,
    buttonContinueText: data.buttonLabels.no,
    buttonContinueLabel: data.buttonLabels.no,
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
    dispatch(thunk.resetActivity());
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
