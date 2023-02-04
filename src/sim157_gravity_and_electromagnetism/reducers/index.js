import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const demoReducer = (state = "", { type, value }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return value;
    default:
      return state;
  }
};

const selectedAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECTED_ANSWER:
      return id;
    default:
      return state;
  }
};

const massCounterOne = (state = [100], { type, value }) => {
  switch (type) {
    case actions.MASS_COUNTER_ONE:
      return value;
    default:
      return state;
  }
};

const massCounterTwo = (state = 100, { type, value }) => {
  switch (type) {
    case actions.MASS_COUNTER_TWO:
      return value;
    default:
      return state;
  }
};

const chargeCounterOne = (state = 0, { type, value }) => {
  switch (type) {
    case actions.CHARGE_COUNTER_ONE:
      return value;
    default:
      return state;
  }
};

const chargeCounterTwo = (state = 0, { type, value }) => {
  switch (type) {
    case actions.CHARGE_COUNTER_TWO:
      return value;
    default:
      return state;
  }
};

const distanceCounter = (state = 0, { type, value }) => {
  switch (type) {
    case actions.DISTANCE_COUNTER:
      return value;
    default:
      return state;
  }
};

export const resetCounterValues = (state = false, { type, value }) => {
  switch (type) {
    case actions.RESET_COUNTER:
      return value;
    default:
      return state;
  }
};

export const counterValueOne = (state = null, { type, value }) => {
  switch (type) {
    case actions.COUNTER_VALUE_ONE:
      return value;
    default:
      return state;
  }
};

export const counterValueTwo = (state = null, { type, value }) => {
  switch (type) {
    case actions.COUNTER_VALUE_TWO:
      return value;
    default:
      return state;
  }
};

export const previousValue = (state = [8], { type, value }) => {
  switch (type) {
    case actions.PREVIOUS_VALUE:
      return [...state, value];
    case actions.CLEAR_VALUES:
      return [8];
    default:
      return state;
  }
};

export const previousMassOne = (state = [200], { type, value }) => {
  switch (type) {
    case actions.PREVIOUS_MASS_ONE:
      return [...state, value];
    case actions.CLEAR_VALUES:
      return [200];
    default:
      return state;
  }
};

export const previousMassTwo = (state = [200], { type, value }) => {
  switch (type) {
    case actions.PREVIOUS_MASS_TWO:
      return [...state, value];
    case actions.CLEAR_VALUES:
      return state;
    default:
      return state;
  }
};

export const previousChargeOne = (state = [2], { type, value }) => {
  switch (type) {
    case actions.PREVIOUS_CHARGE_ONE:
      return [...state, value];
    case actions.CLEAR_VALUES:
      return [2];
    default:
      return state;
  }
};

export const previousChargeTwo = (state = [1], { type, value }) => {
  switch (type) {
    case actions.PREVIOUS_CHARGE_TWO:
      return [...state, value];
    case actions.CLEAR_VALUES:
      return state;
    default:
      return state;
  }
};

export const visitedForce = (state = [], { type, value }) => {
  switch (type) {
    case actions.VISITED_FORCE:
      const check = state.indexOf(value) < 0;
      if (check) {
        const temp = [...state, value];
        return temp;
      }
      return state;
    case actions.CLEAR_VISITED_FORCES:
      return [];
    default:
      return state;
  }
};

export const buttonPlusMinus = (state = "", { type, value }) => {
  switch (type) {
    case actions.BUTTON_PLUS_MINUS:
      return value;
    default:
      return state;
  }
};

export const testButtonState = (state = true, { type, value }) => {
  switch (type) {
    case actions.TEST_BUTTON_STATE:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  demoReducer,
  selectedAnswerOption,
  massCounterOne,
  massCounterTwo,
  chargeCounterOne,
  chargeCounterTwo,
  distanceCounter,
  resetCounterValues,
  counterValueOne,
  counterValueTwo,
  previousValue,
  previousMassOne,
  previousMassTwo,
  previousChargeOne,
  previousChargeTwo,
  visitedForce,
  buttonPlusMinus,
  testButtonState,
  ...reducers,
});
