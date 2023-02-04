export const SCALE_CHANGE = "SCALE_CHANGE";
export const TOGGLE_POPUP = "TOGGLE_POPUP";
export const ARIA_LIVE_TEXT = "ARIA_LIVE_TEXT";
export const TOGGLE_TOAST_MESSAGE = "TOGGLE_TOAST_MESSAGE";
export const SET_START_AGAIN = "SET_START_AGAIN";
export const SET_SOUND_MANAGER_SOURCES = "SET_SOUND_MANAGER_SOURCES";
export const ON_CHANGE_SCREEN = "ON_CHANGE_SCREEN";

export const scaleChange = (scale) => ({ scale, type: SCALE_CHANGE });
export const togglePopup = (id) => ({ id, type: TOGGLE_POPUP });
export const ariaLiveText = (text) => ({ text, type: ARIA_LIVE_TEXT });

export const toggleToastMessage = (toggle) => ({
  toggle,
  type: TOGGLE_TOAST_MESSAGE,
});

export const setSoundManagerSources = (sources) => ({
  sources,
  type: SET_SOUND_MANAGER_SOURCES,
});

export const setStartAgain = (startAgain) => ({
  startAgain,
  type: SET_START_AGAIN,
});

export const onChangeScreen = (val) => ({
  val, type: ON_CHANGE_SCREEN
});

export const thunks = {
  onChangeScreen: (val) => {
    return (dispatch, getState) => {
      dispatch(onChangeScreen(val))
      TincanManager.data.currentScreen = val;
      TincanManager.saveTincanData();
    }
  }
}