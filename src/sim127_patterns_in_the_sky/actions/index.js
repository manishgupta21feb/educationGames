import data from "../data";
import * as actions from "../../app/actions";
export const common = { ...actions };

export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const SET_ACTIVE_SCREEN = "SET_ACTIVE_SCREEN";
export const SET_MCQ_QUESTIONS = "SET_MCQ_QUESTIONS";
export const ADD_VISITED_HOTSPOT = "ADD_VISITED_HOTSPOT";
export const RESET_VISITED_HOTSPOT = "RESET_VISITED_HOTSPOT";
export const SET_MCQ_ANSWER_OPTION = "SET_MCQ_ANSWER_OPTION";
export const SET_QUESTION_ANSWERED = "SET_QUESTION_ANSWERED";
export const SET_ACTIVE_MCQ_QUESTION = "SET_ACTIVE_MCQ_QUESTION";

const {
  togglePopup,
  ariaLiveText,
  setResetFocusState,
  toggleToastMessage,
  updateResetBtnState,
} = actions;

export const resetVisitedHotspots = () => ({ type: RESET_VISITED_HOTSPOT });
export const selectHotspot = (hotspot) => ({ hotspot, type: SELECT_HOTSPOT });

export const setMCQQuestions = (questions) => ({
  questions,
  type: SET_MCQ_QUESTIONS,
});
export const setActiveScreen = (screenId) => ({
  screenId,
  type: SET_ACTIVE_SCREEN,
});
export const addVisitedHotspot = (hotspot) => ({
  hotspot,
  type: ADD_VISITED_HOTSPOT,
});
export const setActiveMCQQuestion = (question) => ({
  question,
  type: SET_ACTIVE_MCQ_QUESTION,
});
export const selectMCQAnswerOption = (id) => ({
  id,
  type: SET_MCQ_ANSWER_OPTION,
});
export const setQuestionAnswered = (answered) => ({
  answered,
  type: SET_QUESTION_ANSWERED,
});

export const thunks = {
  selectHotspot: (hotspot) => (dispatch, getState) => {
    const { resetBtnState } = getState();
    dispatch(selectHotspot(hotspot));
    dispatch(addVisitedHotspot(hotspot));
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
    setTimeout(() => {
      dispatch(setResetFocusState(true));
    }, 50);
  },

  screen1NextScreenHandler: () => (dispatch, getState) => {
    const { visitedHotspots } = getState();
    dispatch(selectHotspot(""));
    if (visitedHotspots.length < data.screen1TopViewButtons.length) {
      setTimeout(() => {
        dispatch(setResetFocusState(true));
      });
    } else {
      TincanManager.data.completed = false;
      TincanManager.data.percentage = 50;
      TincanManager.saveTincanData();
      dispatch(togglePopup(4));
      setTimeout(() => {
        EventManager.broadcast("COMPLETION_SCREEN");
      }, 300);
    }
  },

  screen2NextScreenHandler: () => (dispatch, getState) => {
    const { mcqQuestions } = getState();
    dispatch(toggleToastMessage(false));
    if (mcqQuestions.length) {
      dispatch(selectMCQAnswerOption(""));
      dispatch(setQuestionAnswered(false));
      dispatch(thunks.generateNextMCQQuestion());
      setTimeout(() => {
        dispatch(setResetFocusState(true));
      });
    } else {
      TincanManager.data.completed = true;
      TincanManager.data.percentage = 100;
      TincanManager.saveTincanData();
      dispatch(togglePopup(5));
      setTimeout(() => {
        EventManager.broadcast("COMPLETION_SCREEN");
      }, 300);
    }
  },

  generateNextMCQQuestion: () => (dispatch, getState) => {
    const { mcqQuestions } = getState();
    const _mcqQuestions = mcqQuestions.map((m) => ({ ...m }));
    const randomIndex = Math.floor(Math.random() * mcqQuestions.length);
    const question = _mcqQuestions.splice(randomIndex, 1)[0];
    dispatch(setMCQQuestions(_mcqQuestions));
    dispatch(setActiveMCQQuestion({ ...question }));
  },

  selectMCQAnswerOption: (id) => (dispatch) => {
    dispatch(toggleToastMessage(false));
    dispatch(selectMCQAnswerOption(id));
  },

  submitMCQAnswer: () => (dispatch, getState) => {
    const { selectedMCQQuestion, mcqAnswerOption } = getState();
    dispatch(toggleToastMessage(false));
    if (selectedMCQQuestion.answer == mcqAnswerOption) {
      dispatch(setQuestionAnswered(true));
      setTimeout(() => {
        dispatch(toggleToastMessage(true));
      }, 100);
      setTimeout(() => {
        EventManager.broadcast("POSITIVE_FEEDBACK");
      }, 300);
    } else {
      setTimeout(() => {
        dispatch(toggleToastMessage(true));
      }, 100);
      setTimeout(() => {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }, 300);
    }
  },

  resetActivity: () => (dispatch, getState) => {
    dispatch(ariaLiveText(data.resetLiveText));
    dispatch(resetVisitedHotspots());
    dispatch(selectHotspot(""));
    dispatch(updateResetBtnState(true));
    dispatch(setMCQQuestions(data.screen2MCQs.map((m) => ({ ...m }))));
    dispatch(setActiveMCQQuestion(null));
    dispatch(selectMCQAnswerOption(""));
    dispatch(toggleToastMessage(false));
    dispatch(setQuestionAnswered(false));
    dispatch(setActiveScreen("screen1"));
    TincanManager.data.completed = false;
    TincanManager.data.percentage = 0;
    TincanManager.resetTincanData();
    if (getState().currentPopup.indexOf(5) >= 0) {
      dispatch(togglePopup(5));
    }
    setTimeout(() => {
      dispatch(togglePopup(1));
    });
    setTimeout(() => {
      dispatch(ariaLiveText(" "));
    }, 300);
  },
};
