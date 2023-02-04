import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

const questionsData = (state = [...data.equationsData], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      c;
      return action.data;
    default:
      return state;
  }
};

const questionCount = (state = 1, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};

const selectedAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return id;
    default:
      return state;
  }
};

const submitAnswerMcq = (state = false, { type, answer }) => {
  switch (type) {
    case actions.SUBMIT_ANSWER_MCQ:
      return answer;
    default:
      return state;
  }
};

const wrongAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
      return answer;
    default:
      return state;
  }
};

const selectedQuestion = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return { ...question };
    default:
      return state;
  }
};

const submitButtonPressed = (state = false, { type, pressed }) => {
  switch (type) {
    case actions.SUBMIT_BUTTON_PRESSED:
      return pressed;
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

const setStatic = (state = true, { type, staticState }) => {
  switch (type) {
    case actions.SET_STATIC:
      return staticState;
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

const setDroppable = (
  state = data.dropzones,
  { type, dropValue, dragValue, value, blnState }
) => {
  switch (type) {
    case actions.DROPPABLE_CHNAGE_STATE:
      let _state = [...state];
      let result = _state.map((element, idx) => {
        if (element.id == value) {
          element.hidden = blnState;

          return element;
        } else return element;
      });

      return result;
    case actions.DROPPABLE_CHANGE_FALSE:
      let _state1 = [...state];
      let result2 = _state1.map((ele, idx) => {
        if (ele.hidden) {
          ele.hidden = false;
          return ele;
        } else return ele;
      });
      return result2;
    default:
      return state;
  }
};

const matchedItems = (state = [], { drag, drop, type, items }) => {
  switch (type) {
    case actions.SET_ITEMS_MATCHED:
      const _state = [...state];

      let idx = _state.findIndex((ele) => {
        return ele.drop.id === drop.id;
      });

      if (idx >= 0) {
        _state.splice(idx, 1);
        return [..._state, { drag: { ...drag }, drop: { ...drop } }];
      } else {
        return [...state, { drag: { ...drag }, drop: { ...drop } }];
      }

    case actions.UPDATE_ITEMS_MATCHED:
      return items;
    default:
      return state;
  }
};

const submitBtnDisabled = (state = true, { type, val }) => {
  switch (type) {
    case actions.SET_SUBMIT_BUTTON_DISABLED:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  accessibleListVisible,

  setDraggable,
  setDroppable,

  selectedAnswerOption,
  submitButtonPressed,
  selectedQuestion,
  wrongAnswer,
  submitAnswerMcq,
  questionCount,
  questionsData,
  setStatic,
  matchedItems,
  submitBtnDisabled,
  ...reducers,
});
