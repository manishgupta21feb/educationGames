import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const questionCount = (state = 1, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};

const questionsData = (state = [...data.dndQuestion], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};

const draggableDisable = (state = [], { type, data }) => {
  switch (type) {
    case actions.DRAGGABLE_DISABLE:
      return data;
    default:
      return state;
  }
};

const selectedQuestion = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return question;
    default:
      return state;
  }
};

const matchedItems = (state = [], { drag, drop, type, items }) => {
  switch (type) {
    case actions.SET_ITEMS_MATCHED:
      return [...state, { drag: { ...drag }, drop: { ...drop } }];
    case actions.UPDATE_ITEMS_MATCHED:
      return items;
    case actions.UPDATE_DROP_ZONE:
      state = [];
      return state;

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

const updateToastMsgReducer = (state = "", { type, val }) => {
  switch (type) {
    case actions.TOAST_MESSAGE:
      return val;
    default:
      return state;
  }
};

const setDroppable = (
  state = [...data.dndQuestion],
  { type, value, blnState, count, question, resetValue }
) => {
  switch (type) {
    case actions.DROPPABLE_CHNAGE_STATE:
      const stateItem = state;
      return stateItem.map((element) => {
        if (element.id == question.id) {
          element.dropZone = element.dropZone.map((el) => {
            if (el.id == value) {
              const _el = { ...el };
              _el.hidden = blnState;
              return _el;
            } else {
              return el;
            }
          });
        }
        return element;
      });

    case actions.DROPPABLE_CHANGE_FALSE:
      const itemState = state;
      return itemState.map((element, idx) => {
        element.dropZone = element.dropZone.map((e) => {
          if (!e.isStatic) {
            const _e = { ...e };

            _e.hidden = false;

            return _e;
          } else {
            return e;
          }
        });
        return element;
      });

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

const submittedAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return val;
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

const submitButtonState = (state = true, { type, value }) => {
  switch (type) {
    case actions.SUBMIT_BUTTON_STATE:
      return value;
    default:
      return state;
  }
};

const correctMatchedItems = (state = [], { type, data }) => {
  switch (type) {
    case actions.CORRRECT_MATCHED_ITEM:
      return data;
    default:
      return state;
  }
};

export default combineReducers({
  accessibleListVisible,
  questionCount,
  submittedAnswer,
  matchedItems,
  setDraggable,
  setDroppable,

  questionsData,
  selectedQuestion,

  answerSubmitted,
  updateToastMsgReducer,
  draggableDisable,
  submitButtonState,
  correctMatchedItems,

  ...reducers,
});
