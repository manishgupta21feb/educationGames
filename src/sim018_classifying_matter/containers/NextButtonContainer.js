import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { toggleToastMessage } from "../actions";
import { thunk, answerAttempted, correctAnswer } from "../actions/activity";

const mapState = (state) => {
  const check = data.mcqData.length == state.selectedQuestion;
  console.log(
    "state.selectedQuestion: ",
    data.mcqData.length,
    state.selectedQuestion,
    check
  );
  const className = check ? "" : "right-arrow";
  const text = check ? data.buttonFinish : data.buttonNext;
  return {
    text: text,
    isPopUpOpen: !!state.currentPopup.length,
    classes: `toast-secondary-button positive ${className}`,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.generateNextMCQ());
    dispatch(answerAttempted(false));
    dispatch(correctAnswer(false));
    dispatch(toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(Button);
