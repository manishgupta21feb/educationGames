import * as actions from "../actions/activity";
import data from "../data";

export const demoreducer = (state = false, { type, flag }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return !state;
    default:
      return state;
  }
};

export const selectedQuestion = (state = 0, { type }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return state + 1;
    case actions.RESET_QUESTION:
      return 0;
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

export const answered = (state = false, { type, value }) => {
  switch (type) {
    case actions.SET_ANSWERED:
      return value;
    default:
      return state;
  }
};

export const questions = (
  state = data.classifyingMatterContent.map((q) => {
    q.options = q.options
      .map((o) => ({ ...o }))
      .sort(() => 0.5 - Math.random());
    return { ...q };
  }),
  { type, value }
) => {
  switch (type) {
    case actions.SET_QUESTIONS:
      return value;
    default:
      return state;
  }
};
