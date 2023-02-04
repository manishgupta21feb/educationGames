import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => ({
  text:
    state.questionCount == data.equations.length ? data.buttonFinish : data.buttonNext,
  classes: "right-arrow toast-secondary-button positive",
  isPopUpOpen: !!state.currentPopup.length,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(Button);
