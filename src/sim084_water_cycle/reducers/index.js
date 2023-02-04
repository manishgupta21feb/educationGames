import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const matchedItems = (state = [], { drag, drop, type, items }) => {
  switch (type) {
    case actions.SET_ITEMS_MATCHED:
      return [...state, { drag: { ...drag }, drop: { ...drop } }];
    case actions.UPDATE_ITEMS_MATCHED:
      return items;
    case actions.UPDATE_DROP_ZONE:
      state = [];
      return state;

    default:
      return state;
  }
};
const showAlert = (state = false, { type, val }) => {
  switch (type) {
    case actions.SHOW_ALERT:
      return val;
    default:
      return state;
  }
};

const setDraggable = (state = "", { type, dragValue }) => {
  switch (type) {
    case actions.SET_DRAGGABLE_VALUE:
      return dragValue;
    default:
      return state;
  }
};

const droppableValue = (state = "", { type, dropValue }) => {
  switch (type) {
    case actions.SET_DROPPABLE_VALUE:
      return dropValue;
    default:
      return state;
  }
};

const setDroppable = (
  state = [...data.droppable],
  { type, value, blnState, resetValue }
) => {
  switch (type) {
    case actions.DROPPABLE_CHNAGE_STATE:
      const stateItem = state;
      return stateItem.map((element) => {
        if (element.id == value) {
          const _element = { ...element };
          _element.hidden = blnState;
          return _element;
        } else {
          return element;
        }
      });
    case actions.DROPPABLE_CHANGE_FALSE:
      return state.map((element, idx) => {
        const _e = { ...element };
        _e.hidden = false;
        return _e;

        return element;
      });

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

const holdSingleDrag = (state = [], { type, drag, drop, item }) => {
  switch (type) {
    case actions.HOLD_SINGLE_DRAGGABLE:
      return [{ drag: { ...drag }, drop: { ...drop } }];
    case actions.UPDATE_SINGLE_DRAGGABLE:
      return item;
    default:
      return state;
  }
};

const updateToastMsgReducer = (state = "", { type, val }) => {
  switch (type) {
    case actions.TOAST_MESSAGE:
      return val;
    default:
      return state;
  }
};

const submitButtonState = (state = true, { type, val }) => {
  switch (type) {
    case actions.SUBMIT_BUTTON_STATE:
      return val;
    default:
      return state;
  }
};

const NextButtonState = (state = false, { type, val }) => {
  switch (type) {
    case actions.NEXT_BUTTON_STATE:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  matchedItems,
  setDraggable,
  setDroppable,
  accessibleListVisible,
  holdSingleDrag,
  submitButtonState,
  NextButtonState,
  droppableValue,
  updateToastMsgReducer,
  showAlert,
  ...reducers,
});
