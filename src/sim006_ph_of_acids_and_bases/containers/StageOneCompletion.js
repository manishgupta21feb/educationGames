import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(thunks.onStageOneComplete());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
