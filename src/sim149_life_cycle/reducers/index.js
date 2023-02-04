import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

export const selectedQuestion = (
  state = data.butterFlyFrog[0],
  { type, question }
) => {
  switch (type) {
    case actions.SELECTED_QUESTION:
      return question;
    default:
      return state;
  }
};

export const draggableData = (state = data.draggables, { type, val }) => {
  switch (type) {
    case actions.DRAGGABLE_DATA:
      return val;
    default:
      return state;
  }
};

export const count = (state = 0, { type, val }) => {
  switch (type) {
    case actions.COUNT:
      return val;
    default:
      return state;
  }
};

export const getCount = (state = 1, { type, val }) => {
  switch (type) {
    case actions.COUNT_VALUE:
      return val;
    default:
      return state;
  }
};

export const dndCount = (state = 0, { type, val }) => {
  switch (type) {
    case actions.DND_COUNT:
      return val;
    default:
      return state;
  }
};

export const getScreen = (state = true, { type, val }) => {
  switch (type) {
    case actions.SCREEN_SELECTION:
      return val;
    default:
      return state;
  }
};
export const visitedHotspotBtn = (state = [], { type, value }) => {
  switch (type) {
    case actions.BUTTON_VISITED:
      if (value != "") {
        return [...state, value];
      } else {
        return [];
      }

    default:
      return state;
  }
};
const currentHotSpot = (state = "", { type, id }) => {
  switch (type) {
    case actions.CURRENT_HOTSPOT:
      return id;
    default:
      return state;
  }
};

const rightOst = (state = {}, { type, val }) => {
  switch (type) {
    case actions.RIGHT_OST:
      return val;
    default:
      return state;
  }
};
const showAlert = (state = true, { type, val }) => {
  switch (type) {
    case actions.SHOW_ALERT:
      return val;
    default:
      return state;
  }
};
const draggableValue = (state = "", { type, dragValue }) => {
  switch (type) {
    case actions.SET_DRAGGABLE_VALUE:
      return dragValue;
    default:
      return state;
  }
};
const matchedItems = (state = [], { drag, drop, type, items }) => {
  switch (type) {
    case actions.SET_ITEMS_MATCHED:
      return [...state, { drag: { ...drag }, drop: { ...drop } }];
    case actions.UPDATE_ITEMS_MATCHED:
      return items;
    case actions.UPDATE_DROP_ZONE:
      let emptyState = [];
      return emptyState;

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
const correctAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.ANSWER:
      return val;
    default:
      return state;
  }
};

const setDroppable = (
  state = data.butterFlyFrog,
  { type, dropValue, dragValue, value, blnState, question }
) => {
  switch (type) {
    case actions.DROPPABLE_CHNAGE_STATE:
      let _state = [...state];

      let result = _state.map((element, idx) => {
        if (element.id == value) {
          element.hidden = blnState;

          return element;
        } else return element;
      });

      return result;

    case actions.DROPPABLE_CHANGE_FALSE:
      let _state1 = [...state];

      let result2 = _state1.map((elements) => {
        return elements.dropZones.map((drops) => {
          if (drops.hidden) {
            drops.hidden = false;
            return drops;
          } else return drops;
        });
      });

      return result2;
    case actions.SET_DROPPABLES:
      let _stateDrop = [...state];

      let idx = _stateDrop.findIndex((ele) => ele.id == question.id);

      return _stateDrop[idx].dropZones;
    case actions.DEFAULT_DROPZONE:
      return data.butterFlyFrog;
    default:
      return state;
  }
};

const showToastFive = (state = false, { type, val }) => {
  switch (type) {
    case actions.SHOW_TOAST_FIVE:
      return val;
    default:
      return state;
  }
};

const dialogText = (state = "", { type, txt }) => {
  switch (type) {
    case actions.SET_DIALOG_TEXT:
      return txt;
    default:
      return state;
  }
};

const selectedSubQuestion = (
  state = data.butterFlyFrog[0].rightQuestion[0],
  { type, val }
) => {
  switch (type) {
    case actions.SELECTED_SUB_QUESTION:
      return val;
    default:
      return state;
  }
};
export default combineReducers({
  selectedQuestion,
  draggableData,
  count,
  getScreen,
  visitedHotspotBtn,
  currentHotSpot,
  rightOst,
  showAlert,
  draggableValue,
  getCount,
  matchedItems,
  accessibleListVisible,
  correctAnswer,
  setDroppable,
  dndCount,
  showToastFive,
  selectedSubQuestion,
  dialogText,
  ...reducers,
});
