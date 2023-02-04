import * as actions from "../../app/actions";
import { isAndroid } from "react-device-detect";
import data from "../data";
export const common = { ...actions };
export const DEMO_ACTION = "DEMO_ACTION";

export const CURRENT_LAYOUT = "CURRENT_LAYOUT";
export const GET_HOTSPOTS = "GET_HOTSPOTS";
export const SELECTED_HOTSPOT = "SELECTED_HOTSPOT";
export const SET_VISITED_HOTSPOT = "SET_VISITED_HOTSPOT";
export const GET_HOTSPOT_ALL_DATA = "GET_HOTSPOT_ALL_DATA";
export const RESET_VISITED_HOTSPOT = "RESET_VISITED_HOTSPOT";
export const SET_VIDEO_STATE = "SET_VIDEO_STATE";
export const TOGGLE_VIDEO_STATE = "TOGGLE_VIDEO_STATE";
export const TOGGLE_SCREEN = "TOGGLE_SCREEN";
export const VIDEO_ENDED = "VIDEO_ENDED";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const FETCH_OPTIONS = "FETCH_OPTIONS";
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const DISABLE_DRAGGABLE = "DISABLE_DRAGGABLE";
export const DISABLE_DROPPABLE = "DISABLE_DROPPABLE";
export const SELECT_DRAGGABLE_FULL = "SELECT_DRAGGABLE_FULL";
export const SET_FOCUS_ON_LIST = "SET_FOCUS_ON_LIST";
export const SET_FOCUS_ON_DRAG = "SET_FOCUS_ON_DRAG";
export const ACTIVE_FINISH_BUTTON = "ACTIVE_FINISH_BUTTON";
export const HOTSPOT_ONE_SELECTED = "HOTSPOT_ONE_SELECTED";
export const RESET_IS_TRAVSER_HOTSPOT = "RESET_IS_TRAVSER_HOTSPOT";

export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const CURRENT_DROP_ZONE_INDEX = "CURRENT_DROP_ZONE_INDEX";

export const setLayout = (value = "topbottom") => ({
  type: CURRENT_LAYOUT,
  payload: value,
});

export const fetchHotspots = (value) => ({
  type: GET_HOTSPOTS,
  payload: value,
});

export const selectHotspot = (id) => ({
  type: SELECTED_HOTSPOT,
  payload: id,
});

export const addVisitedHotspot = (item) => ({
  type: SET_VISITED_HOTSPOT,
  payload: item,
});
export const resetVisitedHotspot = () => ({
  type: RESET_VISITED_HOTSPOT,
});
export const isContinuePressed = (val) => ({
  type: GET_HOTSPOT_ALL_DATA,
  payload: val,
});

export const setVideoState = (videoState) => ({
  type: SET_VIDEO_STATE,
  data: videoState,
});

export const toggleVideoState = () => ({
  type: TOGGLE_VIDEO_STATE,
});

export const toggleScreen = (val) => ({
  type: TOGGLE_SCREEN,
  payload: val,
});
export const videoEnded = (val) => ({
  type: VIDEO_ENDED,
  payload: val,
});
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
export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});
export const displayElementDataOptions = (val) => {
  return {
    type: FETCH_OPTIONS,
    data: val,
  };
};
export const disableDraggable = (answerId, isDisable = false) => ({
  type: DISABLE_DRAGGABLE,
  data: { answerId, isDisable },
});
export const fetchQuestions = (val) => {
  return {
    type: FETCH_QUESTIONS,
    data: val,
  };
};
export const disableDroppable = (
  answerId,
  markedAnswer,
  isDisable,
  hidden = false
) => ({
  type: DISABLE_DROPPABLE,
  data: { answerId, markedAnswer, isDisable, hidden },
});

export const selectDraggableFull = (answerId) => ({
  type: SELECT_DRAGGABLE_FULL,
  data: answerId,
});
export const setFocusOnList = (answerId) => ({
  type: SET_FOCUS_ON_LIST,
  data: answerId,
});

export const setFocusonDragItem = (answerId) => ({
  type: SET_FOCUS_ON_DRAG,
  data: answerId,
});
export const showFinishButton = (val) => ({
  type: ACTIVE_FINISH_BUTTON,
  data: val,
});
export const hotspotOneSelected = (travserId) => ({
  type: HOTSPOT_ONE_SELECTED,
  payload: travserId,
});
export const resetHotspotOneSelected = () => ({
  type: RESET_IS_TRAVSER_HOTSPOT,
});
export const setAccessibleListVisible = (value = false) => ({
  type: ACCESSIBLE_LIST_VISIBLE,
  payload: value,
});
export const currentDropZoneIndex = (val) => {
  return {
    type: CURRENT_DROP_ZONE_INDEX,
    data: val,
  };
};

