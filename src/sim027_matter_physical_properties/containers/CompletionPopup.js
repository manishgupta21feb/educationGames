import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  ...data.completionPopup,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.resetGame());
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(CompletionScreen);
