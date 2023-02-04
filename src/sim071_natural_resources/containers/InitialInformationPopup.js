import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, setActivityStart } from "../actions";

const mapState = (state) => ({
  id: "4",
  ...data.dialogData.start,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(1));
    dispatch(common.ariaLiveText(" "));
    dispatch(setActivityStart(true));
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
