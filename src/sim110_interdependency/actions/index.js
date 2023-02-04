import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

import data from "../data";
export const common = { ...actions };
const { togglePopup, ariaLiveText, toggleToastMessage } = actions;

export const TOAST_MESSAGE = "TOAST_MESSAGE";

export const SET_QUESTION = "SET_QUESTION";

export const SUBMIT_ANSWER_MCQ = "SUBMIT_ANSWER_MCQ";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const MCQ_QUESTIONS_DATA = "MCQ_QUESTIONS_DATA,";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";

export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";

export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SET_STATIC = "SET_STATIC";

export const LEVEL_ONE = "LEVEL_ONE";

export const SET_SUBMIT_BUTTON_DISABLED = "SET_SUBMIT_BUTTON_DISABLED";

export const VIEW_SCREEN = "VIEW_SCREEN";
export const SUB_SCREEN = "SUB_SCREEN";
export const VIEW_FRAME = "VIEW_FRAME";
export const BUTTON_VISITED = "BUTTON_VISITED";
export const WRONG_ANSWER = "WRONG_ANSWER";

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});

export const setViewFrame = (val) => {
  return {
    type: VIEW_FRAME,
    val,
  };
};

export const setVisitedBtn = (value) => {
  return {
    type: BUTTON_VISITED,
    value,
  };
};

export const setSubScreen = (value) => {
  return {
    type: SUB_SCREEN,
    value,
  };
};

export const setviewScreen = (value) => {
  return {
    type: VIEW_SCREEN,
    value,
  };
};

export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});

export const setSubmitBtnDisabled = (val) => ({
  type: SET_SUBMIT_BUTTON_DISABLED,
  val,
});

export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const submitAnswerMcq = (answer) => ({
  type: SUBMIT_ANSWER_MCQ,
  answer,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const updateMcqQuestionsData = (data) => ({
  type: MCQ_QUESTIONS_DATA,
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

export const setStatic = (staticState) => {
  return {
    type: SET_STATIC,
    staticState,
  };
};

export const levelOneCompleteAction = (value) => {
  return {
    type: LEVEL_ONE,
    value,
  };
};

export const thunks = {
  activityLoaded: () => {
    return (dispatch) => {
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },

  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData, questionCount } = getState();

      const _questionsData = questionsData.map((q) => ({ ...q }));

      const question = _questionsData.filter((ques) => {
        return questionCount == ques.srNo;
      });

      dispatch(setQuestion(...question));
    };
  },

  setMCQQuestion: () => {
    return (dispatch, getState) => {
      const { mcqQuestionsData, questionCount } = getState();

      const _questionsData = mcqQuestionsData.map((q) => ({ ...q }));
      const index = Math.floor(Math.random() * _questionsData.length);
      const question = { ..._questionsData.splice(index, 1)[0] };

      dispatch(updateMcqQuestionsData(_questionsData));
      dispatch(setQuestion({ ...question }));
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(setViewFrame(""));
      TincanManager.resetTincanData();
      dispatch(common.togglePopup(1));
      dispatch(wrongAnswer(false));
      dispatch(common.toggleToastMessage(false));
      dispatch(submitAnswerMcq(false));
      dispatch(selectAnswerOption(""));
      dispatch(questionCount(1));
      dispatch(thunks.setQuestion());
      dispatch(setSubScreen(true));
      dispatch(setVisitedBtn(""));
      dispatch(common.updateResetBtnState(true));
      dispatch(updateMcqQuestionsData([...data.mcqQuestions]));
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }

      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },

  submitAnswerMcq: (answer) => {
    return (dispatch, getState) => {
      const {
        selectedQuestion,
        selectedAnswerOption,
        questionsData,
        questionCount,
      } = getState();

      if (selectedAnswerOption == selectedQuestion.answer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);

        TincanManager.data.percentage = parseInt(
          (questionCount / data.mcqQuestions.length) * 50 + 50
        );
        TincanManager.saveTincanData();
        dispatch(toggleToastMessage(true));
        dispatch(setSubmitBtnDisabled(true));
        dispatch(wrongAnswer(false));
        dispatch(submitAnswerMcq(true));
        dispatch(common.toggleToastMessage(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(common.toggleToastMessage(true));
        dispatch(wrongAnswer(true));
        dispatch(setSubmitBtnDisabled(false));
      }
    };
  },

  handleHotClick: (id) => {
    return (dispatch, getState) => {
      const { selectedQuestion } = getState();

      if (id == selectedQuestion.answer) {
        dispatch(setViewFrame(id));
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);

        dispatch(setVisitedBtn(id));
        dispatch(common.setResetFocusState(true));

        dispatch(common.toggleToastMessage(true));
        dispatch(submitAnswerMcq(true));
        dispatch(wrongAnswer(false));
        const { visitedHotspotBtn } = getState();
        TincanManager.data.percentage = parseInt(
          (visitedHotspotBtn.length / data.screenOneQues.length) * 50
        );

        TincanManager.saveTincanData();
      } else {
        dispatch(setViewFrame(""));
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);

        dispatch(common.toggleToastMessage(true));
        dispatch(wrongAnswer(true));
        dispatch(submitAnswerMcq(false));
      }
    };
  },

  handleContinue: () => {
    return (dispatch, getState) => {
      const { visitedHotspotBtn, questionCount: count } = getState();
      dispatch(common.toggleToastMessage(false));
      if (visitedHotspotBtn.length < 4) {
        dispatch(setViewFrame(""));
        dispatch(questionCount(count + 1));
        dispatch(thunks.setQuestion());
        dispatch(wrongAnswer(false));
        EventManager.broadcast("STOP_ALL");

        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        });
        dispatch(common.setResetFocusState(true));
      } else {
        dispatch(common.togglePopup(5));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        });
        EventManager.broadcast("STOP_ALL");
      }
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      const { questionCount: count } = getState();
      if (count < 4) {
        dispatch(questionCount(count + 1));
        dispatch(thunks.setMCQQuestion());
        dispatch(selectAnswerOption(""));
        dispatch(submitAnswerMcq(false));

        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        });
        EventManager.broadcast("STOP_ALL");
      } else {
        dispatch(common.togglePopup(3));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        });
        EventManager.broadcast("STOP_ALL");
      }
    };
  },
};
