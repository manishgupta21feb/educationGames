import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

import data from "../data";

const initialState = {
  selectedMaterial: "ice",
};

const selectedMaterial = (
  state = initialState.selectedMaterial,
  { type, material }
) => {
  switch (type) {
    case actions.SELECT_MATERIAL:
      return material;
    default:
      return state;
  }
};

const animationState = (state = false, { type, animation }) => {
  switch (type) {
    case actions.SET_ANIMATION_STATE:
      return animation;
    default:
      return state;
  }
};

const playButtonText = (state = data.playButtonText, { type, text }) => {
  switch (type) {
    case actions.SET_PLAY_BUTTON_TEXT:
      return text;
    default:
      return state;
  }
};

const mainImageAltText = (
  state = data.altTexts.before[initialState.selectedMaterial],
  { type, alt }
) => {
  switch (type) {
    case actions.SET_MAIN_IMAGE_ALT_TEXT:
      return alt;
    default:
      return state;
  }
};

const visitedMaterials = (state = [], { type, material }) => {
  switch (type) {
    case actions.ADD_VISIT_MATERIAL:
      const _state = [...state];
      if (_state.indexOf(material) == -1) {
        _state.push(material);
        return _state;
      }
      return state;
    case actions.RESET_VISIT_MATERIAL:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  animationState,
  playButtonText,
  visitedMaterials,
  selectedMaterial,
  mainImageAltText,
  ...reducers,
});
