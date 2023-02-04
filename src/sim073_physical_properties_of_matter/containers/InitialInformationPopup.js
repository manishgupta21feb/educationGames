import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";
import { setActivityStart } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  id: "4",
  ...data.dialogData.start,
  startActivity: state.startActivity,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(1));
    dispatch(setActivityStart(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
