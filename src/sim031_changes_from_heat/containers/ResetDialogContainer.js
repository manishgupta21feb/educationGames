import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunk, common } from "../actions";

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
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
  },
  onClick2: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.reset());
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
