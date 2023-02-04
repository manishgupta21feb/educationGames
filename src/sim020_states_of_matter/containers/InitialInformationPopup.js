import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

// import data from "../config";
import data from "../data";
import { ariaLiveText, togglePopup } from "../actions";
import { setActivityStart } from "../actions/activity";

const mapState = (state) => ({
  id: "4",
  ...data.dialogData.start,
  startActivity: state.startActivity,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(1));
    dispatch(ariaLiveText(" "));
    dispatch(setActivityStart(true));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
