export const RESET_BTN_STATE = "RESET_BTN_STATE";
export const SET_RESET_FOCUS_STATE = "SET_RESET_FOCUS_STATE";
export const TOGGLE_RESET = "TOGGLE_RESET";

export const updateResetBtnState = (val) => ({ val, type: RESET_BTN_STATE });

export const doReset = (val) => ({ val, type: TOGGLE_RESET });
export const setResetFocusState = (focus) => ({
  focus,
  type: SET_RESET_FOCUS_STATE,
});

export const UPDATE_VISITED = "UPDATE_VISITED";
export const updateVisited = (val) => ({ val, type: UPDATE_VISITED });

export const thunk = {
  doReset: (value) => {
    return (dispatch, state) => {
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
      dispatch(doReset(value));
    };
  },

  updateVisited: (value) => {
    return (dispatch) => {
      dispatch(updateVisited(value));
    }
  },

  onCalculatedClick: () => {
    return () => {
      TincanManager.data.completed = true;
      TincanManager.data.percentage = 100;
      TincanManager.saveTincanData();
    }
  }
};
