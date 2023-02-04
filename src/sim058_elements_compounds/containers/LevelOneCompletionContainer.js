import { connect } from "react-redux";
import TransitionPopup from "../../app/components/CompletionScreen";
import data from "../data";
import {
  common,
  levelOneCompleteAction,
  setStatic,
  thunks,
  submitAnswerMcq,
  submitButtonPressed,
} from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  ...data.transitionPopup,
  id: "transitionPopup",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.togglePopup(5));
    dispatch(setStatic(false));
    dispatch(submitButtonPressed(false));
    dispatch(submitAnswerMcq(false));
    dispatch(thunks.setQuestion());
  },
});

export default connect(mapState, mapDispatch)(TransitionPopup);
