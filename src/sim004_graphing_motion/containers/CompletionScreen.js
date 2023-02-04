import { connect } from "react-redux";
import data from "../data";
import CompletionScreen from "../../app/components/CompletionScreen";
import { thunk } from "../actions/activity";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  id: "completionpup",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.resetActivity(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
