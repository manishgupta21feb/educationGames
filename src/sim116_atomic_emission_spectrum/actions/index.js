import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import { isAndroid } from "react-device-detect";

const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  updateResetBtnState,
  setResetFocusState,
} = actions;
export const common = { ...actions };

export const CLEAR_VALUES = "CLEAR_VALUES";
export const SHOW_CHECK_BUTTON = "SHOW_CHECK_BUTTON";
export const RESET_COUNTER = "RESET_COUNTER";
export const COUNT_ATTEMPTS = "COUNT_ATTEMPTS";
export const DELETE_ATTEMPTS = "DELETE_ATTEMPTS";
export const COUNTER_VALUES = "COUNTER_VALUES";
export const SHOW_MAIN_SCREEN = "SHOW_MAIN_SCREEN";
export const SHOW_FIRST_SCREEN = "SHOW_FIRST_SCREEN";
export const SHOW_SECOND_SCREEN = "SHOW_SECOND_SCREEN";
export const ADD_VISITED_PAGE = "ADD_VISITED_PAGE";
export const CLEAR_VISITED_PAGES = "CLEAR_VISITED_PAGES";

export const ON = "ON";
export const WAVE_ONE = "WAVE_ONE";
export const WAVE_TWO = "WAVE_TWO";
export const RED_WAVE = "RED_WAVE";
export const BLUE_WAVE = "BLUE_WAVE";
export const YELLOW_WAVE = "YELLOW_WAVE";
export const ANIMATE_RADIATIONS = "ANIMATE_RADIATIONS";
export const SWITCH_CONDITION = "SWITCH_CONDITION";

export const FORWARD_ARROW = "FORWARD_ARROW";
export const REVERSE_ARROW_ONE = "REVERSE_ARROW_ONE";
export const REVERSE_ARROW_TWO = "REVERSE_ARROW_TWO";
export const ARROW_THREE = "ARROW_THREE";

export const SWITCH_STATE = "SWITCH_STATE";
export const INFO_TABLE = "INFO_TABLE";
export const COUNTER = "COUNTER";
export const DELETE_COUNTS = "DELETE_COUNTS";
export const SELECTED_OPTION = "SELECTED_OPTION";

export const removeAllValues = () => {
  return {
    type: CLEAR_VALUES,
  };
};

export const resetCounterValues = (value) => {
  return {
    type: RESET_COUNTER,
    value,
  };
};

export const countAttempts = (value) => {
  return {
    type: COUNT_ATTEMPTS,
    value,
  };
};

export const deleteAttempts = () => {
  return {
    type: DELETE_ATTEMPTS,
  };
};

export const setShowMainScreen = (value) => {
  return {
    type: SHOW_MAIN_SCREEN,
    value,
  };
};

export const setShowFirstScreen = (value) => {
  return {
    type: SHOW_FIRST_SCREEN,
    value,
  };
};

export const setShowSecondScreen = (value) => {
  return {
    type: SHOW_SECOND_SCREEN,
    value,
  };
};

export const addVisitedPage = (value) => {
  return {
    type: ADD_VISITED_PAGE,
    value,
  };
};

export const clearVisitedPages = () => {
  return {
    type: CLEAR_VISITED_PAGES,
  };
};

export const setON = (value) => ({
  type: ON,
  value,
});

export const setWaveOne = (value) => ({
  type: WAVE_ONE,
  value,
});

export const setWaveTwo = (value) => ({
  type: WAVE_TWO,
  value,
});

export const setRedWave = (value) => ({
  type: RED_WAVE,
  value,
});

export const setBlueWave = (value) => ({
  type: BLUE_WAVE,
  value,
});
export const setYellowWave = (value) => ({
  type: YELLOW_WAVE,
  value,
});

export const setAnimateRadiations = (value) => ({
  type: ANIMATE_RADIATIONS,
  value,
});

export const setSwitchCondition = (value) => ({
  type: SWITCH_CONDITION,
  value,
});

export const setForwardArrow = (value) => ({
  type: FORWARD_ARROW,
  value,
});

