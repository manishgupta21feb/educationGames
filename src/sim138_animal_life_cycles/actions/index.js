import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

export const RESET = "RESET";
export const SHOW_DIALOG = "SHOW_DIALOG";
export const SET_QUESTION = "SET_QUESTION";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SET_REACTANT1 = "SET_REACTANT1";
export const SET_REACTANT2 = "SET_REACTANT2";
export const SET_RESULTANT = "SET_RESULTANT";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const SIMULATION_START = "SIMULATION_START";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SELECT_CORRECT_ANSWER = "SELECT_CORRECT_ANSWER";

export const common = { ...actions };
const {
  togglePopup,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = common;

export const reset = () => ({ type: RESET });
export const updateShowDialog = (val) => ({ val, type: SHOW_DIALOG });
export const setReactant1 = (reactant) => ({ reactant, type: SET_REACTANT1 });
export const setReactant2 = (reactant) => ({ reactant, type: SET_REACTANT2 });
export const selectAnswerOption = (id) => ({ id, type: SELECT_ANSWER_OPTION });
export const setResultant = (resultant) => ({ resultant, type: SET_RESULTANT });

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});
export const simulationStart = (value) => ({
  type: SIMULATION_START,
  value,
});
export const wrongAnswer = (value) => ({
  type: WRONG_ANSWER,
  value,
});
export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});
export const submitAnswer = (val) => ({
  val,
  type: SELECT_CORRECT_ANSWER,
});

export const answerSubmitted = (submitted) => ({
  submitted,
  type: ANSWER_SUBMITTED,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const thunks = {
  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData } = getState();
      const _questionsData = questionsData.map((q) => ({ ...q }));
      const index = Math.floor(Math.random() * _questionsData.length);
      const question = { ..._questionsData.splice(index, 1)[0] };
      // const equation = { ...question.equation };
      // dispatch(setReactant1({ ...equation.reactant1 }));
      // dispatch(setReactant2({ ...equation.reactant2 }));
      // dispatch(setResultant({ ...equation.resultant }));
      dispatch(setQuestion({ ...question }));
      dispatch(updateQuestionsData([..._questionsData]));
    };
  },

  selectAnswerOption: (id) => (dispatch, getState) => {
    dispatch(selectAnswerOption(id));
    const { resetBtnState } = getState();
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
  },

  submitAnswer: () => {
    return (dispatch, getState) => {
      // verify if answer is correct/incorrect and accordingly dispatch the respective actions
      const {
        selectedQuestion,
        selectAnswerOption,
        questionCount: count,
      } = getState();

      const correctAnswer = selectedQuestion.answer;
      console.log(
        "selectAnswerOption",
        selectAnswerOption,
        ": correctAnswer: ",
        correctAnswer
      );

      let val = false;
      if (correctAnswer == selectAnswerOption) {
        val = true;
        TincanManager.data.percentage = parseInt(
          (count / data.nuclearData.length) * 100
        );
        TincanManager.saveTincanData();
      }
      // setTimeout(() => {
      //   if (val) {
      //     EventManager.broadcast("POSITIVE_FEEDBACK");
      //   } else {
      //     EventManager.broadcast("NEGATIVE_FEEDBACK");
      //   }
      // }, 500);
      dispatch(answerSubmitted(true));
      dispatch(submitAnswer(val));
      dispatch(toggleToastMessage(true));
    };
  },

  selectNextQuestion: () => {
    return (dispatch, getState) => {
      dispatch(selectAnswerOption(""));
      dispatch(answerSubmitted(false));
      dispatch(submitAnswer(false));
      dispatch(thunks.setQuestion());
    };
  },

  onWrongAnswer: (value) => {
    return (dispatch) => {
      dispatch(wrongAnswer(value));
      dispatch(selectAnswerOption(""));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      let { questionCount: count } = getState();
      if (count < data.nuclearData.length) {
        dispatch(questionCount(count + 1));
        dispatch(setResetFocusState(true));
        dispatch(thunks.setQuestion());
        EventManager.broadcast("STOP_ALL");
        setTimeout(() => {
          EventManager.broadcast("SECONDARY_CLICK");
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
      } else {
        dispatch(updateQuestionsData(data.nuclearData.map((n) => ({ ...n }))));
        dispatch(togglePopup(3));
        EventManager.broadcast("STOP_ALL");
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 100);
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      dispatch(answerSubmitted(false));
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(updateQuestionsData(data.nuclearData.map((n) => ({ ...n }))));
      dispatch(thunks.setQuestion());
      dispatch(questionCount(1));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(""));
      dispatch(togglePopup(1));
      dispatch(simulationStart(true));
      TincanManager.resetTincanData();
    };
  },
};
