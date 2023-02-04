import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";
const demoReducer = (state = "", { type, value }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return value;
    default:
      return state;
  }
};

const clueCardIndex = (state = 0, { type, value }) => {
  switch (type) {
    case actions.CLUE_CARD_INDEX:
      return value;
    default:
      return state;
  }
};
const clickedButtonValue = (state = "", { type, value }) => {
  switch (type) {
    case actions.CLICKED_BUTTON_VALUE:
      return value;
    default:
      return state;
  }
};
const highlightedValue = (state = "", { type, value }) => {
  switch (type) {
    case actions.HIGHLIGHTED_VALUE:
      return value;
    default:
      return state;
  }
};
const updateClueCardData = (state = [...data.clueCards], { type, value }) => {
  switch (type) {
    case actions.UPDATE_CLUE_DATA:
      return value;

    default:
      return state;
  }
};
const inputFeildDisable = (state = false, { type, value }) => {
  switch (type) {
    case actions.INPUT_FEILD_DISABLE:
      return value;
    default:
      return state;
  }
};
const inputFeildValue = (state = "", { type, value }) => {
  switch (type) {
    case actions.INPUT_FEILD_VALUE:
      return value;
    default:
      return state;
  }
};
const inputFeildId = (state = "", { type, value }) => {
  switch (type) {
    case actions.INPUT_FEILD_ID:
      return value;
    default:
      return state;
  }
};
const submitAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.SUBMIT_ANSWER:
      return answer;
    default:
      return state;
  }
};
const partiallyCorrect = (state = false, { type, pressed }) => {
  switch (type) {
    case actions.PARTIALLY_CORRECT:
      return pressed;
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
const wrongAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
      return answer;
    default:
      return state;
  }
};
const showFinishButton = (state = [], { type, value }) => {
  switch (type) {
    case actions.SHOW_FINISH_BUTTON:
      return [...state, value];
    case actions.RESET_FINISH_BUTTON:
      return [];
    default:
      return state;
  }
};
const questionCount = (state = 1, { type, value }) => {
  switch (type) {
    case actions.QUESTION_COUNT:
      return value;
    default:
      return state;
  }
};

const clueCardCount = (state = 1, { type, value }) => {
  switch (type) {
    case actions.CLUE_COUNT:
      return value;
    default:
      return state;
  }
};
export default combineReducers({
  demoReducer,
  clueCardIndex,
  clickedButtonValue,
  inputFeildDisable,
  inputFeildValue,
  inputFeildId,
  submitAnswer,
  partiallyCorrect,
  wrongAnswer,
  showFinishButton,
  questionCount,
  submitButtonPressed,
  updateClueCardData,
  highlightedValue,
  clueCardCount,
  ...reducers,
});
