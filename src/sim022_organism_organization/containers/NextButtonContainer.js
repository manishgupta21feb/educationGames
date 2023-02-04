import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import {
  thunk,
  answerAttempted,
  correctAnswer,
  setResetFocusState,
} from "../actions/activity";

const mapState = (state) => ({
  text: data.buttonNext,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "right-arrow toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.generateNextMCQ());
    dispatch(answerAttempted(false));
    dispatch(correctAnswer(false));
    dispatch(setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(Button);
