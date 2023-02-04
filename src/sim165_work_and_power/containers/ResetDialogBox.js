import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunk, common, setAnyPartPlayed } from "../actions";

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
    dispatch(common.togglePopup(2));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
    dispatch(common.togglePopup(1));
    dispatch(common.updateResetBtnState(true));
    dispatch(thunk.resetSection());
    dispatch(setAnyPartPlayed(false));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
