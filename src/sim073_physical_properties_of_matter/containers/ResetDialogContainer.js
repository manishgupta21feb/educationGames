import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import { thunk } from "../actions";
import data from "../data";
import { common } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  id: "db10",
  resetDialog: true,
  dialogType: "attention",
  header: data.resetText[0].header,
  content: data.resetText[0].content,
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
  resetButtonText: data.resetText[0].resetButtonText,
  buttonContinueText: data.resetText[0].buttonContinueText,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
  },
  onClick2: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
    dispatch(thunk.resetSimulation());
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
