import * as actions from "../actions";
import reducers from "../../app/reducers";

import dataFile from "../data/index";
import { shuffleArray, getNumbers, getDynamicClass } from "../helper.js";
import { combineReducers } from "redux";

const getInfoBtnStatus = (state = { status: "", id: "" }, { type, params }) => {
  switch (type) {
    case actions.INFO_BTN_STATUS:
      state.status = params.status;
      state.id = params.id;
      return state;
    default:
      return state;
  }
};

const setIsVisitedType = (
  state = [{ screen: 0, environment: "" }],
  { type, params }
) => {
  switch (type) {
    case actions.IS_VISITED_TYPE:
      let result = [];
      if (state[0].screen != 0) {
        result = [...state];
      }
      if (
        result.filter((x) => {
          return (
            x.screen == params.screen && x.environment == params.environment
          );
        }).length == 0
      ) {
        result.push({
          screen: params.screen,
          environment: params.environment,
        });
      }
      return result;
    case actions.RESET_IS_VISITED_TYPE:
      return [{ screen: 0, environment: "" }];
    default:
      return state;
  }
};
const getShowContinueButton = (state = true, { type, params }) => {
  switch (type) {
    case actions.SHOW_CONTINUE_BUTTON:
      return params;
    default:
      return state;
  }
};

const getCurrentScreenAndEnvironment = (
  state = dataFile.current_screen,
  { type, params }
) => {
  switch (type) {
    case actions.CURRENTSCREEN_AND_ENVIRONMENT:
      return params;
    default:
      return state;
  }
};

const getImagePart = (state = [], { type, val }) => {
  switch (type) {
    case actions.IMAGE_PATH:
      if (state.find((x) => x.questionNo == val.questionNo)) {
        state = state.map((value) => {
          if (value.questionNo == val.questionNo) {
            value.path = val.path;
            value.classes = val.classes;
            value.answerId = getNumbers(val.answerId);
            value.altText = val.altText;
            return value;
          } else {
            return value;
          }
        });
      } else {
        state.push(val);
      }
      let result = getDynamicClass(state);
      return result;
    case actions.RESET_IMAGE_PATH:
      state = [];
      return state;
    default:
      return state;
  }
};

const getQuestionOption = (state = [], { type, params }) => {
  switch (type) {
    case actions.QUESTION_OPTION:
      let result = dataFile.organism_type_option.filter((x) => {
        if (
          getNumbers(x.questionId) == params.id &&
          getNumbers(x.screen) == params.screen
        )
          return x;
      });
      return result;
    case actions.RESET_QUESTION_OPTION:
      let emptyArr = dataFile.organism_type_option.map((x) => {
        x.status = false;
      });
      return emptyArr;
    default:
      return state;
  }
};

const getInfoButton = (state = 0, action) => {
  switch (action.type) {
    case actions.INFO_BUTTON:
      return action.val;
    case actions.RESET_INFO_BUTTON:
      return 0;
    default:
      return state;
  }
};

const activityCompleted = (state = false, { type, completed }) => {
  switch (type) {
    case actions.SET_ACTIVITY_COMPLETED:
      return completed;
    default:
      return state;
  }
};

const isResetButtonDisable = (state = true, { type, data }) => {
  switch (type) {
    case actions.IS_RESET_BUTTON_DISABLE:
      return data;
    default:
      return state;
  }
};

const selectedOptions = (state = [], { type, data }) => {
  switch (type) {
    case actions.SELECTED_OPTIONS:
      state.push(data);
      return state;
    case actions.RESET_OPTIONS:
      state.length = 0;
      return state;
    default:
      return state;
  }
};

const getLabels = (state = { aria: "" }, { type, aria }) => {
  switch (type) {
    case actions.GET_LABELS:
      state.aria = aria;
      // state.aria = aria;
      return state;
    default:
      return state;
  }
};

const initState = { root: "", stem: "", mouth: "", body: "" };

const getPreviousSelectedItem = (state = initState, { type, params }) => {
  switch (type) {
    case actions.GET_PREVIOUS_SELECTED_ITEM:
      state.root = params.root != "" ? params.root : state.root;
      state.stem = params.stem != "" ? params.stem : state.stem;
      state.mouth = params.mouth != "" ? params.mouth : state.mouth;
      state.body = params.body != "" ? params.body : state.body;
      return state;
    case actions.RESET_PREVIOUS_SELECTED_ITEM:
      return initState;
    default:
      return state;
  }
};

const getNextQuestion = (state = false, { type, data }) => {
  switch (type) {
    case actions.GET_NEXT_QUESTION:
      return data;
    default:
      return state;
  }
};

export default combineReducers({
  activityCompleted,
  selectedOptions,
  getNextQuestion,
  isResetButtonDisable,
  getLabels,
  getCurrentScreenAndEnvironment,
  getQuestionOption,
  getInfoButton,
  getImagePart,
  getShowContinueButton,
  setIsVisitedType,
  getInfoBtnStatus,
  getPreviousSelectedItem,
  ...reducers,
});
