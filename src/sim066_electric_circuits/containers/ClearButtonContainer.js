import { connect } from "react-redux";
import Button from "../components/ClearButton/ClearButtonComponent";
import EventManager from "../../app/events/manager";
import { isAndroid } from "react-device-detect";

import data from "../data";
import {
  thunks,
  common,
  leftCircuit,
  setAnswered,
  clearCircuit,
  correctAnswer,
  clearDroppedItems,
  clearButtonPressed,
} from "../actions";
import { ariaLiveText } from "../../app/actions";

const mapState = (state) => {
  const dropzoneFilled =
    state.droppedAtOne.length > 0 &&
    state.droppedAtTwo.length > 0 &&
    state.droppedAtThree.length > 0 &&
    state.droppedAtFour.length > 0 &&
    state.droppedAtFive.length > 0 &&
    state.droppedAtSix.length > 0 &&
    state.droppedAtSeven.length > 0;

  const disabled =
    state.droppedAtOne.length > 0 ||
    state.droppedAtTwo.length > 0 ||
    state.droppedAtThree.length > 0 ||
    state.droppedAtFour.length > 0 ||
    state.droppedAtFive.length > 0 ||
    state.droppedAtSix.length > 0 ||
    state.droppedAtSeven.length > 0;

  return {
    text: "Clear",
    isPopUpOpen: !!state.currentPopup.length,
    classes: "primary",
    disabled:
      (disabled == true ? false : true) ||
      (state.answered == true ? true : false),
    droppablesFull: dropzoneFilled,
  };
};

const mapDispatch = (dispatch) => ({
  onFinishClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 100);
  },
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(clearCircuit());
    dispatch(clearButtonPressed(true));
    dispatch(thunks.clearDroppedItems());
    dispatch(leftCircuit(false));
    setTimeout(() => {
      dispatch(setAnswered(false));
    }, 300);
    if (isAndroid) {
      setTimeout(() => {
        dispatch(common.thunks.ariaLiveAssertive(data.clearButtonLiveText));
      }, 500);
    } else {
      dispatch(common.thunks.ariaLiveAssertive(data.clearButtonLiveText));
    }
  },
});
export default connect(mapState, mapDispatch)(Button);
