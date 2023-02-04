import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import dataSet from "../data";
const currentPopup = (state = [], { type, id }) => {
  switch (type) {
    case actions.common.TOGGLE_POPUP:
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
const clickedValue = (state = false, { type, value }) => {
  switch (type) {
    case actions.CLICKED_VALUE:
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
const resetFocusState = (state = false, { type, focus }) => {
  switch (type) {
    case actions.common.SET_RESET_FOCUS_STATE:
      return focus;
    default:
      return state;
  }
};

const resetBtnState = (state = true, action) => {
  switch (type) {
    case actions.common.RESET_BTN_STATE:
      return action.val;
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
const countClick = (state = 1, { type, value }) => {
  switch (type) {
    case actions.COUNT_CLICK:
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
const radioButtonValue = (state = 0, { type, value }) => {
  switch (type) {
    case actions.RADIO_BUTTON_VALUE:
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

export default combineReducers({
  currentPopup,
  clickedValue,
  cityBackButton,
  showFinishButton,
  resetFocusState,
  resetBtnState,
  selectedAnswerOption,
  countClick,
  buttonLabels,
  radioButtonValue,
  clickedButtonValue,
  ...reducers,
});
