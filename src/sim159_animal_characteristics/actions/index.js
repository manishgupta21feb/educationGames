import * as actions from "../../app/actions";
import data from "../data";

export const SET_MCQ1 = "SET_MCQ1";
export const SET_MCQ2 = "SET_MCQ2";
export const RESET_MCQ1 = "RESET_MCQ1";
export const RESET_MCQ2 = "RESET_MCQ2";
export const SET_QUESTION = "SET_QUESTION";
export const SET_MCQ1_ANSWER = "SET_MCQ1_ANSWER";
export const SET_MCQ2_ANSWER = "SET_MCQ2_ANSWER";
export const RESET_MCQ2_ANSWER = "RESET_MCQ2_ANSWER";
export const SET_QUESTION_ANSWERED = "SET_QUESTION_ANSWERED";

const {
  togglePopup,
  ariaLiveText,
  onChangeScreen,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const common = { ...actions };
export const resetMCQ1 = () => ({ type: RESET_MCQ1 });
export const resetMCQ2 = () => ({ type: RESET_MCQ2 });
export const setMCQ1 = (mcqs) => ({ mcqs, type: SET_MCQ1 });
export const setMCQ2 = (mcqs) => ({ mcqs, type: SET_MCQ2 });
export const resetMCQ2Answer = () => ({ type: RESET_MCQ2_ANSWER });
export const setQuestion = (question) => ({ question, type: SET_QUESTION });
export const setMCQ1Answer = (answer) => ({ answer, type: SET_MCQ1_ANSWER });
export const setMCQ2Answer = (answer) => ({ answer, type: SET_MCQ2_ANSWER });
export const setQuestionAnswered = (answered) => ({
  answered,
  type: SET_QUESTION_ANSWERED,
});

export const thunks = {
  onInit: () => (dispatch) => {
    dispatch(thunks.generateNextQuestion());
    dispatch(togglePopup(1));
  },

  setMCQ1Answer: (answer) => (dispatch, getState) => {
    dispatch(setMCQ1Answer(answer));
    EventManager.broadcast("STOP_ALL");
    dispatch(toggleToastMessage(false));
    if (getState().resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
  },

  setMCQ2Answer: (answer) => (dispatch, getState) => {
    dispatch(setMCQ2Answer(answer));
    EventManager.broadcast("STOP_ALL");
    dispatch(toggleToastMessage(false));
  },

  generateNextQuestion: () => (dispatch, getState) => {
    const { currentScreen } = getState();
    if (currentScreen == 0) {
      const { mcq1 } = getState();
      if (mcq1.length) {
        const _mcq1 = [...mcq1];
        const random = Math.floor(_mcq1.length * Math.random());
        const question = { ..._mcq1.splice(random, 1)[0] };
        dispatch(setResetFocusState(true));
        dispatch(setQuestion(question));
        dispatch(setMCQ1(_mcq1));
      } else {
        // show transition popup
        dispatch(togglePopup(4));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 100);
      }
    } else {
      const { mcq2 } = getState();
      if (mcq2.length) {
        const _mcq2 = [...mcq2];
        const question = { ..._mcq2.splice(0, 1)[0] };
        dispatch(setResetFocusState(true));
        dispatch(setQuestion(question));
        dispatch(setMCQ2(_mcq2));
        dispatch(resetMCQ2Answer());
      } else {
        dispatch(togglePopup(5));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 100);
        // show completion popup
      }
    }
  },

  submitMCQAnswer: () => (dispatch, getState) => {
    const { question, currentScreen } = getState();
    let check = false;
    if (currentScreen == 0) {
      const { mcq1Answer } = getState();
      check = question && mcq1Answer && question.answer[0] == mcq1Answer;
    } else if (currentScreen == 1) {
      const { mcq2Answer } = getState();
      check =
        question &&
        mcq2Answer &&
        mcq2Answer.length == question.answer.length &&
        question.answer.every((a) => mcq2Answer.indexOf(a) >= 0);
    }
    dispatch(setQuestionAnswered(check));
    dispatch(toggleToastMessage(true));
    if (currentScreen == 1 && !check) {
      // clearing checked options/checkboxes
      dispatch(resetMCQ2Answer());
    }
    setTimeout(() => {
      EventManager.broadcast(check ? "POSITIVE_FEEDBACK" : "NEGATIVE_FEEDBACK");
    }, 200);
  },

  moveToNextQuestion: () => (dispatch, getState) => {
    dispatch(setResetFocusState(true));
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    }, 10);
    dispatch(setMCQ1Answer(""));
    dispatch(toggleToastMessage(false));
    dispatch(setQuestionAnswered(false));
    dispatch(thunks.generateNextQuestion());
  },

  resetActivity: () => (dispatch, getState) => {
    const { currentPopup } = getState();
    dispatch(resetMCQ1());
    dispatch(resetMCQ2());
    dispatch(ariaLiveText(data.resetLiveText));
    dispatch(onChangeScreen(0));
    dispatch(setMCQ1Answer(""));
    dispatch(resetMCQ2Answer());
    dispatch(updateResetBtnState(true));
    dispatch(toggleToastMessage(false));
    dispatch(setQuestionAnswered(false));
    dispatch(thunks.generateNextQuestion());
    let popupid = -1;
    if (currentPopup.indexOf(2) >= 0) {
      popupid = 2;
    } else if (currentPopup.indexOf(5) >= 0) {
      popupid = 5;
    }
    dispatch(togglePopup(popupid));
    setTimeout(() => {
      dispatch(togglePopup(1));
      dispatch(ariaLiveText(" "));
    }, 60);
  },
};
