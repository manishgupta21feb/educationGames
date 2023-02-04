import * as actions from "../../app/actions";
import data from "../data";

const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const SET_QUESTION = "SET_QUESTION";
export const SET_MCQ_ANSWER = "SET_MCQ_ANSWER";
export const SET_MAIN_OPTION = "SET_MAIN_OPTION";
export const SET_SUB_QUESTION = "SET_SUB_QUESTION";
export const RESET_MAIN_OPTION = "RESET_MAIN_OPTION";
export const SET_QUESTION_ANSWERED = "SET_QUESTION_ANSWERED";

export const common = { ...actions };
export const resetMainOption = () => ({ type: RESET_MAIN_OPTION });
export const setMcqAnswer = (answer) => ({ answer, type: SET_MCQ_ANSWER });
export const setQuestion = (question) => ({ question, type: SET_QUESTION });
export const setMainOption = (option) => ({ option, type: SET_MAIN_OPTION });
export const setSubQuestion = (question) => ({
  question,
  type: SET_SUB_QUESTION,
});
export const setQuestionAnswered = (answered) => ({
  answered,
  type: SET_QUESTION_ANSWERED,
});

export const thunks = {
  setMainOption: (id) => (d, s) => {
    d(setMainOption(id));
    const { resetBtnState } = s();
    const question = [...data.subLevelOptions[id]];
    const subQuestion = { ...question.splice(0, 1)[0] };
    if (resetBtnState) {
      d(updateResetBtnState(false));
    }
    setTimeout(() => {
      d(setResetFocusState(true));
      d(setQuestion(question));
      d(setSubQuestion(subQuestion));
    });
  },

  moveToNextQuestion: () => (d, s) => {
    const { question, visitedMainOptions } = s();
    if (visitedMainOptions.length == 2) {
      if (question.length) {
        // fetch next subquestion
        d(setResetFocusState(true));
        const _question = [...question];
        const subQuestion = { ..._question.splice(0, 1)[0] };
        d(setQuestion(_question));
        d(setSubQuestion(subQuestion));
      } else {
        // all options are visited, show completion popup.
        d(togglePopup(5));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 100);
      }
    } else {
      if (question.length) {
        // fetch next subquestion
        d(setResetFocusState(true));
        const _question = [...question];
        const subQuestion = { ..._question.splice(0, 1)[0] };
        d(setQuestion(_question));
        d(setSubQuestion(subQuestion));
      } else {
        // current set is completed, show transition popup.
        d(togglePopup(4));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 100);
      }
    }
  },

  onTransitionPopupClick: () => (d, s) => {
    EventManager.broadcast("SECONDARY_CLICK");
    d(common.togglePopup(4));
    d(setQuestion(null));
    d(setSubQuestion(null));
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    }, 100);
  },

  setMcqAnswer: (id) => (d, s) => {
    d(toggleToastMessage(false));
    d(setQuestionAnswered(false));
    d(setMcqAnswer(id));
  },
};
