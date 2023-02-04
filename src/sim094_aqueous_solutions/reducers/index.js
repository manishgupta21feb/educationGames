import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

export const getSelectedOption = (state = "", { type, value }) => {
  switch (type) {
    case actions.SELECT_OPTION:
      return value;
    default:
      return state;
  }
};

export const getSubmitBtnVisibility = (state = false, { type, value }) => {
  switch (type) {
    case actions.SUBMIT_BTN_VISIBILITY:
      return value;
    default:
      return state;
  }
};

export const getAnswer = (state = false, { type, value }) => {
  switch (type) {
    case actions.ANSWER:
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

export const getVideoStart = (state = false, { type, value }) => {
  switch (type) {
    case actions.VIDEO_ENDED:
      return value;

    default:
      return state;
  }
};

export const videoEnded = (state = false, { type, endState }) => {
  switch (type) {
    case actions.ON_VIDEO_ENDED:
      return endState;
    default:
      return state;
  }
};

export default combineReducers({
  getSelectedOption,
  getSubmitBtnVisibility,
  getAnswer,
  getQuestionNumber,
  getVideoStart,
  videoEnded,
  ...reducers,
});
