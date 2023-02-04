import data from "../data";
import * as actions from "../../app/actions";

export const common = { ...actions };
import { cloneDeep } from "lodash";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const RESET_QUESTION = "RESET_QUESTION";
export const RESET_QUESTIONS = "RESET_QUESTIONS";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const SET_OPTION_ITEMS = "SET_OPTION_ITEMS";
export const RESET_SUBQUESTION = "RESET_SUBQUESTION";
export const RESET_OPTION_ITEMS = "RESET_OPTION_ITEMS";
export const SELECT_SUBQUESTION = "SELECT_SUBQUESTION";
export const UPDATE_OPTION_ITEMS = "UPDATE_OPTION_ITEMS";
export const TOGGLE_SELECTED_ITEM = "TOGGLE_SELECTED_ITEM";
export const RESET_SELECTED_ITEMS = "RESET_SELECTED_ITEMS";
export const SET_QUESTION_ANSWERED = "SET_QUESTION_ANSWERED";

const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const resetQuestion = () => ({ type: RESET_QUESTION });
export const resetQuestions = () => ({ type: RESET_QUESTIONS });
export const resetSubquestion = () => ({ type: RESET_SUBQUESTION });
export const resetOptionItems = () => ({ type: RESET_OPTION_ITEMS });
export const setQuestions = (items) => ({ items, type: SET_QUESTIONS });
export const resetSelectedItems = () => ({ type: RESET_SELECTED_ITEMS });
export const setOptionItems = (items) => ({ items, type: SET_OPTION_ITEMS });
export const toggleSelectedItem = (item) => ({
  item,
  type: TOGGLE_SELECTED_ITEM,
});
export const selectQuestion = (question) => ({
  question,
  type: SELECT_QUESTION,
});
export const selectSubquestion = (subQuestion) => ({
  subQuestion,
  type: SELECT_SUBQUESTION,
});
export const setQuestionAnswered = (answered) => ({
  answered,
  type: SET_QUESTION_ANSWERED,
});
export const updateOptionItems = (items) => ({
  items,
  type: UPDATE_OPTION_ITEMS,
});

export const thunks = {
  generateNextQuestion: () => (dispatch, getState) => {
    const { questions, selectedQuestion } = getState();
    if (
      selectedQuestion &&
      selectedQuestion.subQuestions &&
      selectedQuestion.subQuestions.length
    ) {
      const _question = cloneDeep(selectedQuestion);
      const subQuestion = { ..._question.subQuestions.splice(0, 1)[0] };
      dispatch(selectQuestion(_question));
      dispatch(selectSubquestion(subQuestion));
    } else {
      const _questions = questions.map((q) => cloneDeep(q));
      const randomIndex = Math.floor(Math.random() * _questions.length);
      const question = _questions.splice(randomIndex, 1)[0];
      const _question = cloneDeep(question);
      const subQuestion = { ..._question.subQuestions.splice(0, 1)[0] };
      dispatch(setQuestions(_questions));
      dispatch(selectQuestion(_question));
      dispatch(selectSubquestion(subQuestion));
    }
  },

  toggleSelectedItem: (item) => (dispatch, getState) => {
    const { resetBtnState } = getState();
    dispatch(toggleSelectedItem(item));
    dispatch(toggleToastMessage(false));
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
  },

  checkSubmissions: () => (dispatch, getState) => {
    const { selectedSubquestion, selectedItems, optionItems } = getState();
    const aObjects = [...selectedSubquestion.associatedObjects];
    const check =
      aObjects.every((a) => selectedItems.indexOf(a) >= 0) &&
      aObjects.length == selectedItems.length;
    const some = aObjects.some((a) => selectedItems.indexOf(a) >= 0);
    if (check) {
      const _optionItems = optionItems.map((o) => {
        return { ...o, matched: aObjects.indexOf(o.id) >= 0 };
      });
      dispatch(updateOptionItems(_optionItems));
    }
    dispatch(resetSelectedItems());
    if (check) {
      dispatch(setQuestionAnswered("answered"));
      setTimeout(() => {
        EventManager.broadcast("POSITIVE_FEEDBACK");
      }, 200);
    } else {
      if (some) {
        dispatch(setQuestionAnswered("partialincorrect"));
      } else {
        dispatch(setQuestionAnswered("allincorrect"));
      }
      setTimeout(() => {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }, 200);
    }
    dispatch(toggleToastMessage(true));
  },

  onNextScreenButtonClick: () => (dispatch, getState) => {
    const { questions, selectedQuestion } = getState();
    dispatch(toggleToastMessage(false));
    if (questions.length || selectedQuestion.subQuestions.length) {
      dispatch(setResetFocusState(true));
      setTimeout(() => {
        dispatch(updateOptionItems(cloneDeep(data.optionItems)));
        dispatch(resetSelectedItems());
        dispatch(setQuestionAnswered(""));
        dispatch(thunks.generateNextQuestion());
      }, 100);
      TincanManager.data.completed = false;
      TincanManager.data.percentage =
        parseFloat(TincanManager.data.percentage) + 16.66;
    } else {
      TincanManager.data.completed = true;
      TincanManager.data.percentage = 100;
      dispatch(togglePopup(4));
      setTimeout(() => {
        EventManager.broadcast("COMPLETION_SCREEN");
      }, 200);
    }
    TincanManager.saveTincanData();
  },

  resetActivity: () => (dispatch, getState) => {
    dispatch(ariaLiveText(data.resetLiveText));
    dispatch(resetQuestion());
    dispatch(resetQuestions());
    dispatch(resetSubquestion());
    dispatch(resetOptionItems());
    dispatch(resetSelectedItems());
    dispatch(updateResetBtnState(true));
    dispatch(toggleToastMessage(false));
    dispatch(setQuestionAnswered(""));
    TincanManager.data.completed = false;
    TincanManager.data.percentage = 0;
    TincanManager.resetTincanData();
    if (getState().currentPopup.indexOf(4) >= 0) {
      dispatch(togglePopup(4));
    }
    dispatch(thunks.generateNextQuestion());
    setTimeout(() => {
      dispatch(togglePopup(1));
    });
    setTimeout(() => {
      dispatch(ariaLiveText(" "));
    }, 300);
  },
};
