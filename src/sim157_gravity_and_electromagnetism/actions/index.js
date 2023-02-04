import * as actions from "../../app/actions";

export const DEMO_ACTION = "DEMO_ACTION";

export const common = { ...actions };
import data from "../data/data.en";
import { isAndroid } from "react-device-detect";

export const SELECTED_ANSWER = "SELECTED_ANSWER";
export const MASS_COUNTER_ONE = "MASS_COUNTER_ONE";
export const MASS_COUNTER_TWO = "MASS_COUNTER_TWO";
export const CHARGE_COUNTER_ONE = "CHARGE_COUNTER_ONE";
export const CHARGE_COUNTER_TWO = "CHARGE_COUNTER_TWO";
export const DISTANCE_COUNTER = "DISTANCE_COUNTER";
export const INCREMENT_CLICK = "INCREMENT_CLICK";
export const DECREMENT_CLICK = "DECREMENT_CLICK";
export const RESET_COUNTER = "RESET_COUNTER";

export const COUNTER_VALUE_ONE = "COUNTER_VALUE_ONE";
export const COUNTER_VALUE_TWO = "COUNTER_VALUE_TWO";

export const PREVIOUS_VALUE = "PREVIOUS_VALUE";
export const PREVIOUS_CHARGE_ONE = "PREVIOUS_CHARGE_ONE";
export const PREVIOUS_CHARGE_TWO = "PREVIOUS_CHARGE_TWO";
export const PREVIOUS_MASS_ONE = "PREVIOUS_MASS_ONE";
export const PREVIOUS_MASS_TWO = "PREVIOUS_MASS_TWO";
export const CLEAR_VALUES = "CLEAR_VALUES";
export const VISITED_FORCE = "VISITED_FORCE";
export const CLEAR_VISITED_FORCES = "CLEAR_VISITED_FORCES";
export const BUTTON_PLUS_MINUS = "BUTTON_PLUS_MINUS";
export const TEST_BUTTON_STATE = "TEST_BUTTON_STATE";

export const setCounterOne = (value) => {
  return {
    value,
    type: COUNTER_VALUE_ONE,
  };
};

export const setCounterTwo = (value) => {
  return {
    value,
    type: COUNTER_VALUE_TWO,
  };
};

export const selectedAnswer = (id) => {
  return {
    id,
    type: SELECTED_ANSWER,
  };
};

export const setMassOne = (value) => {
  return {
    value,
    type: MASS_COUNTER_ONE,
  };
};

export const setMassTwo = (value) => {
  return {
    value,
    type: MASS_COUNTER_TWO,
  };
};

export const setChargeOne = (value) => {
  return {
    value,
    type: CHARGE_COUNTER_ONE,
  };
};

export const setChargeTwo = (value) => {
  return {
    value,
    type: CHARGE_COUNTER_TWO,
  };
};

export const setDistance = (value) => {
  return {
    value,
    type: DISTANCE_COUNTER,
  };
};

export const resetCounterValues = (value) => {
  return {
    type: RESET_COUNTER,
    value,
  };
};

export const setPreviousValue = (value) => {
  return {
    value,
    type: PREVIOUS_VALUE,
  };
};

export const setPreviousMassOne = (value) => {
  return {
    value,
    type: PREVIOUS_MASS_ONE,
  };
};

export const setPreviousMassTwo = (value) => {
  return {
    value,
    type: PREVIOUS_MASS_TWO,
  };
};

export const setPreviousChargeOne = (value) => {
  return {
    value,
    type: PREVIOUS_CHARGE_ONE,
  };
};

export const setPreviousChargeTwo = (value) => {
  return {
    value,
    type: PREVIOUS_CHARGE_TWO,
  };
};

export const clearAllValues = () => {
  return {
    type: CLEAR_VALUES,
  };
};

export const setVisitedForce = (value) => {
  return {
    value,
    type: VISITED_FORCE,
  };
};

