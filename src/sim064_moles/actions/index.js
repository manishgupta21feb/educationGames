import { useRef } from "react";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import { isAndroid } from "react-device-detect";

import data from "../data";
export const common = { ...actions };
const {
  togglePopup,
  ariaLiveText,

  updateResetBtnState,
} = actions;

export const IS_ACCESSIBLE = "IS_ACCESSIBLE";

export const SET_ACTIVITY_COMPLETED = "SET_ACTIVITY_COMPLETED";

export const SET_QUESTION = "SET_QUESTION";

export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const TOGGLE_TOAST_MESSAGE = "TOGGLE_TOAST_MESSAGE";

export const QUESTIONS_COUNT = "QUESTIONS_COUNT";

export const SET_DRAGGABLE_VALUE = "SET_DRAGGABLE_VALUE";

export const SUBMIT_ANSWER_DND = "SUBMIT_ANSWER_DND";

export const SET_ITEMS_MATCHED = "SET_ITEMS_MATCHED";
export const UPDATE_ITEMS_MATCHED = "UPDATE_ITEMS_MATCHED";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";

export const DROPPABLE_CHNAGE_STATE = "DROPPABLE_CHNAGE_STATE";

export const UPDATE_DROP_ZONE = "UPDATE_DROP_ZONE";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const INCORRECT_RED = "INCORRECT_RED";
export const DROPPABLE_CHANGE_FALSE = "DROPPABLE_CHANGE_FALSE";
export const DRAGGABLE_DISABLE = "DRAGGABLE_DISABLE";
export const SUBMIT_BUTTON_STATE = "SUBMIT_BUTTON_STATE";
export const CORRRECT_MATCHED_ITEM = "CORRRECT_MATCHED_ITEM";
export const UPDATE_TABEL_CONTENT = "UPDATE_TABEL_CONTENT";

export const inCorrectRed = (data) => {
  return {
    type: INCORRECT_RED,
    data,
  };
};
export const setUpdateTabelContent = (data) => {
  return {
    type: UPDATE_TABEL_CONTENT,
    data,
  };
};

export const setCorrectMatchedItem = (data) => {
  return {
    type: CORRRECT_MATCHED_ITEM,
    data,
  };
};

export const setSubmitButtonState = (value) => {
  return {
    type: SUBMIT_BUTTON_STATE,
    value,
  };
};

