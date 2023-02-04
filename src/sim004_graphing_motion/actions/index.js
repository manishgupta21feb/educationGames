export const SCALE_CHANGE = "SCALE_CHANGE";
export const TOGGLE_POPUP = "TOGGLE_POPUP";
export const ARIA_LIVE_TEXT = "ARIA_LIVE_TEXT";
export const TOGGLE_TOAST_MESSAGE = "TOGGLE_TOAST_MESSAGE";

export const scaleChange = (scale) => ({ scale, type: SCALE_CHANGE });
export const togglePopup = (id) => ({ id, type: TOGGLE_POPUP });
export const ariaLiveText = (text) => ({ text, type: ARIA_LIVE_TEXT });
export const toggleToastMessage = (toggle) => ({
  toggle,
  type: TOGGLE_TOAST_MESSAGE,
});
