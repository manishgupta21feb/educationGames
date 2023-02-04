import * as actions from "../actions";
import reducers from "../../app/reducers";
import data from "../data";
import {
  insectsArray,
  getSelectedData,
  getALtData,
  resetInsectData,
} from "../helper.js";
import { combineReducers } from "redux";

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
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

const simCompletionStatus = (state = new Set(), { type, value }) => {
  switch (type) {
    case actions.SIM_COMPLETION_STATUS:
      state.add(value);
      return state;
    case actions.RESET_SIM_COMPLETION_STATUS:
      return new Set();
    default:
      return state;
  }
};

const pairInsects = (state = [], { type, value, status }) => {
  switch (type) {
    case actions.PAIR_INSECTS:
      let result = [...state];
      if (status) {
        result.splice(0, 1);
      } else {
        result.push(value);
      }
      return result;
    case actions.RESET_PAIR_INSECTS:
      return (state = []);
    default:
      return state;
  }
};

const selectedOptions = (
  state = { id: "rd0", radio: false },
  { type, value, radio }
) => {
  switch (type) {
    case actions.SELECTED_OPTIONS:
      return { id: value, radio: radio };
    case actions.RESET_OPTIONS:
      state.length = 0;
      return state;
    default:
      return state;
  }
};

const isRadioButtonDisable = (state = false, { type, value }) => {
  switch (type) {
    case actions.IS_RADIO_BUTTON_DISABLE:
      return value;
    default:
      return state;
  }
};

const addMateButtons = (state = true, { type, value }) => {
  switch (type) {
    case actions.Add_MATE_BUTTON:
      return value;
    default:
      return state;
  }
};

const getQuestionSet = (
  state = { ...data.question_area[0] },
  { type, item }
) => {
  switch (type) {
    case actions.GET_QUESTION_SET:
      return { ...data.question_area[item - 1] };
    default:
      return state;
  }
};

const nextButtonState = (state = false, { type, value }) => {
  switch (type) {
    case actions.NEXT_UPDATE_BUTTON_STATE:
      return value;
    default:
      return state;
  }
};

const isButtonType = (state = false, action) => {
  switch (action.type) {
    case actions.IS_BUTTON_TYPE:
      return action.value;
    default:
      return state;
  }
};

const getAltText = (state = data.firstScreenAlt, action) => {
  switch (action.type) {
    case actions.GET_ALT_TEXT:
      return getALtData(action.value, data.dynamicText);
    case actions.RESET_ALT_TEXT:
      return data.firstScreenAlt;
    default:
      return state;
  }
};

const addGrasshopper = (state = data.grasshoper_image_data, action) => {
  switch (action.type) {
    case actions.ADD_GRASSHOPPER:
      return insectsArray(action.value, state, data.insectsType);
    case actions.RESET_ADD_GRASSHOPPER:
      return data.grasshoper_image_data;
    default:
      return state;
  }
};

const conditionTree = (state = data.conditionTree, action) => {
  switch (action.type) {
    case actions.CONDITION_TREE:
      let genId = action.item == "rd1" || action.item == "rd2" ? 1 : 2;
      let result = getSelectedData(
        state,
        action.item,
        genId,
        action.parentA,
        action.parentB
      );
      return result;
    case actions.RESET_CONDITION_TREE:
      return data.conditionTree;
    default:
      return state;
  }
};

export default combineReducers({
  nextButtonState,
  addGrasshopper,
  toastMsg,
  selectedOptions,
  isResetButtonDisable,
  getQuestionSet,
  addMateButtons,
  isButtonType,
  isRadioButtonDisable,
  getAltText,
  pairInsects,
  conditionTree,
  simCompletionStatus,
  ...reducers,
});
