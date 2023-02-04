import * as actions from "../../app/actions";

import data from "../data";

const { togglePopup, ariaLiveText } = actions;

export const common = { ...actions };

export const DEMO_ACTION = "DEMO_ACTION";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const UPDATE_VISITED_NODE = "UPDATE_VISITED_NODE";
export const SET_RESET_BUTTON_STATE = "SET_RESET_BUTTON_STATE";
export const UPDATE_VISITED_SPOTS = "UPDATE_VISITED_SPOTS";
export const SET_VIEW_TYPE = "SET_VIEW_TYPE";
export const ON_CHANGE_SCREEN = "ON_CHANGE_SCREEN";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SET_QUESTION = "SET_QUESTION";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const SELECT_CORRECT_ANSWER = "SELECT_CORRECT_ANSWER";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const DELETE_UPDATE_VISITED_NODE = "DELETE_UPDATE_VISITED_NODE";

export const scaleChange = () => ({ type: DEMO_ACTION });
export const selectHotspot = (id) => ({ id, type: SELECT_HOTSPOT });
export const updateVisitedNodes = (node) => ({
  node,
  type: UPDATE_VISITED_NODE,
});

export const updateVisitedSpots = (node) => ({
  node,
  type: UPDATE_VISITED_SPOTS,
});

export const setViewType = (view) => ({
  view,
  type: SET_VIEW_TYPE,
});

export const onChangeScreen = (val) => ({
  val,
  type: ON_CHANGE_SCREEN,
});

export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});

export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});

export const submitedAnswer = (val) => ({
  val,
  type: SELECT_CORRECT_ANSWER,
});

export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });

export const answerSubmitted = (submitted) => ({
  submitted,
  type: ANSWER_SUBMITTED,
});

export const deleteVisitedNode = (node) => ({
  node,
  type: DELETE_UPDATE_VISITED_NODE,
});

export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export const thunk = {
  activityLoaded: () => {
    return (dispatch) => {
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
  resetActivity: () => {
    return (dispatch) => {
      dispatch(selectHotspot(""));
      dispatch(thunk.setQuestion());
      dispatch(common.updateResetBtnState(true));
      dispatch(questionCount(1));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      dispatch(deleteVisitedNode());
      dispatch(togglePopup(1));
      dispatch(ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 600);

      TincanManager.resetTincanData();
    };
  },
  selectHotspot: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState, visitedNodes, selectedHotspot } = getState();
      let _id = id;
      if (selectedHotspot == id) {
        _id = "";
      }
      dispatch(selectHotspot(_id));
      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
        // dispatch(common.setResetFocusState(true));
      }
      if (id && visitedNodes.indexOf(id) == -1) {
        dispatch(updateVisitedNodes(id));
      }
      const { visitedNodes: vNodes } = getState();
      if (vNodes.length == data.hotspots.length) {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 40;
        TincanManager.saveTincanData();
      }
    };
  },

  setViewType: (view) => {
    return (dispatch, getState) => {
      dispatch(setViewType(view));
    };
  },

  nextButtonClick: () => {
    return (dispatch, getState) => {
      const { viewType } = getState();
      dispatch(togglePopup(4));
    };
  },

  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData } = getState();
      dispatch(updateQuestionsData(helper.shuffleArray(questionsData)));
    };
  },

  selectAnswerOption: (id) => {
    return (dispatch, getState) => {
      dispatch(selectAnswerOption(id));
    };
  },

  submitAnswer: (ans) => {
    return (dispatch, getState) => {
      const {
        selectedQuestion,
        selectedAnswerOption,
        questionsData,
        questionCount: count,
      } = getState();
      console.log("answer",selectedAnswerOption, questionsData  );
      if (selectedAnswerOption == questionsData[count - 1].answerId) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(submitAnswer(true));
        TincanManager.data.percentage = parseInt(
          (count / data.questionsData.length) * 60 + 40
        );
        TincanManager.saveTincanData();
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
      if (count < data.questionsData.length) {
        dispatch(submitAnswer(false));
        dispatch(questionCount(count + 1));
        dispatch(selectAnswerOption(""));
        dispatch(wrongAnswer(false));
        dispatch(common.setResetFocusState(true));
      } else {
        dispatch(togglePopup(5));
        EventManager.broadcast("COMPLETION_SCREEN");
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
    };
  },
};
