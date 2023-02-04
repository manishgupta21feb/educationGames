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

export const selectedTime = (state = 5, { type, time }) => {
  switch (type) {
    case actions.CHANGE_TIME:
      return time;
    default:
      return state;
  }
};

export const selectedDistance = (state = 5, { type, distance }) => {
  switch (type) {
    case actions.CHANGE_DISTANCE:
      return distance;
    default:
      return state;
  }
};

export const selectedAcceleration = (state = 0, { type, acceleration }) => {
  switch (type) {
    case actions.CHANGE_ACCELERATION:
      return acceleration;
    default:
      return state;
  }
};

export const selectedDirection = (state = "right", { type, id }) => {
  switch (type) {
    case actions.CHANGE_DIRECTION:
      return id;
    default:
      return state;
  }
};

export const selectedRange = (state = "", { type, range }) => {
  switch (type) {
    case actions.SELECTED_RANGE:
      return range;
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

export const carCurrentPosition = (state = 0, action) => {
  switch (action.type) {
    case actions.CAR_POSITION:
      return action.val;
    case actions.RESET_CAR_POSITION:
      return 0;
    default:
      return state;
  }
};

export const tripCount = (state = 1, { type, trip }) => {
  switch (type) {
    case actions.TRIP_UPDATE:
      return trip;
    default:
      return state;
  }
};

export const graphValue = (state = [{carCurrentPosition: 0, currentTime:0, tripCount: 1}], action) => {
  switch (action.type) {
    case actions.GRAPH_UPDATE:
      return [...state, action.val];
    case actions.RESET_GRAPH_VALUE:
      return [{carCurrentPosition: 0, currentTime: 0, tripCount: 1}];
    default:
      return state;
  }
};

export const translateState = (state = "none", type ) => {
  switch (type) {
    case actions.UPDATE_TRANSLATE_VALUE:
      return action.translate;
    default:
      return state;
  }
};

export const disableState = (state = false, type) => {
  switch (type) {
    case actions.SET_DISABLE:
      return action.disable;
    default:
      return state;
  }
};

export const selectedControl = (state = 'time', action) => {
  switch (action.type) {
    case actions.SET_SELECTED_CONTROL:
      return action.val;
    default:
      return state;
  }
};


export const lastTripDistance = (state = 0, action) => {
  switch (action.type) {
    case actions.SET_LAST_TRIP_DISTANCE:
      return action.val;
    default:
      return state;
  }
};

export const activityReset = (state = false, action) => {
  switch (action.type) {
    case actions.SET_RESET_ACTIVITY:
      return action.val;
    default:
      return state;
  }
};

export const resetDisable = (state = true, action) => {
  switch (action.type) {
    case actions.SET_RESET_DISABLE:
      return action.val;
    default:
      return state;
  }
};

export const carCurrentTime = (state = 0, { type, seconds }) => {
  switch (type) {
    case actions.CAR_CURRENT_TIME:
      return state + seconds;
    case actions.RESET_CAR_TIME:
      return 0;
    default:
      return state;
  }
};

export const graphValueforTime = (state = [0], { type, timeGraph }) => {
  switch (type) {
    case actions.TIME_GRAPH_UPDATE:
      return [...state, timeGraph];
    case actions.RESET_TIME_GRAPH:
      return [0];
    default:
      return state;
  }
};
