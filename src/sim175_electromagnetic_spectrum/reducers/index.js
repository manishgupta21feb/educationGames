import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const mcq1 = (state = data.mcq1.map((m) => ({ ...m })), { type, mcqs }) => {
  switch (type) {
    case actions.SET_MCQ1:
      return mcqs;
    case actions.RESET_MCQ1:
      return data.mcq1.map((m) => ({ ...m }));
    default:
      return state;
  }
};

const question = (state = null, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return question;
    default:
      return state;
  }
};

const mcq1Answer = (state = "", { type, answer }) => {
  switch (type) {
    case actions.SET_MCQ1_ANSWER:
      return answer;
    default:
      return state;
  }
};

const questionAnswered = (state = false, { type, answered }) => {
  switch (type) {
    case actions.SET_QUESTION_ANSWERED:
      return answered;
    default:
      return state;
  }
};

const currentPopup = (state = [], { type, id }) => {
  switch (type) {
    case actions.TOGGLE_POPUP:
      if (state.indexOf(id) == -1) {
        return [...state, id];
      } else {
        const _state = [...state];
        _state.splice(_state.indexOf(id), 1);
        return [..._state];
      }
    default:
      return state;
  }
};

const updateAttempt = (state = [], action) => {
  switch (action.type) {
    case actions.UPDATE_ATTEMPT:
      return action.val;
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

const simulationEnd = (state = false, action) => {
  switch (action.type) {
    case actions.SIMULATION_END:
      return action.val;
    default:
      return state;
  }
};

const selectedQuestion = (state = 1, action) => {
  switch (action.type) {
    case actions.SELECT_QUESTION:
      return action.val;
    case actions.RESET_QUESTION:
      return 1;
    default:
      return state;
  }
};
export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

const questionsData = (
  state = helper.shuffleArray([...data.radioQuestionsData]),
  action
) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
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

const selectedRadioQuestion = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_MCQ_QUESTION:
      return { ...question };
    case actions.RESET_MCQ_QUESTION:
      return [];
    default:
      return state;
  }
};

const showAnimation = (state = false, action) => {
  switch (action.type) {
    case actions.SET_ANIMATION:
      return action.val;
    default:
      return state;
  }
};

const correctAnswer = (state = false, action) => {
  switch (action.type) {
    case actions.CORRECT_ANSWER:
      return action.val;
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
const droppedItems = (
  state = ["", "", "", ""],
  { type, item, index, itemsArray }
) => {
  switch (type) {
    case actions.UPDATE_DROP_ITEM:
      const _state = [...state];
      _state[index] = item;
      return _state;
    case actions.UPDATE_DROPPED_ITEMS_FROM_ARRAY:
      return [...itemsArray];
    default:
      return state;
  }
};

const dropElement = (state = {}, action) => {
  switch (action.type) {
    case actions.DROP_ELEMENT:
      return action.val;
    default:
      return state;
  }
};

export default combineReducers({
  mcq1,
  question,
  mcq1Answer,
  questionAnswered,
  currentPopup,
  toastMsg,
  droppedItems,
  correctAnswer,
  showAnimation,
  simulationEnd,
  updateAttempt,
  answerAttempted,
  selectedQuestion,
  selectedRadioQuestion,
  questionsData,
  selectAnswerOption,
  dropElement,
  ...reducers,
});
