import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const screenStatus = (state = "main-screen", { type, status }) => {
  switch (type) {
    case actions.SET_SCREEN_STATUS:
      return status;
    default:
      return state;
  }
};

const clickedCycle = (state = "", { type, cycle }) => {
  switch (type) {
    case actions.SET_CLICKEDCYCLE:
      return cycle;
    default:
      return state;
  }
};

const initialState = {
  first: [],
  second: [],
  third: [],
  forth: []
}

const visitedHotSpot = (state = initialState, { type, hotspot }) => {
  switch (type) {
    case actions.UPDATE_VISITED_HOTSPOT: {
      if (hotspot == 'carbon-info' || hotspot == 'nitrogen-info') {
        return {
          ...state,
          first: [...state.first, hotspot]
        }
      }
      if (hotspot == 'photosynthesis' || hotspot == 'carbonDioxide-info') {
        return {
          ...state,
          second: [...state.second, hotspot],
        }
      }
      if (hotspot == 'ocean' || hotspot == 'fossil-fuels' || hotspot == 'climate') {
        return {
          ...state,
          third: [...state.third, hotspot]
        }
      }
      if (hotspot == 'nitrogen-fixation' || hotspot == 'nitrogen-ND') {
        return {
          ...state,
          forth: [...state.forth, hotspot]
        }
      }
    }
    case 'RESET_VISITED_HOTSPOT': {
      return {
        first: [],
        second: [],
        third: [],
        forth: []
      }
    }
    default:
      return state;
  }
};

const answerAttempted = (state = false, { type, attempt }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPT:
      return attempt;
    default:
      return state;
  }
};

const correctAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
};

const selectedOption = (state = "", { type, option }) => {
  switch (type) {
    case actions.SELECT_OPTION:
      return option;
    default:
      return state;
  }
};

const checkboxOption = (state = [], { type, option }) => {
  switch (type) {
    case actions.SET_CHECKBOX_OPTION: {
      if (state.indexOf(option) >= 0) {
        return state.filter((e) => e !== option);
      } else {
        return [...state, option];
      }
    }
    case actions.RESET_CHECKBOX_OPTION: {
      return []
    }
    default:
      return state;
  }
};

export default combineReducers({
  screenStatus,
  visitedHotSpot,
  clickedCycle,
  answerAttempted,
  correctAnswer,
  selectedOption,
  checkboxOption,
  ...reducers,
});
