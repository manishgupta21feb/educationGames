import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import ResetDialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    id: "resetBox",
    resetDialog: true,
    dialogType: "attention",
    resetButtonText: data.buttonLabels.yes,
    buttonContinueText: data.buttonLabels.no,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetActivity(false));
  },
});

export default connect(mapState, matchDispatch)(ResetDialogBox);
