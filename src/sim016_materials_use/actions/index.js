import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

import data from "../data";
export const common = { ...actions };
const {
  ariaLiveText,
  onChangeScreen,
  toggleToastMessage,
  // setResetFocusState,
  updateResetBtnState,
} = actions;
import { isAndroid } from "react-device-detect";

export const HELP_POPUP = "HELP_POPUP";
export const INFO_INDEX = "INFO_INDEX";
export const TOGGLE_NEXT = "TOGGLE_NEXT";
export const FETCH_OPTIONS = "FETCH_OPTIONS";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const VIDEO_FEEDBACK = "VIDEO_FEEDBACK";
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const TOGGLE_CONTINUE = "TOGGLE_CONTINUE";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const RESET_DROPPABLES = "RESET_DROPPABLES";
export const AUDIO_STATE_PLAY = "AUDIO_STATE_PLAY";
export const START_SIMULATION = "START_SIMULATION";
export const FETCH_DRAGGABLES = "FETCH_DRAGGABLES";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const AUDIO_STATE_STOP = "AUDIO_STATE_STOP";
export const DISABLE_DROPPABLE = "DISABLE_DROPPABLE";
export const DISABLE_DRAGGABLE = "DISABLE_DRAGGABLE";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const SHOW_PRIMARY_TEXT = "SHOW_PRIMARY_TEXT";
export const SET_FOCUS_ON_LIST = "SET_FOCUS_ON_LIST";
export const SET_FOCUS_ON_DRAG = "SET_FOCUS_ON_DRAG";
export const SET_PREVIOUS_SOUND = "SET_PREVIOUS_SOUND";
export const ADD_DRAGGABLE_ITEM = "ADD_DRAGGABLE_ITEM";
export const ADD_PLANT_DROPPABLE = "ADD_PLANT_DROPPABLE";
export const ADD_ANIMAL_DROPPABLE = "ADD_ANIMAL_DROPPABLE";
export const ACTIVE_FINISH_BUTTON = "ACTIVE_FINISH_BUTTON";
export const FORCE_PLANT_HIGHLIGHT = "FORCE_PLANT_HIGHLIGHT";
export const SELECT_DRAGGABLE_FULL = "SELECT_DRAGGABLE_FULL";
export const FORCE_ANIMAL_HIGHLIGHT = "FORCE_ANIMAL_HIGHLIGHT";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const SET_RESET_DIALOG_NO_SELECTED = "SET_RESET_DIALOG_NO_SELECTED";
export const ACCESSIBILITY_ENABLED_ON_ITEM = "ACCESSIBILITY_ENABLED_ON_ITEM";
export const TOGGLE_POPUP = "TOGGLE_POPUP";
export const SET_RESET_FOCUS_STATE = "SET_RESET_FOCUS_STATE";
export const SHOW_HELP_POPUP = "SHOW_HELP_POPUP";
export const SHOW_DROPZONE = "SHOW_DROPZONE";
export const REVERT_AUDIO = "REVERT_AUDIO";

export const setRevertAudio = (val) => ({
  val,
  type: REVERT_AUDIO,
});

export const setShowDropZone = (val) => ({
  val,
  type: SHOW_DROPZONE,
});

export const setShowHelpPopup = (val) => ({
  val,
  type: SHOW_HELP_POPUP,
});

export const answerSubmitted = (submitted) => ({
  submitted,
  type: ANSWER_SUBMITTED,
});

export const setFocusonDragItem = (answerId) => ({
  type: SET_FOCUS_ON_DRAG,
  data: answerId,
});
export const selectDraggableFull = (answerId) => ({
  type: SELECT_DRAGGABLE_FULL,
  data: answerId,
});
export const setFocusOnList = (answerId) => ({
  type: SET_FOCUS_ON_LIST,
  data: answerId,
});
export const showFinishButton = (val) => ({
  type: ACTIVE_FINISH_BUTTON,
  data: val,
});
export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const toggleInfoDialog = (val) => ({
  val,
  type: HELP_POPUP,
});

