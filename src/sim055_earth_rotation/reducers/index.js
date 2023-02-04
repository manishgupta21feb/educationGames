import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const getVideoEnd = (state = false, { type, value }) => {
  switch (type) {
    case actions.VIDEO_END:
      return value;
    default:
      return state;
  }
};

export const getSelectedOption = (state = "", { type, value }) => {
  switch (type) {
    case actions.SELECT_OPTION:
      return value;

    default:
      return state;
  }
};

export const getRadioBtnChecked = (state = false, { type, value }) => {
  switch (type) {
    case actions.CHECKED_OPTION:
      return value;

    default:
      return state;
  }
};

export const getIsAnswerCorrect = (state = false, { type, value }) => {
  switch (type) {
    case actions.IS_ANSWER_CORRECT:
      return value;

    default:
      return state;
  }
};

export const getQuestionNumber = (state = 0, { type, value }) => {
  switch (type) {
    case actions.QUESTION_NUMBER:
      return value;

    default:
      return state;
  }
};

export const getLevelOneComplete = (state = false, { type, value }) => {
  switch (type) {
    case actions.LEVEL_ONE:
      return value;

    default:
      return state;
  }
};

export const getUpdateSlider = (state = 0, { type, value }) => {
  switch (type) {
    case actions.UPDATE_SLIDER:
      return value;
    default:
      return state;
  }
};

export const getLevel = (state = 0, { type, value }) => {
  switch (type) {
    case actions.LEVEL:
      return value;
    default:
      return state;
  }
};

export const getViewPlayed = (state = [], {type, value}) => {
  switch (type) {
    case actions.VIEW_PLAYED:
      if(!state.includes(value)){
        return [
          ...state,
          value,
        ]
      }
    default:
      return state;
  }
};

export default combineReducers({
  getVideoEnd,
  getSelectedOption,
  getRadioBtnChecked,
  getIsAnswerCorrect,
  getQuestionNumber,
  getLevelOneComplete,
  getUpdateSlider,
  getLevel,
  getViewPlayed,
  ...reducers,
});
