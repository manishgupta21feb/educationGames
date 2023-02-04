import data from "../data";
import * as actions from "../../app/actions";
export const common = { ...actions };
export const ACTIVITY_START = "ACTIVITY_START";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const setData = (data) => ({ data, type: SET_DATA });
export const OBSERVATIONS_DATA = "OBSERVATIONS_DATA";
export const SELECT_HOTSPOT_INDEX = "SELECT_HOTSPOT_INDEX";
export const SLIDER_ONE_VALUE = "SLIDER_ONE_VALUE";
export const SLIDER_TWO_VALUE = "SLIDER_TWO_VALUE";
export const SLIDER_CLICKED = "SLIDER_CLICKED";
export const DRIVE_BUTTON_CLICKED = "DRIVE_BUTTON_CLICKED";
export const FIRST_CAR_VS_CAR_VISITED = "FIRST_CAR_VS_CAR_VISITED";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const RESET_VISITED_HOTSPOT = "RESET_VISITED_HOTSPOT";
export const VISITED_HOTSPOT = "VISITED_HOTSPOT";

export const visitedHotspot = (val) => {
  return { type: VISITED_HOTSPOT, val };
};
export const resetVisitedHotspot = () => {
  return { type: RESET_VISITED_HOTSPOT };
};
export const selectHotspot = (id) => {
  return { type: SELECT_HOTSPOT, id };
};
export const selectedHotspotIndex = (value) => {
  return { type: SELECT_HOTSPOT_INDEX, value };
};
export const driveButtonClicked = (value) => {
  return { type: DRIVE_BUTTON_CLICKED, value };
};

export const firstcarvscarVisited = (value) => ({
  type: FIRST_CAR_VS_CAR_VISITED,
  value,
});
export const observationsData = (data) => ({
  type: OBSERVATIONS_DATA,
  data,
});
export const setActivityStart = (val) => {
  return { type: ACTIVITY_START, val };
};

export const buttonClicked = (action) => {
  return { type: BUTTON_CLICKED, action };
};

export const sliderOneValue = (value) => {
  return { type: SLIDER_ONE_VALUE, value };
};
export const sliderTwoValue = (value) => {
  return { type: SLIDER_TWO_VALUE, value };
};
export const sliderClick = (value) => {
  return { type: SLIDER_CLICKED, value };
};

export const thunks = {
  driveActivity: (value) => {
    return (dispatch, getState) => {
      const { driveClicked } = getState();
      dispatch(sliderClick(value));
      if (value) {
        dispatch(driveButtonClicked(driveClicked + 1));
      }
    };
  },
  resetActivity: () => {
    return (dispatch) => {
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(firstcarvscarVisited(false));
      dispatch(selectHotspot(""));
      dispatch(resetVisitedHotspot());
      dispatch(sliderOneValue(0));
      dispatch(sliderTwoValue(0));
      dispatch(driveButtonClicked(0));
      dispatch(sliderClick(false));

      dispatch(common.ariaLiveText(data.resetLiveText));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
    };
  },

  onInfoClose: () => {
    return (dispatch) => {
      dispatch(common.togglePopup(4));
    };
  },

  handleNextButtonClick: () => {
    return (dispatch, getState) => {
     
      dispatch(sliderOneValue(0));
      dispatch(sliderTwoValue(0));
      dispatch(driveButtonClicked(0));
      dispatch(sliderClick(false));
      if (getState().setVisitedData.length == data.thumbnails.length) {
        dispatch(common.togglePopup(7));

        TincanManager.data.percentage = 100;
        TincanManager.data.completed = true;
        TincanManager.saveTincanData();

        EventManager.broadcast("SECONDARY_CLICK");
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 100);
      } else {
        dispatch(firstcarvscarVisited(false));
        EventManager.broadcast("SECONDARY_CLICK");
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);

        TincanManager.data.percentage =
          (getState().setVisitedData.length / 4) * 100;

        TincanManager.data.completed = false;
        TincanManager.saveTincanData();

        dispatch(common.setResetFocusState(true));
      }
    };
  },
  selectHotspot: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState } = getState();

      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
      dispatch(selectHotspot(id));
      dispatch(visitedHotspot(id));

      const dataset = data.thumbnails;
      for (let i = 0; i < dataset.length; i++) {
        if (dataset[i].id == id) {
          dispatch(selectedHotspotIndex(dataset[i].srNo));
        }
      }
      dispatch(firstcarvscarVisited(true));
      dispatch(common.setResetFocusState(true));
    };
  },
};
