import data from "../data";
import * as actions from "../../app/actions";
import { isAllObservationDone, getNumber, getString } from "../helper.js";
import { isAndroid } from "react-device-detect";

//#region all-constant-declaration
export const AUDIO_STATE_PLAY = "AUDIO_STATE_PLAY";
export const TOGGLE_SCREEN = "TOGGLE_SCREEN";
export const OBSERVATIONS_DATA = "OBSERVATIONS_DATA";
export const CURRENT_EXPERIMENT_NUMBER = "CURRENT_EXPERIMENT_NUMBER";
export const DISABLE_DRAGGABLE = "DISABLE_DRAGGABLE";
export const FETCH_OPTIONS = "FETCH_OPTIONS";
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const SET_FOCUS_ON_DRAG = "SET_FOCUS_ON_DRAG";
export const DISABLE_DROPPABLE = "DISABLE_DROPPABLE";
export const SET_ANIMATION_STATE = "SET_ANIMATION_STATE";
export const RESET_OBSERVATION = "RESET_OBSERVATION";
export const VIDEO_PLAY = "VIDEO_PLAY";
export const VIDEO_END = "VIDEO_END";
export const IS_OBSERVATION_VISITED = "IS_OBSERVATION_VISITED";
export const OBSERVATION_STATE_CHANGE = "OBSERVATION_STATE_CHANGE";
export const SELECT_DRAGGABLE_FULL = "SELECT_DRAGGABLE_FULL";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const DISABLED_STATE = "DISABLED_STATE";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const ACTIVE_FINISH_BUTTON = "ACTIVE_FINISH_BUTTON";
export const AUDIO_STATE_STOP = "AUDIO_STATE_STOP";
export const BUTTON_TYPE = "BUTTON_TYPE";
export const FETCH_DRAGGABLES = "FETCH_DRAGGABLES";
export const RESET_DROPPABLES = "RESET_DROPPABLES";
export const RESET_DND_STATE_DROP = "RESET_DND_STATE_DROP";
export const RESET_DND_STATE_DRAG = "RESET_DND_STATE_DRAG";
export const SET_FOCUS_ON_LIST = "SET_FOCUS_ON_LIST";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const SHOW_TOAST_MESSAGE = "SHOW_TOAST_MESSAGE";
export const TOGGLE_TOAST_MESSAGE = "TOGGLE_TOAST_MESSAGE";
export const PREVIOUS_QUESTION_STATE = "PREVIOUS_QUESTION_STATE";
export const CHANGE_ALT_TEXT = "CHANGE_ALT_TEXT";
export const CURRENT_DROP_ZONE_INDEX = "CURRENT_DROP_ZONE_INDEX";
export const RESET_OBSERVATIONS_DATA = "RESET_OBSERVATIONS_DATA";
//#endregion

const { togglePopup } = actions;

export const common = { ...actions };
export const resetDroppables = () => ({ type: RESET_DROPPABLES });
export const scaleChange = () => ({ type: DEMO_ACTION });
export const updateShowDialog = (val) => ({ type: SHOW_DIALOG, val });

//#region new-change
export const altTextChange = (item) => ({
  type: CHANGE_ALT_TEXT,
  data: item,
});

export const resetObservationData = (item) => ({
  type: RESET_OBSERVATIONS_DATA,
});

export const toggleScreen = (show) => ({
  type: TOGGLE_SCREEN,
  show,
});
export const observationsData = (data) => ({
  type: OBSERVATIONS_DATA,
  data,
});
export const currentExperimentNumber = (data) => {
  return {
    type: CURRENT_EXPERIMENT_NUMBER,
    data,
  };
};

export const resetDrop = () => {
  return {
    type: RESET_DND_STATE_DROP,
  };
};

export const previousQuestionState = () => {
  return {
    type: PREVIOUS_QUESTION_STATE,
  };
};

export const resetDrag = () => {
  return {
    type: RESET_DND_STATE_DRAG,
  };
};

export const displayElementDataOptions = (val) => {
  return {
    type: FETCH_OPTIONS,
    data: val,
  };
};

export const currentDropZoneIndex = (val) => {
  return {
    type: CURRENT_DROP_ZONE_INDEX,
    data: val,
  };
};

export const fetchQuestions = (val) => {
  return {
    type: FETCH_QUESTIONS,
    data: val,
  };
};

export const setFocusOnList = (answerId) => {
  return {
    type: SET_FOCUS_ON_LIST,
    data: answerId,
  };
};

