import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import { cloneDeep } from "lodash";
import data from "../data";

export const CHANGE_ACTIVITY = "ACTIVITY_CHANGE";

export const SECTION_A_DATA = "ACTIVITY_1_DATA";
export const MIX_ACTIVATION = "MIX_ACTIVATION";
export const SHOW_VIDEO = "SHOW_VIDEO";
export const VIDEO_DATA = "VIDEO_DATA";
export const ACTIVITY_COMPLETED = "ACTIVITY_COMPLETED";

export const common = { ...actions };

export const activityChange = (data) => {
  return { type: CHANGE_ACTIVITY, data };
};

export const section1Data = (data) => {
  return { type: SECTION_A_DATA, content: data };
};

export const mixActivation = (data) => {
  return { type: MIX_ACTIVATION, data };
};

export const showVideo = (data) => {
  return { type: SHOW_VIDEO, data };
};

export const videoDataList = (data) => {
  return { type: VIDEO_DATA, content: data };
};

export const setActivityCompleted = (data) => {
  return { type: ACTIVITY_COMPLETED, data };
};

export const thunk = {
  resetSectionsData: (data) => {
    return (dispatch) => {
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);
      dispatch(section1Data(data));
      dispatch(activityChange(true));
      dispatch(common.togglePopup(3));

      /* Tincan save data */

      TincanManager.data.percentage = 50;
      TincanManager.saveTincanData();
    };
  },
  showCaseVideo: (data) => {
    return (dispatch) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(mixActivation(data));
      dispatch(showVideo(data));
    };
  },

  resetActivity: () => {
    return (dispatch) => {
      dispatch(section1Data(cloneDeep(data.labels)));
      dispatch(mixActivation(true));
      dispatch(showVideo(false));
      dispatch(videoDataList(cloneDeep(data.compoundVideos)));
      dispatch(activityChange(false));
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(setActivityCompleted(false));

      TincanManager.data.percentage = 0;
      TincanManager.data.completed = false;
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
};
