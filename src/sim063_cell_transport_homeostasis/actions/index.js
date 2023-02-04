import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

const { togglePopup, ariaLiveText, setResetFocusState, updateResetBtnState } =
  actions;

export const common = { ...actions };

export const INFO_OPEN = "INFO_OPEN";
export const PAUSE_VIDEO = "PAUSE_VIDEO";
export const SET_QUESTION = "SET_QUESTION";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const ACTIVITY_FINISH = "ACTIVITY_FINISH";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const SET_START_AGAIN = "SET_START_AGAIN";
export const START_SIMULATION = "START_SIMULATION";
export const SET_AUDIO_STOPPED = "SET_AUDIO_STOPPED";
export const SET_VIDEO_PLAY_STATE = "SET_VIDEO_PLAY_STATE";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const SET_SOUND_MANAGER_SOURCES = "SET_SOUND_MANAGER_SOURCES";
export const IS_VIDEO_ENDED = "IS_VIDEO_ENDED";

export const IS_AUTO_START = "IS_AUTO_START";

export const setAutoStart = (val) => ({
  val,
  type: IS_AUTO_START,
});

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const startSimulation = (value) => ({
  type: START_SIMULATION,
  value,
});

export const activityFinish = (value) => ({
  type: ACTIVITY_FINISH,
  value,
});
export const pauseVideo = (value) => ({
  type: PAUSE_VIDEO,
  value,
});

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});

export const setAudioStopped = (stopped) => ({
  stopped,
  type: SET_AUDIO_STOPPED,
});

export const isVideoEnded = (videoStatus) => ({
  type: IS_VIDEO_ENDED,
  videoStatus,
});

export const setVideoPlayState = (playState) => ({
  playState,
  type: SET_VIDEO_PLAY_STATE,
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
  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData, questionCount } = getState();
      dispatch(updateQuestionsData(helper.shuffleArray(questionsData)));
    };
  },

  selectAnswerOption: (id) => {
    return (dispatch, getState) => {
      dispatch(selectAnswerOption(id));
    };
  },

  submitAnswer: (answer) => {
    return (dispatch, getState) => {
      const {
        selectedQuestion,
        selectedAnswerOption,
        questionsData,
        questionCount: count,
      } = getState();
      if (selectedAnswerOption == questionsData[count - 1].answer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(submitAnswer(true));
        if (count < data.equationsData.length) {
          TincanManager.data.percentage = parseInt(
            (count / data.equationsData.length) * 100
          );
          TincanManager.saveTincanData();
        } else {
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        }
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(wrongAnswer(true));
      }

      dispatch(submitButtonPressed(true));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      let { questionCount: count } = getState();
      dispatch(setAutoStart(false));
      dispatch(setAutoStart(true));
      if (count < data.equationsData.length) {
        dispatch(questionCount(count + 1));
        dispatch(thunks.setQuestion());
        dispatch(submitAnswer(false));
        dispatch(selectAnswerOption(""));
        dispatch(wrongAnswer(false));
        dispatch(setResetFocusState(true));
        dispatch(isVideoEnded(false));
        dispatch(setVideoPlayState("stop"));
        setTimeout(() => {
          dispatch(setVideoPlayState("play"));
        }, 10);
        EventManager.broadcast("SECONDARY_CLICK");
        setTimeout(() => {
          EventManager.broadcast("STOP_ALL");
        }, 100);
      } else {
        dispatch(pauseVideo(true));
        dispatch(togglePopup(7));
        EventManager.broadcast("COMPLETION_SCREEN");
      }
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(updateQuestionsData([...data.equationsData]));
      dispatch(thunks.setQuestion());
      dispatch(questionCount(1));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      dispatch(togglePopup(1));
      dispatch(startSimulation(true));
      dispatch(pauseVideo(false));
      dispatch(updateResetBtnState(true));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(isVideoEnded(false));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 600);
      TincanManager.resetTincanData();
    };
  },

  initLiveText: (value) => {
    return (dispatch, getState) => {
      let { questionsData, questionCount } = getState();
      let data = questionsData[questionCount - 1];

      if (data.liveText) {
        dispatch(common.ariaLiveText(data.liveText));
        setTimeout(() => {
          dispatch(common.ariaLiveText(" "));
        }, 200);
      }
    };
  },
};
