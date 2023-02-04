import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, setActivityStart } from "../actions";

const mapState = (state) => ({
  id: "4",
  ...data.dialogData.start,
  startActivity: state.startActivity,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(1));
    dispatch(setActivityStart(true));
    dispatch(common.ariaLiveText(" "));
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("FIRST_ORGANISM");
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
