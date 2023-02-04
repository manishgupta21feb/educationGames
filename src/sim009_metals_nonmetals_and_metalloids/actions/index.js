import data from "../data";
import * as actions from "../../app/actions";
// import EventManager from "../../app/events/manager";

const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const FETCH_MCQ = "FETCH_MCQ";
export const MCQ_COUNT = "MCQ_COUNT";
export const LAST_DRAG = "LAST_DRAG";
export const SELECT_MCQ = "SELECT_MCQ";
export const RESET_MCQS = "RESET_MCQS";
export const FETCH_INFOS = "FETCH_INFOS";
export const SELECT_INFO = "SELECT_INFO";
export const PUSH_ANSWER = "PUSH_ANSWER";
export const SET_FEEDBACK = "SET_FEEDBACK";
export const TOAST_MESSAGE = "TOAST_MESSAGE ";
export const FETCH_FEEDBACK = "FETCH_FEEDBACK";
export const SET_VIDEO_STATE = "SET_VIDEO_STATE";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const ON_CHANGE_SCREEN = "ON_CHANGE_SCREEN";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const ADD_TO_TEST_SETUP = "ADD_TO_TEST_SETUP";
export const RESET_PUSH_ANSWER = "RESET_PUSH_ANSWER";
export const SET_FOCUS_ON_LIST = "SET_FOCUS_ON_LIST";
export const TOGGLE_VIDEO_STATE = "TOGGLE_VIDEO_STATE";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SELECT_CORRECT_ANSWER = "SELECT_CORRECT_ANSWER";
export const FETCH_DRAGGABLE_ITEMS = "FETCH_DRAGGABLE_ITEMS";
export const FETCH_DROPPABLE_ITEMS = "FETCH_DROPPABLE_ITEMS";
export const SET_FOCUS_ON_DRAG_ITEM = "SET_FOCUS_ON_DRAG_ITEM";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const common = { ...actions };

export const onChangeScreen = (val) => ({
  val,
  type: ON_CHANGE_SCREEN,
});

export const fetchMcq = (mcq) => ({
  type: FETCH_MCQ,
  data: mcq,
});

export const mcqCount = (count = 0) => ({
  type: MCQ_COUNT,
  data: count,
});

export const selectMcq = (index = 0) => ({
  type: SELECT_MCQ,
  data: index,
});
export const selectAnswerOption = (answerId) => ({
  type: SELECT_ANSWER_OPTION,
  data: answerId,
});
export const answerSubmitted = (submitted) => ({
  type: ANSWER_SUBMITTED,
  data: submitted,
});
export const submitAnswer = (val) => ({
  type: SELECT_CORRECT_ANSWER,
  data: val,
});
export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});
export const fetchInfos = (infoData) => ({
  type: FETCH_INFOS,
  data: infoData,
});

export const selectInfo = (index = 0) => ({
  type: SELECT_INFO,
  data: index,
});

export const fetchDraggableItems = (items) => ({
  type: FETCH_DRAGGABLE_ITEMS,
  data: items,
});
export const fetchDroppableItems = (items) => ({
  type: FETCH_DROPPABLE_ITEMS,
  data: items,
});

export const selectDraggable = (item) => ({
  type: SELECT_DRAGGABLE,
  data: item,
});

export const addToTestSetup = (item) => ({
  type: ADD_TO_TEST_SETUP,
  data: item,
});
export const pushAnswer = (item) => ({
  type: PUSH_ANSWER,
  data: item,
});

export const resetPushAnswer = () => ({
  type: RESET_PUSH_ANSWER,
});
export const fetchFeedback = (values) => ({
  type: FETCH_FEEDBACK,
  data: values,
});
export const showFeedback = (val) => ({
  type: SET_FEEDBACK,
  data: val,
});
export const setVideoState = (videoState) => ({
  type: SET_VIDEO_STATE,
  data: videoState,
});

export const toggleVideoState = () => ({
  type: TOGGLE_VIDEO_STATE,
});

export const setFocusOnList = (index) => ({
  type: SET_FOCUS_ON_LIST,
  data: index,
});

export const setFocusOnDragItem = (index) => ({
  type: SET_FOCUS_ON_DRAG_ITEM,
  data: index,
});

export const lastFocussedDrag = (vistiedIndex) => ({
  type: LAST_DRAG,
  data: vistiedIndex,
});

