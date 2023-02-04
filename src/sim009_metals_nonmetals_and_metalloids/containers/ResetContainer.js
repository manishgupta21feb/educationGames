import { connect } from "react-redux";
import ResetDialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  id: "3",
  resetDialog: true,
  dialogType: "attention",
  resetButtonText: data.buttonLabels.yes,
  buttonContinueText: data.buttonLabels.no,
});

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
