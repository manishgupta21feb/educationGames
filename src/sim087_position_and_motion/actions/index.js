import * as actions from "../../app/actions";
import data from "../data/index";

export const common = { ...actions };

export const ACTIVITY_START = "ACTIVITY_START";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const SET_RESET_FOCUS_STATE = "SET_RESET_FOCUS_STATE";

export const SET_HOME_SCREEN = "SET_HOME_SCREEN";
export const SET_ANIMATION_SCREEN_ID = "SET_ANIMATION_SCREEN_ID";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const CURRENT_EXPERIMENT_NUMBER = "CURRENT_EXPERIMENT_NUMBER";
export const PLAY_SELECTED_ANIMATION = "PLAY_SELECTED_ANIMATION";
export const IS_CONTINUE = "IS_CONTINUE";
export const IS_BOTH_VIDEO_PLAYED = "IS_BOTH_VIDEO_PLAYED";
export const IS_SHOW_VIDEO = "IS_SHOW_VIDEO";

export const setActivityStart = (val) => ({
  type: ACTIVITY_START,
  val,
});

export const buttonClicked = (action) => ({
  type: BUTTON_CLICKED,
  action,
});

export const setResetFocusState = (focus) => ({
  type: SET_RESET_FOCUS_STATE,
  focus,
});

export const setHomeScreen = (flag) => ({
  type: SET_HOME_SCREEN,
  flag,
});

export const setAnimationScreenId = (id) => ({
  type: SET_ANIMATION_SCREEN_ID,
  id,
});

export const selectAnswerOption = (id) => ({
  type: SELECT_ANSWER_OPTION,
  id,
});

export const currentExperimentNumber = (data) => ({
  type: CURRENT_EXPERIMENT_NUMBER,
  data,
});

export const setPlaySelectedAnimation = (playState) => ({
  type: PLAY_SELECTED_ANIMATION,
  playState,
});

export const setIsContinue = (flag) => ({
  type: IS_CONTINUE,
  flag,
});

export const setIsBothVideoPlayed = (arrObj) => ({
  type: IS_BOTH_VIDEO_PLAYED,
  arrObj,
});

export const setShowVideoLevel = (flag) => ({
  type: IS_SHOW_VIDEO,
  flag,
});

export const thunk = {
  selectAnswerOption: (id) => {
    return (dispatch, getState) => {
      dispatch(selectAnswerOption(id));
    };
  },

  showContinue: () => {
    return (dispatch, getState) => {
      const { isContinue, isBothVideoPalyed } = getState();
      if (!isContinue) {
        let flag = true;
        isBothVideoPalyed.forEach((arrayItem) => {
          if (arrayItem.flag === false) {
            flag = false;
            return false;
          }
        });

        if (flag === true) {
          dispatch(setIsContinue(true));
        }
      }
    };
  },

  onChangeRadio: (id) => {
    return (dispatch, getState) => {
      const { isBothVideoPalyed } = getState();
      dispatch(
        id == "smallPush" || id == "hardHit"
          ? currentExperimentNumber(1)
          : currentExperimentNumber(2)
      );

      dispatch(setShowVideoLevel(false));
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(thunk.selectAnswerOption(id));
      dispatch(setPlaySelectedAnimation(true));
      dispatch(common.toggleToastMessage(false));

      if (id === "smallPush" || id === "hardHit") {
        isBothVideoPalyed[0].flag = true;
      } else {
        isBothVideoPalyed[1].flag = true;
      }

      dispatch(setIsBothVideoPlayed(isBothVideoPalyed));
    };
  },

  resetActivity: () => {
    return (dispatch) => {
      dispatch(common.updateResetBtnState(true));
      dispatch(currentExperimentNumber(0));
      dispatch(setIsBothVideoPlayed([...data.isBothVideoPlay]));
      dispatch(selectAnswerOption(""));
      dispatch(setIsContinue(false));
      dispatch(setHomeScreen(true));
      dispatch(setPlaySelectedAnimation(false));
      dispatch(setShowVideoLevel(false));
      setTimeout(() => {
        dispatch(common.togglePopup(1));
      }, 150);
    };
  },
};
