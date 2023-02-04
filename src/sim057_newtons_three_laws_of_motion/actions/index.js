import * as actions from "../../app/actions";
import data from "../data/index";

export const common = { ...actions };

export const SCALE_CHANGE = "SCALE_CHANGE";
export const TOGGLE_POPUP = "TOGGLE_POPUP";
export const TOGGLE_TOAST_MESSAGE = "TOGGLE_TOAST_MESSAGE";
export const ARIA_LIVE_TEXT = "ARIA_LIVE_TEXT";
export const SET_SOUND_MANAGER_SOURCES = "SET_SOUND_MANAGER_SOURCES";
export const SET_START_AGAIN = "SET_START_AGAIN";

export const ACTIVITY_START = "ACTIVITY_START";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const AUDIO_STATE_PLAY = "AUDIO_STATE_PLAY";
export const SET_SCREEN_TEXT = "SET_SCREEN_TEXT";

export const SET_NON_INVESTIGATING_ID = "SET_NON_INVESTIGATING_ID";

export const SET_INVESTIGATING_STATUS = "SET_INVESTIGATING_STATUS";
export const SET_INVESTIGATING_QUESTION_ID = "SET_INVESTIGATING_QUESTION_ID";
export const SET_QUESTION_ID = "SET_QUESTION_ID";
export const SELECT_OPTION = "SELECT_OPTION";
export const MARK_AUDIO_PAUSED = "MARK_AUDIO_PAUSED";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const SET_ANSWER_STATUS = "SET_ANSWER_STATUS";
export const SET_RESET_DIALOG_NO_SELECTED = "SET_RESET_DIALOG_NO_SELECTED";
export const RESET_MARK_AUDIO_PAUSED = "RESET_MARK_AUDIO_PAUSED";
export const SET_HIDE_INTERCTIVE_IMAGE = "SET_HIDE_INTERCTIVE_IMAGE";
export const SET_HIDE_INTERCTIVE_VIDEO = "SET_HIDE_INTERCTIVE_VIDEO";
export const SET_FORCE_ON_APPLE_ONE = "SET_FORCE_ON_APPLE_ONE";
export const SET_FORCE_ON_APPLE_TWO = "SET_FORCE_ON_APPLE_TWO";
export const SET_FORCE_ON_APPLE_THREE = "SET_FORCE_ON_APPLE_THREE";
export const SET_RESET_BUTTON_STATE = "SET_RESET_BUTTON_STATE";
export const VIDEO_PLAY_STATE = "VIDEO_PLAY_STATE";

export const setActivityStart = (val) => {
  return {
    type: ACTIVITY_START,
    val,
  };
};

export const buttonClicked = (action) => {
  return {
    type: BUTTON_CLICKED,
    action,
  };
};

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const setAudioStatePlay = () => ({
  type: AUDIO_STATE_PLAY,
});

export const setNonInvestigatingId = (id) => ({
  type: SET_NON_INVESTIGATING_ID,
  id,
});

export const setInvestigatingStatus = (invStatus) => ({
  type: SET_INVESTIGATING_STATUS,
  invStatus,
});

export const setInvestigatingQuestionId = (id) => ({
  type: SET_INVESTIGATING_QUESTION_ID,
  id,
});

export const setQuestionId = (id) => ({
  type: SET_QUESTION_ID,
  id,
});

export const selectOption = (option) => ({
  type: SELECT_OPTION,
  option,
});

export const markAudioPaused = (audio) => ({
  audio,
  type: MARK_AUDIO_PAUSED,
});

export const answerAttempted = (attempted) => ({
  type: ANSWER_ATTEMPTTED,
  attempted,
});

export const setAnswerStatus = (value) => ({
  type: SET_ANSWER_STATUS,
  value,
});

export const correctAnswer = (correct) => ({
  type: CORRECT_ANSWER,
  correct,
});

export const setResetDialogNoSelected = (value) => ({
  value,
  type: SET_RESET_DIALOG_NO_SELECTED,
});

export const resetMarkAudioPaused = (audio) => ({
  audio,
  type: RESET_MARK_AUDIO_PAUSED,
});

export const setHideInteractiveImage = (value) => ({
  type: SET_HIDE_INTERCTIVE_IMAGE,
  value,
});

export const setHideInteractiveVideo = (value) => ({
  type: SET_HIDE_INTERCTIVE_VIDEO,
  value,
});

export const setScreenText = (value) => ({
  type: SET_SCREEN_TEXT,
  value,
});

export const setShowForceOnAppleOne = (value) => ({
  type: SET_FORCE_ON_APPLE_ONE,
  value,
});

