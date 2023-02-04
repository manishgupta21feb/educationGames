import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunk } from "../actions";

const mapState = (state) => ({
  ...data.completionScreen,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.resetActivity());
    dispatch(common.togglePopup(4));
  },
});

export default connect(mapState, matchDispatch)(CompletionScreen);
