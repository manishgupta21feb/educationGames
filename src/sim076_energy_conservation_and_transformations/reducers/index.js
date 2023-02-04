import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const demoReducer = (state = "", { type, value }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return value;
    default:
      return state;
  }
};
const getScreen = (state = 0, action) => {
  switch (action.type) {
    case actions.GET_SCREEN:
      return action.payload;
    default:
      return state;
  }
};

const fetchHotspots = (
  state = { allHotspot: [], activeHotspot: {} },
  action
) => {
  switch (action.type) {
    case actions.FETCH_HOTSPOTS:
      return {
        allHotspot: action.payload,
      };
    case actions.SELECT_HOTSPOT:
      return {
        ...state,
        activeHotspot: state.allHotspot[action.payload],
      };
    case actions.RESET_HOTSPOTS:
      return {
        allHotspot: [],
        activeHotspot: {},
      };
    default:
      return state;
  }
};

const getHotspotCount = (state = 0, action) => {
  switch (action.type) {
    case actions.GET_COUNT:
      return action.payload;
    default:
      return state;
  }
};
const isScreenToggle = (state = false, action) => {
  switch (action.type) {
    case actions.TOGGLE_SCREEN:
      return action.payload;
    default:
      return state;
  }
};
const isActivitystart = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVITY_START:
      return action.payload;
    default:
      return state;
  }
};
const isVideoEnded = (state = false, action) => {
  switch (action.type) {
    case actions.VIDEO_ENDED:
      return action.payload;
    default:
      return state;
  }
};
const showFullCircuit = (state = false, action) => {
  switch (action.type) {
    case actions.CHANGE_SRC:
      return action.payload;
    default:
      return state;
  }
};

const hotspotSequence = (
  state = [...data.screen0HotspotSequence],
  { type, sequence }
) => {
  switch (type) {
    case actions.UPDATE_HOTSPOT_SEQUENCE:
      return [...sequence];
    default:
      return state;
  }
};

const showArrow=(state=[],action)=>{
  switch (action.type) {
    case actions.ADD_ARROW_STEPS:
      return [...state,action.payload];
    case actions.RESET_ARROWS:
    return [] ;
    default:
      return state
  }
};
const showLabels=(state=false,action)=>{
  switch (action.type) {
    case actions.SHOW_LABELS:
      return action.payload
    default:
    return state
  }
}
export default combineReducers({
  demoReducer,
  getScreen,
  fetchHotspots,
  getHotspotCount,
  isScreenToggle,
  isActivitystart,
  isVideoEnded,
  showFullCircuit,
  hotspotSequence,
  showArrow,
  showLabels,
  ...reducers,
});
