import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

export const ABOUT_SCREEN = "ABOUT_SCREEN";
export const OPTION_TRIGGER = "OPTION_TRIGGER";
export const QUESTION_INDEX = "QUESTION_INDEX";
export const QUESTION_NUMBER = "QUESTION_NUMBER";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const CHECK_ANSWER = "CHECK_ANSWER";
export const RADIO_BTN_CHECKED = "RADIO_BTN_CHECKED";
export const SHOW_CONTINUE_BTN = "SHOW_CONTINUE_BTN";
export const QUESTION_COUNT = "QUESTION_COUNT";
export const LEVEL_ONE = "LEVEL_ONE";
export const LEVEL_TWO = "LEVEL_TWO";
export const OPTION_DATA = "OPTION_DATA";
export const VIDEO_ENDED = "VIDEO_ENDED";
export const DRAG_DROP_DATA = "DRAG_DROP_DATA";
export const DRAG_ELEMENT_EVENTS = "DRAG_ELEMENT_EVENTS";
export const DROPPED_ELEMENT = "DROPPED_ELEMENT";
export const DRAG_ELEMENT_INDEX = "DRAG_ELEMENT_INDEX";
export const DRAG_DROP_COMPLETE = "DRAG_DROP_COMPLETE";
export const DD_BTN_ACTIVE = "DD_BTN_ACTIVE";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const ADD_DND_PAIR = "ADD_DND_PAIR";
export const CURRENT_DRAGGING_ITEM = "CURRENT_DRAGGING_ITEM";
export const UPDATE_DND_PAIR = "UPDATE_DND_PAIR";
export const RESET_DROP_ZONES = "RESET_DROP_ZONES";
export const UPDATE_DROP_ZONES = "UPDATE_DROP_ZONES";
export const INCORRECT_TOAST_COUNT = "INCORRECT_TOAST_COUNT";
export const ALT_TEXT_MERGER = "ALT_TEXT_MERGER";
export const VIDEO_LIVE_TEXT = "VIDEO_LIVE_TEXT";
export const ON_VIDEO_ENDED = "ON_VIDEO_ENDED";
export const SET_VIDEO_PLAY_STATE = "SET_VIDEO_PLAY_STATE";
export const SET_LIVE_TEXT_ASSERTIVE = "SET_LIVE_TEXT_ASSERTIVE";

