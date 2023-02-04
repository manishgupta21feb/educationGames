import data from "../data";
import * as actions from "../../app/actions";
const { togglePopup, ariaLiveText, toggleToastMessage, updateResetBtnState } =
  actions;

export const RESET_BUTTON = "RESET_BUTTON";
export const SELECT_OPTION = "SELECT_OPTION";
export const SELECT_OPTION_SECOND = "SELECT_OPTION_SECOND";
export const RESET_HOTSPOT = "RESET_HOTSPOT";
export const SELECT_BUTTON = "SELECT_BUTTON";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const CORRECT_ANSWER_ONE = "CORRECT_ANSWER_ONE";
export const CORRECT_ANSWER_TWO = "CORRECT_ANSWER_TWO";
export const PARTIAL_CORRECT = "PARTIAL_CORRECT";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const TOGGLE_QUESTION = "TOGGLE_QUESTION";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const START_SIMULATION = "START_SIMULATION";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const RESET_VISITED_HOTSPOTS = "RESET_VISITED_HOTSPOTS";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";
export const QUESTION_DATA = "QUESTION_DATA";

export const common = { ...actions };
export const startSimulation = (value) => ({
  type: START_SIMULATION,
  value,
});

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
export const correctAnswerOne = (correct) => {
  return {
    type: CORRECT_ANSWER_ONE,
    correct,
  };
};
export const correctAnswerTwo = (correct) => {
  return {
    type: CORRECT_ANSWER_TWO,
    correct,
  };
};
export const partialAnswer = (correct) => {
  return {
    type: PARTIAL_CORRECT,
    correct,
  };
};
export const selectOption = (option) => {
  return {
    type: SELECT_OPTION,
    option,
  };
};
export const selectOptionSecond = (option) => {
  return {
    type: SELECT_OPTION_SECOND,
    option,
  };
};
export const selectHotspot = (id) => {
  return {
    type: SELECT_HOTSPOT,
    id,
  };
};
export const questionData = (data) => {
  return {
    type: QUESTION_DATA,
    data,
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
      const { selectedOption, questionData, selectedOptionSecond } = state();
      const checkAnswer1 = questionData.answer1 == selectedOption.value;
      const checkAnswer2 = questionData.answer2 == selectedOptionSecond.value;
      const isSecondOption = questionData.options2.length > 0;
      dispatch(toggleToastMessage(true));
      dispatch(answerAttempted(true));

      if (isSecondOption) {
        if (checkAnswer1 && checkAnswer2) {
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
          dispatch(correctAnswer(true));
        } else if (checkAnswer1 && !checkAnswer2) {
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
          dispatch(partialAnswer(true));
          dispatch(correctAnswer(false));
          dispatch(correctAnswerOne(true));
        } else if (!checkAnswer1 && checkAnswer2) {
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
          dispatch(partialAnswer(true));
          dispatch(correctAnswer(false));
          dispatch(correctAnswerTwo(true));
        } else {
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
          dispatch(correctAnswer(false));
        }
      } else {
        if (checkAnswer1) {
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
          dispatch(correctAnswer(true));
        } else {
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
          dispatch(correctAnswer(false));
        }
      }
    };
  },

  nextSectionContinue: () => {
    return (dispatch, state) => {
      const { visitedHotspots } = state();
      TincanManager.data.percentage = parseInt(
        (visitedHotspots.length / data.home.mainScreenData.length) * 100
      );
      TincanManager.saveTincanData();
    };
  },

  selectHotspot: (id) => {
    return (dispatch, state) => {
      dispatch(selectHotspot(id));
      dispatch(updateVisitedHotspots(id));
    };
  },

  generateQuestion: () => {
    return (dispatch, state) => {
      const { toggleQuestion, questionCount } = state();
      const quesData = data.Questions[toggleQuestion].questions[questionCount];
      dispatch(questionData(quesData));
    };
  },

  handleNextButtonClick: () => {
    return (dispatch, state) => {
      const { visitedHotspots, questionCount: count, toggleQuestion } = state();
      const totalQuestion = data.Questions[toggleQuestion].questions.length - 1;
      const nextSection = totalQuestion == count;
      dispatch(buttonClicked(true));
      dispatch(correctAnswer(false));
      dispatch(answerAttempted(false));
      dispatch(toggleToastMessage(false));
      dispatch(selectHotspot(""));
      dispatch(correctAnswerOne(false));
      dispatch(correctAnswerTwo(false));
      dispatch(partialAnswer(false));

      if (nextSection && visitedHotspots.length == 3) {
        dispatch(togglePopup(7));
        EventManager.broadcast("STOP_ALL");
        EventManager.broadcast("COMPLETION_SCREEN");
        TincanManager.data.completed = true;
        TincanManager.data.percentage = parseInt(
          (visitedHotspots.length / data.home.mainScreenData.length) * 100
        );
        TincanManager.saveTincanData();
      } else if (nextSection) {
        dispatch(togglePopup(6));
        EventManager.broadcast("STOP_ALL");
        EventManager.broadcast("COMPLETION_SCREEN");
      } else {
        EventManager.broadcast("STOP_ALL");
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
        dispatch(questionCount(count + 1));
        dispatch(selectOption({}));
        dispatch(selectOptionSecond({}));
        dispatch(thunks.generateQuestion());
      }
    };
  },

  resetActivity: () => {
    return (dispatch, state) => {
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      dispatch(selectOptionSecond({}));
      dispatch(selectOption({}));
      dispatch(selectHotspot(""));
      dispatch(resetVisitedHotspots([]));
      dispatch(correctAnswer(false));
      dispatch(answerAttempted(false));
      dispatch(toggleToastMessage(false));
      dispatch(questionCount(0));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(startSimulation(true));
      dispatch(correctAnswerOne(false));
      dispatch(correctAnswerTwo(false));
      dispatch(partialAnswer(false));
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
};
