import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
export const selectedTab = (state = 0, action) => {
  switch (action.type) {
    case actions.SELECTED_TAB_INDEX:
      return action.payload
    default:
      return state
  }
}

export const btnActive = (state = 0, action) => {
  switch (action.type) {
    case actions.ACTIVE_INDEX:
      return action.payload
    default:
      return state
  }
}
export const selectedTimeline = (state = 0, action) => {
  switch (action.type) {
    case actions.UPDATE_SLIDER_NATURAL_SELECTION:
      return action.payload;
    default:
      return state;
  }
};

const fetchTimeline = (state = { screenData: [], selectedTimelineInfo: {} }, action) => {
  switch (action.type) {
    case actions.FETCH_SCREEN_DATA:
      return {
        screenData: action.payload
      };
    case actions.SELECT_TIMELINE_INFO:
      const selectedTimelineInfo = state.screenData.find(item => item.id == action.payload);
      return {
        ...state,
        selectedTimelineInfo,
      }
    case actions.RESET_SCREEN_DATA:
      return { screenData: [], selectedTimelineInfo: {} }
    default: return state;
  }
}

const disableIndex = (state = -1, action) => {
  switch (action.type) {
    case actions.DISABLE_BUTTON_INDEX:
      return action.payload
    default:
      return state
  }
}
export const toggleDialog = (state = false, action) => {
  // console.log("------> the state us",state,"action is ", action)
  switch (action.type) {
    case actions.TOGGLE_DIALOG:
      return action.payload
    default:
      return state
  }
}
export const visitedTimeline = (state = [], action) => {
  switch (action.type) {
    case actions.TIMELINE_VISITED:
      return [...state, action.payload];
    case actions.RESET_TIMELINE_VISITED:
      return [];
    default:
      return state;
  }
}
export const visitedFirst = (state = -1, action) => {
  switch (action.type) {
    case actions.SET_VISITED_FIRST:
      return action.payload
    default:
      return state;
  }
}

export const travsedArray1 = (state = [], action) => {
  switch (action.type) {
    case actions.TRAVSED_ARRAY_1:
      return [...state, action.payload]
    case actions.RESET_ARRAY_1:
      return [];
    default:
      return state;
  }
}
export const travsedArray2 = (state = [], action) => {
  switch (action.type) {
    case actions.TRAVSED_ARRAY_2:
      return [...state, action.payload];
    case actions.RESET_ARRAY_2:
      return [];
    default:
      return state;
  }
}
export const isSliderDisable = (state = true, action) => {
  switch (action.type) {
    case actions.SET_SLIDER_DISABLE:
      return action.payload
    default:
      return state
  }
}
export const focusOn=(state=-1,action)=>{
  switch (action.type) {
    case actions.SET_FOCUS:
      return action.payload
      default:
     return state
  }
}

export default combineReducers({
  selectedTab,
  btnActive,
  selectedTimeline,
  fetchTimeline,
  disableIndex,
  toggleDialog,
  visitedTimeline,
  visitedFirst,
  travsedArray1,
  travsedArray2,
  isSliderDisable,
  focusOn,
  ...reducers,
});
