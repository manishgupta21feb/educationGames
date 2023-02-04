import data from "../data";
import * as actions from "../../app/actions";
const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const RESET = "RESET";
export const START_SIM = "START_SIM";
export const SHOW_DIALOG = "SHOW_DIALOG";
export const SELECT_INDEX = "SELECT_INDEX";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const TOGGLE_QUESTION = "TOGGLE_QUESTION";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const SET_AUDIO_STOPPED = "SET_AUDIO_STOPPED";
export const SHOW_TOAST_MESSAGE = "SHOW_TOAST_MESSAGE";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SELECT_CORRECT_ANSWER = "SELECT_CORRECT_ANSWER";

export const common = { ...actions };
export const reset = () => ({ type: RESET });
export const updateShowDialog = (val) => ({ val, type: SHOW_DIALOG });
export const startSimulation = (value) => ({ value, type: START_SIM });
export const questionsData = (data) => ({ data, type: QUESTIONS_DATA });
export const selectIndex = (index = 0) => ({ index, type: SELECT_INDEX });
export const toggleQuestion = (show) => ({ show, type: TOGGLE_QUESTION });
export const questionCount = (count=1) => ({ count, type: QUESTIONS_COUNT });
export const submitAnswer = (val) => ({ val, type: SELECT_CORRECT_ANSWER });
export const selectAnswerOption = (id) => ({ id, type: SELECT_ANSWER_OPTION });
export const selectQuestion = (value = 0) => ({ value, type: SELECT_QUESTION });

export const setAudioStopped = (stopped) => ({
  stopped,
  type: SET_AUDIO_STOPPED,
});

export const answerSubmitted = (submitted) => ({
  submitted,
  type: ANSWER_SUBMITTED,
});

export const thunks = {
  submitAnswer: () => {
    return (dispatch, getState) => {
      const { selectAnswerOption, selectedQuestion,questionCount: mcqCount,
      } = getState();
      const correctAnswer = selectedQuestion.answer;
      let val = false;
      if (correctAnswer == selectAnswerOption) {
        val = true;
      }
      setTimeout(() => {
        if (val) {
          EventManager.broadcast("POSITIVE_FEEDBACK");
          TincanManager.data.percentage = parseInt(
            (mcqCount / data.questionsData.length) * 100
          );
          TincanManager.saveTincanData();
        } else {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }
      }, 500);
      dispatch(answerSubmitted(true));
      dispatch(submitAnswer(val));
      dispatch(toggleToastMessage(true));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      let { selectQuestionIndex, toggleQuestion: isToggle ,questionCount:mcqCount} = getState();
      if (selectQuestionIndex < 2) {
        dispatch(selectQuestion(selectQuestionIndex + 1));
        dispatch(toggleQuestion(!isToggle));
        dispatch(selectIndex(selectQuestionIndex + 1));
        dispatch(questionCount(mcqCount + 1));
        dispatch(selectAnswerOption(""));
        dispatch(submitAnswer(false));
        dispatch(answerSubmitted(false));
        dispatch(setResetFocusState(true));
         EventManager.broadcast("STOP_ALL");
         EventManager.broadcast("SECONDARY_CLICK");
      } else {
        EventManager.broadcast("STOP_ALL");
        EventManager.broadcast("COMPLETION_SCREEN");
        dispatch(togglePopup(3));
        dispatch(selectQuestion(selectQuestionIndex));
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
       setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      let { toggleQuestion: isToggle } = getState();
      if (isToggle) {
        dispatch(toggleQuestion(isToggle));
      } else {
        dispatch(toggleQuestion(!isToggle));
      }
      dispatch(questionCount(1));
      dispatch(selectIndex(0));
      dispatch(selectQuestion(0));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(""));
      setTimeout(() => {
        dispatch(common.togglePopup(1));
      }, 150);
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(common.updateResetBtnState(true));
      dispatch(startSimulation(true));
      value && dispatch(togglePopup(3));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },
  setVideoLiveText:()=>{
    return (dispatch,getState)=>{
      const{selectedQuestion}= getState();
      //console.log("selectedQuestion.alt",selectedQuestion.alt)
      dispatch(common.ariaLiveText(selectedQuestion.alt));
      setTimeout(()=>{
        dispatch(common.ariaLiveText(" "));
      },150)
    }
  }
};
