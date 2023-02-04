import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import EventManager from "../../app/events/manager";

import data from "../data";
import { togglePopup } from "../actions";
import { setStatic, resetQuestion } from "../actions/activity";

const mapState = (state) => ({
  id: "completionContinue",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    }, 500);
    dispatch(togglePopup(8));
    dispatch(setStatic(true));
    dispatch(resetQuestion());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
