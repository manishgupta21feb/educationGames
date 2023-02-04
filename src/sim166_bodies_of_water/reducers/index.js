import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const hotspots = (state = data.hotspots, action) => {
  switch (action.type) {
    case actions.HOTSPOTS:
      return action.payload;
    case actions.UPDATE_VISITED_HOTSPOTS:
      return action.payload;
    default:
      return state;
  }
};
const selectedHotspot = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_HOTSPOT:
      return action.payload;
    default:
      return state;
  }
};
const isVideoVisible = (state = false, action) => {
  switch (action.type) {
    case actions.SHOW_VIDEO_DATA:
      return action.payload;
    default:
      return state;
  }
};
const screenNumber = (state = 1, action) => {
  switch (action.type) {
    case actions.GET_SCREEN:
      return action.payload;
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
const elementData = (state = [...data.venDiagramData.elements], action) => {
  switch (action.type) {
    case actions.ELEMENT_DATA:
      return action.payload;
    case actions.DISABLE_DRAGGABLE:
      const disabledDraggable = state.map((item) => {
        if (item.name === action.data.answerId) {
          return {
            ...item,
            isDisable: action.data.isDisable,
          };
        } else return item;
      });
      return disabledDraggable;
    default:
      return state;
  }
};
const selectedDraggable = (state = "", { type, val }) => {
  switch (type) {
    case actions.SELECT_DRAGGABLE:
      return val;
    default:
      return state;
  }
};
const matchedItems = (state = [], { drag, drop, type, items }) => {
  switch (type) {
    case actions.ADD_MATCHED_ITEM:
      return [...state, { drag: { ...drag }, drop: { ...drop } }];

    case actions.RESET_MATCHED_ITEMS:
      return [];

    case actions.UPDATE_ITEMS_MATCHED:
      return items;
    default:
      return state;
  }
};
const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

const showStatic = (state = false, { type, staticState }) => {
  switch (type) {
    case actions.SET_STATIC:
      return staticState;
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

export default combineReducers({
  hotspots,
  selectedHotspot,
  isVideoVisible,
  screenNumber,
  accessibleListVisible,
  elementData,
  selectedDraggable,
  matchedItems,
  toastMsg,
  showStatic,
  partiallyCorrect,
  ...reducers,
});