export const setShowForceOnAppleTwo = (value) => ({
  type: SET_FORCE_ON_APPLE_TWO,
  value,
});

export const setShowForceOnAppleThree = (value) => ({
  type: SET_FORCE_ON_APPLE_THREE,
  value,
});

export const setVideoPlayState = (item) => ({
  type: VIDEO_PLAY_STATE,
  item,
});

export const thunk = {
  onInfoClose: () => {
    return (dispatch, getState) => {
      const { audioStatePlay } = getState();
      dispatch(common.togglePopup(4));
      if (audioStatePlay) {
        dispatch(setAudioStatePlay(false));
      }
    };
  },

  submitAnswer: () => {
    return (dispatch, state) => {
      const { selectedOption, investigatingQuestionId, questionId } = state();

      dispatch(common.toggleToastMessage(true));
      dispatch(answerAttempted(true));

      const check =
        selectedOption ===
        data.investigatingData[investigatingQuestionId].questionData[questionId]
          .answer;

      if (questionId === 2) {
        dispatch(setAnswerStatus(true));
      }

      if (check) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(true));
        //     dispatch(setAnswerImg(answerImg + 1));
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
        nonInvestigatingId,
        resetBtnState,
        investigatingStatus,
        questionId,
        investigatingQuestionId,
      } = getState();
      EventManager.broadcast("STOP_ALL");
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 20);
      if (!investigatingStatus) {
        if (nonInvestigatingId < 5) {
          if (resetBtnState) {
            dispatch(common.updateResetBtnState(false));
          }
          setTimeout(() => {
            dispatch(setNonInvestigatingId(nonInvestigatingId + 1));
            dispatch(
              setScreenText(
                data.nonInvestigatingData[nonInvestigatingId + 1].text
              )
            );
            dispatch(setHideInteractiveImage(false));
            dispatch(setHideInteractiveVideo(true));
            dispatch(buttonClicked(true));
            dispatch(correctAnswer(false));
            dispatch(answerAttempted(false));
            dispatch(selectOption(""));
            dispatch(common.toggleToastMessage(false));
            dispatch(setAnswerStatus(false));
          }, 40);
          TincanManager.data.percentage = parseInt(
            ((nonInvestigatingId + 1) / 6) * 50
          );
        } else {
          dispatch(common.toggleToastMessage(false));
          dispatch(common.togglePopup(6));
          EventManager.broadcast("COMPLETION_SCREEN");
          TincanManager.data.percentage = 50;
        }
      } else {
        if (investigatingQuestionId === 0) {
          TincanManager.data.percentage = parseInt(
            ((questionId + 1) / 9) * 50 + 50
          );
        } else if (investigatingQuestionId === 1) {
          TincanManager.data.percentage = parseInt(
            ((questionId + 4) / 9) * 50 + 50
          );
        } else {
          TincanManager.data.percentage = parseInt(
            ((questionId + 7) / 9) * 50 + 50
          );
        }
        if (investigatingQuestionId === 1 && questionId === 2) {
          dispatch(setVideoPlayState(true));
          dispatch(
            common.ariaLiveText(data.investigatingData[2].videoStart.imageAlt)
          );
          setTimeout(() => {
            dispatch(common.ariaLiveText(" "));
          }, 300);
        }

        if (investigatingQuestionId === 1 && questionId === 0) {
          dispatch(setHideInteractiveVideo(false));
        }

        if (investigatingQuestionId === 2 && questionId === 2) {
          dispatch(common.toggleToastMessage(false));
          dispatch(common.togglePopup(5));
          EventManager.broadcast("COMPLETION_SCREEN");
          TincanManager.data.percentage = 100;
        } else {
          dispatch(buttonClicked(true));
          dispatch(correctAnswer(false));
          dispatch(answerAttempted(false));
          dispatch(selectOption(""));
          dispatch(common.toggleToastMessage(false));
          dispatch(thunk.generateNextMCQ());
          dispatch(setAnswerStatus(false));
        }
      }

      TincanManager.saveTincanData();
    };
  },

  generateNextMCQ: () => {
    return (dispatch, getState) => {
      const { questionId, investigatingQuestionId } = getState();

      if (questionId === 2) {
        dispatch(setInvestigatingQuestionId(investigatingQuestionId + 1));
        dispatch(setQuestionId(0));
      } else {
        dispatch(setQuestionId(questionId + 1));
      }
    };
  },

  setResetDialogNoSelected: (value) => {
    return (dispatch, getState) => {
      dispatch(setResetDialogNoSelected(value));
    };
  },

  resetActivity: () => {
    return (dispatch, state) => {
      EventManager.broadcast("STOP_ALL");
      dispatch(common.updateResetBtnState(true));
      dispatch(common.togglePopup(1));
      dispatch(setNonInvestigatingId(0));
      dispatch(setInvestigatingStatus(false));
      dispatch(setInvestigatingQuestionId(0));
      dispatch(setQuestionId(0));
      dispatch(answerAttempted(false));
      dispatch(selectOption(""));
      dispatch(correctAnswer(false));
      dispatch(setAnswerStatus(false));
      dispatch(setHideInteractiveImage(false));
      dispatch(setHideInteractiveVideo(true));
      dispatch(setScreenText(data.nonInvestigatingData[0].text));
      dispatch(setShowForceOnAppleOne(false));
      dispatch(setShowForceOnAppleTwo(false));
      dispatch(setShowForceOnAppleThree(false));
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

  onContinue: () => {
    return (dispatch, state) => {
      dispatch(setInvestigatingStatus(true));
      dispatch(setInvestigatingQuestionId(0));
      dispatch(setQuestionId(0));
    };
  },

  updateScreenText: () => {
    return (dispatch, getState) => {
      const { nonInvestigatingId, investigatingStatus } = getState();
      if (!investigatingStatus) {
        dispatch(
          setScreenText(
            data.nonInvestigatingData[nonInvestigatingId].videoEnd.text
          )
        );
      }
    };
  },

  liveTextClickOnApple: () => {
    return (dispatch, getState) => {
      const {
        showForceOnAppleOne,
        showForceOnAppleTwo,
        showForceOnAppleThree,
      } = getState();

      if (
        showForceOnAppleOne === true &&
        showForceOnAppleTwo === false &&
        showForceOnAppleThree === false
      ) {
        dispatch(common.ariaLiveText(data.forceLiveText.large));
      } else if (
        showForceOnAppleOne === false &&
        showForceOnAppleTwo === true &&
        showForceOnAppleThree === false
      ) {
        dispatch(common.ariaLiveText(data.forceLiveText.medium));
      } else if (
        showForceOnAppleOne === false &&
        showForceOnAppleTwo === false &&
        showForceOnAppleThree === true
      ) {
        dispatch(common.ariaLiveText(data.forceLiveText.small));
      } else if (
        showForceOnAppleOne === true &&
        showForceOnAppleTwo === true &&
        showForceOnAppleThree === false
      ) {
        dispatch(common.ariaLiveText(data.forceLiveText.largeMedium));
      } else if (
        showForceOnAppleOne === true &&
        showForceOnAppleTwo === false &&
        showForceOnAppleThree === true
      ) {
        dispatch(common.ariaLiveText(data.forceLiveText.largeSmall));
      } else if (
        showForceOnAppleOne === false &&
        showForceOnAppleTwo === true &&
        showForceOnAppleThree === true
      ) {
        dispatch(common.ariaLiveText(data.forceLiveText.mediumSmall));
      } else if (
        showForceOnAppleOne === true &&
        showForceOnAppleTwo === true &&
        showForceOnAppleThree === true
      ) {
        dispatch(common.ariaLiveText(data.forceLiveText.largeMediumSmall));
      }

      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
    };
  },

  clickOnApple: (num) => {
    return (dispatch, getState) => {
      dispatch(common.setResetFocusState(true));

      if (num === 1) {
        dispatch(setShowForceOnAppleOne(true));
      } else if (num === 2) {
        dispatch(setShowForceOnAppleTwo(true));
      } else if (num === 3) {
        dispatch(setShowForceOnAppleThree(true));
      }

      dispatch(thunk.liveTextClickOnApple());

      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 7000);
    };
  },

  endVideoAnimation: () => {
    return (dispatch, getState) => {
      const { investigatingStatus } = getState();
      if (!investigatingStatus) {
        dispatch(setHideInteractiveVideo(true));
      }
    };
  },

  playStateToggleLiveText: () => {
    return (dispatch, getState) => {
      const { videoPlayState } = getState();
      dispatch(setVideoPlayState(!videoPlayState));
      if (!videoPlayState) {
        dispatch(common.ariaLiveAssertive(" "));
        setTimeout(() => {
          dispatch(
            common.ariaLiveAssertive(
              data.investigatingData[2].videoStart.imageAlt
            )
          );
        }, 100);
        setTimeout(() => {
          dispatch(common.ariaLiveAssertive(" "));
        }, 500);
      } else {
        dispatch(common.ariaLiveAssertive(" "));
      }
    };
  },
};
