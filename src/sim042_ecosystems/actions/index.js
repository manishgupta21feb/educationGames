import * as globalActions from "../../app/actions";
import EventManager from "../../app/events/manager";

import data from "../data";
export const common = { ...globalActions };
const { ariaLiveText, togglePopup, toggleToastMessage, updateResetBtnState } =
  globalActions;

export const HOTSPOTS = "HOTSPOTS";
export const SELECT_TYPE = "SELECT_TYPE";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const CORRECT_ATTEMPT = "CORRECT_ATTEMPT";
export const UPDATED_HOTSPOTS = "UPDATED_HOTSPOTS";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const ADD_MACTHED_ITEM = "ADD_MACTHED_ITEM";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const SET_MATCHED_ITEMS = "SET_MATCHED_ITEMS";
export const RESET_MATCHED_ITEMS = "RESET_MATCHED_ITEMS";
export const UPDATE_VISITED_NODE = "UPDATE_VISITED_NODE";
export const UPDATE_HOTSPOT_DATA = "UPDATE_HOTSPOT_DATA";
export const UPDATE_ALL_HOTSPOTS = "UPDATE_ALL_HOTSPOTS";
export const SELECT_HOTSPOT_TYPE = "SELECT_HOTSPOT_TYPE";
export const SELECT_BUTTON_OPTION = "SELECT_BUTTON_OPTION";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SELECT_CORRECT_ANSWER = "SELECT_CORRECT_ANSWER";
export const ALL_HOTSPOTS_ANSWERED = "ALL_HOTSPOTS_ANSWERED";
export const SET_PARTIALLY_CORRECT = "SET_PARTIALLY_CORRECT";
export const SET_RESET_BUTTON_STATE = "SET_RESET_BUTTON_STATE";

