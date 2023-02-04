import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

const shuffleData = (data) => data.sort(() => Math.random() - 0.5);

const fetchMcqs = (state = { allMcq: [], selectedMcq: {} }, action) => {
  switch (action.type) {
    case actions.FETCH_MCQ:
      return {
        allMcq: shuffleData(action.data),
      };
    case actions.SELECT_MCQ:
      return {
        ...state,
        selectedMcq: state.allMcq[action.data],
      };
    case actions.RESET_MCQS:
      return { allMcq: [], selectedMcq: {} };
    default:
      return state;
  }
};
const countMcq = (state = 0, action) => {
  switch (action.type) {
    case actions.MCQ_COUNT:
      return action.data;
    default:
      return state;
  }
};

const selectAnswerOption = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_ANSWER_OPTION:
      return action.data;
    default:
      return state;
  }
};

const answerSubmitted = (state = false, action) => {
  switch (action.type) {
    case actions.ANSWER_SUBMITTED:
      return action.data;
    default:
      return state;
  }
};
const correctAnswer = (state = false, action) => {
  switch (action.type) {
    case actions.SELECT_CORRECT_ANSWER:
      return action.data;
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

const fetchInfoData = (
  state = { hintInfo: [], selectedContent: {} },
  action
) => {
  switch (action.type) {
    case actions.FETCH_INFOS:
      return {
        hintInfo: action.data,
      };
    case actions.SELECT_INFO:
      return {
        ...state,
        selectedContent: state.hintInfo[action.data],
      };
    default:
      return state;
  }
};

const fetchDraggableItems = (state = [...data.dragExperimentSetup], action) => {
  switch (action.type) {
    case actions.FETCH_DRAGGABLE_ITEMS:
      return action.data;
    default:
      return state;
  }
};

const fetchDroppableItems = (state = [...data.dropExperimentSetup], action) => {
  switch (action.type) {
    case actions.FETCH_DROPPABLE_ITEMS:
      return action.data;
    default:
      return state;
  }
};

const selectedDraggable = (state = {}, action) => {
  switch (action.type) {
    case actions.SELECT_DRAGGABLE:
      return action.data;
    default:
      return state;
  }
};

const selectedDroppable = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_TO_TEST_SETUP:
      return action.data;
    default:
      return state;
  }
};
const feedback = (state = {}, action) => {
  switch (action.type) {
    case actions.FETCH_FEEDBACK:
      return action.data;
    default:
      return state;
  }
};
const uniqueCombinations = (state = [], action) => {
  switch (action.type) {
    case actions.PUSH_ANSWER:
      return [...state, action.data];
    case actions.RESET_PUSH_ANSWER:
      return [];
    default:
      return state;
  }
};
const showFeedback = (state = false, action) => {
  switch (action.type) {
    case actions.SET_FEEDBACK:
      return action.data;
    default:
      return state;
  }
};
const videoPlayState = (state = true, action) => {
  switch (action.type) {
    case actions.SET_VIDEO_STATE:
      return action.data;
    case actions.TOGGLE_VIDEO_STATE:
      return !state;
    default:
      return state;
  }
};
const setFocusOnDropArea = (state = -1, action) => {
  switch (action.type) {
    case actions.SET_FOCUS_ON_LIST:
      return action.data;
    default:
      return state;
  }
};
const focusOnDragItem = (state = -1, action) => {
  switch (action.type) {
    case actions.SET_FOCUS_ON_DRAG_ITEM:
      return action.data;
    default:
      return state;
  }
};

const lastFocussedDraggable = (state = "", action) => {
  switch (action.type) {
    case actions.LAST_DRAG:
      return action.data;
    default:
      return state;
  }
};

const currentScreen = (state = 0, action) => {
  switch (action.type) {
    case actions.ON_CHANGE_SCREEN:
      return action.val;
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
export default combineReducers({
  feedback,
  toastMsg,
  countMcq,
  fetchMcqs,
  showFeedback,
  currentScreen,
  correctAnswer,
  fetchInfoData,
  videoPlayState,
  answerSubmitted,
  focusOnDragItem,
  selectedDraggable,
  selectedDroppable,
  selectAnswerOption,
  uniqueCombinations,
  setFocusOnDropArea,
  fetchDraggableItems,
  fetchDroppableItems,
  lastFocussedDraggable,
  accessibleListVisible,
  ...reducers,
});
