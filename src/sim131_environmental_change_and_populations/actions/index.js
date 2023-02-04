import * as actions from "../../app/actions";
import data from '../data';

export const Is_INTERACTIVE = "Is_INTERACTIVE";
export const SELECT_OPTION = "SELECT_OPTION";
export const ANSWER_ATTEMPTED = "ANSWER_ATTEMPTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const QUESTION_COUNT = "QUESTION_COUNT";
export const QUESTION_NO = "QUESTION_NO";
export const SET_NEXT_BUTTON_CLICK = "SET_NEXT_BUTTON_CLICK";

const {
  toggleToastMessage,
  togglePopup,
  updateResetBtnState
} = actions;

export const isInteractive = (status) => ({
  type: Is_INTERACTIVE,
  status
});

export const selectOption = (option) => ({
  type: SELECT_OPTION,
  option
});

export const answerAttempt = (attempted) => ({
  type: ANSWER_ATTEMPTED,
  attempted
});

export const correctAnswer = (correct) => ({
  type: CORRECT_ANSWER,
  correct
});

export const setQuestionCount = (count) => ({
  type: QUESTION_COUNT,
  count
});

export const setQuestionNo = (no) => ({
  type: QUESTION_NO,
  no
});

export const setNextButtonClick = (status) => ({
  type: SET_NEXT_BUTTON_CLICK,
  status
});

export const thunks = {

  submitAnswer: () => {
    return (dispatch, state) => {

      const {
        selectedOption,
        questionNo
      } = state();

      dispatch(toggleToastMessage(true));
      dispatch(answerAttempt(true));

      const checkAnswer = data.mcqData[questionNo].answer == selectedOption;

      if (checkAnswer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(true));
        TincanManager.data.percentage = ((questionNo + 1) / data.mcqData.length) * 80 + 20;
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
        questionNo,
        questionCount,
        nextButtonClickStatus
      } = state();

      if (nextButtonClickStatus) {
        dispatch(correctAnswer(false));
        dispatch(answerAttempt(false));
        dispatch(selectOption(""));
        dispatch(toggleToastMessage(false));
        if (questionNo == 3) {
          EventManager.broadcast("STOP_ALL");
          EventManager.broadcast("COMPLETION_SCREEN");
          dispatch(togglePopup(7));
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        } else {
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
          if (questionCount == 2) {
            dispatch(setQuestionCount(1));
          } else {
            dispatch(setQuestionCount(questionCount + 1));
          }
          dispatch(setQuestionNo(questionNo + 1));
        }
      } else {
        TincanManager.data.percentage = 20;
        TincanManager.saveTincanData();
      }
      if (isInteractive) {
        dispatch(updateResetBtnState(false));
      }
    }
  },

  resetActivity: () => {
    return (dispatch, state) => {
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      dispatch(selectOption(""));
      dispatch(correctAnswer(false));
      dispatch(answerAttempt(false));
      dispatch(toggleToastMessage(false));
      dispatch(isInteractive(false));
      dispatch(setQuestionCount(1));
      dispatch(setQuestionNo(0));
      dispatch(setNextButtonClick(false));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      const { currentPopup } = state();
      if (currentPopup.indexOf(8) >= 0) {
        dispatch(togglePopup(8));
      }
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
    }
  },

}

export const common = { ...actions };
