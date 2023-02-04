import * as actions from "../../app/actions";
import data from "../data";
import { shuffleArr } from "../helper.js";
export const VIDEO_END = "VIDEO_END";
export const SELECT_OPTION = "SELECT_OPTION";
export const CHECKED_OPTION = "CHECKED_OPTION";
export const IS_ANSWER_CORRECT = "IS_ANSWER_CORRECT";
export const QUESTION_NUMBER = "QUESTION_NUMBER";
export const SET_RESET_BUTTON_STATE = "SET_RESET_BUTTON_STATE";
export const RESET_VISITED_NODE = "RESET_VISITED_NODE";
export const UPDATE_VISITED_NODE = "UPDATE_VISITED_NODE";
export const SECOND_SCREEN = "SECOND_SCREEN";
export const SET_QUESTION = "SET_QUESTION";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const GLOBAL_SELECTED_TAB = "GLOBAL_SELECTED_TAB";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const RESET_IS_VISTED_BOTH = "RESET_IS_VISTED_BOTH";
export const SCREEN_NUMBER = "SCREEN_NUMBER";
export const IS_OPTION_SELECTED = "IS_OPTION_SELECTED";
export const UPDATED_QUES_DATA = "UPDATED_QUES_DATA";
export const common = { ...actions };

export const IS_VISTED_BOTH = "IS_VISTED_BOTH";

export const setIsOptionSelected = (value) => {
  return {
    type: IS_OPTION_SELECTED,
    value,
  };
};

export const setIsVisitedBoth = (value) => {
  return {
    type: IS_VISTED_BOTH,
    value,
  };
};

export const setScreenNumber = (value) => {
  return {
    type: SCREEN_NUMBER,
    value,
  };
};

export const setVideoEnd = (value) => {
  return {
    type: VIDEO_END,
    value,
  };
};

export const setSelectedOption = (value) => {
  return {
    type: SELECT_OPTION,
    value,
  };
};

export const setResetIsVisitedBoth = (value) => {
  return {
    type: RESET_IS_VISTED_BOTH,
  };
};

export const setRadioBtnChecked = (value) => {
  return {
    type: CHECKED_OPTION,
    value,
  };
};

export const setIsAnswerCorrect = (value) => {
  return {
    type: IS_ANSWER_CORRECT,
    value,
  };
};

export const setQuestionNumber = (value) => {
  return {
    type: QUESTION_NUMBER,
    value,
  };
};

export const updateVisitedNodes = (node) => ({
  node,
  type: UPDATE_VISITED_NODE,
});

export const resetVisitedNodes = () => ({
  type: RESET_VISITED_NODE,
});

export const secondScreen = (value) => {
  return {
    value,
    type: SECOND_SCREEN,
  };
};

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});

export const setGlobalTabs = (items) => ({
  items,
  type: GLOBAL_SELECTED_TAB,
});

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});

export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const updatedQuestionData = (data) => ({
  type: UPDATED_QUES_DATA,
  data,
});

