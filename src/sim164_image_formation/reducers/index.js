import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";
import { cloneDeep } from "lodash";
import { helper } from "../helper";

import { combineReducers } from "redux";
// Helper Methods //

const getQuestionsData = (
  state = helper.shuffle(cloneDeep(data.equationsData)),
  action
) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};
const getSubmitEnabler = (state = true, action) => {
  switch (action.type) {
    case actions.SUBMIT_ENABLER:
      return action.state;
    default:
      return state;
  }
};
const selectedOptions = (
  state = [[], [], []],
  { type, id, loc = 0, upState }
) => {
  switch (type) {
    case actions.TOGGLE_OPTION:
      const _state = [...state];
      const index = _state[loc].indexOf(id);
      if (index >= 0) {
        _state[loc].splice(index, 1);
        return _state;
      }
      _state[loc] = [...state[loc], id];
      return _state;
    case actions.RESET_OPTION:
      state = upState;
      return state;
    default:
      return state;
  }
};

const selectAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return id;
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

const submittedAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.SELECT_CORRECT_ANSWER:
      return val;
    default:
      return state;
  }
};

const selectedQuestion = (state = 0, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return question;

    default:
      return state;
  }
};
const getAnswerState = (
  state = [false, false, false],
  { type, FeedbackState }
) => {
  switch (type) {
    case actions.SELECTED_QUESTION_STATE:
      return FeedbackState;
    default:
      return state;
  }
};
const answerSubmitted = (state = false, { type, submitted }) => {
  switch (type) {
    case actions.ANSWER_SUBMITTED:
      return submitted;
    default:
      return state;
  }
};

const getQuestionCount = (state = 0, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
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

export default combineReducers({
  getQuestionCount,
  submittedAnswer,
  getQuestionsData,
  answerSubmitted,
  selectAnswerOption,
  toastMsg,
  selectedOptions,
  selectedQuestion,
  isNextButtonEnable,
  getSubmitEnabler,
  getAnswerState,
  ...reducers,
});
