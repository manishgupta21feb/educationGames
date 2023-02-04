import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import { helper } from "../helper";
import { cloneDeep } from "lodash";
import data from "../data";

const updateTabsData = (
  state = cloneDeep(data.plantData.hotSpots),
  { type, _data }
) => {
  switch (type) {
    case actions.HOT_SPOTS:
      return _data;
    default:
      return state;
  }
};
const getAssessmentData = (
  state = cloneDeep(data.equationsData),
  { type, _data }
) => {
  switch (type) {
    case actions.ASSESSMENT_DATA:
      return _data;
    default:
      return state;
  }
};
const getLocationQuestion = (
  // Plant part question
  state = helper.shuffle(cloneDeep(data.plantQuestions)),
  { type, _data }
) => {
  switch (type) {
    case actions.LOCATION_QUESTION:
      return _data;
    default:
      return state;
  }
};
const getCurrentPart = (state = 0, { type, _data }) => {
  switch (type) {
    case actions.CURRENT_PART:
      return _data;
    default:
      return state;
  }
};
const getQuestionLevel = (state = 0, { type, _data }) => {
  switch (type) {
    case actions.CURRENT_QUESTION_LEVEL:
      return _data;
    default:
      return state;
  }
};
const getCurrentQuestion = (state = 0, { type, _data }) => {
  // Assessment question counter
  switch (type) {
    case actions.CURRENT_QUESTION:
      return _data;
    default:
      return state;
  }
};
const getUserSelection = (state = "", { type, _data }) => {
  // Assessment question counter
  switch (type) {
    case actions.USER_SELECTION:
      return _data;
    default:
      return state;
  }
};
const getSubmitActive = (state = true, { type, _data }) => {
  // Assessment question counter
  switch (type) {
    case actions.SUBMIT_ACTIVE:
      return _data;
    default:
      return state;
  }
};

const getActivityMode = (
  state = "structure" /*structure is base rest can be change*/,
  { type, _data }
) => {
  switch (type) {
    case actions.ACTIVITY_MODE:
      return _data;
    default:
      return state;
  }
};
const getSelectionData = (
  state = {} /*structure is base rest can be change*/,
  { type, _data }
) => {
  switch (type) {
    case actions.SELECTION_DATA:
      return _data;
    default:
      return state;
  }
};
const setToastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};
const isNextButtonEnable = (state = true, { type, val }) => {
  switch (type) {
    case actions.NEXT_BUTTON_ENABLE:
      return val;
    default:
      return state;
  }
};
const getAssessmentSelection = (state = [], { type, _data }) => {
  switch (type) {
    case actions.ASSESSMENT_SELECTION:
      return _data;
    default:
      return state;
  }
};
const getSubmitFocus = (state = false, { type, _data }) => {
  switch (type) {
    case actions.SUBMIT_FOCUS:
      return _data;
    default:
      return state;
  }
};
export default combineReducers({
  updateTabsData,
  getLocationQuestion,
  getCurrentPart,
  getAssessmentData,
  getCurrentQuestion,
  getActivityMode,
  getQuestionLevel,
  getUserSelection,
  getSubmitActive,
  getSelectionData,
  setToastMsg,
  isNextButtonEnable,
  getAssessmentSelection,
  getSubmitFocus,
  ...reducers,
});