export const thunk = {
  checkMcqRequiredOrNot: (item) => {
    return (dispatch, getState) => {
      let { getIsVisitedBoth } = getState();

      if (getIsVisitedBoth.length == 1) {
      } else {
        dispatch(
          setScreenNumber({
            screen: 1,
            btn: 0,
          })
        );
        dispatch(setIsVisitedBoth(item));
      }
    };
  },
  submitAnswerHandler: () => {
    return (dispatch, getState) => {
      const { getSelectedOption, getQuestionNumber } = getState();

      const index = getQuestionNumber;
      const answer = data.view[0].questions[index].answer;
      const submitedAns = getSelectedOption;

      if (answer === submitedAns) {
        dispatch(setIsAnswerCorrect(true));
        dispatch(setRadioBtnChecked(true));
        dispatch(setIsOptionSelected(true));
        EventManager.broadcast("POSITIVE_FEEDBACK");
      } else {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }

      dispatch(common.toggleToastMessage(true));
    };
  },

  resetFunctions: () => {
    return (dispatch) => {
      dispatch(setVideoEnd(false));
      dispatch(setSelectedOption(""));
      dispatch(setRadioBtnChecked(false));
      dispatch(setQuestionNumber(0));
    };
  },

  continueHandler: () => {
    return (dispatch, getState) => {
      const { getQuestionNumber, getScreenNumber } = getState();
      const totalQuestions = data.view[0].questions.length - 1;

      if (getQuestionNumber == totalQuestions) {
        dispatch(thunk.resetFunctions());
      } else {
        dispatch(setQuestionNumber(getQuestionNumber + 1));
      }

      EventManager.broadcast("STOP_ALL");
      setTimeout(() => {
        EventManager.broadcast("SECONDARY_CLICK");
        EventManager.broadcast("COMPLETION_SCREEN");
      }, 150);

      dispatch(setIsAnswerCorrect(false));
      dispatch(setRadioBtnChecked(false));
    };
  },

  viewHandler: (id) => {
    return (dispatch, getState) => {
      const { getViewPlayed, visitedNodes } = getState();

      if (id && visitedNodes.indexOf(id) == -1) {
        dispatch(updateVisitedNodes(id));
      }
      if (getViewPlayed.length == 2) {
        TincanManager.data.percentage = 100;
        TincanManager.data.completed = true;
        TincanManager.saveTincanData();
        dispatch(updateVisitedNodes(id));
      }
    };
  },

  onNextBtnClickOfMCQ: (value) => {
    return (dispatch, getState) => {
      let { getScreenNumber } = getState();
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 100);

      dispatch(secondScreen(true));
      dispatch(common.togglePopup(4));
      dispatch(common.toggleToastMessage(false));
      let { questionsData: question } = getState();
      dispatch(
        setScreenNumber({
          screen: 3,
          btn: question.filter((val, index) => index == 0)[0].id,
        })
      );
      dispatch(
        updatedQuestionData(
          shuffleArr(
            question,
            question.filter((val, index) => index == 0)[0].id
          )
        )
      );
    };
  },

  submitAnswer: (ans) => {
    return (dispatch, getState) => {
      const {
        getSelectedOption,
        getQuestionNumber,
        questionCount: count,
        questionsData,
      } = getState();
      const index = getQuestionNumber;
      const answer = questionsData.filter((val) => val.isActive == true)[0]
        .answer;
      const submitedAns = getSelectedOption;

      if (answer == submitedAns) {
        dispatch(setIsAnswerCorrect(true));
        dispatch(setRadioBtnChecked(true));
        dispatch(setQuestionNumber(+index + 1));
        EventManager.broadcast("POSITIVE_FEEDBACK");
        dispatch(setIsOptionSelected(true));
      } else {
        dispatch(setIsAnswerCorrect(false));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
      dispatch(common.toggleToastMessage(true));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      let { questionCount: count } = getState();
      if (count < data.questionsData.length) {
        dispatch(submitAnswer(false));
        dispatch(questionCount(count + 1));
        dispatch(selectAnswerOption(""));
        dispatch(setRadioBtnChecked(false));
        dispatch(setIsAnswerCorrect(false));
        dispatch(wrongAnswer(false));
        dispatch(common.setResetFocusState(true));
      } else {
        dispatch(common.togglePopup(5));
        EventManager.broadcast("COMPLETION_SCREEN");
      }
      if (count == 2) {
        dispatch(setIsAnswerCorrect(true));
      }
      dispatch(setSelectedOption(""));

      let { questionsData: question } = getState();

      let arrIndex = question.findIndex((val, index) => val.isActive == true);
      if (arrIndex < 3) {
        dispatch(
          setScreenNumber({
            screen: 3,
            btn: question.filter((x, index) => index == arrIndex + 1)[0].id,
          })
        );
        dispatch(
          updatedQuestionData(
            shuffleArr(
              question,
              question.filter((x, index) => index == arrIndex + 1)[0].id
            )
          )
        );
      }
    };
  },

  resetActivity: () => {
    return (dispatch) => {
      dispatch(thunk.resetFunctions());
      dispatch(setIsAnswerCorrect(false));
    };
  },

  resetAllActivity: () => {
    return (dispatch, getState) => {
      dispatch(setScreenNumber({ screen: 1, btn: 0 }));
      dispatch(common.togglePopup(1));
      dispatch(setResetIsVisitedBoth());
      dispatch(questionCount(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(setIsOptionSelected(true));

      dispatch(
        updatedQuestionData(shuffleArr([...data.questionsData], "reset"))
      );
    };
  },
};