export const resetFetchMcqs = () => ({
  type: RESET_MCQS,
});
export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});
export const thunks = {
  setInfo: (count) => {
    return (dispatch, getState) => {
      dispatch(fetchInfos(data.infoData));
      dispatch(selectInfo(count));
    };
  },
  setExperimentSetUp: () => {
    return (dispatch, getState) => {
      dispatch(fetchDraggableItems(data.dragExperimentSetup));
      dispatch(fetchDroppableItems(data.dropExperimentSetup));
    };
  },
  onDrop: (selectedDroppable) => {
    return (dispatch, getState) => {
      let { selectedDraggable, resetBtnState } = getState();
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(updateAccessibleList(false));
      dispatch(addToTestSetup(selectedDroppable));
      const asset = selectedDroppable.assets.map((item) => {
        return item;
      });
      const assetElement = {
        ...asset.find((f) => {
          return f.category == selectedDraggable.elementCategory;
        }),
      };
      (assetElement.id = selectedDroppable.id),
        (assetElement.element = selectedDraggable.element);
      assetElement.experimentName = selectedDroppable.experimentName;
      assetElement.experimentClass = selectedDroppable.experimentClass;
      assetElement.natureOfFeedback = selectedDroppable.type;
      dispatch(setResetFocusState(true));
      dispatch(fetchFeedback(assetElement));
      dispatch(thunks.checkUniqueness(assetElement));
      dispatch(showFeedback(true));
    };
  },
  checkUniqueness: (assetElement) => {
    return (dispatch, getState) => {
      let { feedback, uniqueCombinations } = getState();
      // check already dropped in uniqueCombinations array
      if (uniqueCombinations.length > 0) {
        let dropCountExist = uniqueCombinations.find(
          (item) => item.dropCount == feedback.dropCount
        );
        if (!dropCountExist) {
          dispatch(pushAnswer(assetElement));
        }
      } else {
        dispatch(pushAnswer(assetElement));
      }
    };
  },
  toggleVideo: (videoPlayState) => {
    return (dispatch, getState) => {
      dispatch(updateResetBtnState(false));
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(toggleVideoState());
      if (videoPlayState) {
        dispatch(ariaLiveText(data.globalUsedText.videoStopState));
      } else {
        dispatch(ariaLiveText(data.globalUsedText.videoPlayState));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(""));
      }, 500);
    };
  },
  continuePress: () => {
    return (dispatch, getState) => {
      let { uniqueCombinations, focusOnDragItem, lastFocussedDraggable } =
        getState();
      if (uniqueCombinations.length === 9) {
        dispatch(togglePopup(4)); //show transtion popup
        dispatch(setVideoState(false));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 300);
      } else {
        dispatch(showFeedback(false));
        dispatch(fetchFeedback({}));
        dispatch(selectDraggable({}));
        dispatch(addToTestSetup({}));
        dispatch(setVideoState(true));
        dispatch(setFocusOnList(-1));
        dispatch(setFocusOnDragItem(lastFocussedDraggable));
      }
      EventManager.broadcast("SECONDARY_CLICK");
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    };
  },
  setFocusOnDrop: (index) => {
    return (dispatch, getState) => {
      dispatch(setFocusOnList(index));
    };
  },
  setFocusOnDrag: (index) => {
    return (dispatch, getState) => {
      dispatch(setFocusOnDragItem(index));
    };
  },
  levelOneContinue: () => {
    return (dispatch, getState) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(togglePopup(4));
      //dispatch(thunk.setInfo(1));
      setTimeout(() => {
        dispatch(setResetFocusState(true));
      }, 100);
      dispatch(onChangeScreen(1));
      dispatch(selectDraggable({}));
      dispatch(addToTestSetup({})); //selected droppable
      dispatch(fetchFeedback({}));
      dispatch(resetPushAnswer());
    };
  },
  mcq: () => {
    return (dispatch, getState) => {
      const { countMcq } = getState();
      dispatch(fetchMcq(data.questionsData));
      dispatch(selectMcq(countMcq));
    };
  },
  submitAnswer: () => {
    return (dispatch, getState) => {
      const { selectAnswerOption, fetchMcqs } = getState();
      const correctAnswer = fetchMcqs.selectedMcq.answer;
      let val = false;
      if (correctAnswer == selectAnswerOption) {
        val = true;
      }
      setTimeout(() => {
        if (val) {
          dispatch(updateToastMsg("correct"));
          EventManager.broadcast("POSITIVE_FEEDBACK");
        } else {
          dispatch(updateToastMsg("incorrect"));
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }
      }, 500);
      dispatch(answerSubmitted(true));
      dispatch(submitAnswer(val));
      dispatch(toggleToastMessage(true));
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      let { countMcq } = getState();
      dispatch(updateToastMsg(""));
      if (countMcq < 2) {
        dispatch(mcqCount(countMcq + 1));
        dispatch(selectMcq(countMcq + 1));
        dispatch(selectAnswerOption(""));
        dispatch(submitAnswer(false));
        dispatch(answerSubmitted(false));
      } else {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        dispatch(onChangeScreen(2));
        //dispatch(thunk.setInfo(2));
      }
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(togglePopup(1));
      }, 100);
      dispatch(updateResetBtnState(true));
      dispatch(fetchFeedback({}));
      dispatch(resetPushAnswer());
      dispatch(selectDraggable({}));
      dispatch(showFeedback(false));
      dispatch(setVideoState(true));
      dispatch(addToTestSetup({}));
      dispatch(setFocusOnList(-1));
      dispatch(setFocusOnDragItem(-1));
      dispatch(mcqCount());
      dispatch(resetFetchMcqs());
      dispatch(updateAccessibleList(false));
      dispatch(updateToastMsg(""));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      dispatch(answerSubmitted(false));
      dispatch(onChangeScreen(0));
      //dispatch(thunk.setInfo(0));
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(5) >= 0) {
        dispatch(togglePopup(5));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },
};
