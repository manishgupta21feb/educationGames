import * as actions from "../../app/actions";
import data from "../data";

export const common = { ...actions };

export const SELECTED_ANS_ID = "SELECTED_ANS_ID";
export const RESET = "RESET";
export const SET_FINAL_STAR_RATING = "SET_FINAL_STAR_RATING";

export const setSelectedAnsId = (value) => ({
  type: SELECTED_ANS_ID,
  value: value,
});

export const setFinalStarRating = (value) => ({
  type: SET_FINAL_STAR_RATING,
  value: value,
});
export const doReset = () => ({ type: RESET });

export const thunks = {
  setStarRating: (val) => {
    return (dispatch, getState) => {
      dispatch(setFinalStarRating(val));
    };
  },
  onNextClick: (val) => {
    return (dispatch, getState) => {
      TincanManager.data.percentage = TincanManager.data.percentage + 25;
      TincanManager.saveTincanData();
      dispatch(common.setResetFocusState(true));
      dispatch(setSelectedAnsId(val));
    };
  },
  reset: () => {
    return (dispatch, getState) => {
      dispatch(doReset());
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.onChangeScreen(0));
      dispatch(common.togglePopup(1));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },
};