export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export const thunks = {
  onActivityLoad: () => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(fetchHotspots(data.hotspots));
    };
  },
  selectHotspot: (hotspotId) => {
    return (dispatch, getState) => {
      const { resetBtnState, hotspots } = getState();
      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
      const _selectedHotspotId = hotspots.find((item) => item.id == hotspotId);
      dispatch(selectHotspot(_selectedHotspotId));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(thunks.addUnique(_selectedHotspotId.travserId));
      if (_selectedHotspotId.travserId != 1) {
        dispatch(isContinuePressed(false));
      } else {
        dispatch(isContinuePressed(true));
        dispatch(hotspotOneSelected(1));
        // console.log("if slected hotspot is 1", _selectedHotspotId.id);
        // console.log("Dispatch an action which disable other hotspot");
      }
    };
  },
  addUnique: (travserId) => {
    return (dispatch, getState) => {
      const { selectedHotspot, visitedHotspot } = getState();
      // check already visited
      if (visitedHotspot.length > 0) {
        let hotspotExist = visitedHotspot.find((item) => item == travserId);
        if (!hotspotExist) {
          dispatch(addVisitedHotspot(travserId));
        }
      } else {
        dispatch(addVisitedHotspot(travserId));
      }
    };
  },
  next: () => {
    EventManager.broadcast("SECONDARY_CLICK");
  },
  transitionContinuePressed: () => {
    return (dispatch, getState) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.togglePopup(4));
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(setLayout("full"));
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 100);
      TincanManager.data.percentage = 50;
      TincanManager.saveTincanData();
    };
  },
  fetchElements: () => {
    return (dispatch, getState) => {
      dispatch(displayElementDataOptions([...data.screen2.options]));
    };
  },

  fetchQuestionsList: () => {
    return (dispatch, getState) => {
      dispatch(fetchQuestions([...data.screen2.questionList]));
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
  submitAnswer: () => {
    return (dispatch, getState) => {
      const { questionsList } = getState();
      const correctlyAnswered = questionsList.filter(
        (q) => q.markedAnswer === q.answerId
      );
      const incorrectAnswered = questionsList.filter(
        (q) => q.markedAnswer !== q.answerId
      );
      if (incorrectAnswered.length <= 4 && correctlyAnswered.length <= 4) {
        dispatch(thunks.checkForPartialCorrectAnswer());
        dispatch(thunks.updateDragDropdisablity());
      } else if (incorrectAnswered.length === 5) {
        dispatch(thunks.checkForIncorrectAnswer());
        dispatch(thunks.updateDragDropdisablity());
      } else if (correctlyAnswered.length === 5) {
        dispatch(thunks.checkForCorrectAnswer());
        dispatch(showFinishButton(true));
      }
    };
  },
  checkForCorrectAnswer: () => {
    return (dispatch, getState) => {
      dispatch(updateToastMsg("correct"));
      dispatch(common.toggleToastMessage(true));
      dispatch(answerSubmitted(true));
      dispatch(correctAnswer(true));
      EventManager.broadcast("POSITIVE_FEEDBACK");
    };
  },
  checkForIncorrectAnswer: () => {
    return (dispatch, getState) => {
      dispatch(updateToastMsg("incorrect"));
      dispatch(thunks.checkforIncorrect());
    };
  },
  checkForPartialCorrectAnswer: () => {
    return (dispatch, getState) => {
      dispatch(updateToastMsg("partiallyCorrect"));
      dispatch(thunks.checkforIncorrect());
    };
  },
  checkforIncorrect: () => {
    return (dispatch, getState) => {
      dispatch(common.toggleToastMessage(true));
      dispatch(answerSubmitted(true));
      dispatch(correctAnswer(false));
      EventManager.broadcast("NEGATIVE_FEEDBACK");
    };
  },
  finshAll: () => {
    return (dispatch, getState) => {
      dispatch(common.toggleToastMessage(false));
      EventManager.broadcast("COMPLETION_SCREEN");
      dispatch(common.togglePopup(5));
      TincanManager.data.percentage = 100;
      TincanManager.data.completed = true;
      TincanManager.saveTincanData();
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.toggleToastMessage(false));
      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
      dispatch(selectHotspot({}));
      dispatch(resetVisitedHotspot());
      dispatch(setVideoState(true));
      dispatch(setLayout("topbottom"));
      dispatch(toggleScreen(false));
      dispatch(videoEnded(false));
      dispatch(showFinishButton(false));
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(common.togglePopup(3));
      }
      if (currentPopup.indexOf(5) >= 0) {
        dispatch(common.togglePopup(5));
      }
    };
  },
  setVideoLiveText: () => {
    return (dispatch, getState) => {
      const { isVideoEnded } = getState();
      if (isVideoEnded) {
        dispatch(videoEnded(false));
        dispatch(
          common.thunks.ariaLiveAssertive(
            data.animationAssest.videoStartLiveText
          )
        );
      } else {
        dispatch(common.thunks.ariaLiveAssertive(data.animationAssest.endAlt));
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
    const ariaText = source + " " + data.screen2.aria;
    if (isAndroid) {
      setTimeout(() => {
        dispatch(common.thunks.ariaLiveAssertive(ariaText));
      }, 500);
    } else {
      dispatch(common.thunks.ariaLiveAssertive(ariaText));
    }
    dispatch(selectDraggableFull(null));
    dispatch(setAccessibleListVisible(false));
  },
};
