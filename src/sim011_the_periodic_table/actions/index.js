import data from "../data";
import * as actions from "../../app/actions";
const { ariaLiveText, togglePopup, toggleToastMessage, updateResetBtnState } =
  actions;

export const ELEMENT_DATA = "ELEMENT_DATA";
export const DROP_ELEMENT = "DROP_ELEMENT";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const UPDATE_ATTEMPT = "UPDATE_ATTEMPT";
export const SIMULATION_END = "SIMULATION_END";
export const ACTIVITY_COMPLETED = "ACTIVITY_COMPLETED";
export const TABLE_CELL_ARIA_LABEL = "TABLE_CELL_ARIA_LABEL";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const RESET_ACTIVITY_COMPLETED = "RESET_ACTIVITY_COMPLETED";

export const common = { ...actions };
export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });
export const simulationEnd = (val) => ({ val, type: SIMULATION_END });
export const updateElementData = (val) => ({ val, type: ELEMENT_DATA });
export const updateDropElement = (val) => ({ val, type: DROP_ELEMENT });
export const updateAttemptData = (val) => ({ val, type: UPDATE_ATTEMPT });
export const activityCompletedState = () => ({ type: ACTIVITY_COMPLETED });

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const updateTableCellAriaLabel = (val) => ({
  val,
  type: TABLE_CELL_ARIA_LABEL,
});

export const resetActivityCompletedState = () => ({
  type: RESET_ACTIVITY_COMPLETED,
});

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
  fetchQuestion: () => {
    return (dispatch, getState) => {
      const { elementData } = getState();
      dispatch(updateElementData(helper.shuffleArray(elementData)));
    };
  },
  updateAttempt: (val) => {
    return (dispatch, getState) => {
      const {
        updateAttempt,
        dropElement,
        periodicTableCellAriaLabel,
        elementData,
      } = getState();
      dispatch(updateAttemptData([...updateAttempt, val]));

      let temp = {
        // update drag element value to show on periodic table
        ...dropElement,
        [val]: true,
      };

      const currentDroppable = elementData.find((dataItem) => {
        return dataItem.elementName === val;
      });

      let updateTableCellContent = {
        ...periodicTableCellAriaLabel,
        tableCellAriaLabel: {
          ...periodicTableCellAriaLabel.tableCellAriaLabel,
          [currentDroppable.shortName]: "",
        },
      };

      dispatch(updateDropElement(temp));
      dispatch(updateTableCellAriaLabel(updateTableCellContent));
    };
  },
  onCorrectDrop: (currentDropElem) => {
    return (dispatch, getState) => {
      const { elementData, updateAttempt } = getState();
      if (updateAttempt.length >= 9) {
        dispatch(updateToastMsg("correct"));
        dispatch(toggleToastMessage(true));
        EventManager.broadcast("POSITIVE_FEEDBACK");
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
        dispatch(activityCompletedState());
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
          dispatch(toggleToastMessage(false));
          dispatch(togglePopup(6));
        }, 1200);
      } else {
        dispatch(updateToastMsg("correct"));
        dispatch(toggleToastMessage(true));
        EventManager.broadcast("POSITIVE_FEEDBACK");
      }
      const currentDroppable = elementData.find((dataItem) => {
        return dataItem.elementName === currentDropElem;
      });
      TincanManager.saveTincanData();
      document
        .querySelector(`.${currentDroppable.ptCellClass}`)
        .classList.add("setBluecolor");
    };
  },
  onInCorrectDrop: (currentOption) => {
    return (dispatch, getState) => {
      EventManager.broadcast("NEGATIVE_FEEDBACK");
      dispatch(updateToastMsg("incorrect"));
      dispatch(toggleToastMessage(true));
    };
  },
  resetGame: () => {
    return (dispatch, getState) => {
      const { elementData } = getState();
      dispatch(simulationEnd(true));
      dispatch(togglePopup(1));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateElementData(helper.shuffleArray(elementData)));
      dispatch(updateAttemptData([]));
      dispatch(updateDropElement({}));
      dispatch(updateResetBtnState(true));
      dispatch(updateTableCellAriaLabel(data.periodicTableData));
      dispatch(updateAccessibleList(false));
      elementData.forEach((value) => {
        document
          .querySelector(`.${value.ptCellClass}`)
          .classList.remove("setBluecolor");
      });
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
      dispatch(resetActivityCompletedState());
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },

  onActivityInit: () => {
    return (dispatch, getState) => {
      const { activityCompleted } = getState();
      if (activityCompleted) {
        dispatch(togglePopup(6));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 300);
      } else {
        dispatch(togglePopup(1));
        dispatch(thunks.fetchQuestion());
      }
    };
  },
};
