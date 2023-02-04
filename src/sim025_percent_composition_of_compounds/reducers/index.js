import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const elementData = (state = [], action) => {
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

const matchedItems = (state = [], { type, key }) => {
  switch (type) {
    case actions.ADD_MATCHED_ITEM:
      return [...state, key];
    case actions.RESET_MATCHED_ITEMS:
      return [];
    default:
      return state;
  }
};

const draggableItem = (state = null, { type, item }) => {
  switch (type) {
    case actions.SET_DRAGGABLE_ITEM:
      return item;
    case actions.RESET_DRAGGABLE_ITEM:
      return null;
    default:
      return state;
  }
};

const itemsDetail = (state = [], { type, itemDetails }) => {
  switch (type) {
    case actions.ADD_SELECTED_ITEM_DETAILS:
      return [...state, JSON.parse(JSON.stringify(itemDetails))];
    case actions.RESET_SELECTED_ITEM_DETAILS:
      return [];
    default:
      return state;
  }
};

const viewType = (state = "burger", { type, view }) => {
  switch (type) {
    case actions.SET_VIEW_TYPE:
      return view;
    default:
      return state;
  }
};

const setButtonShow = (state = false, action) => {
  switch (action.type) {
    case actions.UPDATE_SHOW_BUTTON:
      return action.val;
    default:
      return state;
  }
};

const showDropZone = (state = false, action) => {
  switch (action.type) {
    case actions.UPDATE_SHOW_DROP:
      return action.val;
    default:
      return state;
  }
};

const hideDroppedItem = (state = false, { type, value }) => {
  switch (type) {
    case actions.SET_HIDE_DROPPED_ITEM:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  showNext,
  toastMsg,
  viewType,
  dropElement,
  elementData,
  itemsDetail,
  matchedItems,
  showDropZone,
  draggableItem,
  setButtonShow,
  hideDroppedItem,
  accessibleListVisible,
  ...reducers,
});
