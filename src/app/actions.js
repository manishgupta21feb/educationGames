export const SCALE_CHANGE = "SCALE_CHANGE";
export const TOGGLE_POPUP = "TOGGLE_POPUP";
export const ARIA_LIVE_TEXT = "ARIA_LIVE_TEXT";
export const RESET_BTN_STATE = "RESET_BTN_STATE";
export const SET_START_AGAIN = "SET_START_AGAIN";
export const AUDIO_STATE_PLAY = "AUDIO_STATE_PLAY";
export const ON_CHANGE_SCREEN = "ON_CHANGE_SCREEN";
export const ARIA_LIVE_ASSERTIVE = "ARIA_LIVE_ASSERTIVE";
export const TOGGLE_TOAST_MESSAGE = "TOGGLE_TOAST_MESSAGE";
export const SET_RESET_FOCUS_STATE = "SET_RESET_FOCUS_STATE";

export const scaleChange = (scale) => ({ scale, type: SCALE_CHANGE });
export const togglePopup = (id) => ({ id, type: TOGGLE_POPUP });
export const ariaLiveText = (text) => ({ text, type: ARIA_LIVE_TEXT });

export const toggleToastMessage = (toggle) => ({
  toggle,
  type: TOGGLE_TOAST_MESSAGE,
});

export const onChangeScreen = (val) => ({
  val,
  type: ON_CHANGE_SCREEN,
});

export const setResetFocusState = (focus) => ({
  focus,
  type: SET_RESET_FOCUS_STATE,
});

export const updateResetBtnState = (val) => ({
  val,
  type: RESET_BTN_STATE,
});

export const ariaLiveAssertive = (message) => ({
  message,
  type: ARIA_LIVE_ASSERTIVE,
});

export const thunks = {
  onChangeScreen: (val) => {
    return (dispatch, getState) => {
      dispatch(onChangeScreen(val));
      TincanManager.data.currentScreen = val;
      TincanManager.saveTincanData();
    };
  },
  ariaLiveText:
    (message, clearDuration = 300) =>
    (dispatch) => {
      dispatch(ariaLiveText(message));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, clearDuration);
    },
  ariaLiveAssertive:
    (message, clearDuration = 1000) =>
    (dispatch) => {
      dispatch(ariaLiveAssertive(message));
      setTimeout(() => {
        dispatch(ariaLiveAssertive(" "));
      }, clearDuration);
    },
};
