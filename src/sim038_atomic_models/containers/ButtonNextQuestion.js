import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunk, common, selectAnswerOption } from "../actions";

const mapState = (state) => ({
  text: data.buttonLabels.continue,
  classes: "right-arrow toast-secondary-button positive",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.onNextButton());
    dispatch(selectAnswerOption(""));
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(Button);
