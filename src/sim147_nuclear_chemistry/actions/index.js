import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

const { togglePopup, ariaLiveText, setResetFocusState, updateResetBtnState } =
  actions;

export const common = { ...actions };
export const SET_QUESTION = "SET_QUESTION";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const SET_START_AGAIN = "SET_START_AGAIN";
export const SET_AUDIO_STOPPED = "SET_AUDIO_STOPPED";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";

export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

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

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});

export const setAudioStopped = (stopped) => ({
  stopped,
  type: SET_AUDIO_STOPPED,
});

export const thunks = {
  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData, questionCount } = getState();
      dispatch(updateQuestionsData(questionsData));
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
        selectedAnswerOption,
        questionsData,
        questionCount: count,
      } = getState();
      if (selectedAnswerOption == questionsData[count - 1].answer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(submitAnswer(true));
        if (count < data.equationsData.length) {
          TincanManager.data.percentage = parseInt(
            (count / data.equationsData.length) * 100
          );
          TincanManager.saveTincanData();
        } else {
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        }
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
        dispatch(questionCount(count + 1));
        dispatch(thunks.setQuestion());
        dispatch(submitAnswer(false));
        dispatch(selectAnswerOption(""));
        dispatch(wrongAnswer(false));
        dispatch(setResetFocusState(true));
        EventManager.broadcast("SECONDARY_CLICK");
        EventManager.broadcast("STOP_ALL");
      } else {
        dispatch(togglePopup(7));
        EventManager.broadcast("STOP_ALL");
        EventManager.broadcast("COMPLETION_SCREEN");
      }
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(
        updateQuestionsData(helper.shuffleArray([...data.equationsData]))
      );
      dispatch(thunks.setQuestion());
      dispatch(questionCount(1));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      setTimeout(() => {
        dispatch(togglePopup(1));
      }, 150);
      dispatch(updateResetBtnState(true));
      dispatch(ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
      TincanManager.resetTincanData();
    };
  },
};
