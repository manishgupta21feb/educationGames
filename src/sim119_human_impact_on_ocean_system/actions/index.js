import * as actions from "../../app/actions";
import data from "../data/data.en";

const { toggleToastMessage, togglePopup, updateResetBtnState, ariaLiveText } =
  actions;

export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const SELECT_OPTION = "SELECT_OPTION";
export const ANSWER_ATTEMPTED = "ANSWER_ATTEMPTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const JUMP_TO_MCQ_SCREEN = "JUMP_TO_MCQ_SCREEN";
export const QUESTION_COUNT = "QUESTION_COUNT";
export const SET_STATIC = "SET_STATIC";
export const RESET_VISITED_HOTSPOTS = "RESET_VISITED_HOTSPOTS";
export const IS_VIDEO_ENDED = "IS_VIDEO_ENDED";
export const SET_VIDEO_STATE = "SET_VIDEO_STATE";
export const TOGGLE_VIDEO_STATE = "TOGGLE_VIDEO_STATE";
export const VIDEO_LIVE_TEXT = "VIDEO_LIVE_TEXT";

export const selectHotspot = (id) => ({
  type: SELECT_HOTSPOT,
  id,
});
export const selectOption = (option) => ({
  type: SELECT_OPTION,
  option,
});
export const answerAttempt = (attempted) => ({
  type: ANSWER_ATTEMPTED,
  attempted,
});
export const correctAnswer = (correct) => ({
  type: CORRECT_ANSWER,
  correct,
});
export const updateVisitedHotspots = (hotspot) => ({
  type: UPDATE_VISITED_HOTSPOTS,
  hotspot,
});
export const resetVisitedHotspots = (hotspot) => ({
  type: RESET_VISITED_HOTSPOTS,
  hotspot,
});
export const buttonClicked = (clicked) => ({
  type: BUTTON_CLICKED,
  clicked,
});
export const setQuestionCount = (count) => ({
  type: QUESTION_COUNT,
  count,
});
export const setStatic = (staticState) => ({
  type: SET_STATIC,
  staticState,
});
export const isVideoEnded = (videoStatus) => ({
  type: IS_VIDEO_ENDED,
  videoStatus,
});
export const isVideoStart = (videoStatus) => ({
  type: IS_VIDEO_START,
  videoStatus,
});
export const setVideoState = (videoState) => ({
  type: SET_VIDEO_STATE,
  videoState,
});
export const videoLiveText = (item) => ({
  type: VIDEO_LIVE_TEXT,
  item,
});
export const toggleVideoState = () => ({ type: TOGGLE_VIDEO_STATE });

export const thunks = {
  submitAnswer: () => {
    return (dispatch, state) => {
      const { 
        selectedHotspot, 
        selectedOption, 
        showStatic, 
        questionCount,
        visitedHotspots 
      } =
        state();

      if (showStatic) {
        dispatch(toggleToastMessage(true));
        dispatch(answerAttempt(true));
        const check = data.mcqData[questionCount - 1].answer == selectedOption;
        if (check) {
          dispatch(correctAnswer(true));
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
          TincanManager.data.percentage = (questionCount / data.mcqData.length) * 50 + 50;
          TincanManager.saveTincanData();
        } else {
          dispatch(correctAnswer(false));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
        }
      } else {
        dispatch(toggleToastMessage(true));
        dispatch(answerAttempt(true));
        const mainMCQ = data.mainScreenMCQ.filter(
          (e) => e.id == selectedHotspot
        );
        const checkAnswer = mainMCQ[0].answer == selectedOption;
        if (checkAnswer) {
          dispatch(correctAnswer(true));
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
          TincanManager.data.percentage = (visitedHotspots.length / data.mainScreenMCQ.length) * 50;
          TincanManager.saveTincanData();
        } else {
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
          dispatch(correctAnswer(false));
        }
      }
    };
  },

  resetActivity: () => {
    return (dispatch, state) => {
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      dispatch(selectOption(""));
      dispatch(selectHotspot(""));
      dispatch(isVideoEnded(false));
      dispatch(resetVisitedHotspots([]));
      dispatch(correctAnswer(false));
      dispatch(answerAttempt(false));
      dispatch(toggleToastMessage(false));
      dispatch(setStatic(false));
      dispatch(setQuestionCount(0));
      dispatch(videoLiveText(""));
      dispatch(ariaLiveText(data.resetLiveText));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      const { currentPopup } = state();
      if (currentPopup.indexOf(8) >= 0) {
        dispatch(togglePopup(8));
      }
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 100);
    };
  },

  selectHotspot: (id) => {
    return (dispatch) => {
      dispatch(updateVisitedHotspots(id));
      dispatch(selectHotspot(id));
      dispatch(buttonClicked(false));
    };
  },

  handleNextButtonClick: () => {
    return (dispatch, state) => {
      const {
        nextButtonClickedState,
        questionCount,
        visitedHotspots,
        showStatic,
      } = state();

      if (showStatic) {
        dispatch(correctAnswer(false));
        dispatch(answerAttempt(false));
        dispatch(selectOption(""));
        dispatch(toggleToastMessage(false));
        if (questionCount == 4) {
          dispatch(toggleToastMessage(false));
          dispatch(togglePopup(7));
          EventManager.broadcast("STOP_ALL");
          EventManager.broadcast("COMPLETION_SCREEN");
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        } else {
          dispatch(setQuestionCount(questionCount + 1));
          EventManager.broadcast("STOP_ALL");
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
        }
      } else {
        if (!nextButtonClickedState) {
          dispatch(buttonClicked(true));
          dispatch(correctAnswer(false));
          dispatch(answerAttempt(false));
          dispatch(selectOption(""));
          dispatch(toggleToastMessage(false));
          dispatch(setQuestionCount(questionCount + 1));
          dispatch(isVideoEnded(false));
          dispatch(selectHotspot(""));
          EventManager.broadcast("STOP_ALL");
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
          if (visitedHotspots.length == 3) {
            dispatch(togglePopup(6));
            EventManager.broadcast("STOP_ALL");
            EventManager.broadcast("COMPLETION_SCREEN");
          }
        } else {
          dispatch(buttonClicked(false));
          dispatch(selectHotspot(""));
          dispatch(toggleToastMessage(false));
        }
      }
    };
  },

  setVideoLiveText: () => {
    return (dispatch, state, getState) => {
      const { videoLiveText } = state();

      dispatch(common.ariaLiveText(videoLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 150);
    };
  },
};

export const common = { ...actions };
