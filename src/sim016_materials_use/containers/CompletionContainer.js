import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  id: "4",
  ...data.completionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    dispatch(thunks.resetActivity(true));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
