import * as actions from "../../app/actions";
import data from "../data";

export const common = { ...actions };
export const HOTSPOTS = "HOTSPOTS";
export const ATTEMPTS = "ATTEMPTS";
export const GET_SCREEN = "GET_SCREEN";
export const VIDEO_ENDED = "VIDEO_ENDED";
export const SELECT_INDEX = "SELECT_INDEX";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const SELECT_OPTION = "SELECT_OPTION";
export const CURRENT_OPTION = "CURRENT_OPTION";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTION_INDEX = "QUESTION_INDEX";
export const QUESTION_COUNT = "QUESTION_COUNT";
export const SHOW_VIDEO_DATA = "SHOW_VIDEO_DATA";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const QUESTION_NUMBER = "QUESTION_NUMBER";
export const ADD_MATCHED_ITEM = "ADD_MATCHED_ITEM";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const RESET_MATCHED_ITEMS = "RESET_MATCHED_ITEMS";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SUBMIT_BTN_VISIBILITY = "SUBMIT_BTN_VISIBILITY";
export const SELECT_CORRECT_ANSWER = "SELECT_CORRECT_ANSWER";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";

const { togglePopup, toggleToastMessage } = actions;
export const questionsData = (data) => ({ data, type: QUESTIONS_DATA });
export const selectIndex = (index = 0) => ({ index, type: SELECT_INDEX });
export const submitAnswer = (val) => ({ val, type: SELECT_CORRECT_ANSWER });
export const selectAnswerOption = (id) => ({ id, type: SELECT_ANSWER_OPTION });
export const selectQuestion = (value = 0) => ({ value, type: SELECT_QUESTION });

export const answerSubmitted = (submitted) => ({
  submitted,
  type: ANSWER_SUBMITTED,
});

export const setAttempts = (value) => {
  return {
    type: ATTEMPTS,
    value,
  };
};

export const hotspots = (val) => ({
  type: HOTSPOTS,
  payload: val,
});

export const questionIndexAction = (value) => {
  return {
    type: QUESTION_INDEX,
    value,
  };
};

export const questionNumberAction = (value) => {
  return {
    type: QUESTION_NUMBER,
    value,
  };
};
export const selectHotspot = (id) => ({
  type: SELECT_HOTSPOT,
  payload: id,
});
export const updateVisitedHotspot = (updateHotspot) => ({
  type: UPDATE_VISITED_HOTSPOTS,
  payload: updateHotspot,
});

export const questionCountAction = (value) => {
  return {
    type: QUESTION_COUNT,
    value,
  };
};

export const showVideoData = (val) => ({
  type: SHOW_VIDEO_DATA,
  payload: val,
});
export const videoEnded = (val) => ({
  type: VIDEO_ENDED,
  payload: val,
});

export const setScreen = (num) => ({
  type: GET_SCREEN,
  payload: num,
});
export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const setSelectedOption = (value) => {
  return {
    type: SELECT_OPTION,
    value,
  };
};
export const setSubmitBtnVisibility = (value) => {
  return {
    type: SUBMIT_BTN_VISIBILITY,
    value,
  };
};
export const currentOptionState = (data) => {
  return {
    type: CURRENT_OPTION,
    selection: data,
  };
};

export const addMatchedItem = (item) => ({
  item,
  type: ADD_MATCHED_ITEM,
});
export const updateToastMsg = (val) => ({ type: TOAST_MESSAGE, payload: val });
export const resetMatchedItem = () => ({ type: RESET_MATCHED_ITEMS });

