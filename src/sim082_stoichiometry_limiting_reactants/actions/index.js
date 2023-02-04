import * as actions from "../../app/actions";
import data from "../data";
const {
  toggleToastMessage,
  togglePopup,
  updateResetBtnState
} = actions;

export const SELECT_OPTION = "SELECT_OPTION";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const SET_QUESTION_NO = "SET_QUESTION_NO";
export const SET_QUESTION_COUNT = "SET_QUESTION_COUNT";
export const SET_RANDOM_QUESTION = "SET_RANDOM_QUESTION";

export const selectOption = (option) => ({
  type: SELECT_OPTION,
  option
});
export const answerAttempted = (attempted) => ({
  type: ANSWER_ATTEMPTTED,
  attempted,
});
export const correctAnswer = (correct) => ({
  type: CORRECT_ANSWER,
  correct,
});
export const setQuestionNo = (value) => ({
  type: SET_QUESTION_NO,
  value,
});
export const setQuestionCount = (count) => ({
  type: SET_QUESTION_COUNT,
  count,
});
export const setRandomQuestion = (value) => ({
  type: SET_RANDOM_QUESTION,
  value
});

export const thunks = {

  generateQuestion: () => {
    return (dispatch, state) => {

      const { questionCount } = state();
      const array = [0, 1, 2, 3, 4, 5];

      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }

      dispatch(setRandomQuestion(array));
      dispatch(setQuestionNo(array[questionCount - 1]));

    }
  },

  submitAnswer: () => {
    return (dispatch, state) => {
      const {
        selectedOption,
        questionNo,
        questionCount
      } = state();

      dispatch(toggleToastMessage(true));
      dispatch(answerAttempted(true));

      const checkAnswer = data.mcqData[questionNo].answer == selectedOption;

      if (checkAnswer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(true));
        TincanManager.data.percentage = (questionCount / data.mcqData.length) * 100;
        TincanManager.saveTincanData();
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(false));
      }
    }
  },

  handleNextButtonClick: () => {
    return (dispatch, state) => {

      const {
        questionCount,
        randomQuestion
      } = state();

      dispatch(correctAnswer(false));
      dispatch(answerAttempted(false));
      dispatch(selectOption(""));
      dispatch(toggleToastMessage(false));

      if (questionCount == 6) {
        dispatch(togglePopup(7));
        EventManager.broadcast("STOP_ALL");
        EventManager.broadcast("COMPLETION_SCREEN");
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      } else {
        dispatch(setQuestionCount(questionCount + 1));
        dispatch(setQuestionNo(randomQuestion[questionCount]));
        EventManager.broadcast("STOP_ALL");
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
      }
    }
  },

  resetActivity: () => {
    return (dispatch, state) => {
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      dispatch(selectOption(""));
      dispatch(correctAnswer(false));
      dispatch(answerAttempted(false));
      dispatch(toggleToastMessage(false));
      dispatch(setQuestionCount(1));
      dispatch(thunks.generateQuestion());
      dispatch(toggleToastMessage(false));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      const { currentPopup } = state();
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      if (currentPopup.indexOf(8) >= 0) {
        dispatch(togglePopup(8));
      }
    }
  }

}

export const common = { ...actions };
