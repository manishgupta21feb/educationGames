import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";

const demoReducer = (state = "", { type, value }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return value;
    default:
      return state;
  }
};
const selectedTimeline = (state = 0, action) => {
  switch (action.type) {
    case actions.UPDATE_SLIDER_NATURAL_SELECTION:
      return action.payload;
    default:
      return state;
  }
};

const isSliderDisabled = (state = false, { type, val }) => {
  switch (type) {
    case actions.SLIDER_DISABLED:
      return val;
    default:
      return state;
  }
};
const descriptionBoxShow = (state = false, { type, value }) => {
  switch (type) {
    case actions.DESCRIPTION_BOX_SHOW:
      return value;
    default:
      return state;
  }
};
const showResponse = (state = false, { type, val }) => {
  switch (type) {
    case actions.SHOW_RESPONSE:
      return val;
    default:
      return state;
  }
};

const zoomButtonIdValue = (state = "", { type, val }) => {
  switch (type) {
    case actions.ZOOM_BUTTON_ID:
      return val;
    default:
      return state;
  }
};
const sliderVisitedValue = (state = [], { type, val }) => {
  switch (type) {
    case actions.SLIDER_VISITED:
      return [...state, val];
    case actions.RESET_SLIDER_VISITED:
      return [];
    default:
      return state;
  }
};
const zoomPopupOpen = (state = false, { type, val }) => {
  switch (type) {
    case actions.ZOOM_POPUP_OPEN:
      return val;
    default:
      return state;
  }
};
export default combineReducers({
  demoReducer,
  selectedTimeline,
  isSliderDisabled,
  zoomButtonIdValue,
  sliderVisitedValue,
  descriptionBoxShow,
  showResponse,
  zoomPopupOpen,
  ...reducers,
});
