import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import {
  common,
  thunk,
  selectAnswerOption,
  setQuestion,
} from "../actions/activity";

const mapState = (state) => ({
  text: state.questionCount == 7 ? data.finish : data.continue,
  classes:
    state.questionCount == 7
      ? " toast-secondary-button positive"
      : "right-arrow toast-secondary-button positive",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.onNextButton(setQuestion()));
    dispatch(selectAnswerOption(""));
    dispatch(common.toggleToastMessage(false));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 100);
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(Button);
