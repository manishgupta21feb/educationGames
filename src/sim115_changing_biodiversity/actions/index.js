import * as actions from "../../app/actions";
import data from "../data";
const { togglePopup, toggleToastMessage, updateResetBtnState, ariaLiveText } =
  actions;

export const ECOSYSTEM_NAME = "ECOSYSTEM_NAME";
export const DROPDOWN_VALUE = "DROPDOWN_VALUE";
export const ADD_CORRECT_OPTIONS = "ADD_CORRECT_OPTIONS";
export const ADD_INCORRECT_OPTIONS = "ADD_INCORRECT_OPTIONS";
export const CLEAR_CORRECT_OPTIONS = "CLEAR_CORRECT_OPTIONS";
export const CLEAR_INCORRECT_OPTIONS = "CLEAR_INCORRECT_OPTIONS";
export const REMOVE_ITEM_FROM_CORRECT = "REMOVE_ITEM_FROM_CORRECT";
export const REMOVE_ITEM_FROM_INCORRECT = "REMOVE_ITEM_FROM_INCORRECT";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const INCORRECT_ANSWER = "INCORRECT_ANSWER";
export const SUBMIT_BUTTON = "SUBMIT_BUTTON";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";
export const RESET_VISITED_HOTSPOTS = "RESET_VISITED_HOTSPOTS";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const NEXT_SECTION = "NEXT_SECTION";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const CLICKED_BUTTON = "CLICKED_BUTTON";
export const DISABLED_BUTTON = "DISABLED_BUTTON";
export const CLICKED_BUTTON_VALUE = "CLICKED_BUTTON_VALUE";
export const RESET_CLICKED_BUTTON = "RESET_CLICKED_BUTTON";

export const common = { ...actions };

export const setEcosystemScreen = (value) => {
  return {
    type: ECOSYSTEM_NAME,
    value,
  };
};

export const clickedButtonValue = (value) => {
  return {
    value,
    type: CLICKED_BUTTON_VALUE,
  };
};

export const resetClickedButton = () => ({
  type: RESET_CLICKED_BUTTON,
});

export const setDropdownValue = (value) => {
  return {
    type: DROPDOWN_VALUE,
    value,
  };
};

export const removeItemFromCorrect = (item) => ({
  item,
  type: REMOVE_ITEM_FROM_CORRECT,
});

export const removeItemFromIncorrect = (item) => ({
  item,
  type: REMOVE_ITEM_FROM_INCORRECT,
});

export const answerAttempted = (value) => {
  return {
    type: ANSWER_ATTEMPTTED,
    value,
  };
};

export const nextSection = (value) => {
  return {
    type: NEXT_SECTION,
    value,
  };
};

export const submitButton = (value) => {
  return {
    type: SUBMIT_BUTTON,
    value,
  };
};

export const correctAnswer = (value) => {
  return {
    type: CORRECT_ANSWER,
    value,
  };
};

