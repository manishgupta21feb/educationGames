import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import { cloneDeep } from "lodash";
import data from "../data";

const activityChange = (state = false, { type, data }) => {
  switch (type) {
    case actions.CHANGE_ACTIVITY:
      return data;
    default:
      return state;
  }
};

const section1Data = (state = cloneDeep(data.labels), { type, content }) => {
  switch (type) {
    case actions.SECTION_A_DATA:
      return content;
    default:
      return state;
  }
};

const videoData = (
  state = cloneDeep(data.compoundVideos),
  { type, content }
) => {
  switch (type) {
    case actions.VIDEO_DATA:
      return content;
    default:
      return state;
  }
};

const mixActivation = (state = true, { type, data }) => {
  switch (type) {
    case actions.MIX_ACTIVATION:
      return data;
    default:
      return state;
  }
};

const showVideo = (state = false, { type, data }) => {
  switch (type) {
    case actions.SHOW_VIDEO:
      return data;
    default:
      return state;
  }
};
const getActivityCompleted = (state = false, { type, data }) => {
  switch (type) {
    case actions.ACTIVITY_COMPLETED:
      return data;
    default:
      return state;
  }
};

export default combineReducers({
  activityChange,
  section1Data,
  mixActivation,
  showVideo,
  videoData,
  getActivityCompleted,
  ...reducers,
});
