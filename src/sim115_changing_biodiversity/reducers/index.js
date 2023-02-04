import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

export const getEcosystemScreen = (state = "home", { type, value }) => {
  switch (type) {
    case actions.ECOSYSTEM_NAME:
      return value;
    default:
      return state;
  }
};

const getDropdownValue = (
  state = [{}, {}, {}, {}, {}, {}],
  { type, value }
) => {
  switch (type) {
    case actions.DROPDOWN_VALUE:
      return value;
    default:
      return state;
  }
};

const answerAttempted = (state = false, { type, value }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPTTED:
      return value;
    default:
      return state;
  }
};

const nextSection = (state = false, { type, value }) => {
  switch (type) {
    case actions.NEXT_SECTION:
      return value;
    default:
      return state;
  }
};

const correctAnswer = (state = false, { type, value }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return value;
    default:
      return state;
  }
};

const incorrectAnswer = (state = false, { type, value }) => {
  switch (type) {
    case actions.INCORRECT_ANSWER:
      return value;
    default:
      return state;
  }
};

const submitButton = (state = false, { type, value }) => {
  switch (type) {
    case actions.SUBMIT_BUTTON:
      return value;
    default:
      return state;
  }
};

const visitedHotspots = (state = [], { type, hotspot }) => {
  switch (type) {
    case actions.UPDATE_VISITED_HOTSPOTS:
      return [...state, hotspot];
    case actions.RESET_VISITED_HOTSPOTS:
      return [];
    default:
      return state;
  }
};

const selectedHotspot = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_HOTSPOT:
      return action.id;
    default:
      return state;
  }
};

const questionCount = (state = 0, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};

const correctOptions = (state = [], { type, item }) => {
  switch (type) {
    case actions.ADD_CORRECT_OPTIONS:
      const indexVal = state.indexOf(item);
      if (indexVal == -1) {
        const _state = [...state, item];
        return _state;
      }
      return state;
    case actions.REMOVE_ITEM_FROM_CORRECT:
      const index = state.indexOf(item);
      if (index !== -1) {
        const _state = [...state];
        _state.splice(index, 1);
        return _state;
      }
      return state;
    case actions.CLEAR_CORRECT_OPTIONS:
      return [];
    default:
      return state;
  }
};

const incorrectOptions = (state = [], { type, item }) => {
  switch (type) {
    case actions.ADD_INCORRECT_OPTIONS:
      return [...state, item];
    case actions.REMOVE_ITEM_FROM_INCORRECT:
      const index = state.indexOf(item);
      if (index !== -1) {
        const _state = [...state];
        _state.splice(index, 1);
        return _state;
      }
      return state;
    case actions.CLEAR_INCORRECT_OPTIONS:
      return [];
    default:
      return state;
  }
};

const clickedButtonValue = (state = [], { type, value }) => {
  switch (type) {
    case actions.CLICKED_BUTTON_VALUE:
      return [...state, value];
    case actions.RESET_CLICKED_BUTTON:
      return [];
    default:
      return state;
  }
};

const disabledButton = (state = false, { type, value }) => {
  switch (type) {
    case actions.DISABLED_BUTTON:
      return value;
    default:
      return state;
  }
};
const clickedButtons = (state = 0, { type, value }) => {
  switch (type) {
    case actions.CLICKED_BUTTON:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  questionCount,
  getEcosystemScreen,
  getDropdownValue,
  correctOptions,
  incorrectOptions,
  answerAttempted,
  correctAnswer,
  incorrectAnswer,
  submitButton,
  visitedHotspots,
  selectedHotspot,
  nextSection,
  clickedButtonValue,
  disabledButton,
  clickedButtons,
  ...reducers,
});
