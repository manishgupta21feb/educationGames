import * as actions from "../../app/actions";
import data from "../data";

export const RESET = "RESET";
export const SET_QUESTION = "SET_QUESTION";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const SET_DRAGGABLES = "SET_DRAGGABLES";

export const updateToastMsg = (value) => ({ value, type: TOAST_MESSAGE });
export const setQuestions = (value) => ({ value, type: SET_QUESTION });
export const reset = () => ({ type: RESET });
export const setDraggables = (value) => ({ value, type: SET_DRAGGABLES });

export const common = { ...actions };

//helper
export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export const thunks = {
  reset: () => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(common.onChangeScreen(0));
      dispatch(common.updateResetBtnState(true));
      dispatch(reset());
    };
  },
  setQuestions: () => {
    return (dispatch, getState) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.togglePopup(4));
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(common.onChangeScreen(1));
      dispatch(setQuestions(helper.shuffleArray(data.waves)));
    };
  },
  setDraggables: () => {
    return (dispatch, getState) => {
      dispatch(setDraggables(helper.shuffleArray(data.draggables)));
    };
  },
};
