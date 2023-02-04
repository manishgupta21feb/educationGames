import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const mainScreen = (state = true, { type, val }) => {
  switch (type) {
    case actions.MAIN_SCREEN:
      return val;
    default:
      return state;
  }
};

const screenVal = (state = "", { type, val }) => {
  switch (type) {
    case actions.SCREEN_VAL:
      return val;
    default:
      return state;
  }
};

const visitedPage = (state = "", { type, val }) => {
  switch (type) {
    case actions.VISITED_PAGE:
      if (val != "") {
        return [...state, val];
      } else {
        return [];
      }
    default:
      return state;
  }
};

const vehicleData = (state = {}, { type, val }) => {
  switch (type) {
    case actions.VEHICLE_DATA:
      const newData = data.ScreenData.filter((sd) => {
        if (sd.id == val) {
          return sd;
        }
      });
      return { ...newData[0] };
    default:
      return state;
  }
};

const selectedAnswerOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return id;
    default:
      return state;
  }
};

const correctAnswerMcq = (state = false, { type, val }) => {
  switch (type) {
    case actions.CORRECT_ANSWER_MCQ:
      return val;
    default:
      return state;
  }
};

const submitBtnState = (state = true, { type, val }) => {
  switch (type) {
    case actions.SUBMIT_BUTTON_STATE:
      return val;
    default:
      return state;
  }
};

const selectDistance = (state = data.defaultSelectData, { type, val }) => {
  switch (type) {
    case actions.DISTANCE:
      return val;
    default:
      return state;
  }
};

const selectTime = (state = data.defaultSelectData, { type, val }) => {
  switch (type) {
    case actions.TIME:
      return val;
    default:
      return state;
  }
};

const plot = (state = false, { type, val }) => {
  switch (type) {
    case actions.PLOT:
      return val;
    default:
      return state;
  }
};

const continueState = (state = true, { type, val }) => {
  switch (type) {
    case actions.CONTINUE_STATE:
      return val;
    default:
      return state;
  }
};

const keepDistance = (state = [], { type, val }) => {
  switch (type) {
    case actions.KEEP_DISTANCE:
      if (val != "") {
        return [...state, val];
      } else {
        return val;
      }
    default:
      return state;
  }
};

const keepTime = (state = [], { type, val }) => {
  switch (type) {
    case actions.KEEP_TIME:
      if (val != "") {
        return [...state, val];
      } else {
        return val;
      }

    default:
      return state;
  }
};

const plotState = (state = true, { type, val }) => {
  switch (type) {
    case actions.PLOT_STATE:
      return val;
    default:
      return state;
  }
};

const altForGraph = (state = data.defaultGraphAlt, { type, val }) => {
  switch (type) {
    case actions.ALT_FOR_GRAPH:
      if (val != "") {
        return val;
      } else {
        return data.defaultGraphAlt;
      }

    default:
      return state;
  }
};

const videoTime = (state = 0, { type, val }) => {
  switch (type) {
    case actions.VIDEO_TIME:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  mainScreen,
  screenVal,
  visitedPage,
  vehicleData,
  selectedAnswerOption,
  correctAnswerMcq,
  submitBtnState,
  selectDistance,
  selectTime,
  plot,
  continueState,
  keepDistance,
  keepTime,
  plotState,
  altForGraph,

  videoTime,
  ...reducers,
});
