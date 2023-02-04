import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks, answerAttempted, correctAnswer, common } from "../actions";

const mapState = (state) => {
  const text =
    state.selectedQuestion == "5" ? data.buttonFinish : data.buttonNext;
  return {
    text: text,
    isPopUpOpen: !!state.currentPopup.length,
    classes: "right-arrow toast-secondary-button positive",
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
    dispatch(thunks.generateNextMCQ());
    dispatch(answerAttempted(false));
    dispatch(correctAnswer(false));
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(Button);
