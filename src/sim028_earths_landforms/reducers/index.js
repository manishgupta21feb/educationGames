import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

export const selectedHotspot = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECT_HOTSPOT:
      return id;
    default:
      return state;
  }
};

export const visitedNodes = (state = [], { type, node }) => {
  switch (type) {
    case actions.UPDATE_VISITED_NODE:
      return [...state, node];
    default:
      return state;
  }
};

export const selectedLandform = (state = "earth", { type, id }) => {
  switch (type) {
    case actions.SELECT_LANDFORM:
      return id;
    default:
      return state;
  }
};

export const selectedHotspotOption = (state = "", { type, id }) => {
  switch (type) {
    case actions.SELECTED_HOTSPOT_OPTION:
      return id;
    default:
      return state;
  }
};

export const visitedHotspots = (state = [], { type, hotspot }) => {
  switch (type) {
    case actions.UPDATE_VISITED_HOTSPOTS:
      const _state = [...state];
      if (_state.indexOf(hotspot) == -1) {
        _state.push(hotspot);
        return _state;
      }
      return state;
    case actions.RESET_VISITED_HOTSPOTS:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  visitedNodes,
  visitedHotspots,
  selectedHotspot,
  selectedLandform,
  selectedHotspotOption,
  ...reducers,
});
