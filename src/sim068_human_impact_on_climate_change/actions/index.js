import * as actions from "../../app/actions";
import data from "../data";
export const DEMO_ACTION = "DEMO_ACTION";
export const UPDATE_SLIDER_NATURAL_SELECTION =
  "UPDATE_SLIDER_NATURAL_SELECTION";
export const SLIDER_VISITED = "SLIDER_VISITED";
export const SLIDER_DISABLED = "SLIDER_DISABLED";
export const ZOOM_BUTTON_ID = "ZOOM_BUTTON_ID";
export const RESET_SLIDER_VISITED = " RESET_SLIDER_VISITED";
export const DESCRIPTION_BOX_SHOW = "DESCRIPTION_BOX_SHOW";
export const SHOW_RESPONSE = "SHOW_RESPONSE";
export const common = { ...actions };
export const ZOOM_POPUP_OPEN = "ZOOM_POPUP_OPEN";
export const updateSlider = (val) => ({
  type: UPDATE_SLIDER_NATURAL_SELECTION,
  payload: val,
});

export const sliderDisabled = (val) => ({
  type: SLIDER_DISABLED,
  val,
});
export const zoomButtonId = (val) => ({
  type: ZOOM_BUTTON_ID,
  val,
});
export const sliderVisited = (val) => ({
  type: SLIDER_VISITED,
  val,
});
export const resetSliderVisited = () => ({
  type: RESET_SLIDER_VISITED,
});
export const descriptionShow = (value) => ({
  type: DESCRIPTION_BOX_SHOW,
  value,
});
export const showResponse = (val) => ({
  type: SHOW_RESPONSE,
  val,
});
export const zoomPopupOpen = (val) => ({
  type: ZOOM_POPUP_OPEN,
  val,
});
export const thunks = {

  sliderActivity: (value) => {
    return (dispatch, getState) => {
      if (value) {
        EventManager.broadcast("PRIMARY_CLICK");
        dispatch(common.updateResetBtnState(false));
        dispatch(updateSlider(value));
        if (!getState().sliderVisitedValue.includes(value)) {
          dispatch(sliderVisited(value));
        }
      } else {
        dispatch(sliderVisited(JSON.stringify(getState().selectedTimeline)));
      }
      dispatch(descriptionShow(true));
      dispatch(showResponse(false));
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      const { isSliderDisabled } = getState();
      dispatch(descriptionShow(false));
      dispatch(common.setResetFocusState(true));
      if (!isSliderDisabled) {
        dispatch(sliderDisabled(true));
      } else {
        dispatch(common.togglePopup(7));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 300);
      }
    };
  },
  onResetActivity: () => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(descriptionShow(false));
      dispatch(resetSliderVisited());
      dispatch(updateSlider(0));

      dispatch(thunks.sliderActivity());

      dispatch(zoomButtonId(""));
      dispatch(sliderDisabled(false));
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(common.updateResetBtnState(true));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
    };
  },
};
