import { togglePopup, toggleToastMessage } from ".";

export const DEMO_ACTION = "DEMO_ACTION";
export const CHANGE_TIME = "CHANGE_TIME";
export const CHANGE_DISTANCE = "CHANGE_DISTANCE";
export const CHANGE_ACCELERATION = "CHANGE_ACCELERATION";
export const CHANGE_DIRECTION = "CHANGE_DIRECTION";
export const SELECTED_RANGE = "SELECTED_RANGE";
export const SET_DISABLE_CLASS = "SET_DISABLE_CLASS";
export const PLAY_ANIMATION = "PLAY_ANIMATION";
export const CAR_POSITION = "CAR_POSITION";
export const TRIP_UPDATE = "TRIP_UPDATE";
export const GRAPH_UPDATE = "GRAPH_UPDATE";
export const UPDATE_TRANSLATE_VALUE = "UPDATE_TRANSLATE_VALUE";
export const ACCELERATION_VALUE = "ACCELERATION_VALUE";
export const RESET_GRAPH_VALUE = "RESET_GRAPH_VALUE";
export const RESET_CAR_POSITION = "RESET_CAR_POSITION";
export const CAR_CURRENT_TIME = "CAR_CURRENT_TIME";
export const RESET_TIME_GRAPH = "RESET_TIME_GRAPH";
export const RESET_CAR_TIME = "RESET_CAR_TIME";
export const TIME_GRAPH_UPDATE = "TIME_GRAPH_UPDATE";
export const SET_DISABLE = "SET_DISABLE";
export const SET_SELECTED_CONTROL = "SET_SELECTED_CONTROL";
export const SET_LAST_TRIP_DISTANCE = "SET_LAST_TRIP_DISTANCE";
export const SET_RESET_ACTIVITY = "SET_RESET_ACTIVITY";
export const SET_RESET_DISABLE = "SET_RESET_DISABLE";

export const scaleChange = () => ({ type: DEMO_ACTION });
export const updateTime = (time) => ({ time, type: CHANGE_TIME });
export const updateDistance = (distance) => ({
  distance,
  type: CHANGE_DISTANCE,
});
export const updateAcceleration = (acceleration) => ({
  acceleration,
  type: CHANGE_ACCELERATION,
});
export const sliderDisable = (disable) => ({
  disable,
  type: SET_DISABLE,
});
export const selectDirection = (id) => ({ id, type: CHANGE_DIRECTION });
export const selectedRange = (range) => ({ range, type: SELECTED_RANGE });
export const playAnimation = (animation) => ({
  animation,
  type: PLAY_ANIMATION,
});
export const setCarPositionValue = (val) => ({
  val,
  type: CAR_POSITION,
});
export const tripValue = (trip) => ({
  trip,
  type: TRIP_UPDATE,
});
export const graphValue = (val) => ({
  val,
  type: GRAPH_UPDATE,
});
export const updateTranslateValue = (translate) => ({
  translate,
  type: UPDATE_TRANSLATE_VALUE,
});
export const resetGraphValue = () => {
  return {
    type: RESET_GRAPH_VALUE,
  };
};
export const resetCarPosition = () => {
  return {
    type: RESET_CAR_POSITION,
  };
};
export const carTimeValue = (seconds) => ({
  seconds,
  type: CAR_CURRENT_TIME,
});
export const resetCarTime = () => {
  return {
    type: RESET_CAR_TIME,
  };
};
export const graphValueforTime = (timeGraph) => ({
  timeGraph,
  type: TIME_GRAPH_UPDATE,
});
export const resetTimeGraph = () => {
  return {
    type: RESET_TIME_GRAPH,
  };
};

export const setSelectedControl = (val) => ({
  val,
  type: SET_SELECTED_CONTROL,
});

export const setLastTripDistance = (val) => ({
  val,
  type: SET_LAST_TRIP_DISTANCE,
});

export const setActivityreset = (val) => ({
  val,
  type: SET_RESET_ACTIVITY,
});

export const setResetDisable = (val) => ({
  val,
  type: SET_RESET_DISABLE,
});

const timeouts = {
  finalBoxTimeout: "",
};

export const thunk = {
  selectedRange: () => {
    return (dispatch, getState) => {
      dispatch(selectedRange(range));
    };
  },
  carPositionValue: (distance, currentTime) => {
    return (dispatch, getState) => {
      const { carCurrentPosition, tripCount } = getState();
      // console.log('currentTimecurrentTime', currentTime);
      dispatch(setCarPositionValue(distance));
      dispatch(
        graphValue({
          carCurrentPosition: parseFloat(distance),
          currentTime: parseFloat(currentTime),
          tripCount,
        })
      );
    };
  },
  setSelectedControlOption: () => {
    return (dispatch, getState) => {
      const selected = getState().selectedControl;
      if (selected === "time") {
        dispatch(setSelectedControl("acceleration"));
      } else {
        dispatch(setSelectedControl("time"));
      }
    };
  },
  carTimeValue: (distance, time) => {
    return (dispatch, getState) => {
      dispatch(carTimeValue(time));
      const { carCurrentTime } = getState();
      dispatch(graphValueforTime(carCurrentTime));
    };
  },
  tripValue: (state) => {
    return (dispatch, getState) => {
      dispatch(tripValue(state));
    };
  },
  graphValue: (state) => {
    return (dispatch, getState) => {
      dispatch(graphValue(state));
    };
  },
  graphValueforTime: (state) => {
    return (dispatch, getState) => {
      dispatch(graphValueforTime(state));
    };
  },
  updateTranslateValue: (state) => {
    return (dispatch, getState) => {
      dispatch(updateTranslateValue(state));
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      // setTimeout(() => {
      dispatch(selectDirection("right"));
      dispatch(updateDistance(5));
      dispatch(updateTime(5));
      dispatch(updateAcceleration(0));
      dispatch(playAnimation(false));
      dispatch(setCarPositionValue(0));
      dispatch(carTimeValue(0));
      dispatch(resetGraphValue());
      dispatch(updateTranslateValue("none"));
      dispatch(tripValue(1));
      value && dispatch(togglePopup(3));
      dispatch(togglePopup(1));
      dispatch(resetCarPosition(0));
      dispatch(resetCarTime(0));
      dispatch(setSelectedControl("time"));
      dispatch(setLastTripDistance(0));
      dispatch(setActivityreset(true));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      // }, 100);
    };
  },
  showTripCompleteToast: () => {
    return (dispatch, getState) => {
      const resetActive = getState().currentPopup;
      if (!resetActive.length) {
        dispatch(toggleToastMessage(true));
      }
    };
  },
  resetTimeout: () => {
    return (dispatch) => {
      clearTimeout(timeouts.finalBoxTimeout);
    };
  },
  playAnimation: () => {
    return (dispatch, getState) => {
      dispatch(playAnimation(true));
      const { showToastMessage } = getState();
      if (showToastMessage) {
        dispatch(toggleToastMessage(false));
      }
    };
  },
};
