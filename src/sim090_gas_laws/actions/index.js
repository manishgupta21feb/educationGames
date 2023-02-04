import * as actions from "../../app/actions";
import data from "../data";

export const VIEW_SCREEN = "VIEW_SCREEN";
export const SUB_SCREEN = "SUB_SCREEN";
export const SET_QUESTION = "SET_QUESTION";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const VIEW_FRAME = "VIEW_FRAME";
export const SELECT_OPTION = "SELECT_OPTION";
export const UPDATE_SLIDER2 = "UPDATE_SLIDER2";
export const COUNT_NEXT = "COUNT_NEXT";
export const BUTTON_VISITED = "BUTTON_VISITED";

export const common = { ...actions };

export const setCountNext = (value) => {
  return {
    type: COUNT_NEXT,
    value,
  };
};
export const setviewScreen = (value) => {
  return {
    type: VIEW_SCREEN,
    value,
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

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const setQuestionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const answerSubmitted = (submitted) => ({
  submitted,
  type: ANSWER_SUBMITTED,
});

export const correctAnswer = (val) => {
  return {
    type: CORRECT_ANSWER,
    val,
  };
};

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const setViewFrame = (val) => {
  return {
    type: VIEW_FRAME,
    val,
  };
};

export const setSelectedOption = (value) => {
  return {
    type: SELECT_OPTION,
    value,
  };
};

export const thunk = {
  toggleToastMessage: (id) => (dispatch) => {
    dispatch(toggleToastMessage(id));
  },

  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData, questionCount, selectedQuestion, viewFrame } =
        getState();

      const _questionsData = questionsData.map((q) => ({ ...q }));

      const question = _questionsData.filter((ques) => {
        return ques.id == viewFrame;
      });

      if (question[0].mcqQuestion) {
        for (let k = 0; k < question[0].mcqQuestion.length; k++) {
          for (
            let i = question[0].mcqQuestion[k].radioButton.length - 1;
            i > 0;
            i--
          ) {
            const j = Math.floor(Math.random() * (i + 1));
            [
              question[0].mcqQuestion[k].radioButton[i],
              question[0].mcqQuestion[k].radioButton[j],
            ] = [
              question[0].mcqQuestion[k].radioButton[j],
              question[0].mcqQuestion[k].radioButton[i],
            ];
          }
        }
      }

      dispatch(updateQuestionsData(_questionsData));
      dispatch(setQuestion(question[0]));
    };
  },

  resetFunctions: () => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();

      dispatch(setviewScreen(true));
      dispatch(setSubScreen(true));
      dispatch(setViewFrame(""));
      dispatch(setVisitedBtn([]));
      dispatch(answerSubmitted(false));
      dispatch(correctAnswer(false));
      dispatch(setSelectedOption(""));
      dispatch(setCountNext(0));
      dispatch(setQuestionCount(1));
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(common.togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(common.togglePopup(4));
      }

      dispatch(common.togglePopup(1));

      dispatch(common.ariaLiveText(data.resetLiveText));
      TincanManager.resetTincanData();
    };
  },

  submitAnswerMCQ: () => {
    return (dispatch, getState) => {
      const { selectedQuestion, getSelectedOption, questionCount } = getState();

      if (
        getSelectedOption ==
        selectedQuestion.mcqQuestion[questionCount - 1].answerId
      ) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(common.toggleToastMessage(true));

        dispatch(answerSubmitted(true));
        dispatch(correctAnswer(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);

        dispatch(common.toggleToastMessage(true));
        dispatch(answerSubmitted(true));
        dispatch(correctAnswer(false));
      }
    };
  },

  continueBtnHandler: () => {
    return (dispatch, getState) => {
      const { viewScreen } = getState();

      if (viewScreen) {
        dispatch(setviewScreen(false));
        dispatch(common.updateResetBtnState(false));
      } else {
        dispatch(setviewScreen(false));
        dispatch(setSubScreen(false));
        dispatch(common.updateResetBtnState(false));
      }
    };
  },

  nextButtonHandler: () => {
    return (dispatch, getState) => {
      const { selectedQuestion, questionCount, countNext, visitedHotspotBtn } =
        getState();
      EventManager.broadcast("STOP_ALL");
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      if (visitedHotspotBtn.length <= 6 && countNext <= 6) {
        if (selectedQuestion.mcqQuestion?.length == 2 && questionCount <= 1) {
          dispatch(setQuestionCount(questionCount + 1));
          dispatch(setSelectedOption(""));
          dispatch(answerSubmitted(false));
          dispatch(correctAnswer(false));
          dispatch(common.toggleToastMessage(false));
          dispatch(setCountNext(countNext + 1));
          dispatch(common.setResetFocusState(true));
        } else {
          dispatch(setSelectedOption(""));
          dispatch(setSubScreen(true));
          dispatch(setViewFrame(""));
          dispatch(setQuestionCount(1));
          dispatch(answerSubmitted(false));
          dispatch(correctAnswer(false));
          dispatch(setCountNext(countNext + 1));
          dispatch(common.toggleToastMessage(false));
          dispatch(common.setResetFocusState(true));
        }
      } else {
        dispatch(common.toggleToastMessage(false));
        dispatch(common.togglePopup(4));
        EventManager.broadcast("COMPLETION_SCREEN");
      }
    };
  },
};
