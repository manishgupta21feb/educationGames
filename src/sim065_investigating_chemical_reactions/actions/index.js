import data from "../data";
import * as actions from "../../app/actions";
export const SET_QUESTION = "SET_QUESTION";
export const RESET_QUESTIONS = "RESET_QUESTIONS";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SELECT_CORRECT_ANSWER = "SELECT_CORRECT_ANSWER";
export const TOGGLE_OPTION = "TOGGLE_OPTION";
export const RESET_OPTION = "RESET_OPTION";
export const NEXT_BUTTON_ENABLE = "NEXT_BUTTON_ENABLE";

export const common = { ...actions };
const { updateResetBtnState } = common;

export const selectAnswerOption = (id) => ({ id, type: SELECT_ANSWER_OPTION });

export const toggleOption = (id) => ({ id, type: TOGGLE_OPTION });
export const resetOptions = () => ({ type: RESET_OPTION });

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const resetQuestions = () => ({
  type: RESET_QUESTIONS,
});

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});
export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const isNextButtonEnable = (val) => ({
  type: NEXT_BUTTON_ENABLE,
  val,
});

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

  toggleOption: (id) => (dispatch, getState) => {
    dispatch(toggleOption(id));
    const { resetBtnState, showToastMessage } = getState();
    if (showToastMessage) {
      dispatch(common.toggleToastMessage(false));
    }
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
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
      dispatch(selectAnswerOption(""));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      const index = getState().setQuestion;
      const count = getState().questionCount;

      const dataInfo = data.equationsData;

      if (count != dataInfo.length) {
        dispatch(questionCount(count + 1));
        dispatch(thunks.setQuestion());
        dispatch(resetOptions());
        dispatch(isNextButtonEnable(true));
        EventManager.broadcast("STOP_ALL");
      } else {
        dispatch(common.togglePopup(7));
        EventManager.broadcast("COMPLETION_SCREEN");
      }
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(updateQuestionsData([...data.equationsData]));
      dispatch(resetOptions());
      dispatch(questionCount(1));
      dispatch(selectAnswerOption(""));
      dispatch(resetQuestions());
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(thunks.setQuestion());

      dispatch(isNextButtonEnable(true));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },

  //#region new
  onClickSubmit: (value) => {
    return (dispatch, getState) => {
      let {
        selectedOptions,
        selectedQuestion,
        questionCount: count,
      } = getState();

      let correctArray = selectedQuestion.answer;

      let result =
        correctArray.length === selectedOptions.length &&
        selectedOptions.every((value) => correctArray.indexOf(value) != -1);

      if (result) {
        dispatch(common.toggleToastMessage(true));
        //success
        dispatch(updateToastMsg("correct"));

        dispatch(isNextButtonEnable(false));
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);

        TincanManager.data.percentage = parseInt(
          (count / data.equationsData.length) * 100
        );
        TincanManager.saveTincanData();
      } else {
        //fail
        dispatch(common.toggleToastMessage(true));
        dispatch(updateToastMsg("incorrect"));
        dispatch(resetOptions());

        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500); //wrong toast msg
      }
    };
  },
  //#endregion
};
