import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunk } from "../actions/activity";

const mapState = (state) => ({
  id: "completionReset",
  ...data.completionPopup,
  resetBtnState: state.resetBtnState,
  startActivity: state.startActivity,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.reset());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
