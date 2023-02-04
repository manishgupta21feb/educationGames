import { combineReducers } from "redux";
import * as actions from "../actions";
import reducers from "../../app/reducers";
import data from "../data";

const selectedOption = (state = "", { type, option }) => {
  switch (type) {
    case actions.SELECTED_OPTION:
      return option;
    default:
      return state;
  }
};

const answerAttempted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPTTED:
      return attempted;
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

export const countAttempts = (state = [], { type, value }) => {
  switch (type) {
    case actions.COUNT_ATTEMPTS:
      const indexVal = state.indexOf(value);
      if (indexVal == -1) {
        const _state = [...state, value];
        return _state;
      }
      // console.log("State2", state);
      return state;
    case actions.DELETE_ATTEMPTS:
      return [];
    default:
      return state;
  }
};

export const counterValues = (state = 0, { type, value }) => {
  switch (type) {
    case actions.COUNTER_VALUES:
      return value;
    default:
      return state;
  }
};

export const showMainScreen = (state = true, { type, value }) => {
  switch (type) {
    case actions.SHOW_MAIN_SCREEN:
      return value;
    default:
      return state;
  }
};

export const showFirstScreen = (state = false, { type, value }) => {
  switch (type) {
    case actions.SHOW_FIRST_SCREEN:
      return value;
    default:
      return state;
  }
};

export const showSecondScreen = (state = false, { type, value }) => {
  switch (type) {
    case actions.SHOW_SECOND_SCREEN:
      return value;
    default:
      return state;
  }
};

export const visitedPages = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_VISITED_PAGE:
      return [...state, value];
    case actions.CLEAR_VISITED_PAGES:
      return [];
    default:
      return state;
  }
};

export const clearButton = (state = false, { type, value }) => {
  switch (type) {
    case actions.CLEAR_BUTTON_PRESSED:
      return value;
    default:
      return state;
  }
};

const switchState = (state = false, { type, value }) => {
  switch (type) {
    case actions.SWITCH_STATE:
      return value;
    default:
      return state;
  }
};

const on = (state = "0", { type, value }) => {
  switch (type) {
    case actions.ON:
      return value;
    default:
      return state;
  }
};

const waveOne = (state = false, { type, value }) => {
  switch (type) {
    case actions.WAVE_ONE:
      return value;
    default:
      return state;
  }
};

const waveTwo = (state = false, { type, value }) => {
  switch (type) {
    case actions.WAVE_TWO:
      return value;
    default:
      return state;
  }
};

const redWave = (state = false, { type, value }) => {
  switch (type) {
    case actions.RED_WAVE:
      return value;
    default:
      return state;
  }
};

const blueWave = (state = false, { type, value }) => {
  switch (type) {
    case actions.BLUE_WAVE:
      return value;
    default:
      return state;
  }
};

const yellowWave = (state = false, { type, value }) => {
  switch (type) {
    case actions.YELLOW_WAVE:
      return value;
    default:
      return state;
  }
};

const animateRadiations = (state = false, { type, value }) => {
  switch (type) {
    case actions.ANIMATE_RADIATIONS:
      return value;
    default:
      return state;
  }
};

const switchCondition = (state = false, { type, value }) => {
  switch (type) {
    case actions.SWITCH_CONDITION:
      return value;
    default:
      return state;
  }
};

const forwardArrow = (state = false, { type, value }) => {
  switch (type) {
    case actions.FORWARD_ARROW:
      return value;
    default:
      return state;
  }
};

const reverseArrowOne = (state = false, { type, value }) => {
  switch (type) {
    case actions.REVERSE_ARROW_ONE:
      return value;
    default:
      return state;
  }
};
const reverseArrowTwo = (state = false, { type, value }) => {
  switch (type) {
    case actions.REVERSE_ARROW_TWO:
      return value;
    default:
      return state;
  }
};
const arrowThree = (state = false, { type, value }) => {
  switch (type) {
    case actions.ARROW_THREE:
      return value;
    default:
      return state;
  }
};
const showTable = (state = false, { type, value }) => {
  switch (type) {
    case actions.INFO_TABLE:
      return value;
    default:
      return state;
  }
};

const counter = (state = 0, { type, value }) => {
  switch (type) {
    case actions.COUNTER:
      return value;
    case actions.DELETE_COUNTS:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  // selectedOption,
  answerAttempted,
  showMainScreen,
  showFirstScreen,
  showSecondScreen,
  visitedPages,
  switchState,
  on,
  waveOne,
  waveTwo,
  redWave,
  blueWave,
  yellowWave,
  animateRadiations,
  switchCondition,
  forwardArrow,
  reverseArrowOne,
  reverseArrowTwo,
  arrowThree,
  showTable,
  counter,
  selectedOption,
  ...reducers,
});
