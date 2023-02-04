import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunk, answerAttempted, correctAnswer } from "../actions";

const mapState = (state) => {
  const enabled = state.answerAttempted && state.correctAnswer;
  const className = enabled ? "" : "hide";
  return {
    disabled: !enabled,
    ariaHidden: !enabled,
    text: data.buttonNext,
    isPopUpOpen: !!state.currentPopup.length,
    classes: `right-arrow toast-secondary-button positive ${className}`,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.generateNextMCQ());
    dispatch(answerAttempted(false));
    dispatch(correctAnswer(false));
  },
});

export default connect(mapState, mapDispatch)(Button);
