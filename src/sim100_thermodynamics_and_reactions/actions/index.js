import data from "../data";
import * as actions from "../../app/actions";

const {
  ariaLiveText,
  updateResetBtnState,
  setResetFocusState,
  toggleToastMessage,
  togglePopup,
} = actions;

export const SET_WRONG_ANSWER_VALUE = "SET_WRONG_ANSWER_VALUE";
export const RESET_SET_WRONG_ANSWER_VALUE = "RESET_SET_WRONG_ANSWER_VALUE";
export const RESET_SET_ANSWER_VALUE = "RESET_SET_ANSWER_VALUE";
export const SET_QUESTION = "SET_QUESTION";
export const SET_ANSWERED = "SET_ANSWERED";
export const SET_ELECTRONS = "SET_ELECTRONS";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const SET_ELEMENT_NAME = "SET_ELEMENT_NAME";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SET_ANSWER_VALUE = "SET_ANSWER_VALUE";
export const SET_REACTION_VALUE = "SET_REACTION_VALUE";
export const RESET_QUESTIONS_DATA = "RESET_QUESTIONS_DATA";
export const common = { ...actions };
export const answered = (item) => ({ item, type: SET_ANSWERED });
export const setElectrons = (item) => ({ item, type: SET_ELECTRONS });
export const setElementName = (item) => ({ item, type: SET_ELEMENT_NAME });
export const questionCount = (count) => ({ count, type: QUESTIONS_COUNT });
//export const setQuestion = (question) => ({ question, type: SET_QUESTION });
export const updateQuestionsData = (data) => ({ data, type: QUESTIONS_DATA });
export const selectAnswerOption = (id) => ({ id, type: SELECT_ANSWER_OPTION });

export const resetQuestion = () => {
  return {
    type: RESET_QUESTIONS_DATA,
  };
};

export const setWrongAnswerValue = (params) => {
  return {
    params,
    type: SET_WRONG_ANSWER_VALUE,
  };
};

export const setResetWrongAnswerValue = () => {
  return {
    type: RESET_SET_WRONG_ANSWER_VALUE,
  };
};

export const setReactionValue = (params) => {
  return {
    params,
    type: SET_REACTION_VALUE,
  };
};

export const setAnswerValue = (params) => {
  return {
    params,
    type: SET_ANSWER_VALUE,
  };
};

export const setResetAnswerValue = () => {
  return {
    type: RESET_SET_ANSWER_VALUE,
  };
};

export const thunk = {
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
        getAnswerValue,
        questionsData,
      } = getState();

      let correctAnswer = questionsData.find((x) => x.isActive == true).answer;

      let correctCount = 0;

      for (const property in correctAnswer) {
        if (correctAnswer[property] == getAnswerValue[property]) {
          correctCount = correctCount + 1;
          dispatch(setWrongAnswerValue({ type: property, data: false }));
        } else {
          dispatch(setWrongAnswerValue({ type: property, data: true }));
        }
      }

      if (correctCount == 4) {
        dispatch(setAnswerValue({ type: "click", data: true }));
        dispatch(setResetWrongAnswerValue());
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        TincanManager.data.percentage = parseInt(
          (count / data.equationsData.length) * 100
        );
        TincanManager.saveTincanData();
      } else {
        toggleToastMessage(true);
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
      }
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      EventManager.broadcast("STOP_ALL");
      let { questionCount: count, questionsData } = getState();

      if (count < data.equationsData.length) {
        dispatch(questionCount(count + 1));
        dispatch(selectAnswerOption(""));
        dispatch(setResetFocusState(true));
        dispatch(setElectrons({}));
        dispatch(setElementName({}));

        let result = questionsData.map((val) => {
          if (val.isActive == true) {
            val.isVisited = true;
            val.isActive = false;
            return val;
          } else {
            return val;
          }
        });
        dispatch(updateQuestionsData(result));
      } else {
        dispatch(togglePopup(7));
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
        EventManager.broadcast("COMPLETION_SCREEN");
      }
      dispatch(setResetAnswerValue());
      dispatch(setResetWrongAnswerValue());
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(updateQuestionsData([...data.equationsData]));
      //dispatch(thunk.setQuestion());
      dispatch(questionCount(1));
      dispatch(selectAnswerOption(""));
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(false));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(setElectrons({}));
      dispatch(setElementName({}));
      dispatch(setResetAnswerValue());
      dispatch(setResetWrongAnswerValue());
      dispatch(resetQuestion());
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 600);
      TincanManager.resetTincanData();
    };
  },
};
