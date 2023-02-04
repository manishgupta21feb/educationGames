import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import {
  thunk,
  common,
  selectShapeAnswerOption,
  selectLonePairAnswerOption,
} from "../actions";

const mapState = (state) => ({
  text:
    state.questionCount == 12
      ? data.buttonLabels.finish
      : data.buttonLabels.next,
  classes: "nxt-class right-arrow toast-secondary-button positive ",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.onNextButton());

    dispatch(selectLonePairAnswerOption(""));
    dispatch(selectShapeAnswerOption(""));
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(Button);
