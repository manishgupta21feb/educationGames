import * as actions from "../actions";
import reducers from "../../app/reducers";
import data from "../data";

import { combineReducers } from "redux";

const {
  hotspotData: {
    leftSection: { hotspots: _hotspots },
  },
} = data;

const geneFunctions = (state = [...data.geneFunction], action) => {
  switch (action.type) {
    case actions.GENE_FUNCTIONS:
      return action.val;
    default:
      return state;
  }
};

const hotspots = (state = _hotspots.map((h) => ({ ...h })), action) => {
  switch (action.type) {
    case actions.HOTSPOTS_DATA:
      return action.val;
    default:
      return state;
  }
};

const nextBtn = (state = false, action) => {
  switch (action.type) {
    case actions.NEXT_BUTTON:
      return action.val;
    default:
      return state;
  }
};
const hotspotVisitCount = (state = 0, action) => {
  switch (action.type) {
    case actions.HOTSPOT_VISIT_COUNT:
      return action.val;
    default:
      return state;
  }
};

const visitedHotspots = (state = -1, action) => {
  switch (action.type) {
    case actions.VISITED_HOTSPOTS:
      return action.val;
    default:
      return state;
  }
};
const currentTrait = (state = 0, action) => {
  switch (action.type) {
    case actions.CURRENT_TRAIT:
      return action.val;
    default:
      return state;
  }
};

const resetGame = (state = false, action) => {
  switch (action.type) {
    case actions.RESET_GAME_GT:
      return action.val;
    default:
      return state;
  }
};

export default combineReducers({
  nextBtn,
  hotspots,
  resetGame,
  currentTrait,
  geneFunctions,
  visitedHotspots,
  hotspotVisitCount,
  ...reducers,
});
