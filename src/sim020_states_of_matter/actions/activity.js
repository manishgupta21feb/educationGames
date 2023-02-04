import data from "../data";
import EventManager from "../../app/events/manager";
import { togglePopup, ariaLiveText, toggleToastMessage } from ".";

export const DEMO_ACTION = "DEMO_ACTION";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const RESET_QUESTION = "RESET_QUESTION";
export const SELECT_OPTION = "SELECT_OPTION";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const RESET_FOCUS = "RESET_FOCUS";
export const RESET_BTN_STATE = "RESET_BTN_STATE";
export const ACTIVITY_START = "ACTIVITY_START";
export const FEEDBACK_NARRATION = "FEEDBACK_NARRATION";
export const SET_ANSWERED = "SET_ANSWERED";
export const TEMP_BTN_CLICK = "TEMP_BTN_CLICK";
export const ARRAY_VALUES = "ARRAY_VALUES";
export const DELETE_ARRAY_VALUES = "DELETE_ARRAY_VALUES";
export const STORE_ID = "STORE_ID";
export const CLEAR_ID = "CLEAR_ID";

export const deleteArrayValues = (val) => ({
  val,
  type: DELETE_ARRAY_VALUES,
});

export const setArrayValues = (val) => ({
  val,
  type: ARRAY_VALUES,
});

export const tempButtonClick = () => ({
  type: TEMP_BTN_CLICK,
});

export const scaleChange = () => ({ type: DEMO_ACTION });

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

export const selectOption = (option) => {
  return {
    type: SELECT_OPTION,
    option,
  };
};

export const answerAttempted = (attempted) => {
  return {
    type: ANSWER_ATTEMPTTED,
    attempted,
  };
};

export const setResetFocusState = (focus) => {
  return {
    type: RESET_FOCUS,
    focus,
  };
};

export const setActivityStart = (val) => {
  return {
    type: ACTIVITY_START,
    val,
  };
};

export const setFeedbackNarration = (val) => {
  return {
    type: FEEDBACK_NARRATION,
    val,
  };
};

export const setAnswered = (value) => ({ value, type: "SET_ANSWERED" });
export const updateResetBtnState = (val) => ({ val, type: RESET_BTN_STATE });

export const storeId = (value) => {
  return {
    type: STORE_ID,
    value,
  };
};

export const clearId = () => {
  return {
    type: CLEAR_ID,
  };
};

export const thunk = {
  verifyItem: (id) => {
    return (dispatch, getState) => {
      dispatch(toggleToastMessage(false));
      const { resetBtnState } = getState();
      // const check = selectedQuestion == id;
      const check = data.classifyingMatterContent.filter((e) => e.id == id)[0];
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      if (check) {
        dispatch(setAnswered(true));
        dispatch(setResetFocusState(true));
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
        dispatch(storeId(id));
      }
    };
  },

  onContinueClick: () => {
    return (dispatch, getState) => {
      const { selectedQuestion, storeId: id } = getState();
      dispatch(setResetFocusState(true));
      // dispatch(setStatic(false));
      dispatch(selectQuestion(""));
      dispatch(deleteArrayValues());
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);

      dispatch(setAnswered(false));
      if (id.length < data.classifyingMatterContent.length) {
        TincanManager.data.percentage = parseInt(
          (id.length / data.classifyingMatterContent.length) * 100
        );
        TincanManager.saveTincanData();
      } else {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
    };
  },

  reset: () => {
    return (dispatch, state) => {
      dispatch(resetQuestion());
      dispatch(selectOption(""));
      dispatch(setAnswered(false));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));
      dispatch(setActivityStart(false));
      dispatch(selectQuestion(""));
      dispatch(deleteArrayValues());
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
      dispatch(clearId());
      TincanManager.resetTincanData();
    };
  },
};