export const setFocusonDragItem = (answerId) => ({
  type: SET_FOCUS_ON_DRAG,
  data: answerId,
});

export const disabledState = (dragItem, dropItem) => ({
  type: DISABLED_STATE,
  dragItem,
  dropItem,
});

export const disableDraggable = (id, isDisable) => ({
  type: DISABLE_DRAGGABLE,
  id,
  isDisable,
});

export const disableDroppable = (
  id,
  droppedItem,
  isDisable,
  hidden = false
) => ({
  type: DISABLE_DROPPABLE,
  id,
  droppedItem,
  isDisable,
  hidden,
});

export const resetObservation = () => ({
  type: RESET_OBSERVATION,
});

export const isVideoPlay = (data) => ({
  type: VIDEO_PLAY,
  data,
});

export const isVideoEnd = (data) => ({
  type: VIDEO_END,
  data,
});

export const isObservationVisited = (data) => ({
  type: IS_OBSERVATION_VISITED,
  data,
});

export const observationStateChange = () => ({
  type: OBSERVATION_STATE_CHANGE,
});

export const selectDraggableFull = (answerId) => ({
  type: SELECT_DRAGGABLE_FULL,
  data: answerId,
});

export const updateToastMsg = (val) => {
  return {
    type: TOAST_MESSAGE,
    val,
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

export const showFinishButton = (val) => ({
  type: ACTIVE_FINISH_BUTTON,
  data: val,
});

export const audioStateStop = (val) => ({
  type: AUDIO_STATE_STOP,
  val,
});

export const buttonType = (data) => ({
  type: BUTTON_TYPE,
  data,
});

// export const selectDraggable = (data) => ({
//   type: SELECT_DRAGGABLE,
//   data,
// });

export const fetchDraggables = (data) => ({
  type: FETCH_DRAGGABLES,
  data,
});

export const updateAccessibleList = (data) => ({
  type: ACCESSIBLE_LIST_VISIBLE,
  data,
});

export const toggleToastMessage = (toggle) => ({
  toggle,
  type: TOGGLE_TOAST_MESSAGE,
});
//#endregion

//helper
export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export const showToastMessage = (show) => ({
  type: SHOW_TOAST_MESSAGE,
  show,
});

export const thunk = {
  resetActivity: (value = false) => {
    return (dispatch, getState) => {
      let result = 1;
      if (getState().toggleScreen != 3) {
        result = isAllObservationDone(
          getState().toggleScreen,
          getState().observationsData
        );
      }
      if (result == 3) {
        dispatch(toggleScreen(3));
        dispatch(togglePopup(3));
        dispatch(updateToastMsg("nextScreen"));
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      } else {
        dispatch(resetObservationData());
        dispatch(observationStateChange());
        setTimeout(() => {
          dispatch(togglePopup(1));
        }, 150);

        if (!value) {
          dispatch(togglePopup(3));
        }
        dispatch(correctAnswer(false));
        dispatch(toggleScreen(1));
        dispatch(isVideoPlay(false));
        dispatch(isVideoEnd(false));
        dispatch(resetDrag());
        dispatch(resetDrop());
        dispatch(showFinishButton(false));
        dispatch(answerSubmitted(false));
        dispatch(previousQuestionState());
        dispatch(buttonType(data.buttonLabels.continue));
        dispatch(common.ariaLiveText(data.resetLiveText));
        setTimeout(() => {
          dispatch(common.ariaLiveText(" "));
        }, 100);
        dispatch(common.updateResetBtnState(true));
        EventManager.broadcast("SECONDARY_CLICK");
        TincanManager.data.percentage = 0;
        TincanManager.resetTincanData();
      }
    };
  },
  fetchElements: () => {
    return (dispatch, getState) => {
      dispatch(
        displayElementDataOptions(
          helper.shuffleArray([...data.Screen3.options])
        )
      );
    };
  },
  fetchQuestionsList: () => {
    return (dispatch, getState) => {
      dispatch(fetchQuestions([...data.Screen3.questionList]));
    };
  },
  toggleSound: () => {
    return (dispatch, getState) => {
      const { audioStatePlay } = getState();
      dispatch(audioStateStop());
      if (audioStatePlay) {
        EventManager.broadcast("SECONDARY_CLICK");
        setTimeout(() => {
          EventManager.broadcast("STOP_ALL");
        }, 100);
      }
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      let result = isAllObservationDone(
        getState().toggleScreen,
        getState().observationsData
      );
      if (result == 3) {
        dispatch(buttonType(data.buttonLabels.next));
        dispatch(togglePopup(3));
        dispatch(toggleScreen(2));
        EventManager.broadcast("COMPLETION_SCREEN");
      } else {
        dispatch(buttonType(data.buttonLabels.continue));
        dispatch(toggleScreen(1));
        EventManager.broadcast("SECONDARY_CLICK");
      }
    };
  },
  onContinueButton: (e) => {
    return (dispatch, getState) => {
      dispatch(isObservationVisited(getNumber(e.target.id)));
      dispatch(common.toggleToastMessage(false));
      dispatch(isVideoPlay(false));
      dispatch(isVideoEnd(false));
      dispatch(common.setResetFocusState(true));

      let { observationsData } = getState();
      let visitedNumber = 0;
      observationsData.map((val, index) => {
        if (val.isPlayed == true) {
          visitedNumber = visitedNumber + 1;
        }
      });
      TincanManager.data.percentage = visitedNumber * 25;
      TincanManager.saveTincanData();
    };
  },
  checkForCorrectAnswer: () => {
    return (dispatch, getState) => {
      dispatch(showToastMessage(true));
      dispatch(answerSubmitted(true));
      dispatch(correctAnswer(true));
      EventManager.broadcast("POSITIVE_FEEDBACK");
    };
  },
  checkForIncorrectAnswer: () => {
    return (dispatch, getState) => {
      dispatch(updateToastMsg("incorrect"));
      dispatch(thunk.checkforIncorrect());
    };
  },
  checkForPartialCorrectAnswer: () => {
    return (dispatch, getState) => {
      dispatch(updateToastMsg("partiallyCorrect"));
      dispatch(thunk.checkforIncorrect());
    };
  },
  checkforIncorrect: () => {
    return (dispatch, getState) => {
      dispatch(answerSubmitted(true));
      dispatch(correctAnswer(false));
      dispatch(showToastMessage(true));
      EventManager.broadcast("NEGATIVE_FEEDBACK");
    };
  },
  updateDragDropdisablity: () => {
    return (dispatch, getState) => {
      const { questionsList } = getState();
      for (const item of questionsList) {
        if (item.markedAnswer === item.answerId) {
        } else {
          dispatch(disableDraggable(item.answerId, false));
          dispatch(disableDroppable(item.answerId, "", false, false));
          dispatch(common.setResetFocusState(true));
        }
      }
    };
  },
  finshAll: () => {
    return (dispatch, getState) => {
      dispatch(toggleToastMessage(false));
      EventManager.broadcast("COMPLETION_SCREEN");
      dispatch(togglePopup(3));
    };
  },
  submitAnswer: () => {
    return (dispatch, getState) => {
      const { disabledState, questionsList } = getState();

      const correctlyAnswered = questionsList.filter(
        (q) => q.markedAnswer === q.answerId
      );
      const incorrectAnswered = questionsList.filter(
        (q) => q.markedAnswer !== q.answerId
      );

      dispatch(toggleToastMessage(true));
      if (incorrectAnswered.length < 3 && correctlyAnswered.length < 3) {
        dispatch(thunk.checkForPartialCorrectAnswer());
        dispatch(thunk.updateDragDropdisablity());
      } else if (incorrectAnswered.length === 3) {
        dispatch(thunk.checkForIncorrectAnswer());
        dispatch(thunk.updateDragDropdisablity());
      } else if (correctlyAnswered.length === 3) {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
        dispatch(thunk.checkForCorrectAnswer());
        dispatch(showFinishButton(true));
      }
    };
  },

  onDrop: (accept) => (dispatch, getState) => {
    const { selectDraggableFull: source } = getState();
    const object = {
      source,
      target: accept,
    };
    dispatch(disableDraggable(source, true));
    dispatch(disableDroppable(accept, source, true, true));
    dispatch(updateToastMsg(""));

    let questionsLabel = data.Screen3.questionList.filter((x) => {
      return x.answerId == accept;
    });
    let txt =
      source +
      data.isDroppedOn +
      data.dropzone +
      (+getNumber(questionsLabel[0].id) + 1);

    if (isAndroid) {
      setTimeout(() => {
        dispatch(common.thunks.ariaLiveAssertive(txt));
      }, 500);
    } else {
      dispatch(common.thunks.ariaLiveAssertive(txt));
    }
    dispatch(selectDraggableFull(null));
  },
};
