import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import {
  thunks,
  clearCircuit,
  clearDroppedItems,
  selectedCircuit,
  correctAnswer,
  common,
} from "../actions";

const mapState = (state) => {
  const disabled =
    state.droppedAtOne.length > 0 ||
    state.droppedAtTwo.length > 0 ||
    state.droppedAtThree.length > 0 ||
    state.droppedAtFour.length > 0 ||
    state.droppedAtFive.length > 0 ||
    state.droppedAtSix.length > 0 ||
    state.droppedAtSeven.length > 0;

  return {
    text: data.buttonLabels.next,
    classes: "right-arrow toast-secondary-button positive",
    isPopupActive: !!state.currentPopup.length,
    disabled: disabled == true ? false : true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("STOP_ALL");
    dispatch(thunks.onNextButton());
    EventManager.deregister("BUZZER");
    dispatch(common.toggleToastMessage(false));
    dispatch(thunks.clearDroppedItems());
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    });
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    });
  },
});

export default connect(mapState, matchDispatch)(Button);
