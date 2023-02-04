import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    id: "resetPopup",
    resetDialog: true,
    dialogType: "attention",
    resetButtonText: data.buttonLabels.yes,
    buttonContinueText: data.buttonLabels.no,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
    dispatch(thunks.resetActivity());
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