export const incorrectAnswer = (value) => {
  return {
    type: INCORRECT_ANSWER,
    value,
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

export const selectHotspot = (id) => {
  return {
    type: SELECT_HOTSPOT,
    id,
  };
};

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const addCorrect = (item) => ({
  item,
  type: ADD_CORRECT_OPTIONS,
});

export const addIncorrect = (item) => ({
  item,
  type: ADD_INCORRECT_OPTIONS,
});

export const clearCorrectOptions = () => ({
  type: CLEAR_CORRECT_OPTIONS,
});

export const clearIncorrectOptions = () => ({
  type: CLEAR_INCORRECT_OPTIONS,
});

export const disabledButton = (value) => {
  return {
    value,
    type: DISABLED_BUTTON,
  };
};
export const clickedButtons = (value) => {
  return {
    value,
    type: CLICKED_BUTTON,
  };
};

export const thunk = {
  onEcosystemBtn: (value) => {
    return (dispatch, getState) => {
      dispatch(setEcosystemScreen(value.id));
    };
  },

  updateHotspot: (value) => {
    return (dispatch, getState) => {
      dispatch(selectHotspot(value.serNo));
      dispatch(updateVisitedHotspots(value.serNo));
    };
  },

  onDropdownChange: (item, index) => {
    return (dispatch, getState) => {
      const { getDropdownValue } = getState();

      const _getDropdownValue = [...getDropdownValue];
      _getDropdownValue[index] = item;

      const _tempGetDropdownValue = { ..._getDropdownValue };

      let i = 0;
      let flag = false;
      let length = 0;
      for (i in _tempGetDropdownValue) {
        if (_tempGetDropdownValue[i].value == undefined) {
          flag = false;
        } else {
          length = length + 1;
          flag = true;
        }
      }

      if (length == 6) {
        dispatch(submitButton(true));
      } else {
        dispatch(submitButton(false));
      }
      dispatch(setDropdownValue(_getDropdownValue));
    };
  },

  onButtonClick: (value) => {
    return (dispatch, getState) => {
      const { questionCount } = getState();
      const answer = data.nextSectionData[questionCount].answer;
      const button = getState().clickedButtons;

      if (!getState().clickedButtonValue.includes(value.id)) {
        dispatch(clickedButtonValue(value.id));
        dispatch(clickedButtons(button + 1));
      }

      if (getState().clickedButtons == answer.length) {
        dispatch(disabledButton(true));
        dispatch(submitButton(true));
      }
    };
  },

  submitAnswer: () => {
    return (dispatch, getState) => {
      const {
        getDropdownValue,
        getEcosystemScreen,
        nextSection,
        visitedHotspots,
      } = getState();
      const totalSection =
        data.ecosystem.type.length + data.nextSectionData.length;
      const nextSectionAttempt = 4 + getState().questionCount;
      dispatch(toggleToastMessage(true));
      dispatch(answerAttempted(true));

      if (nextSection) {
        const count = getState().questionCount;
        const answerData = data.nextSectionData[count].answer;
        const selected = getState().clickedButtonValue;

        for (let i = 0; i < selected.length; i++) {
          if (answerData.includes(selected[i])) {
            dispatch(addCorrect(selected[i]));
          }
        }

        let correct = getState().correctOptions;
        dispatch(clickedButtons(correct.length));

        if (correct.length == answerData.length) {
          dispatch(correctAnswer(true));
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
          TincanManager.data.percentage = parseInt(
            (nextSectionAttempt / totalSection) * 100
          );
          TincanManager.saveTincanData();
        } else {
          dispatch(disabledButton(false));
          dispatch(incorrectAnswer(true));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
        }

        dispatch(submitButton(false));
        dispatch(resetClickedButton());
      } else {
        const answer = data.FirstScreenAnswers.filter(
          (e) => e.id == getEcosystemScreen
        )[0].answers;
        let i = 0;
        let flag = true;

        for (i in getDropdownValue) {
          if (getDropdownValue[i].value == answer[i]) {
            dispatch(addCorrect(getDropdownValue[i].class));
            dispatch(removeItemFromIncorrect(getDropdownValue[i].class));
          } else {
            if (
              !getState().incorrectOptions.includes(getDropdownValue[i].class)
            ) {
              dispatch(addIncorrect(getDropdownValue[i].class));
            }
            dispatch(removeItemFromCorrect(getDropdownValue[i].class));
            flag = false;
          }
        }
        if (flag) {
          dispatch(correctAnswer(true));
          dispatch(submitButton(false));
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
          TincanManager.data.percentage = parseInt(
            (visitedHotspots.length / totalSection) * 100
          );
          TincanManager.saveTincanData();
        } else {
          dispatch(incorrectAnswer(true));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
        }
      }
    };
  },

  handleNextButtonClick: () => {
    return (dispatch, getState) => {
      const { visitedHotspots, nextSection } = getState();

      if (nextSection) {
        if (getState().questionCount == 2 && correctAnswer) {
          dispatch(toggleToastMessage(false));
          dispatch(togglePopup(5));
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
          dispatch(questionCount(getState().questionCount + 1));
          dispatch(clickedButtons(0));
          dispatch(disabledButton(false));
          dispatch(resetClickedButton());
          dispatch(toggleToastMessage(false));
          dispatch(answerAttempted(false));
          dispatch(clearCorrectOptions());
          dispatch(clearIncorrectOptions());
          dispatch(correctAnswer(false));
        }
      } else {
        if (visitedHotspots.length == 3) {
          EventManager.broadcast("STOP_ALL");
          dispatch(togglePopup(4));
          dispatch(toggleToastMessage(false));
          EventManager.broadcast("COMPLETION_SCREEN");
        } else {
          EventManager.broadcast("STOP_ALL");
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
          dispatch(setEcosystemScreen("home"));
          dispatch(correctAnswer(false));
          dispatch(setDropdownValue([{}, {}, {}, {}, {}, {}]));
          dispatch(toggleToastMessage(false));
          dispatch(answerAttempted(false));
          dispatch(clearCorrectOptions());
          dispatch(clearIncorrectOptions());
        }
      }
    };
  },

  completeOneSection: () => {
    return (dispatch, getState) => {
      dispatch(setEcosystemScreen("home"));
      dispatch(nextSection(true));
      EventManager.broadcast("STOP_ALL");
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);
      dispatch(correctAnswer(false));
      dispatch(setDropdownValue([{}, {}, {}, {}, {}, {}]));
      dispatch(toggleToastMessage(false));
      dispatch(answerAttempted(false));
      dispatch(clearCorrectOptions());
      dispatch(clearIncorrectOptions());
      dispatch(resetVisitedHotspots([]));
    };
  },

  resetActivity: () => {
    return (dispatch, getState) => {
      dispatch(nextSection(false));
      dispatch(setEcosystemScreen("home"));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      dispatch(correctAnswer(false));
      dispatch(setDropdownValue([{}, {}, {}, {}, {}, {}]));
      dispatch(toggleToastMessage(false));
      dispatch(answerAttempted(false));
      dispatch(resetVisitedHotspots([]));
      dispatch(clearCorrectOptions());
      dispatch(clearIncorrectOptions());
      dispatch(resetClickedButton());
      dispatch(disabledButton(false));
      dispatch(questionCount(0));
      dispatch(clickedButtons(0));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 100);
    };
  },
};
