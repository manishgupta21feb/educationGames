import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const finish =
    state.currentScreen == 3 && state.draggablesScreen4.length == 0;
  const next = state.currentScreen == 0 && state.droppedItems.length < 3;
  return {
    text: finish ? data.finish : next ? data.next : data.continue,
    classes: `toast-secondary-button positive ${
      finish ? "" : "right-arrow"
    }`.trim(),
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(thunks.handleMoveToNextScreen());
  },
});

export default connect(mapState, matchDispatch)(Button);
