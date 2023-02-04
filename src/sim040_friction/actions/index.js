import data from "../data";
import * as actions from "../../app/actions";
export const common = { ...actions };

const { ariaLiveText, togglePopup, updateResetBtnState, ariaLiveAssertive } =
  actions;
export const SELECT_MATERIAL = "SELECT_MATERIAL";
export const ADD_VISIT_MATERIAL = "ADD_VISIT_MATERIAL";
export const SET_ANIMATION_STATE = "SET_ANIMATION_STATE";
export const RESET_VISIT_MATERIAL = "RESET_VISIT_MATERIAL";
export const SET_PLAY_BUTTON_TEXT = "SET_PLAY_BUTTON_TEXT";
export const SET_MAIN_IMAGE_ALT_TEXT = "SET_MAIN_IMAGE_ALT_TEXT";

export const selectMaterial = (material) => ({
  material,
  type: SELECT_MATERIAL,
});

export const setAnimationState = (animation) => ({
  animation,
  type: SET_ANIMATION_STATE,
});

export const setPlayButtonText = (text) => ({
  text,
  type: SET_PLAY_BUTTON_TEXT,
});

export const setMainImageAltText = (alt) => ({
  alt,
  type: SET_MAIN_IMAGE_ALT_TEXT,
});

export const addVisitMaterial = (material) => ({
  material,
  type: ADD_VISIT_MATERIAL,
});

export const resetVisitMaterial = () => ({
  type: RESET_VISIT_MATERIAL,
});

export const thunks = {
  selectMaterial: (material) => (dispatch, getState) => {
    const { resetBtnState } = getState();
    dispatch(selectMaterial(material));
    dispatch(setPlayButtonText(data.playButtonText));
    const alt = data.altTexts.before[material];
    dispatch(setMainImageAltText(alt));
    if (resetBtnState) {
      dispatch(updateResetBtnState(false));
    }
  },

  setAnimationState: (animation) => (dispatch, getState) => {
    if (!animation) {
      dispatch(setPlayButtonText(data.replayButtonText));
    }
    dispatch(setAnimationState(animation));
    const { selectedMaterial, resetBtnState } = getState();
    if (animation) {
      dispatch(addVisitMaterial(selectedMaterial));
      const liveText = data.liveText.replace("-1-", selectedMaterial);
      dispatch(ariaLiveAssertive(" "));
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      });
      setTimeout(() => {
        dispatch(ariaLiveAssertive(liveText));
      }, 800);
      setTimeout(() => {
        dispatch(ariaLiveAssertive(" "));
      }, 1200);
    } else {
      const alt = data.altTexts.after[selectedMaterial];
      dispatch(setMainImageAltText(alt));
      const { visitedMaterials } = getState();
      TincanManager.data.percentage = Math.round(
        (visitedMaterials.length / (data.materials.length - 1)) * 100
      );
      TincanManager.data.completed = TincanManager.data.percentage == 100;
      TincanManager.saveTincanData();
    }
  },

  resetActivity: () => (dispatch, getState) => {
    const { currentPopup } = getState();
    dispatch(setAnimationState(false));
    dispatch(selectMaterial("ice"));
    dispatch(resetVisitMaterial());
    dispatch(updateResetBtnState(true));
    dispatch(setPlayButtonText(data.playButtonText));
    const alt = data.altTexts.before.ice;
    dispatch(setMainImageAltText(alt));
    if (currentPopup.indexOf(2) >= 0) {
      dispatch(togglePopup(2));
    }
    TincanManager.data.percentage = 0;
    TincanManager.resetTincanData();
    dispatch(togglePopup(1));
  },
};
