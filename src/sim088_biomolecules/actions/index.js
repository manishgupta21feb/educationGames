import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import { isAndroid } from "react-device-detect";

import data from "../data";
export const common = { ...actions };
const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;
import { findNextNode, getNumbers } from "../helper";

export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const IS_RESET_BUTTON_DISABLE = "IS_RESET_BUTTON_DISABLE";
export const CURRENT_SCREEN_DATA = "CURRENT_SCREEN_DATA";
export const SET_ATOM1 = "SET_ATOM1";
export const SET_ATOM2 = "SET_ATOM2";
export const SET_ATOM3 = "SET_ATOM3";
export const IS_CONTINUE_DISABLE = "IS_CONTINUE_DISABLE";
export const DISABLE_DD = "DISABLE_DD";
export const DND1_DRAG_ITEM = "DND1_DRAG_ITEM";
export const RESET_RADIO_OPTIONS = "RESET_RADIO_OPTIONS";
export const SELECTED_RADIO_OPTIONS = "SELECTED_RADIO_OPTIONS";
export const MATCHTED_VALUE = "MATCHTED_VALUE";
export const MATCHTED_VALUE2 = "MATCHTED_VALUE2";
export const ACCESSIBLE_ITEM_1 = "ACCESSIBLE_ITEM_1";
export const ACCESSIBLE_ITEM_2 = "ACCESSIBLE_ITEM_2";
export const RESET_MATCHTED_VALUE2 = "RESET_MATCHTED_VALUE2";
export const RESET_MATCHTED_VALUE = "RESET_MATCHTED_VALUE";
export const VISITED_HOTSPOT = "VISITED_HOTSPOT";
export const SUBMIT_BUTTON = "SUBMIT_BUTTON";
export const RESET_CURRENT_SCREEN_DATA = "RESET_CURRENT_SCREEN_DATA";
export const SCREEN_VISITED = " SCREEN_VISITED";
export const setAtom1 = (item) => ({ item, type: SET_ATOM1 });
export const setAtom2 = (item) => ({ item, type: SET_ATOM2 });
export const setAtom3 = (item) => ({ item, type: SET_ATOM3 });

export const resetCurrentScreenData = () => ({
  type: RESET_CURRENT_SCREEN_DATA,
});

export const setAccessibleItem1 = (val) => ({
  val,
  type: ACCESSIBLE_ITEM_1,
});

export const setAccessibleItem2 = (val) => ({
  val,
  type: ACCESSIBLE_ITEM_2,
});

export const setMatchedValue = (val) => ({
  val,
  type: MATCHTED_VALUE,
});

export const setMatchedValue2 = (val) => ({
  val,
  type: MATCHTED_VALUE2,
});

export const setDND1DragItems = (item) => ({
  item,
  type: DND1_DRAG_ITEM,
});

export const setIsContinueDisable = (item) => ({
  item,
  type: IS_CONTINUE_DISABLE,
});

export const resetRadioOptions = () => ({
  type: RESET_RADIO_OPTIONS,
});

export const getRadioOptionsValue = (value, radio) => ({
  type: SELECTED_RADIO_OPTIONS,
  value,
  radio,
});

export const setCurrentScreenData = (params) => {
  return {
    type: CURRENT_SCREEN_DATA,
    params,
  };
};

export const isResetButtonDisable = (data) => {
  return {
    type: IS_RESET_BUTTON_DISABLE,
    data,
  };
};

export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});

export const setDisableDD = (items) => ({
  items,
  type: DISABLE_DD,
});

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const resetMatchedValue1 = (items) => ({
  items,
  type: RESET_MATCHTED_VALUE,
});

export const resetMatchedValue2 = (val) => ({
  val,
  type: RESET_MATCHTED_VALUE2,
});

export const setVisitedHotspot = (val) => ({
  val,
  type: VISITED_HOTSPOT,
});

export const setSubmitButton = (val) => ({
  val,
  type: SUBMIT_BUTTON,
});
export const screenVisited = (val) => ({
  val,
  type: SCREEN_VISITED,
});