export const setReverseArrowOne = (value) => ({
  type: REVERSE_ARROW_ONE,
  value,
});

export const setReverseArrowTwo = (value) => ({
  type: REVERSE_ARROW_TWO,
  value,
});

export const setArrowThree = (value) => ({
  type: ARROW_THREE,
  value,
});

export const setSwitchState = (value) => ({
  type: SWITCH_STATE,
  value,
});

export const setShowTable = (value) => {
  return {
    type: INFO_TABLE,
    value,
  };
};

export const setCounter = (value) => {
  return {
    type: COUNTER,
    value,
  };
};

export const resetCount = (value) => {
  return {
    type: DELETE_COUNTS,
    value,
  };
};

export const setSelectedOption = (option) => {
  return {
    type: SELECTED_OPTION,
    option,
  };
};

export const thunks = {
  onNextButton: () => {
    return (dispatch, getState) => {
      const { visitedPages, counter } = getState();
      dispatch(clearVisitedPages());
      dispatch(setShowMainScreen(true));
      dispatch(setShowFirstScreen(false));
      dispatch(setShowSecondScreen(false));
      dispatch(setResetFocusState(true));
      dispatch(setON("0"));
      dispatch(setWaveOne(false));
      dispatch(setWaveTwo(false));
      dispatch(setRedWave(false));
      dispatch(setBlueWave(false));
      dispatch(setYellowWave(false));
      dispatch(setAnimateRadiations(false));
      dispatch(setSwitchCondition(false));
      dispatch(setForwardArrow(false));
      dispatch(setReverseArrowOne(false));
      dispatch(setReverseArrowTwo(false));
      dispatch(setArrowThree(false));
      dispatch(setShowTable(false));
      dispatch(setCounter(counter + 1));
      setTimeout(() => {
        EventManager.broadcast("STOP_ALL");
      }, 300);
      dispatch(toggleToastMessage(false));
    };
  },

  reset: () => {
    return (dispatch, state) => {
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));
      dispatch(removeAllValues());
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
      const { currentPopup } = state();
      if (currentPopup.indexOf(6) >= 0) {
        dispatch(togglePopup(6));
      }
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      dispatch(togglePopup(1));
      dispatch(resetCounterValues(true));
      dispatch(deleteAttempts());
      dispatch(setShowMainScreen(true));
      dispatch(setShowFirstScreen(false));
      dispatch(setShowSecondScreen(false));
      dispatch(setSwitchState(false));
      dispatch(setON("0"));
      dispatch(setWaveOne(false));
      dispatch(setWaveTwo(false));
      dispatch(setRedWave(false));
      dispatch(setBlueWave(false));
      dispatch(setYellowWave(false));
      dispatch(setAnimateRadiations(false));
      dispatch(setSwitchCondition(false));
      dispatch(setForwardArrow(false));
      dispatch(setReverseArrowOne(false));
      dispatch(setReverseArrowTwo(false));
      dispatch(setArrowThree(false));
      dispatch(setShowTable(false));
      dispatch(resetCount());
      dispatch(setCounter(0));
      dispatch(toggleToastMessage(false));

      TincanManager.resetTincanData();
    };
  },

  changeScreen: () => {
    return (dispatch, getState) => {
      const { visitedPages, counter } = getState();
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");

      if (visitedPages.length < 2) {
        dispatch(setShowMainScreen(true));
        dispatch(setShowFirstScreen(false));
        dispatch(setResetFocusState(true));
      } else {
        dispatch(setShowMainScreen(false));
        dispatch(setShowFirstScreen(true));
        dispatch(setResetFocusState(true));
      }
      if (counter == 1) {
        TincanManager.data.percentage = 50;
        TincanManager.saveTincanData();
      } else if (counter == 2) {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
    };
  },

  toggleMessage: () => {
    return (dispatch, getState) => {
      dispatch(toggleToastMessage(true));
      setTimeout(() => {
        EventManager.broadcast("POSITIVE_FEEDBACK");
      }, 500);
    };
  },
};
