import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

export const disabledNavigationButtons = ["selfcheck"];

const setIsVisitedTab = (state = [0], { type, data }) => {
  switch (type) {
    case actions.IS_VISITED_TAB:
      let result = [...state];
      if (!result.includes(data)) {
        result.push(data);
      }
      return result;
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

const selectedTab = (state = 0, { type, items }) => {
  switch (type) {
    case actions.GLOBAL_SELECTED_TAB:
      return items;
    default:
      return state;
  }
};

export const graphValue = (
  state = [{ carCurrentPosition: 0, currentTime: 0, tripCount: 1 }],
  action
) => {
  switch (action.type) {
    case actions.GRAPH_UPDATE:
      return [...state, action.val];
    case actions.RESET_GRAPH_VALUE:
      return [{ carCurrentPosition: 0, currentTime: 0, tripCount: 1 }];
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

export const currentBarChart1 = (
  state = data.barChart1.filter((i) => i.tabIndex == 0),
  action
) => {
  switch (action.type) {
    case actions.BAR_CHART1:
      return data.barChart1.filter((i) => i.tabIndex == action.val);
    default:
      return state;
  }
};

export const currentBarChart2 = (
  state = data.barChart2.filter((i) => i.tabIndex == 0),
  action
) => {
  switch (action.type) {
    case actions.BAR_CHART2:
      return data.barChart2.filter((i) => i.tabIndex == action.val);
    default:
      return state;
  }
};

export const currentLineChart1 = (
  state = data.lineChart1.filter((i) => i.tabIndex == 0),
  action
) => {
  switch (action.type) {
    case actions.LINE_CHART1:
      return data.lineChart1.filter((i) => i.tabIndex == action.val);
    default:
      return state;
  }
};

export const currentLineChart2 = (
  state = data.lineChart2.filter((i) => i.tabIndex == 0),
  action
) => {
  switch (action.type) {
    case actions.LINE_CHART2:
      return data.lineChart2.filter((i) => i.tabIndex == action.val);
    default:
      return state;
  }
};

export const seasonLabels = (
  state = data.seasonLabels.filter((i) => i.tabIndex == 0),
  action
) => {
  switch (action.type) {
    case actions.SEASON_LABELS:
      return data.seasonLabels.filter((i) => i.tabIndex == action.val);
    default:
      return state;
  }
};

export default combineReducers({
  selectedTab,
  graphValueforTime,
  carCurrentPosition,
  graphValue,
  currentBarChart1,
  currentBarChart2,
  currentLineChart1,
  currentLineChart2,
  seasonLabels,
  isResetButtonDisable,
  setIsVisitedTab,
  ...reducers,
});
