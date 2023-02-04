import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import ResetDialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks } from "../actions";
import { togglePopup } from "../../app/actions";

const mapState = (state) => {
  return {
    id: "resetBox",
    resetDialog: true,
    dialogType: "attention",
    resetButtonText: data.buttonLabels.yes,
    buttonContinueText: data.buttonLabels.no,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
  },
  onClick2: () => {
    togglePopup(4);
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetActivity());
  },
});

export default connect(mapState, matchDispatch)(ResetDialogBox);