export const clearVisitedForces = () => {
  return {
    type: CLEAR_VISITED_FORCES,
  };
};

export const setCounterButton = (value) => {
  return {
    value,
    type: BUTTON_PLUS_MINUS,
  };
};

export const setTestButtonState = (value) => {
  return {
    value,
    type: TEST_BUTTON_STATE,
  };
};

export const thunks = {
  onTestClick: () => {
    return (dispatch, getState) => {
      const {
        selectedAnswerOption: option,
        counterValueOne: one,
        counterValueTwo: two,
        previousValue,
        previousMassOne,
        previousChargeOne,
      } = getState();
      dispatch(setTestButtonState(true));

      dispatch(setVisitedForce(option));

      let sum = one + two;

      if (option == 1) {
        dispatch(setMassOne(one));
        if (sum != previousMassOne[previousMassOne.length - 1]) {
          dispatch(setPreviousMassOne(sum));
        }
        dispatch(setMassTwo(two));
      }
      if (option == 2) {
        dispatch(setChargeOne(one));
        if (sum != previousChargeOne[previousChargeOne.length - 1]) {
          dispatch(setPreviousChargeOne(sum));
        }
        dispatch(setChargeTwo(two));
      }
      if (option == 3) {
        dispatch(setDistance(one));
        if (one != previousValue[previousValue.length - 1]) {
          dispatch(setPreviousValue(one));
        }
      }

      let livetext = "Demo live text";

      if (isAndroid) {
        dispatch(common.thunks.ariaLiveAssertive(livetext));
      } else {
        dispatch(common.ariaLiveText(livetext));
        setTimeout(() => {
          dispatch(common.ariaLiveText(" "));
        }, 300);
      }

      const { visitedForce } = getState();

      if (visitedForce.length < 3) {
        TincanManager.data.percentage = parseInt(
          (visitedForce.length / 3) * 100
        );
        TincanManager.saveTincanData();
      } else {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
    };
  },

  onChangeLiveText: (count) => {
    return (dispatch, getState) => {
      const { selectedAnswerOption: option, buttonPlusMinus } = getState();

      let liveText = "";

      if (buttonPlusMinus == "") return;
      if (option == 1) {
        dispatch(setTestButtonState(false));
        liveText =
          buttonPlusMinus == "1"
            ? data.massLiveTextOne.replace("-1-", count)
            : data.massLiveTextTwo.replace("-1-", count);
      }
      if (option == 2) {
        dispatch(setTestButtonState(false));
        liveText =
          buttonPlusMinus == "1"
            ? data.chargeLiveTextOne.replace("-1-", count)
            : data.chargeLiveTextTwo.replace("-1-", count);
      }
      if (option == 3) {
        dispatch(setTestButtonState(false));
        liveText =
          buttonPlusMinus == "1"
            ? data.distanceLiveTextOne.replace("-1-", count)
            : data.distanceLiveTextTwo.replace("-1-", count);
      }

      if (isAndroid) {
        dispatch(common.thunks.ariaLiveAssertive(liveText));
      } else {
        dispatch(common.ariaLiveText(liveText));
        setTimeout(() => {
          dispatch(common.ariaLiveText(" "));
        }, 300);
      }
    };
  },

  resetActivity: () => {
    return (dispatch, getState) => {
      dispatch(common.toggleToastMessage(false));
      dispatch(common.setResetFocusState(true));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(setTestButtonState(true));
      dispatch(clearAllValues());
      dispatch(clearVisitedForces());
      dispatch(selectedAnswer(""));
      dispatch(setCounterButton(""));
      dispatch(setMassOne(100));
      dispatch(setMassTwo(100));
      dispatch(setChargeOne(0));
      dispatch(setChargeTwo(0));
      dispatch(setDistance(0));
      TincanManager.resetTincanData();
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
      setTimeout(() => {
        dispatch(common.togglePopup(1));
      }, 100);
    };
  },
};