export const infoDialogIndex = (val) => ({
  val,
  type: INFO_INDEX,
});

export const videoFeedback = (val) => ({
  val,
  type: VIDEO_FEEDBACK,
});

export const disableDroppable = (
  answerId,
  isDisable = false,
  markedAnswer
) => ({
  type: DISABLE_DROPPABLE,
  data: { answerId, isDisable, markedAnswer },
});

export const resetDroppables = () => ({ type: RESET_DROPPABLES });
export const setAudioStatePlay = () => ({
  type: AUDIO_STATE_PLAY,
});
export const toggleContinue = (val) => ({
  type: TOGGLE_CONTINUE,
  val,
});
export const startSim = (value) => ({
  type: START_SIMULATION,
  value,
});
export const toggleNext = (val) => ({
  type: TOGGLE_NEXT,
  val,
});
export const fetchDraggables = (data) => ({
  type: FETCH_DRAGGABLES,
  data,
});

export const selectDraggable = (data) => ({
  type: SELECT_DRAGGABLE,
  data,
});
export const audioStateStop = (val) => ({
  type: AUDIO_STATE_STOP,
  val,
});
export const addPlantDroppable = (draggableItem) => ({
  type: ADD_PLANT_DROPPABLE,
  data: draggableItem,
});
export const addAnimalDraggable = (draggableItem) => ({
  type: ADD_ANIMAL_DROPPABLE,
  data: draggableItem,
});

export const answerAttempted = (attempted) => {
  return {
    type: ANSWER_ATTEMPTTED,
    attempted,
  };
};
export const correctAnswer = (val) => {
  return {
    type: CORRECT_ANSWER,
    val,
  };
};
export const displayElementDataOptions = (val) => {
  return {
    type: FETCH_OPTIONS,
    data: val,
  };
};

export const forceAnimalHighlight = (val) => {
  return {
    type: FORCE_ANIMAL_HIGHLIGHT,
    data: val,
  };
};

export const forcePlantHighlight = (val) => {
  return {
    type: FORCE_PLANT_HIGHLIGHT,
    data: val,
  };
};
export const setResetDialogNoSelected = (value) => ({
  value,
  type: SET_RESET_DIALOG_NO_SELECTED,
});
export const setPreviousSound = (sound) => ({
  type: SET_PREVIOUS_SOUND,
  data: sound,
});
export const fetchQuestions = (val) => {
  return {
    type: FETCH_QUESTIONS,
    data: val,
  };
};

export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});

export const disableDraggable = (answerId, isDisable = false) => ({
  type: DISABLE_DRAGGABLE,
  data: { answerId, isDisable },
});

export const toggleScreen = (show) => ({
  type: SHOW_PRIMARY_TEXT,
  show,
});

export const setAccessible = (accessible) => ({
  accessible,
  type: ACCESSIBILITY_ENABLED_ON_ITEM,
});

export const togglePopup = (id) => ({ id, type: TOGGLE_POPUP });

export const setResetFocusState = (focus) => ({
  focus,
  type: SET_RESET_FOCUS_STATE,
});

