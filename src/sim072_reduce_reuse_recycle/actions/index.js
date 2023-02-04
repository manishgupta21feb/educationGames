import * as actions from "../../app/actions";
import data from "../data/index";

export const common = { ...actions };

export const SCALE_CHANGE = "SCALE_CHANGE";
export const TOGGLE_POPUP = "TOGGLE_POPUP";
export const TOGGLE_TOAST_MESSAGE = "TOGGLE_TOAST_MESSAGE";
export const ARIA_LIVE_TEXT = "ARIA_LIVE_TEXT";
export const SET_SOUND_MANAGER_SOURCES = "SET_SOUND_MANAGER_SOURCES";
export const SET_START_AGAIN = "SET_START_AGAIN";

export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";

export const ACTIVITY_START = "ACTIVITY_START";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const SET_RESET_FOCUS_STATE = "SET_RESET_FOCUS_STATE";
export const AUDIO_STATE_PLAY = "AUDIO_STATE_PLAY";

export const HOTSPOTS = "HOTSPOTS";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";

export const SET_QUESTION_VIEW = "SET_QUESTION_VIEW";
export const SET_QUESTION_NUM = "SET_QUESTION_NUM";
export const UPDATE_QUESTION_OPTIONS = "UPDATE_QUESTION_OPTIONS";
export const UPDATE_ANSWER = "UPDATE_ANSWER";
export const RESET_UPDATE_ANSWER = "RESET_UPDATE_ANSWER";
export const RESET_UPDATE_QUESTION_OPTIONS = "RESET_UPDATE_QUESTION_OPTIONS";

export const setActivityStart = (val) => ({
  type: ACTIVITY_START,
  val,
});

export const buttonClicked = (action) => ({
  type: BUTTON_CLICKED,
  action,
});

export const answerAttempted = (attempted) => ({
  type: ANSWER_ATTEMPTTED,
  attempted,
});

export const correctAnswer = (correct) => ({
  type: CORRECT_ANSWER,
  correct,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const setResetFocusState = (focus) => ({
  focus,
  type: SET_RESET_FOCUS_STATE,
});

export const setAudioStatePlay = () => ({
  type: AUDIO_STATE_PLAY,
});

export const selectedHotspot = (data) => ({
  data,
  type: HOTSPOTS,
});

export const updateVisitedHotspot = (updateHotspot) => ({
  type: UPDATE_VISITED_HOTSPOTS,
  updateHotspot,
});

export const selectHotspot = (id) => ({
  id,
  type: SELECT_HOTSPOT,
});

export const setQuestionView = (view) => ({
  type: SET_QUESTION_VIEW,
  view,
});

export const setQuestionNum = (num) => ({
  type: SET_QUESTION_NUM,
  num,
});

export const updateQuestionOptions = (arr) => ({
  type: UPDATE_QUESTION_OPTIONS,
  arr,
});

export const resetUpdateQuestionOptions = () => ({
  type: RESET_UPDATE_QUESTION_OPTIONS,
});

export const updateAnswer = (arr) => ({
  type: UPDATE_ANSWER,
  arr,
});

export const resetUpdateAnswer = () => ({
  type: RESET_UPDATE_ANSWER,
});

export const thunk = {
  selectHotspot: (id) => {
    return (dispatch, getState) => {
      const { selectedHotspot, hotspots, resetBtnState } = getState();

      const updatedHotspotsData = hotspots.map((x) =>
        x.id === id ? { ...x, visited: true } : x
      );
      dispatch(updateVisitedHotspot(updatedHotspotsData));

      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }

      let _id = id;
      if (selectedHotspot == id) {
        _id = "";
      }
      dispatch(selectHotspot(_id));
    };
  },

  checkAnswer: (id) => {
    return (dispatch, getState) => {
      const { answerShow, questionOptions } = getState();

      var indexInOptions = questionOptions.findIndex((x) => x.id == id);
      var indexInAnswer = answerShow.findIndex((x) => x.id == id);

      dispatch(common.toggleToastMessage(true));
      dispatch(answerAttempted(true));

      if (indexInAnswer > -1) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(true));
        questionOptions[indexInOptions].active = false;
        dispatch(updateQuestionOptions(questionOptions));

        var index = answerShow.findIndex((x) => x.show == false);

        var temp = answerShow[index];
        answerShow[index] = answerShow[indexInAnswer];
        answerShow[indexInAnswer] = temp;

        answerShow[index].show = true;
        dispatch(updateAnswer(answerShow));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(false));
      }
    };
  },

  handleNextButtonClick: () => {
    return (dispatch, getState) => {
      const { questionView, questionNum } = getState();
      EventManager.broadcast("STOP_ALL");
      dispatch(common.toggleToastMessage(false));

      if (!questionView) {
        dispatch(selectHotspot(""));
      }
      TincanManager.data.percentage +=
        +(TincanManager.data.percentage + 25) % 100;
      if (questionNum < 2) {
        dispatch(common.togglePopup(6));
      } else {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        dispatch(common.togglePopup(7));
      }
      TincanManager.saveTincanData();
    };
  },

  onContinue: () => {
    return (dispatch, getState) => {
      const { questionNum, questionView } = getState();
      EventManager.broadcast("STOP_ALL");
      let tempQuesNum = !questionView ? questionNum : questionNum + 1;

      var tempAns = [...data.questionsData[tempQuesNum].answers];
      var tempQues = [...data.questionsData[tempQuesNum].options];

      for (let i = 0; i < tempAns.length; i++) {
        tempAns[i].show = false;
      }

      for (let i = 0; i < tempQues.length; i++) {
        tempQues[i].active = true;
      }

      dispatch(updateAnswer(tempAns));
      dispatch(updateQuestionOptions(tempQues));

      if (!questionView) {
        dispatch(setQuestionView(true));
      } else {
        dispatch(setQuestionNum(questionNum + 1));
      }
    };
  },

  resetActivity: () => {
    return (dispatch, state) => {
      EventManager.broadcast("STOP_ALL");
      dispatch(common.updateResetBtnState(true));
      dispatch(common.togglePopup(1));

      dispatch(answerAttempted(false));
      dispatch(updateVisitedHotspot(data.hotspots));
      dispatch(selectHotspot(""));
      dispatch(setQuestionView(false));
      dispatch(setQuestionNum(0));
      dispatch(resetUpdateQuestionOptions());
      dispatch(resetUpdateAnswer());
      dispatch(correctAnswer(false));
      dispatch(common.toggleToastMessage(false));
      TincanManager.data.completed = false;
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      const { currentPopup } = state();
      if (currentPopup.indexOf(5) >= 0) {
        dispatch(common.togglePopup(5));
      }
      if (currentPopup.indexOf(7) >= 0) {
        setTimeout(() => {
          EventManager.broadcast("SECONDARY_CLICK");
        }, 100);
        dispatch(common.togglePopup(7));
      }
    };
  },
};
