import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  let text = "";
  let finish = false;
  const { selectedQuestion, questions, currentPopup, questionAnswered } = state;
  if (questions && selectedQuestion) {
    if (questions.length) {
      if (selectedQuestion.subQuestions.length) {
        text = data.continue;
      } else {
        text = data.next;
      }
    } else {
      if (selectedQuestion.subQuestions.length) {
        text = data.continue;
      } else {
        text = data.finish;
        finish = true;
      }
    }
  }
  return {
    text: text,
    disabled: !!currentPopup.length || questionAnswered != "answered",
    classes: `toast-secondary-button positive ${
      finish ? "" : "right-arrow"
    }`.trim(),
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    }, 50);
    dispatch(thunks.onNextScreenButtonClick());
  },
});

export default connect(mapState, matchDispatch)(Button);
