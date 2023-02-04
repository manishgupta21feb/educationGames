import data from "../data";
import * as actions from "../../app/actions";
let val = [];

const { ariaLiveText, togglePopup, updateResetBtnState } = actions;
export const common = { ...actions };

export const RESET_GAME_PT = "RESET_GAME_PT";
export const SET_WAVELENGTH = "SET_WAVELENGTH";
export const TOGGLE_PAUSE = "TOGGLE_PAUSE";

export const updateResetGamePT = (val) => ({ val, type: RESET_GAME_PT });

export const updateWavelength = (val) => ({ val, type: SET_WAVELENGTH });

export const setPause = (val) => ({ val, type: TOGGLE_PAUSE });

export const thunks = {
  resetGamePT: () => {
    return (dispatch, getState) => {
      dispatch(updateWavelength(5));
      dispatch(setPause(true));
      dispatch(togglePopup(1));
      setTimeout(() => {
        dispatch(updateResetBtnState(true));
      }, 50);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      val = [];
    };
  },

  updateSaveState: (value) => {
    return (dispatch, getState) => {
      if (!val.includes(value)) {
        val.push(value);
      }
      TincanManager.data.percentage = (val.length / data.datalist.length) * 100;
      val.length == data.datalist.length
        ? (TincanManager.data.completed = true)
        : null;
      TincanManager.saveTincanData();
    };
  },
  togglePause: () => {
    return (dispatch, getState) => {
      const isPaused = getState().isPaused;
      if (isPaused) {
        dispatch(setPause(false));
        dispatch(ariaLiveText(data.liveTextWhenWavesStart));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
      } else {
        dispatch(setPause(true));
        dispatch(ariaLiveText(data.liveTextWhenWavesPaused));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
      }
    };
  },
};
