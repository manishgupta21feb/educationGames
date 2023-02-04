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
  setViewFrame,
  setSubScreen,
  questionCount,
} from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  ...data.transitionPopup,
  id: "transitionPopup",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(setViewFrame("MCQ"));
    dispatch(setSubScreen(false));
    dispatch(questionCount(1));
    dispatch(thunks.setMCQQuestion());
    dispatch(common.togglePopup(5));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    });
    dispatch(submitAnswerMcq(false));
  },
});

export default connect(mapState, mapDispatch)(TransitionPopup);
