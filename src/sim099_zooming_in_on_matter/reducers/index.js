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

const getScreenId = (state = "", { type, value }) => {
  switch (type) {
    case actions.GET_SCREEN_ID:
      return value;
    default:
      return state;
  }
};

const getIsVisited = (state = [], { type, value }) => {
  switch (type) {
    case actions.IS_VISITED:
      let result = [];
      if (state.length > 0) {
        result = [...state];
        result.push(value);
      } else {
        result.push(value);
      }
      return result;
    case actions.IS_RESET:
      return [];
    default:
      return state;
  }
};

const getIsVisitedBoth = (state = [], { type, value }) => {
  switch (type) {
    case actions.IS_VISTED_BOTH:
      let result = [];
      if (state.length > 0) {
        result = [...state];
        result.push(value);
      } else {
        result.push(value);
      }
      return result;
    case actions.RESET_IS_VISTED_BOTH:
      let empty = [];
      return empty;
    default:
      return state;
  }
};

export const visitedNodes = (state = [], { type, node }) => {
  switch (type) {
    case actions.UPDATE_VISITED_NODE:
      return [...state, node];
    case actions.RESET_VISITED_NODE:
      return [];
    default:
      return state;
  }
};

export const getUpdateSlider = (state = 1, { type, value }) => {
  switch (type) {
    case actions.UPDATE_SLIDER:
      return value;
    default:
      return state;
  }
};

const getScreenNumber = (state = { screen: 1, btn: 0 }, { type, value }) => {
  switch (type) {
    case actions.SCREEN_NUMBER:
      let result = { ...state };
      result.screen = value.screen;
      result.btn = value.btn;
      return result;
    default:
      return state;
  }
};

const buttonId = (state = "", { type, value }) => {
  switch (type) {
    case actions.BUTTON_ID:
      return value;
    default:
      return state;
  }
};

const sliderVisitedValue = (state = ["1"], { type, val }) => {
  switch (type) {
    case actions.SLIDER_VISITED:
      return [...state, val];
    case actions.RESET_SLIDER_VISITED:
      return ["1"];
    default:
      return state;
  }
};

export default combineReducers({
  demoReducer,
  visitedNodes,
  getIsVisitedBoth,
  getUpdateSlider,
  getScreenNumber,
  buttonId,
  getScreenId,
  getIsVisited,
  sliderVisitedValue,
  ...reducers,
});
