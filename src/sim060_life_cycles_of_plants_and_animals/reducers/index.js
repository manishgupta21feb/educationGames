import * as actions from "../actions";
import data from '../data';
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const getDndScreenFor = (state = "home", { type, value }) => {
  switch (type) {
    case actions.SET_DND_SCREEN:
      return value;
    default:
      return state;
  }
};

export const getDragData = (
  state = data.draggables,
  { type, value }
) => {
  switch (type) {
    case actions.DRAG_DATA:
      return value;

    default:
      return state;
  }
};

export const getCurrentDraggingItem = (state = "", { type, item }) => {
  switch (type) {
    case actions.CURRENT_DRAGGING_ITEM:
      return item;

    default:
      return state;
  }
};

export const getDroppedItems = (
  state = {},
  { type, source, accept, items }
) => {
  switch (type) {
    case actions.ADD_DND_PAIR:
      return {
        ...state,
        [accept]: {
          accept,
          source: source.source,
        },
      };

    case actions.UPDATE_DND_PAIR:
      return {
        ...items,
      };
    default:
      return state;
  }
};

const getDropZones = (
  state = data.droppables.map((q) => ({ ...q })),
  { type, items }
) => {
  switch (type) {
    case actions.RESET_DROP_ZONES:
      return data.droppables.map((q) => ({ ...q }));
    case actions.UPDATE_DROP_ZONES:
      return items;
    default:
      return state;
  }
};

const getAccessibleListVisible = (state = false, { type, val }) => {
  switch (type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return val;
    default:
      return state;
  }
};

const getResult = (state = false, { type, val }) => {
  switch (type) {
    case actions.RESULT:
      return val;
    default:
      return state;
  }
};

const getSubmitCount = (state = 0, {type, val}) => {
  switch (type){
    case actions.SUBMIT_COUNT:
      if(state != 5 && val != 0){
        return state + val;
      }else {
        return val
      }
      
    default:
      return state
  }
};


export default combineReducers({
  getDndScreenFor,
  getDragData,
  getCurrentDraggingItem,
  getDroppedItems,
  getDropZones,
  getAccessibleListVisible,
  getResult,
  getSubmitCount,
  ...reducers,
});
