import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks, answerAttempted, correctAnswer } from "../actions";

const mapState = (state) => ({
  text: data.buttonLabels.next,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "right-arrow toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.nonMCQQuestion());
    dispatch(correctAnswer(false));
    dispatch(answerAttempted(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(Button);
