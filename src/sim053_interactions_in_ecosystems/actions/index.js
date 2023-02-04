import data from "../data";
import * as actions from "../../app/actions";
const { ariaLiveText, togglePopup, toggleToastMessage, updateResetBtnState } = actions;

export const DEMO_ACTION = "DEMO_ACTION";
export const START_SIMULATION = "START_SIMULATION";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const RESET_QUESTION = "RESET_QUESTION";
export const ACTIVITY_START = "ACTIVITY_START";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTION_TEXT = "QUESTION_TEXT";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const SELECT_OPTION = "SELECT_OPTION";
export const UPDATE_MCQ_QUESTIONS = "UPDATE_MCQ_QUESTIONS";
export const SET_MCQ_QUESTION = "SET_MCQ_QUESTION";
export const SET_QUESTION_COUNT = "SET_QUESTION_COUNT";
export const SET_ANSWER_IMG = "SET_ANSWER_IMG";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const RESET_MCQ_QUESTIONS = "RESET_MCQ_QUESTIONS";
export const SET_RESET_DIALOG_NO_SELECTED = "SET_RESET_DIALOG_NO_SELECTED";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const AUDIO_STATE_PLAY = "AUDIO_STATE_PLAY";
export const AUDIO_STATE_STOP = "AUDIO_STATE_STOP";
export const MARK_AUDIO_PAUSED = "MARK_AUDIO_PAUSED";
export const MCQ_OPTIONS = "MCQ_OPTIONS";
export const SET_QUESTION_TEXT = "SET_QUESTION_TEXT";
export const SET_MCQ_OPTIONS = "SET_MCQ_OPTIONS";
export const RESET_MARK_AUDIO_PAUSED = "RESET_MARK_AUDIO_PAUSED";
export const SET_RESET_FOCUS_STATE = "SET_RESET_FOCUS_STATE";
export const SET_STATIC = "SET_STATIC";
export const SET_ANSWER_STATUS = "SET_ANSWER_STATUS";

export const common = { ...actions };

export const scaleChange = () => ({
  type: DEMO_ACTION,
});

export const startSimulation = (value) => ({
  type: START_SIMULATION,
  value,
});

export const selectQuestion = (value = 0) => ({
  type: SELECT_QUESTION,
  value,
});

export const resetQuestion = () => ({
  type: RESET_QUESTION,
});

export const buttonClicked = (action) => ({
  type: BUTTON_CLICKED,
  action,
});

export const setStatic = (staticState) => ({
  type: SET_STATIC,
  staticState,
});

export const setAnswerStatus = (value) => ({
  type: SET_ANSWER_STATUS,
  value,
});

export const setActivityStart = (val) => ({
  type: ACTIVITY_START,
  val,
});

export const questionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const answerAttempted = (attempted) => ({
  type: ANSWER_ATTEMPTTED,
  attempted,
});

export const correctAnswer = (correct) => ({
  type: CORRECT_ANSWER,
  correct,
});

export const selectOption = (option) => ({
  type: SELECT_OPTION,
  option,
});

export const setQuestionCount = (count) => ({
  type: SET_QUESTION_COUNT,
  count,
});

export const setAnswerImg = (value) => ({
  type: SET_ANSWER_IMG,
  value,
});

export const setQuestionText = (text) => ({
  type: SET_QUESTION_TEXT,
  text,
});

export const setMcqOptions = (data) => ({
  type: SET_MCQ_OPTIONS,
  data,
});

export const setResetDialogNoSelected = (value) => ({
  value,
  type: SET_RESET_DIALOG_NO_SELECTED,
});

export const setAudioStatePlay = () => ({
  type: AUDIO_STATE_PLAY,
});

export const audioStateStop = (action) => ({
  type: AUDIO_STATE_STOP,
  action,
});

export const resetMcqQuestions = () => ({
  type: RESET_MCQ_QUESTIONS,
});

export const markAudioPaused = (audio) => ({
  audio,
  type: MARK_AUDIO_PAUSED,
});

export const resetMarkAudioPaused = (audio) => ({
  audio,
  type: RESET_MARK_AUDIO_PAUSED,
});

