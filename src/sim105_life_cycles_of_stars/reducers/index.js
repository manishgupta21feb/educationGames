import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const draggableItem = (state = null, { type, item }) => {
  switch (type) {
    case actions.SET_DRAGGABLE_ITEM:
      return item;
    default:
      return state;
  }
};

const droppedItem = (state = null, { type, item }) => {
  switch (type) {
    case actions.SET_DROPPED_ITEM:
      return item;
    default:
      return state;
  }
};

const droppedItems = (state = [], { type, item }) => {
  switch (type) {
    case actions.UPDATE_DROPPED_ITEMS:
      return [...state, item];
    case actions.RESET_DROPPED_ITEMS:
      return [];
    default:
      return state;
  }
};

const starPathwayOption = (state = "", { type, option }) => {
  switch (type) {
    case actions.SET_STAR_PATHWAY_OPTION:
      return option;
    default:
      return state;
  }
};

const nextScreenButton = (state = false, { type, show }) => {
  switch (type) {
    case actions.SET_NEXT_SCREEN_BUTTON:
      return show;
    default:
      return state;
  }
};

const selectedHotspot = (state = "", { type, hotspot }) => {
  switch (type) {
    case actions.SELECT_HOTSPOT:
      return hotspot;
    default:
      return state;
  }
};

const visitedHotspots = (state = [], { type, hotspot }) => {
  switch (type) {
    case actions.ADD_VISITED_HOTSPOT:
      return [...state, hotspot];
    case actions.RESET_VISITED_HOTSPOTS:
      return [];
    default:
      return state;
  }
};

const selectedDraggable = (state = null, { type, draggable }) => {
  switch (type) {
    case actions.SELECT_DRAGGABLE:
      return draggable;
    default:
      return state;
  }
};

const correctAnswer = (state = false, { type, answer }) => {
  switch (type) {
    case actions.SET_CORRECT_ANSWER:
      return answer;
    default:
      return state;
  }
};

const draggablesScreen4 = (
  state = data.draggables.screen1.map((d) => ({ ...d })),
  { type, draggables }
) => {
  switch (type) {
    case actions.UPDATE_DRAGGABLES_SCREEN4:
      return draggables;
    default:
      return state;
  }
};

const dropzonesScreen4 = (
  state = data.dropzones.screen1.map((d) => ({ ...d })),
  { type, dropzones }
) => {
  switch (type) {
    case actions.UPDATE_DROPZONES_SCREEN4:
      return dropzones;
    default:
      return state;
  }
};

const showAccessibleList = (state = false, { type, show }) => {
  switch (type) {
    case actions.TOGGLE_ACCESSIBLE_LIST:
      return show;
    default:
      return state;
  }
};
const nextButtonValue = (state = false, { type, value }) => {
  switch (type) {
    case actions.NEXT_BUTTON_CLICKED:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  droppedItem,
  droppedItems,
  correctAnswer,
  draggableItem,
  selectedHotspot,
  visitedHotspots,
  dropzonesScreen4,
  nextScreenButton,
  starPathwayOption,
  selectedDraggable,
  draggablesScreen4,
  showAccessibleList,
  nextButtonValue,
  ...reducers,
});
