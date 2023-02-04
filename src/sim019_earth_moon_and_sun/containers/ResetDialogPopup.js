import { connect } from "react-redux";
import InofBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    resetDialog: true,
    hideTooltip: false,
    id: "resetDialogPopup",
    dialogType: "attention",
    resetButtonText: data.buttonLabels.yes,
    resetButtonLabel: data.buttonLabels.yes,
    buttonContinueText: data.buttonLabels.no,
    buttonContinueLabel: data.buttonLabels.no,
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

export default connect(mapState, matchDispatch)(InofBox);
