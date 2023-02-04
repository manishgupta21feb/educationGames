import * as actions from "../../app/actions";
import { screenData } from "../data";
export const common = { ...actions };

export const SET_VIEW_VISITED = "SET_VIEW_VISITED";
export const setViewVisited = (value) => ({ value, type: SET_VIEW_VISITED });

export const thunks = {
  onReset: () => {
    return (dispatch, getState) => {
      dispatch(common.ariaLiveText("Your activity has been reset"));
      dispatch(common.togglePopup(3));
      dispatch(common.togglePopup(1));
      dispatch(common.onChangeScreen(0));
      dispatch(common.setResetFocusState(true));
      dispatch(common.updateResetBtnState(true));
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },

  onContinue: (val) => {
    return (dispatch, getState) => {
      const { viewVisited } = getState();
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);
      dispatch(common.onChangeScreen(val));
      dispatch(common.setResetFocusState(true));
      if (val !== 0) {
        dispatch(setViewVisited(val));
        const visited = [...new Set([...viewVisited])];
        if (visited.length < screenData.length - 1) {
          TincanManager.data.percentage = parseInt(
            (visited.length / (screenData.length - 1)) * 100
          );
        }
        if (visited.length === screenData.length - 1) {
          TincanManager.data.percentage = 100;
          TincanManager.data.completed = true;
        }
      } else {
        if (
          TincanManager.data.percentage === 25 ||
          TincanManager.data.percentage === 75
        ) {
          TincanManager.data.percentage = TincanManager.data.percentage + 25;
        }
      }
      TincanManager.saveTincanData();
    };
  },
};
