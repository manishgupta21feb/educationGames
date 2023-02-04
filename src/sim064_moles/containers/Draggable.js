import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import Draggable from "../components/ViewArea/BottomArea/Draggable/Draggable.js";

import data from "../data/index";
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
    data: data,
    draggableItems: state.draggableItems,
    isPopupActive: !!state.currentPopup.length,
    activityCompleted: state.activityCompleted,
    introHeading: data.rightAreaTextDescription,
    matchedItems: state.matchedItems,

    answerAttempt: state.submitAnswerMcq,
    submitButtonPressed: state.submitButtonPressed,
    selectAnswerOption: state.selectAnswerOption,
    count: state.questionCount,

    question: state.selectedQuestion,
    dragDisable: state.draggableDisable,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onDropClick: (item) => {
    dispatch(thunks.onDrop(item));
  },
  updateAccessibleList: (val) => {
    dispatch(updateAccessibleList(val));
  },
  setDraggableValue: (item) => {
    dispatch(setDraggableValue(item));
  },

  setStatic: () => {
    dispatch(common.toggleToastMessage(6));

    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(Draggable);
