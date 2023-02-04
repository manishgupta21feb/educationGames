import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

export const ELEMENT_DATA = "ELEMENT_DATA";
export const DROP_ELEMENT = "DROP_ELEMENT";
export const UPDATE_STAGE = "UPDATE_STAGE";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const UPDATE_ATTEMPT = "UPDATE_ATTEMPT";
export const SIMULATION_END = "SIMULATION_END";
export const UPDATE_SHOW_NEXT = "UPDATE_SHOW_NEXT";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";

export const common = { ...actions };

const { ariaLiveText, togglePopup, updateResetBtnState, toggleToastMessage } =
  common;

export const updateStage = (val) => ({ val, type: UPDATE_STAGE });
export const simulationEnd = (val) => ({ val, type: SIMULATION_END });
export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });
export const updateElementData = (val) => ({ val, type: ELEMENT_DATA });
export const updateDropElement = (val) => ({ val, type: DROP_ELEMENT });
export const updateShowNext = (val) => ({ val, type: UPDATE_SHOW_NEXT });
export const updateAttemptData = (val) => ({ val, type: UPDATE_ATTEMPT });

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

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
  fetchElements: () => {
    return (dispatch, getState) => {
      const { selectedStage } = getState();
      dispatch(
        updateElementData(
          helper.shuffleArray([...data[selectedStage].elements])
        )
      );
    };
  },
  updateAttempt: (val) => {
    return (dispatch, getState) => {
      const { updateAttempt, dropElement } = getState();
      dispatch(updateAttemptData([...updateAttempt, val]));

      let temp = {
        // update drag element value to show
        ...dropElement,
        [val]: true,
      };
      dispatch(updateDropElement(temp));
    };
  },
  onCorrectDrop: (currentDropElem) => {
    return (dispatch, getState) => {
      const { elementData, updateAttempt, selectedStage } = getState();
      dispatch(updateToastMsg("correct"));
      dispatch(toggleToastMessage(true));
      EventManager.broadcast("POSITIVE_FEEDBACK");
      if (getState().resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      if (updateAttempt.length >= elementData.length) {
        dispatch(updateShowNext(true));
        if (selectedStage == "stage2") {
          TincanManager.data.percentage = 100;
          TincanManager.data.completed = true;
          TincanManager.saveTincanData();
        }
      }
    };
  },
  onInCorrectDrop: () => {
    return (dispatch, getState) => {
      dispatch(updateToastMsg("incorrect"));
      dispatch(toggleToastMessage(true));
      EventManager.broadcast("NEGATIVE_FEEDBACK");
    };
  },
  resetGame: () => {
    return (dispatch, getState) => {
      dispatch(simulationEnd(true));
      dispatch(updateStage("stage1"));
      dispatch(togglePopup(1));
      dispatch(
        updateElementData(helper.shuffleArray([...data.stage1.elements]))
      );
      dispatch(updateAttemptData([]));
      dispatch(updateDropElement({}));
      dispatch(updateResetBtnState(true));
      dispatch(updateAccessibleList(false));
      dispatch(updateShowNext(false));
      dispatch(ariaLiveText(" "));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },
  onStageOneComplete: () => {
    return (dispatch, getState) => {
      dispatch(updateStage("stage2"));
      dispatch(
        updateElementData(helper.shuffleArray([...data.stage2.elements]))
      );
      dispatch(updateAttemptData([]));
      dispatch(updateDropElement({}));
      dispatch(updateAccessibleList(false));
      dispatch(updateShowNext(false));
    };
  },
};
