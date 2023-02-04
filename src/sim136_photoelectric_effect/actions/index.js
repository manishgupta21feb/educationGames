import data from "../data";
import * as actions from "../../app/actions";

const {
  togglePopup,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const common = { ...actions };
export const CHANGE_TIME = "CHANGE_TIME";
export const CHANGE_WAVE_LENGTH = "CHANGE_WAVE_LENGTH";
export const PLAY_ANIMATION = "PLAY_ANIMATION";
export const TRIP_UPDATE = "TRIP_UPDATE";
export const ADD_SPECTRUM = "ADD_SPECTRUM";
export const RESET_SPECTRUM = "RESET_SPECTRUM";
export const SET_DISABLE = "SET_DISABLE";
export const SET_SELECTED_CONTROL = "SET_SELECTED_CONTROL";
export const SET_RESET_ACTIVITY = "SET_RESET_ACTIVITY";
export const SET_RESET_DISABLE = "SET_RESET_DISABLE";
export const addSpectrum = (spectrum) => ({ spectrum, type: ADD_SPECTRUM });
export const resetSpectrum = (spectrum) => ({
  spectrum,
  type: RESET_SPECTRUM,
});
export const updateWavelength = (wavelength) => ({
  wavelength,
  type: CHANGE_WAVE_LENGTH,
});

export const sliderDisable = (disable) => ({
  disable,
  type: SET_DISABLE,
});
export const playAnimation = (animation) => ({
  animation,
  type: PLAY_ANIMATION,
});

export const tripValue = (trip) => ({
  trip,
  type: TRIP_UPDATE,
});

export const setSelectedControl = (val) => ({
  val,
  type: SET_SELECTED_CONTROL,
});
export const setActivityreset = (val) => ({
  val,
  type: SET_RESET_ACTIVITY,
});

export const setResetDisable = (val) => ({
  val,
  type: SET_RESET_DISABLE,
});

export const thunk = {
  setSelectedControlOption: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState } = getState();
      dispatch(setSelectedControl(id));
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
    };
  },

  resetActivity: (value) => {
    return (dispatch) => {
      dispatch(updateWavelength(1));
      dispatch(playAnimation(false));
      value && dispatch(togglePopup(3));
      dispatch(togglePopup(1));
      dispatch(setSelectedControl("sodium"));
      dispatch(setActivityreset(true));
      dispatch(resetSpectrum(" "));
      dispatch(updateResetBtnState(true));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },
  playAnimation: () => {
    return (dispatch, getState) => {
      dispatch(playAnimation(true));
      const {
        showToastMessage,
        selectedWavelength,
        selectedControl,
        resetBtnState,
      } = getState();

      if (selectedControl == "copper") {
        if (selectedWavelength == 1) {
          dispatch(common.ariaLiveText(data.copperlivetext1));
          setTimeout(() => {
            dispatch(common.ariaLiveText(" "));
          }, 200);
          dispatch(addSpectrum(data.spectrumlabel1));
        } else if (selectedWavelength == 2) {
          dispatch(common.ariaLiveText(data.copperlivetext2));
          setTimeout(() => {
            dispatch(common.ariaLiveText(" "));
          }, 200);
          dispatch(addSpectrum(data.spectrumlabel2));
        } else {
          dispatch(common.ariaLiveText(data.copperlivetext3));
          setTimeout(() => {
            dispatch(common.ariaLiveText(" "));
          }, 200);
          dispatch(addSpectrum(data.spectrumlabel3));
        }
      } else {
        if (selectedWavelength == 1) {
          dispatch(common.ariaLiveText(data.sodiumlivetext1));
          setTimeout(() => {
            dispatch(common.ariaLiveText(" "));
          }, 200);
          dispatch(addSpectrum(data.spectrumlabel4));
        } else if (selectedWavelength == 2) {
          dispatch(common.ariaLiveText(data.sodiumlivetext2));
          setTimeout(() => {
            dispatch(common.ariaLiveText(" "));
          }, 200);
          dispatch(addSpectrum(data.spectrumlabel5));
        } else {
          dispatch(common.ariaLiveText(data.sodiumlivetext3));
          setTimeout(() => {
            dispatch(common.ariaLiveText(" "));
          }, 200);
          dispatch(addSpectrum(data.spectrumlabel6));
        }
      }
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }

      if (showToastMessage) {
        dispatch(toggleToastMessage(false));
      }
    };
  },
};
