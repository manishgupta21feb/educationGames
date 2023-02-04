import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import EventManager from "../../app/events/manager";

import data from "../data";
import { togglePopup } from "../actions";
import { setStatic, resetQuestion } from "../actions/activity";

const mapState = (state) => ({
  id: "completionContinue",
  ...data.completionDialog.continue,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(togglePopup(8));
    dispatch(setStatic(true));
    dispatch(resetQuestion());
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
