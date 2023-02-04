import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";
import { findNextNode } from "../helper.js";

let initState = JSON.parse(JSON.stringify(data.screenData));
const getCurrentScreenData = (state = initState, action) => {
  switch (action.type) {
    case actions.CURRENT_SCREEN_DATA:
      let res = findNextNode(state, action.params);
      return res;
    case actions.RESET_CURRENT_SCREEN_DATA:
      return data.screenData;
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

const selectedRadioOptions = (
  state = { id: "rd0", radio: false },
  { type, value, radio }
) => {
  switch (type) {
    case actions.SELECTED_RADIO_OPTIONS:
      return { id: value, radio: radio };
    case actions.RESET_RADIO_OPTIONS:
      return { id: "rd0", radio: false };
    default:
      return state;
  }
};

const getIsContinueDisable = (state = false, action) => {
  switch (action.type) {
    case actions.IS_CONTINUE_DISABLE:
      return action.item;
    default:
      return state;
  }
};

const getDisableDD = (state = [], action) => {
  switch (action.type) {
    case actions.DISABLE_DD:
      return action.items;
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

const getAccessibleItem1 = (
  state = [data.screenData[5].img[0]],
  { type, val }
) => {
  switch (type) {
    case actions.ACCESSIBLE_ITEM_1:
      return val;
    default:
      return state;
  }
};

const getAccessibleItem2 = (
  state = data.screenData[10].compoundData[2].dropZone,
  { type, val }
) => {
  switch (type) {
    case actions.ACCESSIBLE_ITEM_2:
      let result = state.map((value, i) => {
        if (value.id == val) {
          value.hidden = true;
          return value;
        } else {
          return value;
        }
      });
      return result;
    default:
      return state;
  }
};

let initValue = [{ id: "1" }];
const getMatchedValue = (state = initValue, { type, val }) => {
  switch (type) {
    case actions.MATCHTED_VALUE:
      let result = [];
      if (state.length == 0) {
        result.push(val);
      } else {
        result = [...state, val];
      }
      return result;
    case actions.RESET_MATCHTED_VALUE:
      return initValue;
    default:
      return state;
  }
};

let initArr = [];
const getMatchedValue2 = (state = initArr, { type, val }) => {
  switch (type) {
    case actions.MATCHTED_VALUE2:
      let result = [];
      if (state.length == 0) {
        result.push(val);
      } else {
        result = [...state, val];
      }
      return result;
    case actions.RESET_MATCHTED_VALUE2:
      return initArr;
    default:
      return state;
  }
};

const getDND1DragItems = (state = "", action) => {
  switch (action.type) {
    case actions.DND1_DRAG_ITEM:
      return action.item;
    default:
      return state;
  }
};

const getVisitedHotspot = (state = [], action) => {
  switch (action.type) {
    case actions.VISITED_HOTSPOT:
      return action.val;
    default:
      return state;
  }
};

const isResetButtonDisable = (state = true, { type, data }) => {
  switch (type) {
    case actions.IS_RESET_BUTTON_DISABLE:
      return data;
    default:
      return state;
  }
};

const getAtom1 = (state = {}, { type, item }) => {
  switch (type) {
    case actions.SET_ATOM1:
      return item;
    default:
      return state;
  }
};

const getAtom2 = (state = {}, { type, item }) => {
  switch (type) {
    case actions.SET_ATOM2:
      return item;
    default:
      return state;
  }
};

const getAtom3 = (state = {}, { type, item }) => {
  switch (type) {
    case actions.SET_ATOM3:
      return item;
    default:
      return state;
  }
};

const getSubmitButton = (state = true, { type, val }) => {
  switch (type) {
    case actions.SUBMIT_BUTTON:
      return val;
    default:
      return state;
  }
};
const screenVisitedValue = (state = false, { type, val }) => {
  switch (type) {
    case actions.SCREEN_VISITED:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  toastMsg,
  getIsContinueDisable,
  getSubmitButton,
  selectedRadioOptions,
  isResetButtonDisable,
  getCurrentScreenData,
  getAtom1,
  getAtom2,
  getAtom3,
  getDisableDD,
  getDND1DragItems,
  accessibleListVisible,
  getMatchedValue,
  getAccessibleItem1,
  getAccessibleItem2,
  getMatchedValue2,
  getVisitedHotspot,
  screenVisitedValue,
  ...reducers,
});