export const thunk = {
  toggleAudioBtn: () => {
    return (dispatch, state) => {
      const { audioStatePlay } = state();
      if (!audioStatePlay) {
        dispatch(setAudioStatePlay());
      }
    };
  },

  checkAudioOnInfo: () => {
    return (dispatch, getState) => {
      const { audioStatePlay } = getState();
      if (audioStatePlay) {
        EventManager.broadcast("STOP_ALL");
      }
    };
  },

  setAudioStatePlay: () => {
    return (dispatch, getState) => {
      const { audioStatePlay, questionsData, questionCount, answerStatus } =
        getState();

      if (audioStatePlay) {
        EventManager.broadcast("STOP_ALL");
      }
      dispatch(setAudioStatePlay());
    };
  },

  onInfoClose: () => {
    return (dispatch, getState) => {
      const { audioStatePlay } = getState();
      dispatch(togglePopup(4));
      if (audioStatePlay) {
        dispatch(setAudioStatePlay(false));
      }
    };
  },

  resetActivity: () => {
    return (dispatch, state) => {
      const { questionsData } = state();
      EventManager.broadcast("STOP_ALL");
      dispatch(setAnswerStatus(false));
      dispatch(setStatic(false));
      dispatch(togglePopup(1));
      dispatch(resetQuestion(1));
      dispatch(updateResetBtnState(true));
      dispatch(selectOption(""));
      dispatch(correctAnswer(false));
      dispatch(resetMarkAudioPaused());
      dispatch(answerAttempted(false));
      dispatch(toggleToastMessage(false));
      dispatch(setQuestionCount(0));
      dispatch(setAnswerImg(1));
      dispatch(setQuestionText(questionsData[0].questionText));
      dispatch(setMcqOptions(questionsData[0].mcqOptions));
      dispatch(ariaLiveText(data.resetLiveText));
      const { currentPopup } = state();
      if (currentPopup.indexOf(8) >= 0) {
        dispatch(togglePopup(8));
      }
      if (currentPopup.indexOf(7) >= 0) {
        setTimeout(() => {
          EventManager.broadcast("SECONDARY_CLICK");
        }, 100);
        dispatch(togglePopup(7));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 100);
      EventManager.broadcast("PLAY_AUDIO_NARRATION", {
        id: "",
      });
    };
  },

  setResetDialogNoSelected: (value) => {
    return (dispatch, getState) => {
      const { audioStatePlay, questionsData, questionCount, answerStatus } =
        getState();

      if (audioStatePlay) {
        // const voiceOver = questionsData[questionCount].promptId;
        // playNarration(voiceOver, answerStatus);
        dispatch(setResetDialogNoSelected(value));
      }
    };
  },

  submitAnswer: () => {
    return (dispatch, state) => {
      const { selectedOption, questionsData, questionCount, answerImg } = state();

      dispatch(toggleToastMessage(true));
      dispatch(answerAttempted(true));

      const check =
        questionsData[questionCount].answer ==
        [
          ...questionsData[questionCount].mcqOptions.filter((obj) => {
            return obj.id === selectedOption;
          }),
        ][0].label;

      if (check) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        setTimeout(() => {
          dispatch(ariaLiveText(data.imageData[answerImg].imageAlt));
          setTimeout(() => {
            dispatch(ariaLiveText(" "));
          }, 300);
        }, 600);
        dispatch(correctAnswer(true));
        dispatch(setAnswerImg(answerImg + 1));
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
      const {
        audioStatePlay,
        questionCount,
        questionCount: count,
        questionsData,
        showStatic,
        answerImg
      } = getState();

      if (!showStatic) {
        if (audioStatePlay) {
          EventManager.broadcast("STOP_ALL");
        }
        dispatch(setQuestionText(questionsData[count].answerText));
        dispatch(setAnswerStatus(true));
        dispatch(setStatic(true));
        dispatch(toggleToastMessage(false));
      } else {
        if (questionCount < 2) {
          // console.log("questionCount", questionCount)
          // const voiceOver = questionsData[questionCount + 1].promptId;
          // if (audioStatePlay) {
          //   if (voiceOver == "promptTwo") {
          //     EventManager.broadcast("PLAY_AUDIO_NARRATION", {
          //       id: "PROMPT_TWO",
          //     });
          //   } else if (voiceOver == "promptThree") {
          //     EventManager.broadcast("PLAY_AUDIO_NARRATION", {
          //       id: "PROMPT_THREE",
          //     });
          //   }
          // }

          dispatch(buttonClicked(true));
          dispatch(correctAnswer(false));
          dispatch(answerAttempted(false));
          dispatch(selectOption(""));
          dispatch(toggleToastMessage(false));
          dispatch(thunk.generateNextMCQ());
          dispatch(setAnswerImg(answerImg + 1));
          dispatch(setAnswerStatus(false));
          dispatch(setStatic(false));

          TincanManager.data.percentage = parseInt(
            (questionCount + 1 / 3) * 100
          );
          TincanManager.saveTincanData();
        } else {
          dispatch(togglePopup(7));
          EventManager.broadcast("COMPLETION_SCREEN");
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        }
      }
    };
  },

  generateNextMCQ: () => {
    return (dispatch, getState) => {
      const { questionCount: count, questionsData } = getState();

      dispatch(setQuestionCount(count + 1));
      dispatch(setQuestionText(questionsData[count + 1].questionText));
      dispatch(setMcqOptions(questionsData[count + 1].mcqOptions));
      if (count >= 2) {
        dispatch(togglePopup(7));
        EventManager.broadcast("COMPLETION_SCREEN");
      }
    };
  },

  markAudioPaused: () => {
    return (dispatch, getState) => {
      const { questionCount, questionsData } = getState();
      const voiceOver = questionsData[questionCount].promptId;
      dispatch(markAudioPaused(voiceOver));
    };
  },
};
