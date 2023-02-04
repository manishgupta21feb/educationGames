import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "./../data";

const hotspots = (state = data.hotspots, action) => {
  switch (action.type) {
    case actions.HOTSPOTS:
      return action.payload;
    case actions.UPDATE_VISITED_HOTSPOTS:
      return action.payload;
    default:
      return state;
  }
};
const selectedHotspot = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_HOTSPOT:
      return action.payload;
    default:
      return state;
  }
};
const isVideoVisible = (state = false, action) => {
  switch (action.type) {
    case actions.SHOW_VIDEO_DATA:
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
const screenNumber = (state = 1, action) => {
  switch (action.type) {
    case actions.GET_SCREEN:
      return action.payload;
    default:
      return state;
  }
};

const accessibleListVisible = (state = false, { type, val }) => {
  switch (type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return val;
    default:
      return state;
  }
};
const elementData = (state = [...data.venDiagramData.elements], action) => {
  switch (action.type) {
    case actions.ELEMENT_DATA:
      return action.payload;
    case actions.DISABLE_DRAGGABLE:
      const disabledDraggable = state.map((item) => {
        if (item.name === action.data.answerId) {
          return {
            ...item,
            isDisable: action.data.isDisable,
          };
        } else return item;
      });
      // console.log("disabled draggables are", disabledDraggable);
      return disabledDraggable;
    default:
      return state;
  }
};
const selectedDraggable = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_DRAGGABLE:
      if (action.payload) {
        return { ...action.payload };
      }
      return action.payload;
    default:
      return state;
  }
};
const matchedItems = (
  state = { kinetic_energy: [], both: [], potential_energy: [] },
  action
) => {
  switch (action.type) {
    case actions.ADD_MATCHED_ITEM:
      const { target, value } = action.item;
      // console.log("action.item",action.item)
      const check = state[target].find((e) => e.text == value);
    
      if (!check) {
        const temp = { ...state };
        temp[action.item.target] = [...temp[action.item.target],
          {
            id: value.toLowerCase().split(" ").join("_"),
            text: value,
          },
        ];
        return temp;
      }
      return state;

    case actions.RESET_MATCHED_ITEMS:
      return { kinetic_energy: [], both: [], potential_energy: [] };
    default:
      return state;
  }
};
const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
const videoPlayState = (state = true, { type, videoState }) => {
  switch (type) {
    case actions.SET_VIDEO_STATE:
      return videoState;
    case actions.TOGGLE_VIDEO_STATE:
      return !state;
    default:
      return state;
  }
};
export default combineReducers({
  hotspots,
  selectedHotspot,
  isVideoVisible,
  isVideoEnded,
  screenNumber,
  accessibleListVisible,
  elementData,
  selectedDraggable,
  matchedItems,
  toastMsg,
  videoPlayState,
  ...reducers,
});
