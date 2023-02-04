import data from "../data";
import * as actions from "../actions";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const startSimulation = (state = true, { type, value }) => {
  switch (type) {
    case actions.START_SIMULATION:
      return value;
    default:
      return state;
  }
};

const questionsData = (state = [...data.mainScreenMCQ], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
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

const selectedButton = (state = 0, { type }) => {
  switch (type) {
    case actions.SELECT_BUTTON:
      return state + 1;
    case actions.RESET_BUTTON:
      return 0;
    default:
      return state;
  }
};

const selectedQuestionHeading = (state = 0, { type }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return state + 1;
    case actions.RESET_QUESTION:
      return 0;
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

const startActivity = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVITY_START:
      return action.val;
    default:
      return state;
  }
};

const selectQuestionIndex = (state = 1, { type, index = 1 }) => {
  switch (type) {
    case actions.SELECT_INDEX:
      return index;
    default:
      return state;
  }
};

const toggleQuestion = (state = true, { type, show }) => {
  switch (type) {
    case actions.TOGGLE_QUESTION:
      return show;
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
const selectedOption = (state = "", { type, option }) => {
  switch (type) {
    case actions.SELECT_OPTION:
      return option;
    default:
      return state;
  }
};

const selectedHotspot = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_HOTSPOT:
      return action.id;

    case actions.RESET_HOTSPOT:
      return state;

    default:
      return state;
  }
};

const nextButtonClickedState = (state = false, { type, action }) => {
  switch (type) {
    case actions.BUTTON_CLICKED:
      return action;
    default:
      return state;
  }
};

const jumpToMCQScreenState = (state = false, { type, action }) => {
  switch (type) {
    case actions.JUMP_TO_MCQ_SCREEN:
      return action;
    default:
      return state;
  }
};

const audioStatePlay = (state = true, { type, action }) => {
  switch (type) {
    case actions.AUDIO_STATE_PLAY:
      return !state;
    case actions.AUDIO_STATE_STOP:
      return false;
    default:
      return state;
  }
};

const visitedHotspots = (state = [], { type, hotspot }) => {
  switch (type) {
    case actions.UPDATE_VISITED_HOTSPOTS:
      return [...state, hotspot];
    case actions.RESET_VISITED_HOTSPOTS:
      return [];
    default:
      return state;
  }
};

const mcqQuestions = (
  state = data.mcqData.map((q) => ({ ...q })),
  { type, questions }
) => {
  switch (type) {
    case actions.UPDATE_MCQ_QUESTIONS:
      if (questions.length) {
        return questions.map((q) => ({ ...q }));
      } else {
        return questions;
      }
    case actions.RESET_MCQ_QUESTIONS:
      return data.mcqData.map((q) => ({ ...q }));
    default:
      return state;
  }
};

const mcqQuestion = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_MCQ_QUESTION:
      return { ...question };
    default:
      return state;
  }
};

const questionCount = (state = 0, action) => {
  switch (action.type) {
    case actions.QUESTIONS_COUNT:
      return action.count;
    default:
      return state;
  }
};

const resetDialogNoSelected = (state = false, { type, value }) => {
  switch (type) {
    case actions.SET_RESET_DIALOG_NO_SELECTED:
      return value;
    default:
      return state;
  }
};

const pausedAudio = (state = [], { type, audio }) => {
  switch (type) {
    case actions.MARK_AUDIO_PAUSED:
      return [...state, audio];
    case actions.RESET_MARK_AUDIO_PAUSED:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  showStatic,
  pausedAudio,
  mcqQuestion,
  mcqQuestions,
  questionCount,
  startActivity,
  questionsData,
  correctAnswer,
  selectedOption,
  audioStatePlay,
  selectedButton,
  toggleQuestion,
  visitedHotspots,
  answerAttempted,
  selectedHotspot,
  startSimulation,
  selectedQuestion,
  selectQuestionIndex,
  jumpToMCQScreenState,
  resetDialogNoSelected,
  nextButtonClickedState,
  selectedQuestionHeading,
  ...reducers,
});
