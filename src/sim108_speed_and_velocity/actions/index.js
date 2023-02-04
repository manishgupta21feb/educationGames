import data from "../data";
import * as actions from "../../app/actions";
export const common = { ...actions };
export const SET_QUESTION = "SET_QUESTION";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const IS_MCQ_SHOW = "IS_MCQ_SHOW";
export const SET_MCQ = "SET_MCQ";
export const COMPLETION_SCREEN_SHOW = "COMPLETION_SCREEN_SHOW";
export const SCENARIO_VISITED = " SCENARIO_VISITED";
export const IS_OBSERVATION_VISITED = "IS_OBSERVATION_VISITED";
export const OBSERVATIONS_DATA = "OBSERVATIONS_DATA";
export const SET_NEXT = "SET_NEXT";
export const RESET_SCENARIO_VISITED = "RESET_SCENARIO_VISITED";
export const NEXT_BUTTON_DISABLE = "NEXT_BUTTON_DISABLE";
export const NEXT_CLICK = "NEXT_CLICK";

export const setNextClick = (count) => ({
  type: NEXT_CLICK,
  count,
});

export const setNextBtnVideo = (item) => ({
  item,
  type: NEXT_BUTTON_DISABLE,
});

export const isObservationVisited = (data) => ({
  type: IS_OBSERVATION_VISITED,
  data,
});

export const observationsData = (data) => ({
  type: OBSERVATIONS_DATA,
  data,
});
export const isMcqShow = (value) => {
  return {
    value,
    type: IS_MCQ_SHOW,
  };
};
export const completionScreenShow = (value) => {
  return {
    value,
    type: COMPLETION_SCREEN_SHOW,
  };
};
export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});

export const setQuestion = (value) => ({
  type: SET_QUESTION,
  value,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});
export const scenarioVisited = (count) => ({
  type: SCENARIO_VISITED,
  count,
});
export const resetScenarioVisited = () => ({
  type: RESET_SCENARIO_VISITED,
});
export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});
export const setMcqValue = (value) => ({
  type: SET_MCQ,
  value,
});
export const setNext = (value) => ({
  type: SET_NEXT,
  value,
});
export const thunks = {
  onContinue: () => {
    return (dispatch, getState) => {
      const { selectedQuestion } = getState();
      dispatch(common.togglePopup(7));
      dispatch(isMcqShow(false));
      dispatch(setQuestion(selectedQuestion + 1));
      dispatch(setMcqValue(0));
      dispatch(questionCount(1));
      dispatch(completionScreenShow(false));
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      const {
        selectedQuestion,
        questionCountValue,
        setMcq,
        mcqShow,
        isCompletionScreenShow,
        setNextValue,
      } = getState();
      dispatch(setNextClick(-1));
      setTimeout(() => {
        dispatch(setNextClick(1));
      }, 10);

      if (mcqShow) {
        const scenerioLength = data.mcqScreenoneData.length;
        const totalLength =
          data.mcqScreenoneData[selectedQuestion].questionData.length;
        const id = data.mcqScreenoneData[selectedQuestion].id;
        if (totalLength != questionCountValue) {
          dispatch(questionCount(questionCountValue + 1));
          dispatch(setMcqValue(setMcq + 1));
        } else {
          dispatch(scenarioVisited(id));
          TincanManager.data.percentage = parseInt(
            (getState().scenarioVisitedValue.length / scenerioLength) * 100
          );
          if (TincanManager.data.percentage == 100) {
            TincanManager.data.completed = true;
          }
          TincanManager.saveTincanData();

          if (
            getState().scenarioVisitedValue.length == 3 &&
            isCompletionScreenShow
          ) {
            dispatch(common.togglePopup(7));
            setTimeout(() => {
              EventManager.broadcast("COMPLETION_SCREEN");
            }, 300);
          } else if (getState().scenarioVisitedValue.length == 5) {
            dispatch(common.togglePopup(6));
            setTimeout(() => {
              EventManager.broadcast("COMPLETION_SCREEN");
            }, 300);
          } else {
            dispatch(isMcqShow(false));
            dispatch(setQuestion(selectedQuestion + 1));
            dispatch(setMcqValue(0));
            dispatch(questionCount(1));
          }
        }
      } else {
        dispatch(isMcqShow(true));
        dispatch(setNext(setNextValue + 1));
      }
      dispatch(common.toggleToastMessage(false));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(wrongAnswer(false));
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));
      if (getState().scenarioVisitedValue.length == 1) {
        dispatch(setNextBtnVideo(false));
      } else {
        dispatch(setNextBtnVideo(true));
      }
    };
  },
  submitAnswer: () => {
    return (dispatch, getState) => {
      const { selectedQuestion, setMcq, selectedAnswerOption } = getState();
      const correctAnswer =
        data.mcqScreenoneData[selectedQuestion].questionData[setMcq].answer;
      if (selectedAnswerOption == correctAnswer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 100);
        dispatch(submitAnswer(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 100);
        dispatch(wrongAnswer(true));
      }
      dispatch(submitButtonPressed(true));
    };
  },
  selectAnswerOption: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState } = getState();
      dispatch(selectAnswerOption(id));
      if (resetBtnState) {
        dispatch(updateResetBtnState(true));
      }
    };
  },

  resetActivity: (value) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(common.togglePopup(1));
      }, 50);
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(true));
      dispatch(questionCount(1));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      dispatch(wrongAnswer(false));
      dispatch(setQuestion(0));
      dispatch(setMcqValue(0));
      dispatch(setNext(0));
      dispatch(submitButtonPressed(false));
      dispatch(isMcqShow(""));
      dispatch(completionScreenShow(true));
      dispatch(resetScenarioVisited());
      dispatch(setNextBtnVideo(true));
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(setNextClick(-1));
      setTimeout(() => {
        dispatch(setNextClick(1));
      }, 10);
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 600);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },
};