export const thunks = {
  continuePress: () => {
    return (dispatch, getState) => {
      const { audioStatePlay } = getState();
      dispatch(updateResetBtnState(false));
      dispatch(setResetFocusState(true));
      dispatch(toggleContinue(false));
      if (audioStatePlay) {
        EventManager.broadcast("SCREEN_TEXT2");
      }
      dispatch(toggleScreen(true));
      dispatch(toggleNext(true));
      dispatch(videoFeedback(false));
      dispatch(toggleInfoDialog(false));
    };
  },

  onDrop: (isAnimalDropzone) => {
    return (dispatch, getState) => {
      const {
        selectedDraggable,
        dropedItemList,
        draggableItems,
        infoDialogIndexValue,
      } = getState();
      const isEmptyDraggable = Object.keys(selectedDraggable).length === 0;
      const liveText = data.liveText.replace("-1-", selectedDraggable.label);

      let rightAnswer = false;
      if (!isEmptyDraggable) {
        if (selectedDraggable.assetURL) {
          // Check dropzone is  plant cell
          if (selectedDraggable.assetURL.plantAsset && !isAnimalDropzone) {
            // type does not exist
            const typeAlreadyExist = dropedItemList.plantDragList.find(
              (item) => item.type === selectedDraggable.type
            );
            if (!typeAlreadyExist) {
              const newPlantImageBg = {
                imgSource: selectedDraggable.assetURL.plantAsset,
                zIndex: selectedDraggable.srNo,
                type: selectedDraggable.type,
                altText: selectedDraggable.ariaLabel,
              };
              dispatch(addPlantDroppable(newPlantImageBg));
              dispatch(selectDraggable({}));
              rightAnswer = true;
            }
          } else if (
            selectedDraggable.assetURL.animalAsset &&
            isAnimalDropzone
          ) {
            const typeAlreadyExist = dropedItemList.animalDragList.find(
              (item) => item.type === selectedDraggable.type
            );
            if (!typeAlreadyExist) {
              const newAnimalImageBG = {
                imgSource: selectedDraggable.assetURL.animalAsset,
                zIndex: selectedDraggable.srNo,
                type: selectedDraggable.type,
                altText: selectedDraggable.ariaLabel,
              };
              dispatch(addAnimalDraggable(newAnimalImageBG));
              dispatch(selectDraggable({}));
              rightAnswer = true;
            }

            const marked = "woodenSeat";
            if (selectedDraggable.id === marked) {
              dispatch(videoFeedback(true));
              dispatch(setResetFocusState(true));
              TincanManager.data.completed = true;
              TincanManager.data.percentage = 100;
              TincanManager.saveTincanData();
            } else {
              TincanManager.data.percentage = 0;
              TincanManager.saveTincanData();
            }
            if (draggableItems.srNo === infoDialogIndexValue) {
              dispatch(videoFeedback(true));
            }
          }
          dispatch(updateResetBtnState(false));
          dispatch(thunks.checkCorrectIncorrect(rightAnswer, true));
        }
      }
      // setShowDropZone(false);

      if (isAndroid) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(liveText));
        }, 500);
      } else {
        setTimeout(() => {
          dispatch(ariaLiveText(liveText));
        }, 600);
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 900);
      }
    };
  },
  checkCorrectIncorrect: (value, toggle) => {
    return (dispatch, getState) => {
      if (value) {
        dispatch(answerSubmitted(true));
        dispatch(correctAnswer(value));
      } else {
        dispatch(answerSubmitted(true));
        dispatch(correctAnswer(value));
      }
    };
  },
  toggleAudioBtn: () => {
    return (dispatch, getstate) => {
      const { audioStatePlay } = getstate();
      if (!audioStatePlay) {
        dispatch(setAudioStatePlay(audioStatePlay));
      }
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(setShowHelpPopup(false));
      dispatch(togglePopup(1));
      dispatch(startSim(true));
      dispatch(updateResetBtnState(true));
      // dispatch(toggleToastMessage(false));
      dispatch(toggleScreen(false));
      // value && dispatch(togglePopup(3));
      dispatch(toggleContinue(false));
      dispatch(toggleNext(false));
      dispatch(onChangeScreen(0));
      dispatch(selectDraggable(null));
      dispatch(fetchDraggables(data.draggableData.draggables));
      dispatch(resetDroppables());
      dispatch(showFinishButton(false));
      dispatch(videoFeedback(false));
      dispatch(toggleInfoDialog(false));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
      if (currentPopup.indexOf(5) >= 0) {
        dispatch(togglePopup(5));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }
      TincanManager.resetTincanData();
    };
  },
  setResetDialogNoSelected: (value) => {
    return (dispatch, getState) => {
      const { audioStatePlay } = getState();
      if (audioStatePlay) {
        dispatch(setResetDialogNoSelected(value));
        EventManager.broadcast(getState().setPreviousSound);
      }
    };
  },
};
