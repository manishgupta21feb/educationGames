import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, resetQuestion } from "../actions";

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
    dispatch(common.togglePopup(8));
    dispatch(resetQuestion());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
