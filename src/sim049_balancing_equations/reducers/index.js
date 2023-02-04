import { combineReducers } from "redux";
import * as actions from "../actions";
import reducers from "../../app/reducers";

const selectedOption = (state = "synthesis_of_water", { type, option }) => {
  switch (type) {
    case actions.SELECT_OPTION:
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

const correctAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
};

const answered = (state = false, { type, value }) => {
  switch (type) {
    case actions.SET_ANSWERED:
      return value;
    default:
      return state;
  }
};

export const hydrogens = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_HYDROGEN:
      return [...state, ...Array(value).fill(1)];
    case actions.REMOVE_HYDROGEN:
      const array = [...state];
      array.splice(array.length - value, value);
      return array;
    case actions.CLEAR_VALUES:
      return [];
    default:
      return state;
  }
};

export const hydrogenProduct = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_HYDROGEN_PRODUCT:
      return [...state, ...Array(value).fill(1)];
    case actions.REMOVE_HYDROGEN_PRODUCT:
      const array = [...state];
      array.splice(array.length - value, value);
      return array;
    case actions.CLEAR_VALUES:
      return [];
    default:
      return state;
  }
};

export const addHydrogenTwo = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_HYDROGEN_TWO:
      return [...state, ...Array(value).fill(1)];
    case actions.REMOVE_HYDROGEN_TWO:
      const array = [...state];
      array.splice(array.length - value, value);
      return array;
    default:
      return state;
  }
};

export const addHydrogenTwoProduct = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_HYDROGEN_TWO_PRODUCT:
      return [...state, ...Array(value).fill(1)];
    case actions.REMOVE_HYDROGEN_TWO_PRODUCT:
      const array = [...state];
      array.splice(array.length - value, value);
      return array;
    default:
      return state;
  }
};

export const oxygens = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_OXYGEN:
      return [...state, ...Array(value).fill(1)];
    case actions.REMOVE_OXYGEN:
      const array = [...state];
      array.splice(array.length - value, value);
      return array;
    case actions.CLEAR_VALUES:
      return [];
    default:
      return state;
  }
};

export const oxygenProduct = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_OXYGEN_PRODUCT:
      return [...state, ...Array(value).fill(1)];
    case actions.REMOVE_OXYGEN_PRODUCT:
      const array = [...state];
      array.splice(array.length - value, value);
      return array;
    case actions.CLEAR_VALUES:
      return [];
    default:
      return state;
  }
};

export const oxygenProductTwo = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_OXYGEN_PRODUCT_TWO:
      return [...state, ...Array(value).fill(1)];
    case actions.REMOVE_OXYGEN_PRODUCT_TWO:
      const array = [...state];
      array.splice(array.length - value, value);
      return array;
    case actions.CLEAR_VALUES:
      return [];
    default:
      return state;
  }
};

export const carbons = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_CARBON:
      return [...state, ...Array(value).fill(1)];
    case actions.REMOVE_CARBON:
      const array = [...state];
      array.splice(array.length - value, value);
      return array;
    case actions.CLEAR_VALUES:
      return [];
    default:
      return state;
  }
};

export const carbonProduct = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_CARBON_PRODUCT:
      return [...state, ...Array(value).fill(1)];
    case actions.REMOVE_CARBON_PRODUCT:
      const array = [...state];
      array.splice(array.length - value, value);
      return array;
    case actions.CLEAR_VALUES:
      return [];
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
      const temp = [...state];
      const indexVal = state.indexOf(value);
      if (indexVal == -1) {
        temp.push(value);
      }
      return temp;
    case actions.DELETE_ATTEMPTS:
      return [];
    default:
      return state;
  }
};

export const counterValues = (state = "", { type, value }) => {
  switch (type) {
    case actions.COUNTER_VALUES:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  answered,
  correctAnswer,
  selectedOption,
  addHydrogenTwo,
  answerAttempted,
  addHydrogenTwoProduct,

  carbons,
  oxygens,
  hydrogens,
  countAttempts,
  oxygenProduct,
  carbonProduct,
  hydrogenProduct,
  oxygenProductTwo,
  resetCounterValues,
  counterValues,
  ...reducers,
});
