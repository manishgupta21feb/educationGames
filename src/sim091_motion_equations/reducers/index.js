import * as actions from "../actions";
import reducers from "../../app/reducers";
import { combineReducers } from "redux";
import data from "../data/index";

const startActivity = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVITY_START:
      return action.val;
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

const saveStateCount = (state = [], { type, data }) => {
  switch (type) {
    case actions.SAVE_STATE_COUNT:
      let arr = [...state];
      if (!arr.includes(data)) {
        arr.push(data);
      }
      return arr;
    case actions.RESET_SAVE_STATE_COUNT:
      return [];
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

const observationsData = (
  state = JSON.parse(JSON.stringify(data.observationsData)),
  action
) => {
  switch (action.type) {
    case actions.OBSERVATIONS_DATA:
      return action.data;
    case actions.IS_OBSERVATION_VISITED:
      let temp = state;
      let hold = temp.map((val) => {
        if (getNumber(val.id) == action.data) {
          val.isPlayed = true;
          return val;
        }
        const temp = JSON.parse(JSON.stringify(val));
        return temp;
      });
      return hold;

    default:
      return state;
  }
};

const currentExperimentNumber = (state = 0, action) => {
  switch (action.type) {
    case actions.CURRENT_EXPERIMENT_NUMBER:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  observationsData,
  currentExperimentNumber,
  saveStateCount,
  startActivity,
  resetFocusState,
  selectedAnswerOption,

  ...reducers,
});
