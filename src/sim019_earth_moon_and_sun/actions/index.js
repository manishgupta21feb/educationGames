import * as actions from "../../app/actions";
import data from "../data";
export const common = { ...actions };
const { updateResetBtnState, ariaLiveText, togglePopup } = actions;

export const SELECT_DAY = "SELECT_DAY";

export const selectDay = (day) => ({ day, type: SELECT_DAY });

var datesSelected = [1];
export const thunks = {
  selectDay: (day) => {
    return (dispatch, getState) => {
      dispatch(selectDay(day));
      datesSelected.indexOf(day) === -1 && datesSelected.push(day);
      TincanManager.data.percentage = (datesSelected.length / 30) * 100;
      TincanManager.data.percentage == 100
        ? (TincanManager.data.completed = true)
        : null;
      TincanManager.saveTincanData();
      const { resetBtnState } = getState();
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
    };
  },
  resetActivity: () => (dispatch) => {
    TincanManager.data.percentage = 0;
    TincanManager.resetTincanData();
    dispatch(selectDay(1));
    dispatch(togglePopup(1));
    dispatch(updateResetBtnState(true));
    dispatch(ariaLiveText(data.resetLiveText));
    setTimeout(() => {
      dispatch(ariaLiveText(" "));
    }, 300);
    datesSelected = [1];
  },
};