const {
  togglePopup,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const common = { ...actions };

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const resetDropZones = (items) => ({
  items,
  type: RESET_DROP_ZONES,
});

export const updateDropZones = (items) => ({
  items,
  type: UPDATE_DROP_ZONES,
});

export const aboutScreenAction = (value) => {
  return {
    type: ABOUT_SCREEN,
    value,
  };
};

export const optionTriggerAction = (value) => {
  return {
    type: OPTION_TRIGGER,
    value,
  };
};

export const questionIndexAction = (value) => {
  return {
    type: QUESTION_INDEX,
    value,
  };
};

export const questionNumberAction = (value) => {
  return {
    type: QUESTION_NUMBER,
    value,
  };
};

export const selectAnswerOptionAction = (value) => {
  return {
    type: SELECT_ANSWER_OPTION,
    value,
  };
};

export const CheckAnswerAction = (value) => {
  return {
    type: CHECK_ANSWER,
    value,
  };
};

export const radioBtnCheckedAction = (value) => {
  return {
    type: RADIO_BTN_CHECKED,
    value,
  };
};

export const showContinueBtnAction = (value) => {
  return {
    type: SHOW_CONTINUE_BTN,
    value,
  };
};

export const questionCountAction = (value) => {
  return {
    type: QUESTION_COUNT,
    value,
  };
};

export const levelOneCompleteAction = (value) => {
  return {
    type: LEVEL_ONE,
    value,
  };
};

export const levelTwoCompleteAction = (value) => {
  return {
    type: LEVEL_TWO,
    value,
  };
};

export const updateOptionDataAction = (value) => {
  return {
    type: OPTION_DATA,
    value,
  };
};

export const videoEndedAction = (value) => {
  return {
    type: VIDEO_ENDED,
    value,
  };
};

export const updateDragDropDataAction = (value) => {
  return {
    type: DRAG_DROP_DATA,
    value,
  };
};

export const dragElementEventsAction = (event) => {
  return {
    type: DRAG_ELEMENT_EVENTS,
    event,
  };
};

export const countDroppedElementAction = (value) => {
  return {
    type: DROPPED_ELEMENT,
    value,
  };
};

export const activeDdSubmitBtnAction = (value) => {
  return {
    type: DD_BTN_ACTIVE,
    value,
  };
};

export const dragDropCompleteAction = (value) => {
  return {
    type: DRAG_DROP_COMPLETE,
    value,
  };
};

export const incorrectToastCountAction = (value) => {
  return {
    type: INCORRECT_TOAST_COUNT,
    value,
  };
};

export const setCurrentDraggingItem = (item) => ({
  item,
  type: CURRENT_DRAGGING_ITEM,
});
export const updateDroppedItems = (items) => ({
  items,
  type: UPDATE_DND_PAIR,
});

export const addDroppedItem = (source, accept) => ({
  accept,
  source,
  type: ADD_DND_PAIR,
});
export const alTextMerger = (item) => ({
  item,
  type: ALT_TEXT_MERGER,
});
export const setVideoLiveText = (item) => ({
  item,
  type: VIDEO_LIVE_TEXT,
});

export const mcqQuestionDataAction = (item) => ({
  item,
  type: MCQ_QUESTION_DATA,
});

export const setVideoPlayState = (playState) => ({
  playState,
  type: SET_VIDEO_PLAY_STATE,
});

export const assertiveLiveText = (message) => ({
  message,
  type: SET_LIVE_TEXT_ASSERTIVE,
});

export const helper = {
  shuffle: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export const onVideoEnded = (endState) => ({
  endState,
  type: ON_VIDEO_ENDED,
});

export const thunk = {
  videoLiveText: () => {
    return (dispatch, getState) => {
      const { getVideoLiveText } = getState();
      dispatch(
        common.thunks.ariaLiveAssertive(data.videoLiveText[getVideoLiveText])
      );
    };
  },

  submitAnswerHandler: () => {
    return (dispatch, getState) => {
      const {
        selectAnswerOptionReducer,
        questionNumberReducer,
        questionIndexReducer,
      } = getState();

      const index = questionIndexReducer;
      const questionNum = questionNumberReducer;

      const answer = data.options[index].questions[questionNum].answer;
      const submitedAns = selectAnswerOptionReducer;

      if (answer === submitedAns) {
        dispatch(CheckAnswerAction(true));
        dispatch(showContinueBtnAction(true));
        dispatch(radioBtnCheckedAction(false));
        dispatch(videoEndedAction(false));
        EventManager.broadcast("POSITIVE_FEEDBACK");
      } else {
        dispatch(CheckAnswerAction(false));
        dispatch(showContinueBtnAction(false));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
    };
  },

  continueHandler: () => {
    return (dispatch, getState) => {
      const { questionNumberReducer, questionCountReducer } = getState();

      const questionNum = questionNumberReducer;
      let questionCount = questionCountReducer;

      if (questionNum === 0) {
        dispatch(questionNumberAction(1));
        dispatch(selectAnswerOptionAction(""));
        dispatch(videoEndedAction(true));
      } else if (questionNum === 1 && questionCount < 5) {
        dispatch(optionTriggerAction(false));
        dispatch(questionIndexAction(0));
        dispatch(questionNumberAction(0));
        dispatch(selectAnswerOptionAction(""));
        dispatch(videoEndedAction(false));
      }

      if (questionCount === 5) {
        dispatch(questionCountAction(0));
        dispatch(togglePopup(4));
        EventManager.broadcast("COMPLETION_SCREEN");
      }

      dispatch(setVideoPlayState("stop"));
      dispatch(questionCountAction(questionCount + 1));
      dispatch(radioBtnCheckedAction(false));
      dispatch(showContinueBtnAction(false));
      dispatch(toggleToastMessage(false));
      dispatch(CheckAnswerAction(false));
      setTimeout(() => {
        dispatch(setVideoPlayState(null));
      }, 400);
    };
  },

  onHandler: (id, index) => {
    return (dispatch, getState) => {
      const { optionDataReducer, questionIndexReducer, questionNumberReducer } =
        getState();

      const _tempData = JSON.parse(JSON.stringify(optionDataReducer));
      const findIndex = _tempData.findIndex((data) => data.id === id);

      _tempData[findIndex].isDisabled = true;

      dispatch(alTextMerger(id));
      dispatch(setVideoLiveText(id));
      dispatch(updateOptionDataAction(_tempData));
      dispatch(optionTriggerAction(true));
      dispatch(questionIndexAction(index));
    };
  },

  onCompleteLevelOne: () => {
    return (dispatch, getState) => {
      const { dragDropDataReducer } = getState();

      let _tempData = JSON.parse(JSON.stringify(dragDropDataReducer));

      _tempData.options = helper.shuffle(_tempData.options);

      dispatch(updateDragDropDataAction(_tempData));

      TincanManager.data.percentage = 50;
      TincanManager.saveTincanData();
    };
  },

  onDropElement: (accept) => {
    return (dispatch, getState) => {
      const { currentDraggingItem: source } = getState();
      dispatch(addDroppedItem({ ...source }, accept));
      const { droppedItems, dropZones } = getState();

      if (Object.keys(droppedItems).length === data.dragDrop.options.length) {
        dispatch(activeDdSubmitBtnAction(false));
      }

      const _question = [...dropZones];
      const index = _question.findIndex((item) => item.accept == accept);

      if (index !== -1) {
        _question[index] = { ..._question[index] };
        _question[index].hidden = true;
      }

      setTimeout(() => {
        dispatch(updateDropZones(_question));
      });
    };
  },

  onAnswerSubmit: () => {
    return (dispatch, getState) => {
      const { droppedItems, dropZones } = getState();

      let incorrectDrops = [];
      const _question = [...dropZones];

      for (let i in droppedItems) {
        const item = droppedItems[i];
        if (item.source != item.accept) {
          incorrectDrops.push(item.accept);
        }
      }

      let remainingItems = _question
        .filter((item, index) => incorrectDrops.indexOf(item.accept) >= 0)
        .map((item) => item.accept);

      for (let i = 0; i < _question.length; i++) {
        const item = { ..._question[i] };

        if (remainingItems.indexOf(item.accept) >= 0) {
          item.hidden = false;
          _question[i] = item;
        }
      }
      dispatch(updateDropZones(_question));
      if (incorrectDrops.length) {
        const _droppedItems = { ...droppedItems };
        for (let accept of incorrectDrops) {
          delete _droppedItems[accept];
        }
        for (let item in _droppedItems) {
          _droppedItems[item] = { ..._droppedItems[item] };
          _droppedItems[item].correct = true;
        }
        EventManager.broadcast("NEGATIVE_FEEDBACK");
        dispatch(updateDroppedItems(_droppedItems));
        dispatch(dragDropCompleteAction(false));
        dispatch(activeDdSubmitBtnAction(true));
        dispatch(incorrectToastCountAction(1));
        if (incorrectDrops.length === 5) {
          dispatch(incorrectToastCountAction(0));
        }
      } else {
        const _droppedItems = { ...droppedItems };
        for (let item in _droppedItems) {
          _droppedItems[item] = { ..._droppedItems[item] };
          _droppedItems[item].correct = true;
        }

        EventManager.broadcast("POSITIVE_FEEDBACK");
        dispatch(updateDroppedItems(_droppedItems));
        dispatch(dragDropCompleteAction(true));
        dispatch(activeDdSubmitBtnAction(true));
      }

      dispatch(toggleToastMessage(true));
    };
  },

  showCompleteScreen: () => {
    return (dispatch, getState) => {
      const { dragDropCompleteReducer } = getState();

      if (dragDropCompleteReducer) {
        EventManager.broadcast("COMPLETION_SCREEN");
        dispatch(togglePopup(5));
      }

      TincanManager.data.percentage = 100;
      TincanManager.data.completed = true;
      TincanManager.saveTincanData();
    };
  },

  onResetActivity: () => {
    return (dispatch) => {
      dispatch(common.updateResetBtnState(true));
      dispatch(aboutScreenAction(true));
      dispatch(optionTriggerAction(false));
      dispatch(questionNumberAction(0));
      dispatch(selectAnswerOptionAction(""));
      dispatch(questionIndexAction(0));
      dispatch(common.toggleToastMessage(false));
      dispatch(CheckAnswerAction(false));
      dispatch(radioBtnCheckedAction(false));
      dispatch(showContinueBtnAction(false));
      dispatch(questionCountAction(0));
      dispatch(levelOneCompleteAction(false));
      dispatch(levelTwoCompleteAction(false));
      dispatch(updateOptionDataAction(data.options));
      dispatch(videoEndedAction(false));
      dispatch(updateDragDropDataAction(data.dragDrop));
      dispatch(dragElementEventsAction(""));
      dispatch(dragDropCompleteAction(false));
      dispatch(countDroppedElementAction(1));
      dispatch(activeDdSubmitBtnAction(true));
      dispatch(common.togglePopup(1));
      dispatch(resetDropZones(data.dragDrop.questions.map((q) => ({ ...q }))));
      dispatch(addDroppedItem({}));
      dispatch(updateDroppedItems({}));
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(incorrectToastCountAction(0));
      dispatch(alTextMerger("default"));

      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
};
