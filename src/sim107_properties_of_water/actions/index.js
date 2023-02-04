import data from "../data";
import * as actions from "../../app/actions";
const { togglePopup, ariaLiveText, toggleToastMessage, updateResetBtnState } =
  actions;

export const RESET_BUTTON = "RESET_BUTTON";
export const SELECT_OPTION = "SELECT_OPTION";
export const RESET_HOTSPOT = "RESET_HOTSPOT";
export const SELECT_BUTTON = "SELECT_BUTTON";
export const RESET_QUESTION = "RESET_QUESTION";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const TOGGLE_QUESTION = "TOGGLE_QUESTION";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const START_SIMULATION = "START_SIMULATION";
export const VIDEO_COMP = "VIDEO_COMP";
export const IS_VIDEO_ENDED = "IS_VIDEO_ENDED";
export const IS_LABELLED = "IS_LABELLED";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const RESET_VISITED_HOTSPOTS = "RESET_VISITED_HOTSPOTS";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";

export const common = { ...actions };
export const startSimulation = (value) => ({
  type: START_SIMULATION,
  value,
});
export const videoComp = (value) => ({
  type: VIDEO_COMP,
  value,
});
export const isVideoEnded = (value) => ({
  type: IS_VIDEO_ENDED,
  value,
});
export const isLabelled = (value) => ({
  type: IS_LABELLED,
  value,
});
export const resetQuestion = () => {
  return {
    type: RESET_QUESTION,
  };
};
export const toggleQuestion = (show) => ({
  type: TOGGLE_QUESTION,
  show,
});
export const answerAttempted = (attempted) => {
  return {
    type: ANSWER_ATTEMPTTED,
    attempted,
  };
};
export const correctAnswer = (correct) => {
  return {
    type: CORRECT_ANSWER,
    correct,
  };
};
export const selectOption = (option) => {
  return {
    type: SELECT_OPTION,
    option,
  };
};
export const selectHotspot = (id) => {
  return {
    type: SELECT_HOTSPOT,
    id,
  };
};
export const resetButton = () => {
  return {
    type: RESET_QUESTION,
  };
};
export const buttonClicked = (action) => {
  return {
    type: BUTTON_CLICKED,
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

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const thunks = {
  submitAnswer: () => {
    return (dispatch, state) => {
      const { selectedOption, selectedHotspot, visitedHotspots } = state();
      dispatch(toggleToastMessage(true));
      dispatch(answerAttempted(true));
      const mainMCQ = data.mainScreenMCQ.filter((e) => e.id == selectedHotspot);
      const checkAnswer = mainMCQ[0].answer == selectedOption;

      if (checkAnswer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(true));
        TincanManager.data.percentage = parseInt(
          (visitedHotspots.length / data.mainScreenMCQ.length) * 100
        );
        TincanManager.saveTincanData();
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(false));
      }
    };
  },

  selectHotspot: (id) => {
    return (dispatch, state) => {
      dispatch(selectHotspot(id));
      dispatch(updateVisitedHotspots(id));
    };
  },

  handleNextButtonClick: () => {
    return (dispatch, state) => {
      const { visitedHotspots } = state();
      if (visitedHotspots.length == 3) {
        dispatch(toggleToastMessage(false));
        dispatch(togglePopup(7));
        EventManager.broadcast("STOP_ALL");
        EventManager.broadcast("COMPLETION_SCREEN");
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      } else {
        EventManager.broadcast("STOP_ALL");
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
        dispatch(isVideoEnded(false));
        dispatch(videoComp(true));
        dispatch(startSimulation(true));
        dispatch(buttonClicked(true));
        dispatch(correctAnswer(false));
        dispatch(answerAttempted(false));
        dispatch(selectOption(""));
        dispatch(toggleToastMessage(false));
        dispatch(selectHotspot(""));
      }
    };
  },

  resetActivity: () => {
    return (dispatch, state) => {
      dispatch(isLabelled(true));
      dispatch(videoComp(true));
      dispatch(isVideoEnded(false));
      dispatch(togglePopup(1));
      dispatch(resetQuestion(1));
      dispatch(updateResetBtnState(true));
      dispatch(selectOption(""));
      dispatch(selectHotspot(""));
      dispatch(resetVisitedHotspots([]));
      dispatch(correctAnswer(false));
      dispatch(answerAttempted(false));
      dispatch(toggleToastMessage(false));
      dispatch(questionCount(0));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(startSimulation(true));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      const { currentPopup } = state();
      if (currentPopup.indexOf(8) >= 0) {
        dispatch(togglePopup(8));
      }
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 100);
    };
  },

  onInfoClose: () => {
    return (dispatch, getState) => {
      dispatch(togglePopup(4));
    };
  },
  setVideoLiveText: () => {
    return (dispatch, getState) => {
      dispatch(common.ariaLiveText(data.videoData.liveAlt));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 150);
    };
  },
};
