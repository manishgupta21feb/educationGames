import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, setStatic, resetQuestion } from "../actions";

const mapState = (state) => ({
  id: "completionContinue",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(8));
    dispatch(setStatic(true));
    dispatch(resetQuestion());
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
