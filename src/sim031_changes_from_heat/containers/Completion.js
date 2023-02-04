import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => ({
  id: "completionid",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(7));
    dispatch(thunk.reset(true));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
