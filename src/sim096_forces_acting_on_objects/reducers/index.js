import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";
import { cloneDeep } from "lodash";

const getCurrentSection = (state = "launch", { type, currentSection }) => {
  switch (type) {
    case actions.CURRENT_SECTION:
      return currentSection;
    default:
      return state;
  }
};
const getBallsData = (
  state = cloneDeep(data.gravity.balls),
  { type, _data }
) => {
  switch (type) {
    case actions.BALL_DATA:
      return _data;
    default:
      return state;
  }
};
const getCurrentBall = (state = 0, { type, _data }) => {
  switch (type) {
    case actions.CURRENT_BALL:
      return _data;
    default:
      return state;
  }
};
const getCurrentFriction = (state = "", { type, _data }) => {
  switch (type) {
    case actions.CURRENT_FRICTION:
      return _data;
    default:
      return state;
  }
};
const getCurrentLevel = (state = 0, { type, _data }) => {
  switch (type) {
    case actions.CURRENT_LEVEL:
      return _data;
    default:
      return state;
  }
};
const getCurrentExperiment = (state = "experiment1", { type, _data }) => {
  switch (type) {
    case actions.CURRENT_EXPERIMENT:
      return _data;
    default:
      return state;
  }
};
const getRunningTest = (state = false, { type, _data }) => {
  switch (type) {
    case actions.TEST_RUNNING:
      return _data;
    default:
      return state;
  }
};
const getTestCompleted = (state = false, { type, _data }) => {
  switch (type) {
    case actions.TEST_COMPLETED:
      return _data;
    default:
      return state;
  }
};
const getVideoEnded = (state = false, { type, _data }) => {
  switch (type) {
    case actions.VIDEO_COMPLETED:
      return _data;
    default:
      return state;
  }
};
const getFrictionTest = (state = [0, 0], { type, _data }) => {
  switch (type) {
    case actions.FRICTION_COMPLETED:
      return _data;
    default:
      return state;
  }
};
const getActivityCompleted = (state = [0, 0], { type, _data }) => {
  switch (type) {
    case actions.ACTIVITY_COMPLETION:
      return _data;
    default:
      return state;
  }
};

export default combineReducers({
  getCurrentSection,
  getBallsData,
  getCurrentBall,
  getCurrentFriction,
  getCurrentLevel,
  getCurrentExperiment,
  getRunningTest,
  getTestCompleted,
  getVideoEnded,
  getFrictionTest,
  getActivityCompleted,
  ...reducers,
});
