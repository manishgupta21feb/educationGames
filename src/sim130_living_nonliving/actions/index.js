import * as actions from "../../app/actions";

import data from "../data";
export const common = { ...actions };
const { togglePopup, ariaLiveText, toggleToastMessage } = actions;

export const SET_QUESTION = "SET_QUESTION";

export const SUBMIT_ANSWER_MCQ = "SUBMIT_ANSWER_MCQ";
export const QUESTIONS_DATA = "QUESTIONS_DATA";

export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";

export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";

export const SET_SUBMIT_BUTTON_DISABLED = "SET_SUBMIT_BUTTON_DISABLED";

export const SUB_SCREEN = "SUB_SCREEN";

export const BUTTON_VISITED = "BUTTON_VISITED";

export const CURRENT_HOTSPOT = "CURRENT_HOTSPOT";

export const setCurrentHotSpot = (id) => ({
  type: CURRENT_HOTSPOT,
  id,
});

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

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});

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

  setQuestion: (id) => {
    return (dispatch, getState) => {
      const { questionsData } = getState();

      const _questionsData = questionsData.map((q) => ({ ...q }));

      const question = _questionsData.filter((ques) => {
        return id == ques.id;
      });

      dispatch(setQuestion(...question));
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(setSubScreen(true));
      dispatch(setVisitedBtn(""));
      dispatch(toggleToastMessage(false));
      dispatch(setSubmitBtnDisabled(false));

      dispatch(submitAnswerMcq(false));
      dispatch(setCurrentHotSpot(""));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.togglePopup(1));
      TincanManager.resetTincanData();
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

        currentHotSpot,
        visitedHotspotBtn,
      } = getState();

      if (selectedAnswerOption == selectedQuestion.answer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);

        dispatch(setVisitedBtn(currentHotSpot));

        dispatch(setSubmitBtnDisabled(true));

        dispatch(submitAnswerMcq(true));
        dispatch(common.toggleToastMessage(true));
        const { visitedHotspotBtn } = getState();
        TincanManager.data.percentage = parseInt(
          (visitedHotspotBtn.length / data.screenOneQues.length) * 100
        );
        TincanManager.saveTincanData();
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(common.toggleToastMessage(true));

        dispatch(setSubmitBtnDisabled(false));
      }
    };
  },

  handleHotClick: (id) => {
    return (dispatch, getState) => {
      const { selectedQuestion } = getState();
      dispatch(setSubScreen(false));

      dispatch(thunks.setQuestion(id));
      dispatch(setCurrentHotSpot(id));
      dispatch(setSubmitBtnDisabled(true));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswerMcq(false));
    };
  },

  onAutoNextButton: () => {
    return (dispatch, getState) => {
      const { visitedHotspotBtn, currentHotSpot } = getState();
      EventManager.broadcast("STOP_ALL");
      if (visitedHotspotBtn.length < 11) {
        dispatch(setCurrentHotSpot(""));
        dispatch(setSubScreen(true));
        dispatch(selectAnswerOption(""));
        dispatch(submitAnswerMcq(false));
        dispatch(common.setResetFocusState(true));
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        });
      }
    };
  },
  onFinishButton: () => {
    return (dispatch, getState) => {
      dispatch(setCurrentHotSpot(""));
      dispatch(common.togglePopup(3));
      EventManager.broadcast("STOP_ALL");
      setTimeout(() => {
        EventManager.broadcast("COMPLETION_SCREEN");
      });
    };
  },
};
