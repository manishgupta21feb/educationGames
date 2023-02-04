import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import {
  thunks,
  clearCircuit,
  clearDroppedItems,
  selectedCircuit,
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
    // text: state.visitedPages.length < 2 ? data.buttonNext : data.buttonFinish,
    text: data.buttonNext,
    classes:
      state.visitedPages.length < 2
        ? "right-arrow toast-secondary-button positive"
        : " toast-secondary-button positive",
    isPopupActive: !!state.currentPopup.length,
    disabled: disabled == true ? false : true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
    dispatch(clearCircuit());
    dispatch(clearDroppedItems());
    dispatch(selectedCircuit(""));
    dispatch(thunks.changeScreen());
    dispatch(thunks.clearDroppedItems());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(Button);
