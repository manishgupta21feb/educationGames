import data from "../data";
import { helper } from "../helper";
import { cloneDeep } from "lodash";
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
export const SUBMIT_ENABLER = "SUBMIT_ENABLER";
export const SELECTED_QUESTION_STATE = "SELECTED_QUESTION_STATE";

import { isAndroid } from "react-device-detect";

export const common = { ...actions };
const { updateResetBtnState } = common;

export const selectAnswerOption = (id) => ({ id, type: SELECT_ANSWER_OPTION });

export const toggleOption = (id, loc) => ({ id, loc, type: TOGGLE_OPTION });
export const resetOptions = (upState) => ({ type: RESET_OPTION, upState });

export const setSubmitEnabler = (state) => ({
  type: SUBMIT_ENABLER,
  state,
});
export const setAnswerState = (FeedbackState) => ({
  type: SELECTED_QUESTION_STATE,
  FeedbackState,
});

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
      const { getQuestionsData } = getState();
      const _questionsData = getQuestionsData.map((q) => ({ ...q }));
      const index = Math.floor(Math.random() * _questionsData.length);
      const question = { ..._questionsData.splice(index, 1)[0] };
      dispatch(setQuestion({ ...question }));
      dispatch(updateQuestionsData([..._questionsData]));
    };
  },

  toggleOption: (id, loc) => (dispatch, getState) => {
    dispatch(toggleOption(id, loc));
    const { resetBtnState, showToastMessage, selectedOptions } = getState();
    const filterEnable = selectedOptions.every((element) => element.length > 0);
    dispatch(setSubmitEnabler(!filterEnable));
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
      // dispatch(thunks.setQuestion());
    };
  },

  onWrongAnswer: (value) => {
    return (dispatch) => {
      dispatch(selectAnswerOption(""));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      const count = getState().getQuestionCount;
      const dataInfo = data.equationsData;
      if (count != dataInfo.length - 1) {
        dispatch(questionCount(count + 1));
        dispatch(resetOptions([[], [], []]));
        dispatch(setAnswerState([false, false, false]));
        dispatch(isNextButtonEnable(true));
        EventManager.broadcast("STOP_ALL");

        let percentage = ((count + 1) / dataInfo.length) * 100;
        TincanManager.data.percentage = Math.round(percentage);
        TincanManager.saveTincanData();
      } else {
        TincanManager.data.percentage = 100;
        TincanManager.data.completed = true;
        TincanManager.saveTincanData();

        dispatch(common.togglePopup(7));
        EventManager.broadcast("COMPLETION_SCREEN");
      }
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(
        updateQuestionsData(helper.shuffle(cloneDeep(data.equationsData)))
      );
      dispatch(questionCount(0));
      dispatch(selectAnswerOption(""));
      dispatch(resetQuestions());
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(setSubmitEnabler(true));
      dispatch(resetOptions([[], [], []]));
      dispatch(setAnswerState([false, false, false]));
      dispatch(isNextButtonEnable(true));

      /* TinCan Reset*/
      TincanManager.data.percentage = 0;
      TincanManager.data.completed = false;
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },

  //#region new
  onClickSubmit: (value) => {
    return (dispatch, getState) => {
      let {
        selectedOptions,
        getQuestionCount: count,
        getQuestionsData,
        getAnswerState,
      } = getState();

      let correctArray = getQuestionsData[count].answer;
      let _getAnswerState = [...getAnswerState];

      //setAnswerState

      correctArray.forEach((element, index) => {
        _getAnswerState[index] = element.every((_element, _index) => {
          if (element.length != selectedOptions[index].length) return false;
          return selectedOptions[index].includes(_element);
        });
      });

      let result = _getAnswerState.every((element) => element);
      dispatch(setAnswerState(_getAnswerState));
      if (result) {
        dispatch(common.toggleToastMessage(true));
        //success
        dispatch(updateToastMsg("correct"));
        dispatch(isNextButtonEnable(false));
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
      } else {
        //fail
        dispatch(common.toggleToastMessage(true));
        dispatch(updateToastMsg("incorrect"));
        _getAnswerState.forEach((element, index) => {
          if (!element) selectedOptions[index] = [];
        });
        dispatch(resetOptions(selectedOptions));
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500); //wrong toast msg
      }
      dispatch(setSubmitEnabler(true));
    };
  },

  ariaLivePointer: (_data) => {
    return (dispatch) => {
      if (isAndroid) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(_data));
        }, 200);
      } else {
        dispatch(common.thunks.ariaLiveAssertive(_data));
      }
    };
  },
};
