import * as actions from "../actions/activity";

export const demoreducer = (state = false, { type, flag }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return !state;
    default:
      return state;
  }
};

export const selectedQuestion = (state = null, { type, id }) => {
  switch (type) {
    case actions.SELECT_QUESTION:
      return id;
    case actions.RESET_QUESTION:
      return state;
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

export const arrayValues = (state = [], { type, val }) => {
  switch (type) {
    case actions.ARRAY_VALUES:
      return [...state, val];
    case actions.DELETE_ARRAY_VALUES:
      return [];
    default:
      return state;
  }
};

export const storeId = (state = [], { type, value }) => {
  switch (type) {
    case actions.STORE_ID:
      const indexVal = state.indexOf(value);
      if (indexVal == -1) {
        const _state = [...state, value];
        return _state;
      }
      return state;
    case actions.CLEAR_ID:
      return [];
    default:
      return state;
  }
};
