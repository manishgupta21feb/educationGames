import * as actions from "../../app/actions";
export const ACTIVITY_START = "ACTIVITY_START";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const SET_DATA = "SET_DATA";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const common = { ...actions };

export const setData = (data) => ({ data, type: SET_DATA });

export const OBSERVATIONS_DATA = "OBSERVATIONS_DATA";
export const IS_OBSERVATION_VISITED = "IS_OBSERVATION_VISITED";
export const CURRENT_EXPERIMENT_NUMBER = "CURRENT_EXPERIMENT_NUMBER";
export const SAVE_STATE_COUNT = "SAVE_STATE_COUNT";
export const RESET_SAVE_STATE_COUNT = " RESET_STATE_STATE_COUNT";

export const resetSaveStateCount = () => ({
  type: RESET_SAVE_STATE_COUNT,
});
export const setSaveStateCount = (data) => ({
  type: SAVE_STATE_COUNT,
  data,
});
export const isObservationVisited = (data) => ({
  type: IS_OBSERVATION_VISITED,
  data,
});
export const observationsData = (data) => ({
  type: OBSERVATIONS_DATA,
  data,
});
export const currentExperimentNumber = (data) => {
  return {
    type: CURRENT_EXPERIMENT_NUMBER,
    data,
  };
};

export const setActivityStart = (val) => {
  return { type: ACTIVITY_START, val };
};

export const buttonClicked = (action) => {
  return { type: BUTTON_CLICKED, action };
};
export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const thunks = {
  selectAnswerOption: (id) => {
    return (dispatch, getState) => {
      dispatch(setSaveStateCount(id));
      const { resetBtnState, saveStateCount } = getState();
      dispatch(selectAnswerOption(id));
      TincanManager.data.completed = saveStateCount.length == 2 ? true : false;
      TincanManager.data.percentage = (saveStateCount.length / 2) * 100;
      TincanManager.saveTincanData();

      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
    };
  },

  resetActivity: () => {
    return (dispatch) => {
      dispatch(resetSaveStateCount());

      dispatch(common.updateResetBtnState(true));
      dispatch(currentExperimentNumber(0));
      dispatch(selectAnswerOption(""));
      setTimeout(() => {
        dispatch(common.togglePopup(1));
      }, 150);

      TincanManager.data.completed = false;

      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },

  onInfoClose: () => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(4));
    };
  },
};
