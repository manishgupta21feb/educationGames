import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

export const PAUSE_VIDEO = "PAUSE_VIDEO";
export const SET_QUESTION = "SET_QUESTION";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const ACTIVITY_FINISH = "ACTIVITY_FINISH";
export const SET_START_AGAIN = "SET_START_AGAIN";
export const START_SIMULATION = "START_SIMULATION";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";

export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const startSimulation = (value) => ({
  type: START_SIMULATION,
  value,
});

export const activityFinish = (value) => ({
  type: ACTIVITY_FINISH,
  value,
});
export const pauseVideo = (value) => ({
  type: PAUSE_VIDEO,
  value,
});

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});

export const common = { ...actions };

const {
  togglePopup,
  ariaLiveText,
  setResetFocusState,
  toggleToastMessage,
  updateResetBtnState,
} = common;

export const thunks = {
  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData } = getState();
      const _questionsData = questionsData.map((q) => ({ ...q }));
      const index = Math.floor(Math.random() * _questionsData.length);
      const question = { ..._questionsData.splice(index, 1)[0] };
      dispatch(setQuestion({ ...question }));
      dispatch(updateQuestionsData([..._questionsData]));
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
        selectedQuestion,
        selectedAnswerOption,
        questionCount: count,
      } = getState();
      if (selectedAnswerOption == selectedQuestion.id) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        TincanManager.data.percentage = parseInt(
          (count / data.equationsData.length) * 100
        );
        TincanManager.saveTincanData();
        dispatch(submitAnswer(true));
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
        dispatch(thunks.setQuestion());
        dispatch(submitAnswer(false));
        dispatch(questionCount(count + 1));
        dispatch(selectAnswerOption(""));
        dispatch(wrongAnswer(false));
        dispatch(setResetFocusState(true));
      } else {
        dispatch(pauseVideo(true));
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
      dispatch(thunks.setQuestion());
      dispatch(questionCount(1));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      dispatch(togglePopup(1));
      dispatch(startSimulation(true));
      dispatch(pauseVideo(false));
      dispatch(updateResetBtnState(true));
      value && dispatch(togglePopup(3));
      dispatch(ariaLiveText(data.resetConfirmationText));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 600);
      TincanManager.resetTincanData();
      // TincanManager.saveTincanData();
    };
  },
};
