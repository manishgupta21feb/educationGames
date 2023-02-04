import data from "../data";
import * as actions from "../../app/actions";

const {
  ariaLiveText,
  updateResetBtnState,
  setResetFocusState,
  toggleToastMessage,
  togglePopup,
} = actions;

export const INFO_OPEN = "INFO_OPEN";
export const PAUSE_VIDEO = "PAUSE_VIDEO";
export const SET_PROTONS = "SET_PROTONS";
export const SET_QUESTION = "SET_QUESTION";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SET_ANSWERED = "SET_ANSWERED";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const SET_ELECTRONS = "SET_ELECTRONS";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const ACTIVITY_FINISH = "ACTIVITY_FINISH";
export const SET_START_AGAIN = "SET_START_AGAIN";
export const SET_MASS_NUMBER = "SET_MASS_NUMBER";
export const START_SIMULATION = "START_SIMULATION";
export const SET_ELEMENT_NAME = "SET_ELEMENT_NAME";
export const SET_AUDIO_STOPPED = "SET_AUDIO_STOPPED";
export const ADD_CORRECT_OPTIONS = "ADD_CORRECT_OPTIONS";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const CLEAR_CORRECT_OPTIONS = "CLEAR_CORRECT_OPTIONS";
export const ADD_INCORRECT_OPTIONS = "ADD_INCORRECT_OPTIONS";
export const CLEAR_INCORRECT_OPTIONS = "CLEAR_INCORRECT_OPTIONS";
export const REMOVE_ITEM_FROM_CORRECT = "REMOVE_ITEM_FROM_CORRECT";
export const SET_SOUND_MANAGER_SOURCES = "SET_SOUND_MANAGER_SOURCES";
export const REMOVE_ITEM_FROM_INCORRECT = "REMOVE_ITEM_FROM_INCORRECT";

export const common = { ...actions };
export const answered = (item) => ({ item, type: SET_ANSWERED });
export const setProtons = (item) => ({ item, type: SET_PROTONS });
export const setElectrons = (item) => ({ item, type: SET_ELECTRONS });
export const wrongAnswer = (answer) => ({ answer, type: WRONG_ANSWER });
export const setMassNumber = (item) => ({ item, type: SET_MASS_NUMBER });
export const submitAnswer = (answer) => ({ answer, type: SUBMIT_ANSWER });
export const addCorrect = (item) => ({ item, type: ADD_CORRECT_OPTIONS });
export const setElementName = (item) => ({ item, type: SET_ELEMENT_NAME });
export const clearCorrectOptions = () => ({ type: CLEAR_CORRECT_OPTIONS });
export const questionCount = (count) => ({ count, type: QUESTIONS_COUNT });
export const setQuestion = (question) => ({ question, type: SET_QUESTION });
export const activityFinish = (value) => ({ value, type: ACTIVITY_FINISH });
export const updateQuestionsData = (data) => ({ data, type: QUESTIONS_DATA });
export const addIncorrect = (item) => ({ item, type: ADD_INCORRECT_OPTIONS });
export const startSimulation = (value) => ({ value, type: START_SIMULATION });
export const clearIncorrectOptions = () => ({ type: CLEAR_INCORRECT_OPTIONS });
export const selectAnswerOption = (id) => ({ id, type: SELECT_ANSWER_OPTION });

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});

export const removeItemFromCorrect = (item) => ({
  item,
  type: REMOVE_ITEM_FROM_CORRECT,
});

export const removeItemFromIncorrect = (item) => ({
  item,
  type: REMOVE_ITEM_FROM_INCORRECT,
});

export const thunk = {
  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData } = getState();
      const _questionsData = questionsData.map((q) => ({ ...q }));
      // const index = Math.floor(Math.random() * _questionsData.length);
      const question = { ..._questionsData.splice(0, 1)[0] };
      dispatch(setQuestion({ ...question }));
      dispatch(updateQuestionsData([..._questionsData]));
      dispatch(answered(false));
      dispatch(clearCorrectOptions());
      dispatch(clearIncorrectOptions());
    };
  },

  selectAnswerOption: (id) => {
    return (dispatch, getState) => {
      dispatch(selectAnswerOption(id));
    };
  },

  submitAnswer: (answer) => {
    return (dispatch, getState) => {
      const {
        selectedQuestion: { answer },
        questionCount: count,
      } = getState();

      const state = getState();

      let flag = true;
      for (let key in state) {
        if (answer[key]) {
          if (!state[key].value == null || answer[key] != state[key].value) {
            flag = false;
            dispatch(addIncorrect(key));
            dispatch(removeItemFromCorrect(key));
          } else {
            dispatch(addCorrect(key));
            dispatch(removeItemFromIncorrect(key));
          }
        }
      }

      if (flag) {
        dispatch(answered(true));
        dispatch(submitAnswer(false));
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(submitAnswer(true));
        TincanManager.data.percentage = parseInt(
          (count / data.equationsData.length) * 100
        );
        TincanManager.saveTincanData();
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(wrongAnswer(true));
      }

      dispatch(submitButtonPressed(true));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      let { questionCount: count } = getState();
      if (count < data.equationsData.length) {
        dispatch(thunk.setQuestion());
        dispatch(submitAnswer(false));
        dispatch(questionCount(count + 1));
        dispatch(selectAnswerOption(""));
        dispatch(wrongAnswer(false));
        dispatch(setResetFocusState(true));
        dispatch(setProtons({}));
        dispatch(setElectrons({}));
        dispatch(setMassNumber({}));
        dispatch(setElementName({}));
      } else {
        dispatch(clearCorrectOptions());
        dispatch(clearIncorrectOptions());
        dispatch(togglePopup(7));
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
        EventManager.broadcast("COMPLETION_SCREEN");
      }
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(updateQuestionsData([...data.equationsData]));
      dispatch(thunk.setQuestion());
      dispatch(questionCount(1));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      dispatch(togglePopup(1));
      dispatch(startSimulation(true));
      dispatch(updateResetBtnState(false));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(setProtons({}));
      dispatch(setElectrons({}));
      dispatch(setMassNumber({}));
      dispatch(setElementName({}));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 600);
      TincanManager.resetTincanData();
    };
  },
};
