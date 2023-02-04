import * as actions from "../actions/activity";

export const arrowDirection = (state = "", { type, val }) => {
  switch (type) {
    case actions.ARROW_DIRECTION:
      return val;

    default:
      return state;
  }
};

export const successCount = (state = 1, action) => {
  switch (action.type) {
    case actions.SUCCESS_COUNT:
      return action.count;
    default:
      return state;
  }
};

export const submittedAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.SELECT_CORRECT_ANSWER:
      return val;
    default:
      return state;
  }
};

export const selectedButton = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_BUTTON:
      return { ...question };
    default:
      return state;
  }
};

export const selectButtonOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_BUTTON_OPTION:
      return id;
    default:
      return state;
  }
};

export const selectedQuestion = (state = "", { type, item }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return item;
    default:
      return state;
  }
};

export const answerSubmitted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_SUBMITTED:
      return attempted;
    default:
      return state;
  }
};

export const correctAttempt = (state = false, { type, correct }) => {
  switch (type) {
    case actions.CORRECT_ATTEMPT:
      return correct;
    default:
      return state;
  }
};

export const force = (state = 2, action) => {
  switch (action.type) {
    case actions.SET_FORCE:
      return action.val;
    default:
      return state;
  }
};

export const animationState = (state = false, { type, animation }) => {
  switch (type) {
    case actions.PLAY_ANIMATION:
      return animation;
    default:
      return state;
  }
};

export const forceApplied = (state = "", { type, force }) => {
  switch (type) {
    case actions.APPLY_FORCE:
      return force;
    case actions.RESET_APPLIED_FORCE:
      return "";
    default:
      return state;
  }
};

export const correctCount = (state = 1, { type }) => {
  switch (type) {
    case actions.COUNT_CORRECT_ATTEMPT:
      return state + 1;
    case actions.RESET_CORRECT_COUNT:
      return 1;
    default:
      return state;
  }
};

export const resetBtnState = (state = true, { type, btn }) => {
  switch (type) {
    case actions.RESET_BUTTON_STATE:
      return btn;
    default:
      return state;
  }
};

export const setFocusOnReset = (state = false, { type, focus }) => {
  switch (type) {
    case actions.SET_FOCUS_TO_RESET:
      return focus;
    default:
      return state;
  }
};

export const lastAttemptWasCorrect = (state = false, { type, correct }) => {
  switch (type) {
    case actions.SET_LAST_ATTEMPT_WAS_CORRECT:
      return correct;
    default:
      return state;
  }
};
