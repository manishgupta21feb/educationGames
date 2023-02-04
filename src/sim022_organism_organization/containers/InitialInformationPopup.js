import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { ariaLiveText, togglePopup } from "../actions";
import { setActivityStart, setResetFocusState } from "../actions/activity";

const mapState = (state) => ({
  id: "4",
  ...data.dialogData.start,
  startActivity: state.startActivity,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(togglePopup(1));
    dispatch(ariaLiveText(""));
    dispatch(setActivityStart(true));
    dispatch(setResetFocusState(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
