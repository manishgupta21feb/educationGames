import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  id: "db10",
  header: "",
  resetDialog: true,
  dialogType: "attention",
  resetBtnState: state.resetBtnState,
  resetButtonText: data.buttonLabels.yes,
  buttonContinueText: data.buttonLabels.no,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
  },
  onClick2: (id) => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetActivity(false));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
