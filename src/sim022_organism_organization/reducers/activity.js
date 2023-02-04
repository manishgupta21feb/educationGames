import * as actions from "../actions/activity";

export const demoreducer = (state = false, { type, flag }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return !state;
    default:
      return state;
  }
};

export const selectedOrganisms = (state = [], action) => {
  switch (action.type) {
    case actions.SELECT_ORGANISMS:
      if (state.indexOf(action.id) == -1) {
        return [...state, action.id];
      }
      return state;

    case actions.RESET_ORGANISMS:
      return [];

    case actions.UPDATE_SELECTED_ORGANISMS:
      return [...action.organisms];

    default:
      return state;
  }
};

export const selectedQuestion = (state = 1, { type }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return state + 1;
    case actions.RESET_QUESTION:
      return 1;
    default:
      return state;
  }
};

export const showStatic = (state = false, { type, staticState }) => {
  switch (type) {
    case actions.SET_STATIC:
      return staticState;
    default:
      return state;
  }
};

export const selectedOption = (state = "", { type, option }) => {
  switch (type) {
    case actions.SELECT_OPTION:
      return option;
    default:
      return state;
  }
};

export const answerAttempted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPTTED:
      return attempted;
    default:
      return state;
  }
};

export const correctAnswer = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return correct;
    default:
      return state;
  }
};

export const setFocusOnReset = (state = false, { type, focus }) => {
  switch (type) {
    case actions.RESET_FOCUS:
      return focus;
    default:
      return state;
  }
};

export const resetBtnState = (state = true, action) => {
  switch (action.type) {
    case actions.RESET_BTN_STATE:
      return action.val;
    default:
      return state;
  }
};

export const startActivity = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVITY_START:
      return action.val;
    default:
      return state;
  }
};

export const feedbackNarration = (state = true, action) => {
  switch (action.type) {
    case actions.FEEDBACK_NARRATION:
      return action.val;
    default:
      return state;
  }
};

export const countAttempts = (state = 1, { type, value }) => {
  switch (type) {
    case actions.COUNT_ATTEMPTS:
      return value;
    default:
      return state;
  }
};
