import data from "../data";
import * as actions from "../../app/actions";
export const common = { ...actions };

export const SELECT_ITEM = "SELECT_ITEM";
export const ACTIVITY_START = "ACTIVITY_START";
export const SHOW_NEXT_BUTTON = "SHOW_NEXT_BUTTON";
export const FEEDBACK_NARRATION = "FEEDBACK_NARRATION";
export const PRIVIOUS_SELECTED_ITEM = "PRIVIOUS_SELECTED_ITEM";
export const SELECT_PHYSICAL_PROPERTY = "SELECT_PHYSICAL_PROPERTY";
export const PRIVIOUS_SELECTED_PHYSICAL_PROPERTIES =
  "PRIVIOUS_SELECTED_PHYSICAL_PROPERTIES";
export const RESET_PRIVIOUS_SELECTED_PHYSICAL_PROPERTIES =
  "RESET_PRIVIOUS_SELECTED_PHYSICAL_PROPERTIES";
export const RESET_PRIVIOUS_SELECTED_ITEM = "RESET_PRIVIOUS_SELECTED_ITEM";

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

export const setSelectedPhysicalProperty = (val) => {
  return {
    type: SELECT_PHYSICAL_PROPERTY,
    val,
  };
};
export const setSelectedItem = (val) => {
  return {
    type: SELECT_ITEM,
    val,
  };
};

export const setPriviousSelectedPhysicalProperties = (id) => {
  return {
    type: PRIVIOUS_SELECTED_PHYSICAL_PROPERTIES,
    id,
  };
};
export const setPriviousSelectedItem = (id) => {
  return {
    type: PRIVIOUS_SELECTED_ITEM,
    id,
  };
};
export const resetPriviousSelectedPhysicalProperties = () => {
  return {
    type: RESET_PRIVIOUS_SELECTED_PHYSICAL_PROPERTIES,
  };
};
export const resetPriviousSelectedItem = () => {
  return {
    type: RESET_PRIVIOUS_SELECTED_ITEM,
  };
};

export const setShowNextButton = (val) => {
  return {
    type: SHOW_NEXT_BUTTON,
    val,
  };
};
export const thunk = {
  saveState: () => {
    return (dispatch, getState) => {
      const { priviousSelectedPhysicalProperties } = getState();
      console.log(priviousSelectedPhysicalProperties.length, "========");

      TincanManager.data.percentage =
        (priviousSelectedPhysicalProperties.length / 5) * 100;
      priviousSelectedPhysicalProperties.length == 5
        ? (TincanManager.data.completed = true)
        : null;
      TincanManager.saveTincanData();
    };
  },
  toast: (a) => {
    return (dispatch, getState) => {
      const { selectedItem, selectedPhysicalProperty } = getState();
      if (
        selectedPhysicalProperty == "Magnetism" &&
        !(
          selectedItem == "metal-toy-car" ||
          selectedItem == "iron-nail" ||
          selectedItem == "nickel"
        )
      ) {
        setTimeout(() => {
          dispatch(common.toggleToastMessage(true));
        });
        setTimeout(() => {
          dispatch(common.toggleToastMessage(false));
          dispatch(setSelectedItem(""));
        }, 4000);
      } else {
        dispatch(common.toggleToastMessage(false));
      }
    };
  },
  resetSimulation: () => {
    return (dispatch) => {
      data.mainScreenButtons.map((i) => {
        i.visited = false;
      });
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(common.updateResetBtnState(true));
      dispatch(setActivityStart(true));
      // dispatch(setResetFocusState(false));
      dispatch(resetPriviousSelectedPhysicalProperties());
      dispatch(resetPriviousSelectedItem());
      dispatch(setSelectedPhysicalProperty(""));
      dispatch(setSelectedItem(""));
      dispatch(common.onChangeScreen(0));
      setTimeout(() => {
        dispatch(common.togglePopup(1));
      });
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
    };
  },
};
