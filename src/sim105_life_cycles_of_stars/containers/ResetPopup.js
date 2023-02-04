import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  id: "resetdialog",
  resetDialog: true,
  dialogType: "attention",
  resetButtonText: data.yes,
  buttonContinueText: data.no,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetActivity());
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