export const scaleChange = () => ({ type: DEMO_ACTION });
export const selectHotspot = (id) => ({ id, type: SELECT_HOTSPOT });
export const updatedHotspotType = (id) => ({ id, type: UPDATED_HOTSPOTS });
export const updateHotspotData = (id, hotspotType) => ({
  id,
  hotspotType,
  type: UPDATE_HOTSPOT_DATA,
});
export const selectedHotspot = (id) => ({ id, type: HOTSPOTS });
export const selectType = (id) => ({ id, type: SELECT_TYPE });
export const selectAnswerOption = (id) => ({ id, type: SELECT_ANSWER_OPTION });
export const updateVisitedNodes = (node) => ({
  node,
  type: UPDATE_VISITED_NODE,
});
export const submitAnswer = (val) => ({
  val,
  type: SELECT_CORRECT_ANSWER,
  answer,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const setAllHotspotsAnswered = (val) => ({
  val,
  type: ALL_HOTSPOTS_ANSWERED,
});

export const updateAllHotspots = (hotspotData) => ({
  hotspotData,
  type: UPDATE_ALL_HOTSPOTS,
});

export const answerSubmitted = (attempted) => ({
  type: ANSWER_SUBMITTED,
  attempted,
});

export const correctAttempt = (correct) => ({
  type: CORRECT_ATTEMPT,
  correct,
});

export const selectButtonOption = (id) => ({ id, type: SELECT_BUTTON_OPTION });

export const correctAnswer = (correct) => {
  return {
    type: CORRECT_ANSWER,
    correct,
  };
};

export const answerAttempted = (attempted) => {
  return {
    type: ANSWER_ATTEMPTTED,
    attempted,
  };
};

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

export const selectHotspotType = (selected) => ({
  selected,
  type: SELECT_HOTSPOT_TYPE,
});

export const setPartiallyCorrect = (correct) => ({
  correct,
  type: SET_PARTIALLY_CORRECT,
});

export const setMatchedItems = (items) => ({
  items,
  type: SET_MATCHED_ITEMS,
});

export const addMacthedItem = (key, item) => ({
  key,
  item,
  type: ADD_MACTHED_ITEM,
});

export const resetMatchedItems = () => ({ type: RESET_MATCHED_ITEMS });

export const thunks = {
  activityLoaded: () => {
    return (dispatch) => {
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
  resetActivity: () => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(selectHotspot(""));
      dispatch(updateResetBtnState(true));
      dispatch(setAllHotspotsAnswered(false));
      dispatch(resetMatchedItems());
      TincanManager.resetTincanData();
      dispatch(
        updateAllHotspots([
          ...data.hotspots.map((h) => ({
            ...h,
          })),
        ])
      );
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      dispatch(togglePopup(1));
    };
  },

  updateHotspotType: (value) => {
    return (dispatch, getState) => {
      const { selectedHotspot, selectAnswerOption: _select } = getState();
      if (_select) {
        dispatch(updateHotspotData(selectedHotspot.id, _select));
      }
      dispatch(selectHotspot(""));
      dispatch(selectAnswerOption(""));
      const { hotspots } = getState();
      const check = hotspots.every((h) => h.answer && h.answer.length);
      if (check) {
        dispatch(setAllHotspotsAnswered(true));
      }
    };
  },

  selectHotspot: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState, visitedNodes, selectedHotspot, showToastMessage } =
        getState();
      let _id = id;
      if (selectedHotspot.id == id.id) {
        _id = "";
      }
      dispatch(selectHotspot(_id));
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      if (showToastMessage) {
        dispatch(toggleToastMessage(false));
      }
      if (id && visitedNodes.indexOf(id.id) == -1) {
        dispatch(updateVisitedNodes(id.id));
      }
      const { visitedNodes: vNodes } = getState();
      if (vNodes.length == data.hotspots.length) {
      }
    };
  },

  submitAnswer: (answer) => {
    return (dispatch, getState) => {
      const { hotspots, matchedItems } = getState();
      const _matchedItems = { ...matchedItems };
      _matchedItems.living = [..._matchedItems.living];
      _matchedItems.nonliving = [..._matchedItems.nonliving];
      const _hotspots = [
        ...hotspots.map((h) => {
          if (h.type == h.answer) {
            h.matched = "correct";
          } else {
            h.matched = "incorrect";
            h.answer = "";
            if (_matchedItems.living.indexOf(h.id) >= 0) {
              _matchedItems.living.splice(
                _matchedItems.living.indexOf(h.id),
                1
              );
            } else if (_matchedItems.nonliving.indexOf(h.id) >= 0) {
              _matchedItems.nonliving.splice(
                _matchedItems.nonliving.indexOf(h.id),
                1
              );
            }
          }
          return h;
        }),
      ];

      const every = hotspots.every(
        (h) =>
          h.answer && h.answer.length && h.matched && h.matched == "correct"
      );
      const some = hotspots.some(
        (h) =>
          h.answer && h.answer.length && h.matched && h.matched == "correct"
      );
      dispatch(updateAllHotspots(_hotspots));
      dispatch(setMatchedItems(_matchedItems));
      dispatch(setAllHotspotsAnswered(false));
      if (every) {
        dispatch(togglePopup(4));
        EventManager.broadcast("COMPLETION_SCREEN");
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      } else if (some) {
        dispatch(setPartiallyCorrect(true));
        dispatch(correctAnswer(false));
        dispatch(answerAttempted(true));
        dispatch(toggleToastMessage(true));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      } else {
        dispatch(setPartiallyCorrect(false));
        dispatch(correctAnswer(false));
        dispatch(answerAttempted(true));
        dispatch(toggleToastMessage(true));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
    };
  },

  selectHotspotType: (selected) => {
    return (dispatch, getState) => {
      const { selectedHotspot } = getState();
      const hotspotSelectionLiveText = data.hotspotSelectionLiveText
        .replace("-1-", selectedHotspot.text)
        .replace("-2-", selected.text);
      dispatch(ariaLiveText(hotspotSelectionLiveText));
      dispatch(selectHotspotType(selected.id));
      dispatch(updateHotspotData(selectedHotspot.id, selected.id));
      dispatch(addMacthedItem(selected.id, selectedHotspot.text));
      dispatch(selectHotspot(""));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 500);
      const { hotspots } = getState();
      const check = hotspots.every((h) => h.answer && h.answer.length);
      if (check) {
        dispatch(setAllHotspotsAnswered(true));
      }
    };
  },
};
