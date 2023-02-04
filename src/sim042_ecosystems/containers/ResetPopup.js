import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  id: "reset1",
  resetDialog: true,
  dialogType: "attention",
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
  resetButtonText: data.buttonLabels.yes,
  buttonContinueText: data.buttonLabels.no,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
    dispatch(thunks.resetActivity());
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
