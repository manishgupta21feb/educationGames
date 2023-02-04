import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RightArea from "../components/RightView/Draggable.js";

import data from "../data";
import {
  common,
  setPreviousSound,
  setDraggableValue,
  thunks,
  setStatic,
  selectAnswerOption,
  answerAttempt,
  showToastMessage,
  updateAccessibleList,
} from "../actions";

const mapState = (state) => {
  return {
    list: state.setDroppable,
    data: data,
    draggableItems: state.draggableItems,
    isPopupActive: !!state.currentPopup.length,
    activityCompleted: state.activityCompleted,
    introHeading: data.rightAreaTextDescription,
    matchedItems: state.matchedItems,
    setDroppable: state.setDroppable,
    answerAttempt: state.submitAnswerMcq,
    submitButtonPressed: state.submitButtonPressed,
    selectAnswerOption: state.selectAnswerOption,
    setDraggable: state.setDraggable,
    accessibleListVisible: state.accessibleListVisible,
  };
};

const mapDispatch = (dispatch) => ({
  updateAccessibleList: (val) => {
    dispatch(updateAccessibleList(val));
  },
  setDraggableValue: (item) => {
    dispatch(setDraggableValue(item));
  },
  submitAnswerDnD: () => {
    dispatch(thunks.submitAnswerDnD());
  },
  setStatic: () => {
    dispatch(common.toggleToastMessage(6));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(RightArea);
