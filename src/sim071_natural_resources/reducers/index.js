import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import dataSet from "../data";
import data from "../data";

const demoReducer = (state = "", { type, value }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return value;
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

const clickedValue = (state = false, { type, value }) => {
  switch (type) {
    case actions.CLICKED_VALUE:
      return value;
    default:
      return state;
  }
};

const clickedSecond = (state = false, { type, value }) => {
  switch (type) {
    case actions.CLICKED_SECOND:
      return value;
    default:
      return state;
  }
};


const buttonLabels = (state = [...dataSet.buttonLabels], { type, value }) => {
  switch (type) {
    case actions.BUTTON_LABELS:
      return value;
    default:
      return state;
  }
};

const buttonLabelsSecond = (
  state = [...dataSet.buttonLabels],
  { type, value }
) => {
  switch (type) {
    case actions.BUTTON_LABELS_SECOND:
      return value;
    default:
      return state;
  }
};

const showFinishButton = (state = [], { type, value }) => {
  switch (type) {
    case actions.SHOW_FINISH_BUTTON:
      return value;
    default:
      return state;
  }
};

const cityBackButton = (state = "", { type, value }) => {
  switch (type) {
    case actions.CITY_BACK_BUTTON:
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

const selectedAnswerOption = (
  state = dataSet.radioButtons[0].id,
  { type, id }
) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return id;
    default:
      return state;
  }
};

const radioButtonValue = (state = 0, { type, value }) => {
  switch (type) {
    case actions.RADIO_BUTTON_VALUE:
      return value;
    default:
      return state;
  }
};

const questionsData = (state = [...data.buttonLabels], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
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

const wrongAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.WRONG_ANSWER:
      return answer;
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

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};

const setQuestion = (state = 0, { type, value }) => {
  switch (type) {
    case actions.SELECTED_ANSWER:
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

const secondScreen = (state = false, { type, value }) => {
  switch (type) {
    case actions.SECOND_SCREEN:
      return value;
    default:
      return state;
  }
};

// export const countAttempts = (state = 1, { type, value }) => {
//   switch (type) {
//     case actions.COUNT_ATTEMPTS:
//       return value;
//     default:
//       return state;
//   }
// };

const clickedButtonSecond = (state = [], { type, value }) => {
  switch (type) {
    case actions.CLICKED_BUTTON_SECOND:
      return value;
    default:
      return state;
  }
};

const partiallyCorrect = (state = false, { type, correct }) => {
  switch (type) {
    case actions.SET_PARTIALLY_CORRECT:
      return correct;
    default:
      return state;
  }
};

const setSecondScreenQuestion = (state = 0, { type, value }) => {
  switch (type) {
    case actions.SET_SECOND_SCREEN_QUESTION:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  demoReducer,
  startActivity,
  clickedValue,
  buttonLabels,
  showFinishButton,
  cityBackButton,
  clickedButtonValue,
  selectedAnswerOption,
  radioButtonValue,
  questionsData,
  questionCount,
  wrongAnswer,
  submitButtonPressed,
  toastMsg,
  setQuestion,
  submitAnswer,
  secondScreen,
  buttonLabelsSecond,
  // countAttempts,
  clickedButtonSecond,
  partiallyCorrect,
  setSecondScreenQuestion,
  clickedSecond,
  ...reducers,
});
