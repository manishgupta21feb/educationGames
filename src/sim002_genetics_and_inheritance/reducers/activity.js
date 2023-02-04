import * as actions from "../actions/activity";
import dataSet from "../data";

export const appData = (state = dataSet, action) => {
  return state;
};

export const flowerCount = (state = 4, action) => {
  switch (action.type) {
    case actions.SET_FLOWER_COUNT:
      return action.count;
    case actions.RESET:
      return 4;
    default:
      return state;
  }
};

const intial = [{ twtw: ["tw", "tw"] }, { hosrhosr: ["hosr", "hosr"] }];
export const crossedFlowers = (state = intial, action) => {
  switch (action.type) {
    case actions.PERFORM_CROSS:
      return [...state, action.data];
    case actions.RESET:
      return intial;
    default:
      return state;
  }
};

export const resetBtnState = (state = true, action) => {
  switch (action.type) {
    case actions.PERFORM_CROSS:
      return false;
    case actions.RESET:
      return true;
    default:
      return state;
  }
};

export const selectedFlowers = (state = [], action) => {
  switch (action.type) {
    case actions.SET_SELECTED_FLOWER:
      return action.val;
    case actions.RESET:
      return [];
    default:
      return state;
  }
};

export const showGenotype = (state = false, action) => {
  switch (action.type) {
    case actions.TOGGEL_GENOTYPE:
      return !state;
    case actions.RESET:
    case actions.HIDE_GENOTYPE:
      return false;
    default:
      return state;
  }
};

export const highlightedFlower = (state = "", action) => {
  switch (action.type) {
    case actions.HIGHLIGHTE_FLOWER:
      return action.val;
    case actions.TOGGEL_GENOTYPE:
    case actions.HIDE_GENOTYPE:
    case actions.RESET:
      return "";
    default:
      return state;
  }
};

export const showGenoList = (state = false, action) => {
  switch (action.type) {
    case actions.SET_SHOW_GENO_LIST:
      return action.value;
    case actions.TOGGEL_GENOTYPE:
      return false;
    case actions.RESET:
      return false;
    default:
      return state;
  }
};

export const focusedFlower = (state = [], action) => {
  switch (action.type) {
    case actions.SET_FOCUSED_FLOWER:
      return action.value;
    case actions.TOGGEL_GENOTYPE:
      return [];
    case actions.RESET:
      return [];
    default:
      return state;
  }
};

export const showLimitWarning = (state = false, action) => {
  switch (action.type) {
    case actions.SET_SHOW_LIMIT_WARNING:
      return action.value;
    default:
      return state;
  }
};

export const audioStopped = (state = false, { type, stopped }) => {
  switch (type) {
    case actions.SET_AUDIO_STOPPED:
      return stopped;
    default:
      return state;
  }
};
