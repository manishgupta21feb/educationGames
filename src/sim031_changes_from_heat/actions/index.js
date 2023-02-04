import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

export const common = { ...actions };
const { ariaLiveText, togglePopup, updateResetBtnState, setResetFocusState } =
  common;

export const SET_ANSWERED = "SET_ANSWERED";
export const ARRAY_VISITED = "ARRAY_VISITED";
export const RESET_QUESTION = "RESET_QUESTION";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const SET_ITEMS_VISITED = "SET_ITEMS_VISITED";
export const DELETE_ARRAY_VISITED = "DELETE_ARRAY_VISITED";

export const selectQuestion = (id) => {
  return {
    id,
    type: SELECT_QUESTION,
  };
};

export const resetQuestion = () => {
  return {
    type: RESET_QUESTION,
  };
};

export const setAnswered = (value) => ({ value, type: "SET_ANSWERED" });

export const deleteArrayVisited = (val) => ({
  val,
  type: DELETE_ARRAY_VISITED,
});

export const setArrayVisited = (val) => ({
  val,
  type: ARRAY_VISITED,
});

export const setItemsVisited = (count) => ({
  count,
  type: SET_ITEMS_VISITED,
});



export const thunk = {
  verifyItem: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState, itemsVisited } = getState();
      EventManager.broadcast("SECONDARY_CLICK");
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      dispatch(selectQuestion(id));
      dispatch(setItemsVisited(itemsVisited + 1));
      dispatch(setAnswered(true));
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);
      dispatch(setResetFocusState(true));
    };
  },

  onTemperatureButtonClick: (id) => (dispatch, getState) => {
    const { selectedQuestion } = getState();
    const check = data.classifyingMatterContent.filter(
      (e) => e.id == selectedQuestion
    )[0];
    const button = JSON.parse(
      JSON.stringify(check.buttons.filter((btn) => btn.id == id)[0])
    );
    dispatch(setArrayVisited(button));
  },

  onContinueClick: () => {
    return (dispatch, getState) => {
      const { itemsVisited} = getState();
      setTimeout(() => {
        dispatch(setResetFocusState(true));
      }, 200);

      dispatch(selectQuestion(-1));
      dispatch(deleteArrayVisited());
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);
      TincanManager.data.percentage = parseInt(
        (itemsVisited / data.classifyingMatterContent.length) * 100
      );
      TincanManager.saveTincanData();
      dispatch(setAnswered(false));
    };
  },

  reset: () => {
    return (dispatch, state) => {
      TincanManager.data.completed = true;
      TincanManager.data.time_spent = true;
      TincanManager.data.percentage = 0;
      TincanManager.saveTincanData();
      dispatch(resetQuestion());
      dispatch(setAnswered(false));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));
      dispatch(deleteArrayVisited());
      dispatch(setItemsVisited(0));
      const { currentPopup } = state();
      if (currentPopup.indexOf(6) >= 0) {
        dispatch(togglePopup(6));
      }
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
      dispatch(togglePopup(1));
      TincanManager.resetTincanData();
    };
  },
};
