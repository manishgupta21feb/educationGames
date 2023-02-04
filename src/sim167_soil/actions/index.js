import * as actions from "../../app/actions";

import data from "../data";
import { isAndroid, isMacOs, isIos } from "react-device-detect";

export const CURRENT_SECTION = "CURRENT_SECTION";
export const CURRENT_SOIL = "CURRENT_SOIL";
export const DRAG_DATA = "DRAG_DATA";
export const TOTAL_STRENGTH = "TOTAL_STRENGTH";
export const DROP_ZONES = "DROP_ZONES";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const CURRENT_DRAGGABLE = "CURRENT_DRAGGABLE";
export const SOIL_VIEW_DATA = "SOIL_VIEW_DATA";

export const setCurrentSection = (loc) => {
  return {
    type: CURRENT_SECTION,
    loc,
  };
};

export const setCurrentSoil = (soil) => {
  return {
    type: CURRENT_SOIL,
    soil,
  };
};
export const setTotalStrength = (value) => ({
  type: TOTAL_STRENGTH,
  value,
});
export const setDragData = (value) => ({
  type: DRAG_DATA,
  value,
});
export const setDropZones = (value) => ({
  type: DROP_ZONES,
  value,
});
export const setUpdateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});
export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});

export const setCurrentDraggable = (val) => ({
  type: CURRENT_DRAGGABLE,
  val,
});

export const setSoilViewData = (val) => {
  return {
    type: SOIL_VIEW_DATA,
    val,
  };
};

export const thunk = {
  onDropElement: (dragSoil, dropSoil) => {
    return (dispatch, getState) => {
      dispatch(common.toggleToastMessage(true));
      const { getDragData, getCurrentDraggable, getDropZones } = getState();
      const _dragState = [...getDragData];
      const _dropState = [...getDropZones];
      let currentDrop = 0;
      if (getCurrentDraggable == dropSoil) {
        _dragState.forEach((element, index, self) => {
          {
            if (element.content == dropSoil) {
              self[index] = { ...self[index], isDropped: true };
              _dropState[index] = { ..._dropState[index], hidden: true };
              currentDrop = index;
            }
          }
        });
        //success
        dispatch(updateToastMsg("correct"));
        dispatch(setDragData(_dragState));
        dispatch(setDropZones(_dropState));
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);

        let _data = `${getCurrentDraggable} ${data.droppedOn} ${_dropState[currentDrop].label}`;
        dispatch(thunk.ariaLivePointer(_data));
      } else {
        //success
        dispatch(updateToastMsg("incorrect"));
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500); //wrong toast msg
      }
      dispatch(common.setResetFocusState(true));
    };
  },
  onResetActivity: () => {
    return (dispatch) => {
      dispatch(common.toggleToastMessage(false));
      dispatch(setCurrentSection("launch"));
      dispatch(setCurrentSoil(0));
      dispatch(setDragData([...data.dragObjects]));
      dispatch(setDropZones([...data.dropObjects]));
      dispatch(updateToastMsg(""));
      dispatch(setCurrentDraggable(""));
      dispatch(setSoilViewData([0, 0, 0]));
      dispatch(common.updateResetBtnState(true));
    };
  },
  updateSoil: (data, index) => {
    return (dispatch, getState) => {
      const { getSoilViewData } = getState();
      const _getSoilViewData = [...getSoilViewData];

      _getSoilViewData[index] = 1;
      dispatch(setSoilViewData(_getSoilViewData));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(setCurrentSection(data));
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));
      dispatch(setCurrentSoil(index));
    };
  },
  soilCompletion: () => {
    return (dispatch, getState) => {
      const { getSoilViewData } = getState();
      const _getSoilViewData = getSoilViewData;

      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));

      let isCompleted = _getSoilViewData.every((element) => element == 1);
      if (isCompleted) {
        dispatch(common.togglePopup(4));

        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 200);
        return;
      }
      if (!isCompleted) {
        dispatch(setCurrentSection("launch"));
        return;
      }
    };
  },
  ariaLivePointer: (_data) => {
    return (dispatch) => {
      if (isAndroid || isMacOs) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(_data));
        }, 200);
      } else {
        dispatch(common.thunks.ariaLiveAssertive(_data));
      }
    };
  },
};
export const common = { ...actions };