const helper = {
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
      dispatch(
        updateElementData(
          helper.shuffleArray([...data.venDiagramData.elements])
        )
      );
    };
  },
  submitAnswer: () => {
    return (dispatch, getState) => {
      const {
        selectedAnswerOption,
        questionNumberReducer,
        questionIndexReducer,
        getAttempts,
        activeIndex,
      } = getState();

      const index = questionIndexReducer;
      const questionNum = questionNumberReducer;
      const answer = data.hotspots[index].question[questionNum].answer;
      const submitedAns = selectedAnswerOption;

      let val = false;
      if (answer == submitedAns) {
        val = true;
        dispatch(updateToastMsg("correct"));
        dispatch(submitAnswer(true));
      } else {
        dispatch(setAttempts(getAttempts + 1));
        dispatch(updateToastMsg("incorrect"));
        dispatch(submitAnswer(false));
        // dispatch(setAttempts(getAttempts+1));
      }
      if (getAttempts == 2) {
        dispatch(selectAnswerOption(answer));
        dispatch(submitAnswer(true));
      }
      setTimeout(() => {
        if (val) {
          EventManager.broadcast("POSITIVE_FEEDBACK");
          TincanManager.saveTincanData();
        } else {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }
      }, 500);
      dispatch(toggleToastMessage(true));
      dispatch(answerSubmitted(true));
      // dispatch(selectQuestion(1));
    };
  },
  selectHotspot: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState } = getState();
      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
      dispatch(selectHotspot(id));
      dispatch(showVideoData(true));
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      });
    };
  },
  videoContinuePressed: () => {
    return (dispatch, getState) => {
      const {
        selectQuestionIndex,
        questionNumberReducer,
        selectedHotspot,
        questionIndexReducer,
        questionCountReducer,
        hotspots,
        selectedHotspot: id,
      } = getState();
      EventManager.broadcast("STOP_ALL");
      const questionNum = questionNumberReducer;
      let questionCount = questionCountReducer;
      const index = questionIndexReducer;
      const activeHotspot = hotspots.filter((a) => a.id == selectedHotspot)[0];
      dispatch(submitAnswer(false));

      if (questionNum === 0 && activeHotspot.question.length === 1) {
        if (questionCount === 7) {
          dispatch(togglePopup(4));
          EventManager.broadcast("COMPLETION_SCREEN");
        } else {
          dispatch(selectIndex(selectQuestionIndex + 1));
          dispatch(questionIndexAction(selectQuestionIndex + 1));
          dispatch(questionNumberAction(0));
          dispatch(selectAnswerOption(""));
          dispatch(setAttempts(0));
          EventManager.broadcast("SECONDARY_CLICK");
          const updatedHotspotsData = hotspots.map((x) =>
            x.id === id ? { ...x, visited: true } : x
          );
          dispatch(updateVisitedHotspot(updatedHotspotsData));
          dispatch(showVideoData(false));
          dispatch(videoEnded(false));
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          dispatch(selectHotspot(""));
          dispatch(common.setResetFocusState(true));
        }
        // dispatch(videoEndedAction(true));
      } else if (questionNum === 0) {
        dispatch(questionNumberAction(1));
        dispatch(selectAnswerOption(""));
        dispatch(setAttempts(0));
        dispatch(common.setResetFocusState(true));
      } else if (questionNum === 1 && questionCount < 7) {
        dispatch(selectIndex(selectQuestionIndex + 1));
        dispatch(questionIndexAction(selectQuestionIndex + 1));
        dispatch(questionNumberAction(0));
        dispatch(setAttempts(0));
        dispatch(selectAnswerOption(""));
        EventManager.broadcast("SECONDARY_CLICK");
        const updatedHotspotsData = hotspots.map((x) =>
          x.id === id ? { ...x, visited: true } : x
        );
        dispatch(updateVisitedHotspot(updatedHotspotsData));
        dispatch(showVideoData(false));
        dispatch(videoEnded(false));
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        dispatch(selectHotspot(""));
        dispatch(common.setResetFocusState(true));
      }
      dispatch(questionCountAction(questionCount + 1));
    };
  },
  setVideoLiveText: () => {
    return (dispatch, getState) => {
      const { selectedHotspot, hotspots } = getState();
      const activeHotspot = hotspots.filter((a) => a.id == selectedHotspot)[0];
      dispatch(common.ariaLiveText(activeHotspot.details.alt));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 150);
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      // dispatch(questionCount(1));
      dispatch(selectIndex(0));
      dispatch(selectQuestion(0));
      dispatch(selectAnswerOption(""));
      dispatch(selectHotspot(""));
      dispatch(submitAnswer(false));
      dispatch(questionIndexAction(0));
      dispatch(questionCountAction(0));
      dispatch(questionNumberAction(0));
      dispatch(setAttempts(0));
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(resetMatchedItem());
      dispatch(updateAccessibleList(false));
      dispatch(updateToastMsg(""));
      dispatch(showVideoData(false));
      dispatch(videoEnded(false));
      dispatch(updateVisitedHotspot(data.hotspots));
      dispatch(setScreen(1));
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(common.togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(common.togglePopup(4));
      }
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
    };
  },
};
