import * as actions from "../../app/actions";
import data from "../data";
export const common = { ...actions };

export const SET_SELECTED_DEPARTMENT = "SET_SELECTED_DEPARTMENT";
export const SET_VISITED_DEPARTMENT = "SET_VISITED_DEPARTMENT";
export const RESET = "RESET";

export const setSelectedDepartment = (dept) => ({
  department: dept,
  type: SET_SELECTED_DEPARTMENT,
});

export const doReset = () => ({
  type: RESET,
});

export const setVisitedDepartment = (dept) => ({
  department: dept,
  type: SET_VISITED_DEPARTMENT,
});

export const thunks = {
  setSelectedDepartment: (value) => {
    return (dispatch, getState) => {
      const { visitedDepartments } = getState();
      if (!visitedDepartments.length) {
        dispatch(common.updateResetBtnState(false));
      }
      if(visitedDepartments.includes(value.id)){
        value = { ...value, reVisited: true }
      }
      EventManager.broadcast("SECONDARY_CLICK");
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(setSelectedDepartment(value));
      dispatch(setVisitedDepartment(value.id));
      dispatch(common.onChangeScreen(1));
    };
  },
  onBackClick: () => {
    return (dispatch, getState) => {
      const { visitedDepartments } = getState();
      if(visitedDepartments.length < 11){
        TincanManager.data.percentage = parseInt( (visitedDepartments.length)*100/11)
      }else{
        TincanManager.data.percentage = 100;
        TincanManager.data.completed = true;
      }
      TincanManager.saveTincanData();

      dispatch(setSelectedDepartment({}));
      dispatch(common.onChangeScreen(0));
      dispatch(common.setResetFocusState(true));
    };
  },
  reset: () => {
    return (dispatch, getState) => {
      dispatch(doReset());
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(common.thunks.onChangeScreen(0));
      dispatch(common.setResetFocusState(true));
      dispatch(common.updateResetBtnState(true));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
    };
  },
};
