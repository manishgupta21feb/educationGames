import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

import data from "../data";

const selectedHotspot = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_HOTSPOT:
      return id;
    default:
      return state;
  }
};

const visitedNodes = (state = [], { type, node }) => {
  switch (type) {
    case actions.UPDATE_VISITED_NODE:
      return [...state, node];
    default:
      return state;
  }
};

const selectAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return id;
    default:
      return state;
  }
};

const updateHotspotType = (state = "", { type, value }) => {
  switch (type) {
    case actions.UPDATED_HOTSPOTS:
      return value;
    default:
      return state;
  }
};

const selectedType = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_TYPE:
      return id;
    default:
      return state;
  }
};

const hotspots = (
  state = data.hotspots.map((h) => ({
    ...h,
  })),
  { id, type, hotspotData, hotspotType }
) => {
  switch (type) {
    case actions.HOTSPOTS:
      return id;
    case actions.UPDATE_HOTSPOT_DATA:
      const index = state.findIndex((s) => s.id == id);
      const hotspot = { ...state[index], answer: hotspotType };
      const _state = [...state];
      _state[index] = hotspot;
      return _state;
    case actions.UPDATE_ALL_HOTSPOTS:
      return [...hotspotData];
    default:
      return state;
  }
};

const submittedAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.SELECT_CORRECT_ANSWER:
      return val;
    default:
      return state;
  }
};

const questionCount = (state = 1, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};

const allHotspotsAnswered = (state = false, { type, val }) => {
  switch (type) {
    case actions.ALL_HOTSPOTS_ANSWERED:
      return val;
    default:
      return state;
  }
};

const answerSubmitted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_SUBMITTED:
      return attempted;
    default:
      return state;
  }
};

const correctAttempt = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ATTEMPT:
      return correct;
    default:
      return state;
  }
};

const selectButtonOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_BUTTON_OPTION:
      return id;
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

const answerAttempted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPTTED:
      return attempted;
    default:
      return state;
  }
};

const partiallyCorrect = (state = false, { type, correct }) => {
  switch (type) {
    case actions.SET_PARTIALLY_CORRECT:
      return correct;
    default:
      return state;
  }
};

const matchedItems = (
  state = { living: [], nonliving: [] },
  { type, items, item, key }
) => {
  switch (type) {
    case actions.ADD_MACTHED_ITEM:
      if (state[key].indexOf(item) == -1) {
        const temp = { ...state };
        temp[key] = [...temp[key], item];
        let key2 = Object.keys(temp);
        key2.splice(key2.indexOf(key), 1);
        if (temp[key2].indexOf(item) >= 0) {
          temp[key2] = [...temp[key2]];
          temp[key2].splice(temp[key2].indexOf(item), 1);
        }
        return temp;
      }
      return state;
    case actions.RESET_MATCHED_ITEMS:
      return { living: [], nonliving: [] };
    case actions.SET_MATCHED_ITEMS:
      return items;
    default:
      return state;
  }
};

export default combineReducers({
  hotspots,
  visitedNodes,
  selectedType,
  matchedItems,
  questionCount,
  correctAnswer,
  correctAttempt,
  selectedHotspot,
  answerAttempted,
  submittedAnswer,
  answerSubmitted,
  partiallyCorrect,
  updateHotspotType,
  selectAnswerOption,
  selectButtonOption,
  allHotspotsAnswered,
  ...reducers,
});
