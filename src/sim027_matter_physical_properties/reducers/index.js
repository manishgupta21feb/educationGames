import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

import data from "../data";

const elementData = (state = data.elements.map((e) => ({ ...e })), action) => {
  switch (action.type) {
    case actions.ELEMENT_DATA:
      return action.val;
    default:
      return state;
  }
};

const dropElement = (state = {}, action) => {
  switch (action.type) {
    case actions.DROP_ELEMENT:
      return action.val;
    default:
      return state;
  }
};

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};

const accessibleListVisible = (state = false, { type, val }) => {
  switch (type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return val;
    default:
      return state;
  }
};

const showNext = (state = false, action) => {
  switch (action.type) {
    case actions.UPDATE_SHOW_NEXT:
      return action.val;
    default:
      return state;
  }
};

const matchedItems = (
  state = { hard: [], wet: [], rough: [], flexible: [] },
  action
) => {
  switch (action.type) {
    case actions.ADD_MATCHED_ITEM:
      const itemKey = `${action.key}-${action.item}`;
      const check = state[action.key].find((e) => e.id == itemKey);
      if (!check) {
        const temp = { ...state };
        temp[action.key] = [
          ...temp[action.key],
          { id: itemKey, text: action.item },
        ];
        return temp;
      }
      return state;

    case actions.RESET_MATCHED_ITEMS:
      return { hard: [], wet: [], rough: [], flexible: [] };
    default:
      return state;
  }
};

const itemDroppedAt = (state = {}, { type, name, key }) => {
  switch (type) {
    case actions.UPDATE_DROPPED_AT:
      if (state[name]) {
        const check = state[name].indexOf(key) == -1;
        if (check) {
          const temp = { ...state };
          temp[name] = [...temp[name], key];
          return temp;
        }
        return state;
      } else {
        const temp = { ...state };
        temp[name] = [key];
        return temp;
      }
    case actions.RESET_DROPPED_AT:
      return {};
    default:
      return state;
  }
};

const draggableItem = (state = null, { type, item }) => {
  switch (type) {
    case actions.SET_DRAGGABLE_ITEM:
      return { ...item };
    case actions.RESET_DRAGGABLE_ITEM:
      return null;
    default:
      return state;
  }
};
const incorrectToastMsg = (state = "", { type, message }) => {
  switch (type) {
    case actions.SET_INCORRECT_TOAST_MESSAGE:
      return message;
    default:
      return state;
  }
};

const alreadyDroppedToastMessage = (state = "", { type, message }) => {
  switch (type) {
    case actions.SET_ALREADY_DROPPED_INCORRECT_TOAST_MESSAGE:
      return message;
    default:
      return state;
  }
};

export default combineReducers({
  showNext,
  toastMsg,
  dropElement,
  elementData,
  matchedItems,
  itemDroppedAt,
  draggableItem,
  incorrectToastMsg,
  accessibleListVisible,
  alreadyDroppedToastMessage,
  ...reducers,
});
