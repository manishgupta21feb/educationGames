import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const answerFeedbackPopupText = (state = "", { type, text }) => {
  switch (type) {
    case actions.SET_ANSWER_FEEDBACK_TEXT:
      return text;
    default:
      return state;
  }
};

const selectedResource = (state = "", { type, resource }) => {
  switch (type) {
    case actions.SELECT_RESOURCE:
      return resource;
    default:
      return state;
  }
};
const selectedResourceType = (state = "", { type, resourceType }) => {
  switch (type) {
    case actions.SELECT_RESOURCE_TYPE:
      return resourceType;
    default:
      return state;
  }
};

const visitedResources = (state = [], { type, resource }) => {
  switch (type) {
    case actions.ADD_VISITED_RESOURCE:
      return [...state, resource];
    case actions.RESET_VISITED_RESOURCES:
      return [];
    default:
      return state;
  }
};

const correctAnswerSubmitted = (state = false, { type, answer }) => {
  switch (type) {
    case actions.SET_CORRECT_ANSWER_SUBMITTED:
      return answer;
    default:
      return state;
  }
};

export default combineReducers({
  selectedResource,
  visitedResources,
  selectedResourceType,
  correctAnswerSubmitted,
  answerFeedbackPopupText,
  ...reducers,
});
