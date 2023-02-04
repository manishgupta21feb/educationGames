import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const selectedOrganisms = (state = [], action) => {
  switch (action.type) {
    case actions.SELECT_ORGANISMS:
      if (state.indexOf(action.id) == -1) {
        return [...state, action.id];
      }
      return state;

    case actions.RESET_ORGANISMS:
      return [];

    default:
      return state;
  }
};
const selectedOrganism = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_ORGANISM:
      return action.id;

    case actions.RESET_ORGANISM:
      return "";

    default:
      return state;
  }
};

const selectedQuestion = (state = 1, { type }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return state + 1;
    case actions.RESET_QUESTION:
      return 1;
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

const selectedOption = (state = "", { type, option }) => {
  switch (type) {
    case actions.SELECT_OPTION:
      return option;
    default:
      return state;
  }
};

const answerAttempted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPTTED:
      return attempted;
    default:
      return state;
  }
};

const correctAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
};

const startActivity = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVITY_START:
      return action.val;
    default:
      return state;
  }
};

const feedbackNarration = (state = true, action) => {
  switch (action.type) {
    case actions.FEEDBACK_NARRATION:
      return action.val;
    default:
      return state;
  }
};

export default combineReducers({
  showStatic,
  correctAnswer,
  startActivity,
  selectedOption,
  answerAttempted,
  selectedOrganism,
  selectedQuestion,
  selectedOrganisms,
  feedbackNarration,
  ...reducers,
});
