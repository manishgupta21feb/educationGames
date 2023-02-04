import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const getCurrentSection = (state = "launch", { type, loc }) => {
  switch (type) {
    case actions.CURRENT_SECTION:
      return loc;
    default:
      return state;
  }
};

const getDropDownData = (state = [{}, {}], { type, location, data }) => {
  switch (type) {
    case actions.DROP_DOWN_DATA:
      const _gState = [...state];
      _gState[location] = data;
      return _gState;
    case actions.RESET_DROP_DATA:
      state = data;
      return state;
    default:
      return state;
  }
};

const getUpdateSlider = (state = 0, { type, data }) => {
  switch (type) {
    case actions.SLIDER_DATA:
      return data;
    default:
      return state;
  }
};

const getAnimationStart = (state = false, { type, data }) => {
  switch (type) {
    case actions.ANIMATION_START:
      return data;
    default:
      return state;
  }
};

const getFreezePanel = (state = false, { type, data }) => {
  switch (type) {
    case actions.FREEZE_PANEL:
      return data;
    default:
      return state;
  }
};

const getOnceDone = (state = false, { type, data }) => {
  switch (type) {
    case actions.ONCE_DONE_ANIM:
      return data;
    default:
      return state;
  }
};

const getAnyPartPlayed = (state = false, { type, data }) => {
  switch (type) {
    case actions.PART_DONE:
      return data;
    default:
      return state;
  }
};
export default combineReducers({
  getCurrentSection,
  getDropDownData,
  getUpdateSlider,
  getAnimationStart,
  getFreezePanel,
  getOnceDone,
  getAnyPartPlayed,
  ...reducers,
});