export const thunks = {
  submitBtnStatus: () => (d, s) => {
    let { getAtom1, getAtom2, getAtom3 } = s();
    const disabled =
      Object.keys(getAtom1).length == 0 ||
      Object.keys(getAtom2).length == 0 ||
      Object.keys(getAtom3).length == 0;

    d(setSubmitButton(disabled));
  },
  onDrop: (item) => (dispatch, getState) => {
    let { getDND1DragItems, getCurrentScreenData, getMatchedValue2 } =
      getState();

    let screenData = getNumbers(
      getCurrentScreenData.filter((x) => x.isActive == true)[0].id
    );

    if (screenData == 11) {
      //check if value is acceptable or not
      let fltrData = item.tag.split("").filter((val) => {
        return val == getDND1DragItems.id;
      });

      //check if value not duplicate
      let fltrData2 = getMatchedValue2?.filter((x) => {
        return x.pid == item.pid && x.tag == fltrData[0];
      })[0];

      dispatch(toggleToastMessage(true));

      if (fltrData.length > 0 && !fltrData2) {
        dispatch(updateToastMsg("correct"));
        EventManager.broadcast("POSITIVE_FEEDBACK");

        let { atomName } = data.screenData[10].compoundData[2].dragZone.filter(
          (val) => {
            return val.type == fltrData;
          }
        )[0];

        let liveTxt = data.dropItemsLabel
          .replace("{atomname}", atomName)
          .replace("{count}", getNumbers(item.id));

        dispatch(setMatchedValue2({ ...item, tag: fltrData[0] }));
        dispatch(setAccessibleItem2(item.id));

        if (liveTxt) {
          if (isAndroid) {
            setTimeout(() => {
              dispatch(common.thunks.ariaLiveAssertive(liveTxt));
            }, 500);
          } else {
            dispatch(common.thunks.ariaLiveAssertive(liveTxt));
          }
        }
      } else {
        dispatch(updateToastMsg("incorrect"));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
    } else if (screenData == 6) {
      dispatch(setSubmitButton(false));
      dispatch(setMatchedValue(item));

      if (item.live) {
        if (isAndroid) {
          setTimeout(() => {
            dispatch(common.thunks.ariaLiveAssertive(item.live));
          }, 500);
        } else {
          dispatch(common.thunks.ariaLiveAssertive(item.live));
        }
      }
    }
    dispatch(setDND1DragItems(""));
  },
  DND1Drag: (item) => (dispatch, getState) => {
    dispatch(setDND1DragItems(item));
  },
  onRadioClick: (id) => (dispatch, getState) => {
    dispatch(getRadioOptionsValue(id, true));
    dispatch(setSubmitButton(false));
  },
  submitBtn: (data) => {
    return (dispatch, getState) => {
      let {
        getAtom1,
        getAtom2,
        getAtom3,
        getCurrentScreenData,
        selectedRadioOptions,
      } = getState();

      let screenData = getCurrentScreenData.filter(
        (x) => x.isActive == true
      )[0];
      screenData.compoundData[screenData.currentScreen - 1].answerKey;
      let { answerKey } = screenData.compoundData[screenData.currentScreen - 1];

      let correct = 0;
      let ddDisableArr = [];

      if (typeof answerKey === "string" || answerKey instanceof String) {
        if (answerKey == selectedRadioOptions.id) {
          dispatch(updateToastMsg("correct"));
          dispatch(setIsContinueDisable(false));
          dispatch(setSubmitButton(true));
          ddDisableArr.push(true);
          dispatch(setDisableDD(ddDisableArr));
          EventManager.broadcast("POSITIVE_FEEDBACK");
        } else {
          dispatch(updateToastMsg("incorrect"));
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }
      } else {
        answerKey.map((val, index) => {
          if (index == 0 && val == getAtom1.value) {
            ddDisableArr.push(true);
            correct++;
          } else if (index == 1 && val == getAtom2.value) {
            ddDisableArr.push(true);
            correct++;
          } else if (index == 2 && val == getAtom3.value) {
            ddDisableArr.push(true);
            correct++;
          } else {
            ddDisableArr.push(false);
          }
        });
        if (correct == answerKey.length) {
          dispatch(updateToastMsg("correct"));
          dispatch(setIsContinueDisable(false));
          dispatch(setSubmitButton(true));
          EventManager.broadcast("POSITIVE_FEEDBACK");
        } else if (correct == 0) {
          dispatch(updateToastMsg("incorrect"));
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        } else if (correct == answerKey.length - 1) {
          dispatch(updateToastMsg("partialFeedback2"));
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        } else {
          dispatch(updateToastMsg("partialFeedback1"));
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }
      }
      dispatch(setDisableDD(ddDisableArr));
      dispatch(toggleToastMessage(true));
    };
  },
  finishScreen: (data) => {
    return (d, s) => {
      d(togglePopup(3));
      TincanManager.data.percentage = 100;
      TincanManager.data.completed = true;
      TincanManager.saveTincanData();
    };
  },
  nextScreen: (data) => {
    return (dispatch, getState) => {
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(setCurrentScreenData(data));
      let { getCurrentScreenData: nextNodeData, showToastMessage } = getState();

      let activeArr = nextNodeData.filter((val) => {
        return val.isActive == true;
      })[0];

      const nextButtonInclude = [
        "sd_5",
        "sd_6",
        "sd_15",
        "sd_14",
        "sd_10",
        "sd_9",
        "sd_11",
      ];

      if (nextButtonInclude.includes(activeArr.id)) {
        if (activeArr.currentScreen == activeArr.totalScreen) {
          dispatch(screenVisited(true));
        } else {
          dispatch(screenVisited(false));
        }
      } else {
        dispatch(screenVisited(false));
      }

      //#region visited main hotspot
      if (activeArr.isVisited == true && activeArr.id == "sd_2") {
        let resultArr = nextNodeData.filter((x) => {
          if (
            x.isVisited == true &&
            (x.id == "sd_3" ||
              x.id == "sd_12" ||
              x.id == "sd_7" ||
              x.id == "sd_11")
          ) {
            return x;
          }
        });
        dispatch(setVisitedHotspot(resultArr));
      }
      dispatch(isResetButtonDisable(false)); //enable reset btn
      dispatch(setDisableDD([false, false, false]));
      dispatch(setAtom1({}));
      dispatch(setAtom2({}));
      dispatch(setAtom3({}));
      dispatch(resetRadioOptions());

      if (
        activeArr.isMcq ||
        (activeArr.id == "sd_11" && activeArr.currentScreen == 3)
      ) {
        dispatch(setIsContinueDisable(true));
      } else {
        dispatch(setIsContinueDisable(false));
      }

      // #region to-stop-music-from-nextscreen
      if (showToastMessage) {
        dispatch(toggleToastMessage(false));
        dispatch(updateToastMsg(""));
        EventManager.broadcast("STOP_ALL");
      }
      // #endregion

      dispatch(setResetFocusState(true));
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup, getCurrentScreenData } = getState();

      //#region reset logic
      dispatch(setDND1DragItems(""));
      dispatch(setVisitedHotspot([]));
      dispatch(resetCurrentScreenData());
      dispatch(resetMatchedValue1());
      dispatch(resetMatchedValue2());
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(setIsContinueDisable(false));
      dispatch(resetRadioOptions());
      dispatch(isResetButtonDisable(true));
      dispatch(togglePopup(1));
      dispatch(setVisitedHotspot([]));
      //#endregion
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },
};
