import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

import data from "../data";
export const common = { ...actions };
const { togglePopup, ariaLiveText, setResetFocusState } = actions;

export const PAIR_INSECTS = "PAIR_INSECTS";
export const SIM_COMPLETION_STATUS = "SIM_COMPLETION_STATUS";
export const RESET_PAIR_INSECTS = "RESET_PAIR_INSECTS";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const SET_OPTIONS = "SET_OPTIONS";
export const SET_ACTIVITY_COMPLETED = "SET_ACTIVITY_COMPLETED";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const SELECTED_OPTIONS = "SELECTED_OPTIONS";
export const RESET_OPTIONS = "RESET_OPTIONS";
export const NEXT_UPDATE_BUTTON_STATE = "NEXT_UPDATE_BUTTON_STATE";
export const GET_QUESTION_SET = "GET_QUESTION_SET";
export const RESET_ADD_GRASSHOPPER = "RESET_ADD_GRASSHOPPER";
export const RESET_OPTION_RESULT = "RESET_OPTION_RESULT";
export const Add_MATE_BUTTON = "Add_MATE_BUTTON";
export const IS_BUTTON_TYPE = "IS_BUTTON_TYPE";
export const ADD_GRASSHOPPER = "ADD_GRASSHOPPER";
export const IS_RADIO_BUTTON_DISABLE = "IS_RADIO_BUTTON_DISABLE";
export const CONDITION_TREE = "CONDITION_TREE";
export const RESET_CONDITION_TREE = "RESET_CONDITION_TREE";
export const RESET_SIM_COMPLETION_STATUS = "RESET_SIM_COMPLETION_STATUS";
export const GET_ALT_TEXT = "GET_ALT_TEXT";
export const RESET_ALT_TEXT = "RESET_ALT_TEXT";

export const resetSimCompletionStatus = () => {
  return {
    type: "RESET_SIM_COMPLETION_STATUS",
  };
};

export const resetAddGrasshopper = () => {
  return {
    type: "RESET_ADD_GRASSHOPPER",
  };
};

export const resetConditionTree = () => {
  return {
    type: "RESET_CONDITION_TREE",
  };
};

export const setConditionTree = (item, parentA, parentB) => {
  return {
    type: "CONDITION_TREE",
    item,
    parentA,
    parentB,
  };
};

export const setSimCompletionStatus = (value) => {
  return {
    type: "SIM_COMPLETION_STATUS",
    value,
  };
};

export const pairInsects = (value, status) => {
  return {
    type: "PAIR_INSECTS",
    value,
    status,
  };
};

export const getAltText = (value) => {
  return {
    type: "GET_ALT_TEXT",
    value,
  };
};

export const resetPairInsects = () => {
  return {
    type: "RESET_PAIR_INSECTS",
  };
};

export const addGrasshoppers = (value) => {
  return {
    type: "ADD_GRASSHOPPER",
    value,
  };
};

export const setIsButtonType = (value) => {
  return {
    type: IS_BUTTON_TYPE,
    value,
  };
};

export const getQuestionSets = (item) => {
  return {
    type: GET_QUESTION_SET,
    item,
  };
};

export const getNextQuestion = (value) => {
  return {
    type: GET_NEXT_QUESTION,
    value,
  };
};

export const resetOptions = (value) => ({
  type: RESET_OPTIONS,
  value,
});
export const getOptionsValue = (value, radio) => ({
  type: SELECTED_OPTIONS,
  value,
  radio,
});

export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});

export const updateQuestion = (items) => ({
  items,
  type: UPDATE_QUESTION,
});

export const nextButtonState = (value) => ({
  value,
  type: NEXT_UPDATE_BUTTON_STATE,
});

export const addMateButton = (value) => ({
  value,
  type: Add_MATE_BUTTON,
});

export const isRadioButtonDisable = (value) => ({
  value,
  type: IS_RADIO_BUTTON_DISABLE,
});

export const resetAltText = () => ({
  type: RESET_ALT_TEXT,
});

export const thunks = {
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(addMateButton(true));
      dispatch(getQuestionSets(1));
      dispatch(setIsButtonType(false));
      dispatch(nextButtonState(false));
      dispatch(addGrasshoppers({ green: 1, brown: 0 }));
      dispatch(resetAddGrasshopper());
      dispatch(isRadioButtonDisable(false));
      dispatch(getOptionsValue("rd0", true));
      dispatch(setResetFocusState(true));
      dispatch(resetPairInsects());
      dispatch(resetAltText());
      if (value != data.buttonLabels.continue) {
        dispatch(getOptionsValue("rd0", false));
        dispatch(togglePopup(1));
        dispatch(ariaLiveText(data.resetLiveText));
        dispatch(resetConditionTree());
        dispatch(resetSimCompletionStatus());

        if (currentPopup.indexOf(3) >= 0) {
          dispatch(togglePopup(3));
        }
        if (currentPopup.indexOf(4) >= 0) {
          dispatch(togglePopup(4));
        }
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
        TincanManager.data.percentage = 0;
        TincanManager.resetTincanData();

        // TincanManager.data.percentage = 0;
        // TincanManager.data.completed = false;
        // TincanManager.total_score = 0;
        // TincanManager.saveTincanData();
      }
    };
  },
  nextQuestion: () => (dispatch, getState) => {
    dispatch(getQuestionSets(2));
    dispatch(nextButtonState(false));
    dispatch(setIsButtonType(true));
    dispatch(isRadioButtonDisable(true));
    dispatch(setResetFocusState(true));

    EventManager.broadcast("PRIMARY_CLICK");
  },
  onRadioClick: (id) => (dispatch, getState) => {
    dispatch(getOptionsValue(id, true));
    dispatch(addMateButton(false));
    let { pairInsects } = getState();
    dispatch(setConditionTree(id, pairInsects[0], pairInsects[1]));
  },
  onSubmit: () => (dispatch, getState) => {
    let { getQuestionSet } = getState();
    if (getQuestionSet.generation == 2) {
      dispatch(setIsButtonType(false));
    }
    dispatch(isRadioButtonDisable(true));
    dispatch(nextButtonState(true));
    dispatch(addMateButton(true));
    let { conditionTree, isButtonType } = getState();
    if (getQuestionSet.generation == 1) {
      let filterData = conditionTree.filter((x) => x.isSelected == true);
      let { parentId: color, green, brown } = filterData[0];
      dispatch(addGrasshoppers({ color, green, brown, isButtonType }));
    } else {
      let filterData = conditionTree.filter((x) => x.isSelected == true);
      let caseData = filterData[0].subCase.filter((x) => x.isCompleted == true);
      let { parentId: color, green, brown, keyValue } = caseData[0];
      dispatch(addGrasshoppers({ color, green, brown, isButtonType }));
      dispatch(setSimCompletionStatus(keyValue));
      let { simCompletionStatus } = getState();
      TincanManager.data.percentage = (simCompletionStatus.size / 6) * 100;
      TincanManager.data.completed =
        simCompletionStatus.size == 6 ? true : false;
      TincanManager.saveTincanData();
    }

    let { addGrasshopper: filterData } = getState();
    dispatch(getAltText(filterData));
    EventManager.broadcast("PRIMARY_CLICK");
  },
};