export const draggableDisable = (data) => {
  return {
    type: DRAGGABLE_DISABLE,
    data,
  };
};

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const setActivityCompleted = (completed) => ({
  completed,
  type: SET_ACTIVITY_COMPLETED,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const setDraggableValue = (dragValue) => ({
  dragValue,
  type: SET_DRAGGABLE_VALUE,
});

export const updateDropZone = () => ({
  type: UPDATE_DROP_ZONE,
});

export const itemsMatched = (drag, drop) => ({
  drag,
  drop,
  type: SET_ITEMS_MATCHED,
});

export const updateItemsMatched = (items) => ({
  items,
  type: UPDATE_ITEMS_MATCHED,
});

export const droppableChangeState = (value, blnState, question) => {
  return {
    type: DROPPABLE_CHNAGE_STATE,
    value,
    blnState,
    question,
  };
};

export const droppableChangeFalse = (resetValue) => {
  return {
    type: DROPPABLE_CHANGE_FALSE,
    resetValue,
  };
};

export const answerSubmitted = (submitted) => ({
  submitted,
  type: ANSWER_SUBMITTED,
});

export const correctAnswer = (val) => {
  return {
    type: CORRECT_ANSWER,
    val,
  };
};

export const updateToastMsg = (val) => {
  return {
    type: TOAST_MESSAGE,
    val,
  };
};

export const thunks = {
  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData, questionCount, selectedQuestion } = getState();

      const _questionsData = questionsData.map((q) => ({ ...q }));

      const index = Math.floor(Math.random() * _questionsData.length);

      const question = { ..._questionsData.splice(index, 1)[0] };

      const _dragData = question.draggable.map((d) => ({ ...d }));
      _dragData.sort(() => Math.random() - 0.5);

      question.draggable = _dragData;

      dispatch(updateQuestionsData(_questionsData));
      dispatch(setQuestion(question));
    };
  },

  onDrop: (dropzone) => (dispatch, getState) => {
    let {
      setDraggable: dragItem,
      matchedItems,
      submitButtonState,
    } = getState();
    dispatch(common.updateResetBtnState(false));
    if (matchedItems.length >= 1) {
      dispatch(setSubmitButtonState(false));
    }
    dispatch(itemsMatched(dragItem, dropzone));

    let txt1 = dragItem.label + " " + data.liveAriaTxt + " " + dropzone.label;
    if (isAndroid) {
      setTimeout(() => {
        dispatch(common.thunks.ariaLiveAssertive(txt1));
      }, 500);
    } else {
      dispatch(common.thunks.ariaLiveAssertive(txt1));
    }
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(setActivityCompleted(false));

      dispatch(updateResetBtnState(true));
      dispatch(ariaLiveText(data.resetLiveText));

      dispatch(updateDropZone());
      dispatch(questionCount(1));
      dispatch(setSubmitButtonState(true));
      dispatch(updateQuestionsData([...data.dndQuestion]));
      dispatch(setCorrectMatchedItem([]));
      dispatch(thunks.setQuestion());
      dispatch(draggableDisable([]));
      dispatch(updateItemsMatched([]));
      dispatch(answerSubmitted(false));
      dispatch(correctAnswer(false));
      dispatch(droppableChangeFalse([...data.dndQuestion]));
      dispatch(togglePopup(1));
      TincanManager.resetTincanData();
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }

      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },

  submitAnswerDnD: () => (dispatch, getState) => {
    let {
      matchedItems,
      answerSubmitted: answer,
      selectedQuestion,
      showToastMessage,
      questionCount,
    } = getState();
    const matchedItemsCopy = matchedItems.map((item) => {
      const _item = { ...item };
      _item.drop = { ..._item.drop };
      _item.drag = { ..._item.drag };
      if (_item.drag.answer !== _item.drop.answerId) {
        _item.drop.matched = "incorrect";
      } else {
        _item.drop.matched = "";
      }
      return _item;
    });

    const correct_MatchedItems = matchedItemsCopy.filter(
      (item) => item.drop.matched == ""
    );

    dispatch(setCorrectMatchedItem(correct_MatchedItems));

    if (correct_MatchedItems.length == 0) {
      setTimeout(() => {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }, 500);
      dispatch(draggableDisable(selectedQuestion.draggable));
      dispatch(updateItemsMatched(matchedItemsCopy));

      dispatch(common.toggleToastMessage(true));

      dispatch(updateToastMsg("incorrect"));
      dispatch(answerSubmitted(true));
      dispatch(correctAnswer(false));
    } else if (correct_MatchedItems.length == 1) {
      setTimeout(() => {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }, 500);
      dispatch(draggableDisable(selectedQuestion.draggable));
      dispatch(updateItemsMatched(matchedItemsCopy));

      dispatch(common.toggleToastMessage(true));

      dispatch(updateToastMsg("partiallyCorrect"));
      dispatch(answerSubmitted(true));

      dispatch(correctAnswer(false));
    } else {
      EventManager.broadcast("POSITIVE_FEEDBACK");
      dispatch(draggableDisable([]));
      dispatch(common.toggleToastMessage(true));
      dispatch(updateToastMsg("success"));
      dispatch(answerSubmitted(true));
      dispatch(correctAnswer(true));
      TincanManager.data.percentage = parseInt(
        (questionCount / data.dndQuestion.length) * 100
      );
      TincanManager.saveTincanData();
    }
    dispatch(setSubmitButtonState(true));
  },

  handleToggleWithRed: () => {
    return (dispatch, getState) => {
      let { correctMatchedItems } = getState();
      if (correctMatchedItems.length < 2) {
        dispatch(updateItemsMatched(correctMatchedItems));
        dispatch(draggableDisable([]));
        dispatch(setSubmitButtonState(true));
      }
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      let { questionCount: count } = getState();
      if (count < data.dndQuestion.length) {
        EventManager.broadcast("STOP_ALL");
        dispatch(updateDropZone());
        dispatch(questionCount(count + 1));
        dispatch(thunks.setQuestion());
        dispatch(answerSubmitted(false));
        dispatch(correctAnswer(false));
        dispatch(draggableDisable([]));
      } else {
        dispatch(togglePopup(3));
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
        EventManager.broadcast("COMPLETION_SCREEN");
      }
    };
  },
};
