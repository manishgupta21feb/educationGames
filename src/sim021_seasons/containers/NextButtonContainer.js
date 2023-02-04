import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks, answerAttempted, correctAnswer } from "../actions";

const mapState = (state) => ({
  text:
    state.selectedQuestion <= 8
      ? data.buttonLabels.next
      : data.buttonLabels.finish,
  isPopUpOpen: !!state.currentPopup.length,
  classes: `toast-secondary-button positive ${
    state.selectedQuestion <= 8 ? "right-arrow" : ""
  }`,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.generateNextMCQ());
    dispatch(answerAttempted(false));
    dispatch(correctAnswer(false));
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(Button);
