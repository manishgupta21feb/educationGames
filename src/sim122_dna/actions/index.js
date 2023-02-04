import * as actions from "../../app/actions";
import data from '../data';
const {
  ariaLiveText,
  toggleToastMessage,
  togglePopup,
  updateResetBtnState
} = actions;

export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const UPDATE_VISITED_HOTSPOT = "UPDATE_VISITED_HOTSPOT";
export const SET_NEXT_BUTTON_CLICK_STATE = "SET_NEXT_BUTTON_CLICK_STATE";
export const SET_SCREEN_STATUS = "SET_SCREEN_STATUS";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const CORRECT_ATTEMPT = "CORRECT_ATTEMPT";
export const ANSWER_ATTEMPT = "ANSWER_ATTEMPT";
export const SELECT_OPTION = "SELECT_OPTION";
export const RESET_VISITED_HOTSPOTS = "RESET_VISITED_HOTSPOTS";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const SET_DROPPED_ITEM = "SET_DROPPED_ITEM";
export const UPDATE_DROPPED_ITEM = "UPDATE_DROPPED_ITEM";
export const SCREEN4_CORRECT_ANSWER = "SCREEN4_CORRECT_ANSWER";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const SET_SCREEN4_DROPZONES = "SET_SCREEN4_DROPZONES";
export const SCREEN6_DROPZONES = "SCREEN6_DROPZONES";
export const SCREEN6_CORRECT_ANSWER = "SCREEN6_CORRECT_ANSWER";
export const SET_ZINDEX_STATUS = "SET_ZINDEX_STATUS";
export const SET_DROPZONE_STATUS = "SET_DROPZONE_STATUS";
export const SET_SCREEN6_DROPZONES = "SET_SCREEN6_DROPZONES";

export const selectHotspot = (id) => ({
  type: SELECT_HOTSPOT,
  id
});

export const updateVisitedHotspot = (hotspot) => ({
  type: UPDATE_VISITED_HOTSPOT,
  hotspot
});

export const setNextButtonClickState = (status) => ({
  type: SET_NEXT_BUTTON_CLICK_STATE,
  status
});

export const setScreenStatus = (status) => ({
  type: SET_SCREEN_STATUS,
  status
});

export const answerAttempt = (attempt) => ({
  type: ANSWER_ATTEMPT,
  attempt
});

export const correctAnswer = (correct) => ({
  type: CORRECT_ANSWER,
  correct
});

export const selectOption = (option) => ({
  type: SELECT_OPTION,
  option
});

export const resetVisitedHotspots = (hotspot) => ({
  type: RESET_VISITED_HOTSPOTS,
  hotspot,
});

export const selectDraggable = (data) => ({
  type: SELECT_DRAGGABLE,
  data,
});

export const setDroppedItem = (item) => ({
  type: SET_DROPPED_ITEM,
  item
});

export const updateDroppedItem = (item) => ({
  type: UPDATE_DROPPED_ITEM,
  item
});

export const screen4CorrectAnswer = (correct) => ({
  type: SCREEN4_CORRECT_ANSWER,
  correct
});

export const screen6CorrectAnswer = (correct) => ({
  type: SCREEN6_CORRECT_ANSWER,
  correct
});

export const updateAccessibleList = (status) => ({
  type: ACCESSIBLE_LIST_VISIBLE,
  status
});

export const setScreen4Dropzones = (dropzone) => ({
  type: SET_SCREEN4_DROPZONES,
  dropzone
});

export const setScreen6Dropzones = (dropzone) => ({
  type: SET_SCREEN6_DROPZONES,
  dropzone
});

export const setZIndexStatus = (status) => ({
  type: SET_ZINDEX_STATUS,
  status
});

export const setDropzoneStatus = (status) => ({
  type: SET_DROPZONE_STATUS,
  status
});

