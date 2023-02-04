import data from "../data";
import * as actions from "../../app/actions";

const { togglePopup, ariaLiveText, updateResetBtnState } = actions;
export const common = { ...actions };

export const SET_QUESTION = "SET_QUESTION";
export const INFO_OPEN = "INFO_OPEN";
export const SET_DATA = "SET_DATA";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const SET_START_AGAIN = "SET_START_AGAIN";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const OBSERVATIONS_DATA = "OBSERVATIONS_DATA";
export const IS_OBSERVATION_VISITED = "IS_OBSERVATION_VISITED";
export const CURRENT_EXPERIMENT_NUMBER = "CURRENT_EXPERIMENT_NUMBER";
export const RESET_BUTTON = "RESET_BUTTON";
export const SET_VIEW_SCREEN = "SET_VIEW_SCREEN";
export const SET_VIEW_VIDEO = "SET_VIEW_VIDEO";
export const SELECT_BUTTON = "SELECT_BUTTON";
export const RESET_HOTSPOT = "RESET_HOTSPOT";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const START_SIMULATION = "START_SIMULATION";
export const JUMP_TO_MCQ_SCREEN = "JUMP_TO_MCQ_SCREEN";
export const RESET_VISITED_HOTSPOTS = "RESET_VISITED_HOTSPOTS";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";
export const NEXT_BUTTON_DISABLE = "NEXT_BUTTON_DISABLE";

export const setNextBtn = (item) => ({
  item,
  type: NEXT_BUTTON_DISABLE,
});
export const setViewScreen = (id) => ({
  id,
  type: SET_VIEW_SCREEN,
});
export const setViewVideo = (id) => ({
  id,
  type: SET_VIEW_VIDEO,
});

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

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
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

export const isObservationVisited = (data) => ({
  type: IS_OBSERVATION_VISITED,
  data,
});
export const observationsData = (data) => ({
  type: OBSERVATIONS_DATA,
  data,
});
export const currentExperimentNumber = (data) => {
  return {
    type: CURRENT_EXPERIMENT_NUMBER,
    data,
  };
};

export const setData = (data) => ({ data, type: SET_DATA });

export const startSimulation = (value) => ({
  type: START_SIMULATION,
  value,
});

export const selectHotspot = (id) => {
  return {
    type: SELECT_HOTSPOT,
    id,
  };
};

export const buttonClicked = (action) => {
  return {
    type: BUTTON_CLICKED,
    action,
  };
};

export const jumpToMCQScreen = (action) => {
  return {
    type: JUMP_TO_MCQ_SCREEN,
    action,
  };
};

export const updateVisitedHotspots = (hotspot) => ({
  hotspot,
  type: UPDATE_VISITED_HOTSPOTS,
});

export const resetVisitedHotspots = (hotspot) => ({
  hotspot,
  type: RESET_VISITED_HOTSPOTS,
});

export const thunks = {
  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData } = getState();
      const _questionsData = questionsData.map((q) => ({ ...q }));
      const question = { ..._questionsData.splice(0, 1)[0] };

      dispatch(setQuestion({ ...question }));
      dispatch(updateQuestionsData([..._questionsData]));
    };
  },

  selectAnswerOption: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState } = getState();
      dispatch(selectAnswerOption(id));
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
    };
  },
  submitAnswer: () => {
    return (dispatch, getState) => {
      const { selectedQuestion, selectedAnswerOption, questionCount } =
        getState();
      const totalLength = data.equationsData.length;
      if (selectedAnswerOption == selectedQuestion.answer) {
        TincanManager.data.percentage = parseInt(
          50 + (questionCount / totalLength) * 50
        );
        if (TincanManager.data.percentage == 100) {
          TincanManager.data.completed = true;
        }
        TincanManager.saveTincanData();

        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);

        dispatch(submitAnswer(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(wrongAnswer(true));
      }

      dispatch(submitButtonPressed(true));
    };
  },

  handleNextButtonClick: () => {
    return (dispatch) => {
      TincanManager.data.percentage = 50;
      TincanManager.saveTincanData();

      dispatch(togglePopup(6));
      dispatch(common.toggleToastMessage(false));

      dispatch(common.setResetFocusState(true));
    };
  },
  continueButtonClick: () => {
    return (dispatch, getState) => {
      const { visitedHotspots, questionCount: count } = getState();
      const totalLength = data.hotspotData[0].hotspots.length;

      dispatch(jumpToMCQScreen(false));
      dispatch(selectHotspot(""));
      dispatch(common.toggleToastMessage(false));
      dispatch(common.setResetFocusState(true));
      if (visitedHotspots.length == totalLength) {
        dispatch(setViewScreen(false));
        EventManager.broadcast("STOP_ALL");

        if (TincanManager.data.percentage < 40) {
          TincanManager.data.percentage = parseInt(
            (getState().visitedHotspots.length / (totalLength + 1)) * 50
          );
          TincanManager.saveTincanData();
        }

        if (count < data.equationsData.length) {
          dispatch(thunks.setQuestion());
          dispatch(submitAnswer(false));
          dispatch(questionCount(count + 1));
          dispatch(selectAnswerOption(""));
        } else {
          dispatch(togglePopup(7));
          EventManager.broadcast("COMPLETION_SCREEN");
        }
      } else {
        TincanManager.data.percentage = parseInt(
          (visitedHotspots.length / (totalLength + 1)) * 50
        );
        TincanManager.saveTincanData();
      }
    };
  },

  resetActivity: (value) => {
    return (dispatch) => {
      dispatch(setNextBtn(true));
      dispatch(jumpToMCQScreen(false));
      dispatch(setViewVideo(true));
      dispatch(setViewScreen(true));
      dispatch(currentExperimentNumber(0));
      dispatch(selectHotspot(""));
      dispatch(resetVisitedHotspots([]));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateQuestionsData([...data.equationsData]));
      dispatch(questionCount(0));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      TincanManager.resetTincanData();
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 600);
    };
  },
  selectHotspot: (id) => {
    return (dispatch) => {
      dispatch(selectHotspot(id));
      dispatch(updateVisitedHotspots(id));
      dispatch(jumpToMCQScreen(true));
      dispatch(common.setResetFocusState(true));
    };
  },

  onInfoClose: () => {
    return (dispatch, getState) => {
      const {} = getState();
      dispatch(togglePopup(4));
    };
  },
};