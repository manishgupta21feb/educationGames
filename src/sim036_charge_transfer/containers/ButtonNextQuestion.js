import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, thunks, selectAnswerOption } from "../actions";

const mapState = (state) => ({
  text:
    state.questionCount == 6
      ? data.buttonLabels.finish
      : data.buttonLabels.next,
  classes: "right-arrow toast-secondary-button positive",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
    dispatch(selectAnswerOption(""));
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(Button);