export const thunks = {

  handleNextButtonClick: () => {
    return (dispatch, state) => {

      const {
        visitedHotSpot,
        screenStatus
      } = state();

      if (screenStatus == 1) {
        if (visitedHotSpot.length == 4) {
          EventManager.broadcast("STOP_ALL");
          EventManager.broadcast("COMPLETION_SCREEN");
          dispatch(togglePopup(6));
        } else {
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
          EventManager.broadcast("STOP_ALL");
          dispatch(setNextButtonClickState(true));
          dispatch(selectHotspot(""));
        }
      }

      if (screenStatus == 2) {
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
        EventManager.broadcast("STOP_ALL");
        dispatch(setScreenStatus(3));
        dispatch(correctAnswer(false));
        dispatch(answerAttempt(false));
      }

      if (screenStatus == 3) {
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
        EventManager.broadcast("STOP_ALL");
        dispatch(toggleToastMessage(false));
        dispatch(setScreenStatus(4));
      }

      if (screenStatus == 4) {
        EventManager.broadcast("STOP_ALL");
        EventManager.broadcast("COMPLETION_SCREEN");
        dispatch(toggleToastMessage(false));
        dispatch(togglePopup(6));
        dispatch(updateDroppedItem([]));
      }

      if (screenStatus == 5) {
        if (visitedHotSpot.length == 5) {
          EventManager.broadcast("COMPLETION_SCREEN");
          dispatch(togglePopup(6));
        } else {
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
          EventManager.broadcast("STOP_ALL");
          dispatch(setNextButtonClickState(true));
          dispatch(selectHotspot(""));
        }
      }

      if (screenStatus == 6) {
        EventManager.broadcast("STOP_ALL");
        EventManager.broadcast("COMPLETION_SCREEN");
        dispatch(togglePopup(7));
        dispatch(toggleToastMessage(false));
      }

    }
  },

  submitScreen2Answer: (id) => {
    return (dispatch, state) => {
      dispatch(toggleToastMessage(true));
      dispatch(answerAttempt(true));
      if (id == 'blueStrand') {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(false));
      }
    }
  },

  submitAnswer: () => {
    return (dispatch, state) => {

      const { selectedOption } = state();

      const correct = selectedOption == data.screen3McqAnswer;
      dispatch(answerAttempt(true));
      dispatch(toggleToastMessage(true));
      if (correct) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(false));
      }

    }
  },

  onDrop: (dropzone) => {
    return (dispatch, state) => {

      const {
        selectedDraggable,
        screen4Dropzones,
        screen6Dropzones,
        screenStatus
      } = state();

      const newScreen4Dropzones = [...screen4Dropzones];
      const newScreen6Dropzones = [...screen6Dropzones];

      let _index = (screenStatus == 4 ? newScreen4Dropzones : newScreen6Dropzones)
        .findIndex((e) => e.id === dropzone);
      if (_index >= 0) {
        if (screenStatus == 4) {
          newScreen4Dropzones.splice(_index, 1);
          dispatch(setScreen4Dropzones(newScreen4Dropzones));
        } else {
          newScreen6Dropzones.splice(_index, 1);
          dispatch(setScreen6Dropzones(newScreen6Dropzones));
        }
      }

      dispatch(setDroppedItem({ ...selectedDraggable, dropzone }));
      
      dispatch(selectDraggable(null));

    }
  },

  updateAccessiableValue: (dropzone) => {
    return (dispatch, state) => {

      const {
        selectedDraggable,
        screen4Dropzones,
        screen6Dropzones,
        screenStatus
      } = state();

      const newScreen4Dropzones = [...screen4Dropzones];
      const newScreen6Dropzones = [...screen6Dropzones];

      let _index = (screenStatus == 4 ? newScreen4Dropzones : newScreen6Dropzones)
        .findIndex((e) => e.id === dropzone.id);
      if (_index >= 0) {
        if (screenStatus == 4) {
          newScreen4Dropzones.splice(_index, 1);
          dispatch(setScreen4Dropzones(newScreen4Dropzones));
        } else {
          newScreen6Dropzones.splice(_index, 1);
          dispatch(setScreen6Dropzones(newScreen6Dropzones));
        }
      }

      dispatch(setDroppedItem({ ...selectedDraggable, dropzone: dropzone.id }));

      const liveText = data.dropLiveText
        .replace('-1-', selectedDraggable.label)
        .replace('-2-', dropzone.id);

      dispatch(ariaLiveText(liveText));

      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 500);

      dispatch(selectDraggable(null));

    }
  },

  checkDropAnswers: () => {
    return (dispatch, state) => {

      const {
        droppedItems,
        screenStatus,
      } = state();

      dispatch(answerAttempt(true));
      dispatch(toggleToastMessage(true));

      const correctData = screenStatus == 4 ? data.correctAnswersArr : data.screen6CorrectAnswersArr;

      let result = droppedItems.filter(item => {
        let _find = correctData.find(e => {
          if (e.id === item.id && e.dropzone === item.dropzone) {
            return true;
          }
        });
        if (_find) {
          return true;
        }
      });

      dispatch(updateDroppedItem(result));

      const dropzonesData = screenStatus == 4 ? data.dropZones : data.screen6DropZones;

      let dropzoneResult = dropzonesData.filter(item => {
        let newResult = result.find((e) => e.dropzone === item.id);
        if (!newResult) {
          return true
        }
      });

      if (screenStatus == 4) {
        dispatch(setScreen4Dropzones(dropzoneResult));
      } else {
        dispatch(setScreen6Dropzones(dropzoneResult));
      }

      dispatch(setDropzoneStatus(true));

      if (result.length === droppedItems.length) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(true));
        if (screenStatus == 4) {
          dispatch(screen4CorrectAnswer(true));
        }
        if (screenStatus == 6) {
          dispatch(screen6CorrectAnswer(true));
        }
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(false));
      }
    }
  },

  handleCompletionScreen: () => {
    return (dispatch, state) => {

      const { screenStatus } = state();

      EventManager.broadcast("SECONDARY_CLICK");
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(common.togglePopup(6));
      if (screenStatus == 1) {
        dispatch(selectHotspot(""));
        dispatch(updateVisitedHotspot([]));
        dispatch(setNextButtonClickState(false));
        dispatch(setScreenStatus(2));
        dispatch(resetVisitedHotspots());
      }
      if (screenStatus == 4) {
        dispatch(setScreenStatus(5));
        dispatch(setDropzoneStatus(true));
      }
      if (screenStatus == 5) {
        dispatch(setScreenStatus(6));
      }
    }
  },

  resetActivity: () => {
    return (dispatch, state) => {
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      dispatch(selectHotspot(''));
      dispatch(resetVisitedHotspots());
      dispatch(setNextButtonClickState(false));
      dispatch(setScreenStatus(1));
      dispatch(answerAttempt(false));
      dispatch(correctAnswer(false));
      dispatch(selectOption(""));
      dispatch(selectDraggable({}));
      dispatch(updateDroppedItem([]));
      dispatch(screen4CorrectAnswer(false));
      dispatch(updateAccessibleList(false));
      dispatch(setDropzoneStatus(true));
      dispatch(ariaLiveText(" "));
      const { currentPopup } = state();
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      if (currentPopup.indexOf(8) >= 0) {
        dispatch(togglePopup(8));
      }
    }
  },

}

export const common = { ...actions };
