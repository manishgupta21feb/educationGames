import data from "../data";
import * as actions from "../../app/actions";
const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const SET_STATIC = "SET_STATIC";
export const SELECT_INDEX = "SELECT_INDEX";
export const RESET_BUTTON = "RESET_BUTTON";
export const SELECT_OPTION = "SELECT_OPTION";
export const RESET_HOTSPOT = "RESET_HOTSPOT";
export const SELECT_BUTTON = "SELECT_BUTTON";
export const RESET_QUESTION = "RESET_QUESTION";
export const ACTIVITY_START = "ACTIVITY_START";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const TOGGLE_QUESTION = "TOGGLE_QUESTION";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const AUDIO_STATE_PLAY = "AUDIO_STATE_PLAY";
export const AUDIO_STATE_STOP = "AUDIO_STATE_STOP";
export const SET_MCQ_QUESTION = "SET_MCQ_QUESTION";
export const START_SIMULATION = "START_SIMULATION";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const MARK_AUDIO_PAUSED = "MARK_AUDIO_PAUSED";
export const JUMP_TO_MCQ_SCREEN = "JUMP_TO_MCQ_SCREEN";
export const RESET_MCQ_QUESTIONS = "RESET_MCQ_QUESTIONS";
export const UPDATE_MCQ_QUESTIONS = "UPDATE_MCQ_QUESTIONS";
export const RESET_VISITED_HOTSPOTS = "RESET_VISITED_HOTSPOTS";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";
export const RESET_MARK_AUDIO_PAUSED = "RESET_MARK_AUDIO_PAUSED";
export const SET_RESET_DIALOG_NO_SELECTED = "SET_RESET_DIALOG_NO_SELECTED";

export const common = { ...actions };
export const startSimulation = (value) => ({
  type: START_SIMULATION,
  value,
});
export const selectQuestion = (value = 0) => ({
  type: SELECT_QUESTION,
  value,
});
export const resetQuestion = () => {
  return {
    type: RESET_QUESTION,
  };
};
export const setStatic = (staticState) => {
  return {
    type: SET_STATIC,
    staticState,
  };
};
export const setActivityStart = (val) => {
  return {
    type: ACTIVITY_START,
    val,
  };
};
export const selectIndex = (count) => ({
  type: SELECT_INDEX,
  count,
});
export const toggleQuestion = (show) => ({
  type: TOGGLE_QUESTION,
  show,
});
export const questionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});
export const answerAttempted = (attempted) => {
  return {
    type: ANSWER_ATTEMPTTED,
    attempted,
  };
};
export const correctAnswer = (correct) => {
  return {
    type: CORRECT_ANSWER,
    correct,
  };
};
export const selectOption = (option) => {
  return {
    type: SELECT_OPTION,
    option,
  };
};
export const selectHotspot = (id) => {
  return {
    type: SELECT_HOTSPOT,
    id,
  };
};
export const resetOrganisms = () => {
  return {
    type: RESET_HOTSPOT,
  };
};

export const selectButton = (value = 0) => ({
  type: SELECT_QUESTION,
  value,
});
export const resetButton = () => {
  return {
    type: RESET_QUESTION,
  };
};
export const buttonClicked = (action) => {
  return {
    type: BUTTON_CLICKED,
    action,
  };
};

export const jumpToMCQScreen = (action) => {
  return {
    type: JUMP_TO_MCQ_SCREEN,
    action,
  };
};
export const audioStateStop = (action) => {
  return {
    type: AUDIO_STATE_STOP,
    action,
  };
};
export const setAudioStatePlay = () => ({
  type: AUDIO_STATE_PLAY,
});

export const updateVisitedHotspots = (hotspot) => ({
  hotspot,
  type: UPDATE_VISITED_HOTSPOTS,
});

export const resetVisitedHotspots = (hotspot) => ({
  hotspot,
  type: RESET_VISITED_HOTSPOTS,
});

export const updateMcqQuestions = (questions) => ({
  questions,
  type: UPDATE_MCQ_QUESTIONS,
});

export const setMcqQuestion = (question) => ({
  question,
  type: SET_MCQ_QUESTION,
});
export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});
export const resetMcqQuestions = () => ({
  type: RESET_MCQ_QUESTIONS,
});
export const setResetDialogNoSelected = (value) => ({
  value,
  type: SET_RESET_DIALOG_NO_SELECTED,
});

export const markAudioPaused = (audio) => ({ audio, type: MARK_AUDIO_PAUSED });
export const resetMarkAudioPaused = (audio) => ({
  audio,
  type: RESET_MARK_AUDIO_PAUSED,
});

export const thunks = {
  submitAnswer: () => {
    return (dispatch, state) => {
      const {
        showStatic,
        mcqQuestion,
        selectedOption,
        selectedHotspot,
        selectedQuestion,
        jumpToMCQScreenState,
      } = state();
      if (!showStatic) {
        dispatch(toggleToastMessage(true));
        dispatch(answerAttempted(true));
        const mainMCQ = data.mainScreenMCQ.filter(
          (e) => e.id == selectedHotspot
        );
        const checkAnswer = mainMCQ[0].answer == selectedOption;

        if (checkAnswer) {
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
          dispatch(correctAnswer(true));
        } else {
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
          dispatch(correctAnswer(false));
        }
      }
      if (jumpToMCQScreenState) {
        dispatch(toggleToastMessage(true));
        dispatch(answerAttempted(true));
        const check = mcqQuestion.answer == selectedOption;
        if (check) {
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
          dispatch(correctAnswer(true));
        } else {
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
          dispatch(correctAnswer(false));
        }
      }
    };
  },

  generateNextMCQ: () => {
    return (dispatch, state) => {
      const { showStatic, jumpToMCQScreenState, audioStatePlay } = state();

      if (showStatic && jumpToMCQScreenState) {
        if (audioStatePlay) {
          dispatch(setAudioStatePlay(!audioStatePlay));
        }
        const { mcqQuestions, questionCount: count } = state();
        const index = Math.floor(mcqQuestions.length * Math.random());
        const question = mcqQuestions.splice(index, 1)[0];
        dispatch(setMcqQuestion(question));
        dispatch(updateMcqQuestions(mcqQuestions));
        dispatch(questionCount(count + 1));
        if (count >= 4) {
          dispatch(togglePopup(7));
          EventManager.broadcast("COMPLETION_SCREEN");
        }
      }
    };
  },

  selectHotspot: (id) => {
    return (dispatch, state) => {
      dispatch(selectHotspot(id));
      dispatch(updateVisitedHotspots(id));
      const { selectedHotspot, showStatic, audioStatePlay } = state();
      if (!showStatic) {
        const mainMCQ = data.mainScreenMCQ.filter(
          (e) => e.id == selectedHotspot
        );
        const voiceOver = mainMCQ[0].className;
        if (audioStatePlay) {
          if (voiceOver == "hydra") {
            EventManager.broadcast("PLAY_AUDIO_NARRATION", { id: "POND" });
          } else if (voiceOver == "bunnies") {
            EventManager.broadcast("PLAY_AUDIO_NARRATION", { id: "BUNNIES" });
          } else if (voiceOver == "wildflower") {
            EventManager.broadcast("PLAY_AUDIO_NARRATION", {
              id: "WILDFLOWER",
            });
          } else if (voiceOver == "strawberry-plant") {
            EventManager.broadcast("PLAY_AUDIO_NARRATION", {
              id: "STRAWBERRY",
            });
          }
        }
      }
    };
  },
  handleNextButtonClick: () => {
    return (dispatch, state) => {
      const {
        showStatic,
        selectedHotspot,
        jumpToMCQScreenState,
        nextButtonClickedState,
        audioStatePlay,
      } = state();
      if (!showStatic) {
        if (!nextButtonClickedState) {
          const mainMCQ = data.mainScreenMCQ.filter(
            (e) => e.id == selectedHotspot
          );
          const mapMCQ = mainMCQ.map((a) => a.className);
          const voiceOver = mapMCQ.toString();
          if (audioStatePlay) {
            if (voiceOver == "hydra") {
              EventManager.broadcast("PLAY_AUDIO_NARRATION", {
                id: "POND_QUESTION",
              });
            } else if (voiceOver == "bunnies") {
              EventManager.broadcast("PLAY_AUDIO_NARRATION", {
                id: "BUNNIES_QUESTION",
              });
            } else if (voiceOver == "wildflower") {
              EventManager.broadcast("PLAY_AUDIO_NARRATION", {
                id: "WILDFLOWER_QUESTION",
              });
            } else if (voiceOver == "strawberry-plant") {
              EventManager.broadcast("PLAY_AUDIO_NARRATION", {
                id: "STRAWBERRY_QUESTION",
              });
            }
          }
          dispatch(buttonClicked(true));
          dispatch(correctAnswer(false));
          dispatch(answerAttempted(false));
          dispatch(selectOption(""));
          dispatch(toggleToastMessage(false));
        } else {
          dispatch(buttonClicked(false));
          dispatch(selectHotspot(""));
          dispatch(toggleToastMessage(false));
          const { visitedHotspots } = state();
          if (visitedHotspots.length == 4) {
            dispatch(togglePopup(6));
            dispatch(updateVisitedHotspots([]));
            EventManager.broadcast("COMPLETION_SCREEN");
          }
        }
      }
      if (showStatic && jumpToMCQScreenState) {
        if (audioStatePlay) {
          dispatch(setAudioStatePlay(!audioStatePlay));
        }
        dispatch(correctAnswer(false));
        dispatch(answerAttempted(false));
        dispatch(selectOption(""));
        dispatch(toggleToastMessage(false));
        const { mcqQuestions } = state();
        if (mcqQuestions.length) {
          dispatch(thunks.generateNextMCQ());
        } else {
          dispatch(togglePopup(7));
          EventManager.broadcast("COMPLETION_SCREEN");
        }
      }
    };
  },

  toggleAudioBtn: () => {
    return (dispatch, state) => {
      const { audioStatePlay } = state();
      if (!audioStatePlay) {
        dispatch(setAudioStatePlay());
      }
    };
  },

  continueButtonClick: () => {
    return (dispatch, state) => {
      const { jumpToMCQScreenState } = state();
      if (jumpToMCQScreenState) {
        dispatch(correctAnswer(false));
        dispatch(answerAttempted(false));
        dispatch(selectOption(""));
        dispatch(thunks.generateNextMCQ());
      }
    };
  },

  resetActivity: () => {
    return (dispatch, state) => {
      EventManager.broadcast("STOP_ALL");
      // dispatch(ariaLiveText(data.resetConfirmationText));
      dispatch(togglePopup(1));
      dispatch(resetQuestion(1));
      dispatch(updateResetBtnState(true));
      dispatch(jumpToMCQScreen(false));
      dispatch(selectOption(""));
      dispatch(selectHotspot(""));
      dispatch(resetMarkAudioPaused());
      dispatch(resetVisitedHotspots([]));
      dispatch(correctAnswer(false));
      dispatch(answerAttempted(false));
      dispatch(toggleToastMessage(false));
      dispatch(setStatic(""));
      dispatch(questionCount(0));
      dispatch(resetMcqQuestions());
      dispatch(ariaLiveText(data.resetLiveText));
      const { currentPopup } = state();
      if (currentPopup.indexOf(8) >= 0) {
        dispatch(togglePopup(8));
      }
      if (currentPopup.indexOf(7) >= 0) {
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
      const { audioStatePlay } = getState();
      if (audioStatePlay) {
        dispatch(setResetDialogNoSelected(value));
      }
    };
  },
  setAudioStatePlay: () => {
    return (dispatch, getState) => {
      const {
        showStatic,
        pausedAudio,
        audioStatePlay,
        selectedHotspot,
        visitedHotspots,
        nextButtonClickedState,
      } = getState();
      if (audioStatePlay) {
        EventManager.broadcast("STOP_ALL");
      } else if (!audioStatePlay) {
        if (!visitedHotspots.length) {
          EventManager.broadcast("OUTDOOR_SCREEN");
        } else {
          const mainMCQ = data.mainScreenMCQ.filter(
            (e) => e.id == selectedHotspot
          );
          const mapMCQ = mainMCQ.map((a) => a.className);
          const voiceOver = mapMCQ.toString();
          playNarration(
            showStatic,
            voiceOver,
            pausedAudio,
            nextButtonClickedState
          );
        }
      }
      dispatch(setAudioStatePlay());
    };
  },

  checkAudioOnInfo: () => {
    return (dispatch, getState) => {
      const { audioStatePlay, visitedHotspots } = getState();
      if (audioStatePlay) {
        EventManager.broadcast("STOP_ALL");
        // added to rsolve JIRA bug ALI2873-1927
        if (visitedHotspots.length) {
          dispatch(setAudioStatePlay(false));
        }
      }
    };
  },

  onInfoClose: () => {
    return (dispatch, getState) => {
      const {
        showStatic,
        pausedAudio,
        audioStatePlay,
        visitedHotspots,
        selectedHotspot,
        nextButtonClickedState,
      } = getState();
      dispatch(togglePopup(4));
      if (audioStatePlay) {
        if (!visitedHotspots.length) {
          EventManager.broadcast("OUTDOOR_SCREEN");
        } else {
          const mainMCQ = data.mainScreenMCQ.filter(
            (e) => e.id == selectedHotspot
          );
          const mapMCQ = mainMCQ.map((a) => a.className);
          const voiceOver = mapMCQ.toString();
          // added below line and commented playNarration to rsolve JIRA bug ALI2873-1927
          dispatch(setAudioStatePlay(false));
        }
      }
    };
  },

  markAudioPaused: () => {
    return (dispatch, getState) => {
      const { selectedHotspot } = getState();
      const mainMCQ = data.mainScreenMCQ.filter((e) => e.id == selectedHotspot);
      const mapMCQ = mainMCQ.map((a) => a.className);
      const voiceOver = mapMCQ.toString();
      dispatch(markAudioPaused(voiceOver));
    };
  },
};

const playNarration = (
  showStatic,
  voiceOver,
  pausedAudio,
  nextButtonClickedState
) => {
  console.log({ showStatic, voiceOver, nextButtonClickedState });
  if (!showStatic) {
    if (nextButtonClickedState) {
      if (pausedAudio.indexOf(voiceOver) == -1) {
        if (voiceOver == "hydra") {
          EventManager.broadcast("PLAY_AUDIO_NARRATION", {
            id: "POND_QUESTION",
          });
        } else if (voiceOver == "bunnies") {
          EventManager.broadcast("PLAY_AUDIO_NARRATION", {
            id: "BUNNIES_QUESTION",
          });
        } else if (voiceOver == "wildflower") {
          EventManager.broadcast("PLAY_AUDIO_NARRATION", {
            id: "WILDFLOWER_QUESTION",
          });
        } else if (voiceOver == "strawberry-plant") {
          EventManager.broadcast("PLAY_AUDIO_NARRATION", {
            id: "STRAWBERRY_QUESTION",
          });
        }
      }
    } else {
      if (voiceOver == "hydra") {
        EventManager.broadcast("PLAY_AUDIO_NARRATION", { id: "POND" });
      } else if (voiceOver == "bunnies") {
        EventManager.broadcast("PLAY_AUDIO_NARRATION", {
          id: "BUNNIES",
        });
      } else if (voiceOver == "wildflower") {
        EventManager.broadcast("PLAY_AUDIO_NARRATION", {
          id: "WILDFLOWER",
        });
      } else if (voiceOver == "strawberry-plant") {
        EventManager.broadcast("PLAY_AUDIO_NARRATION", {
          id: "STRAWBERRY",
        });
      }
    }
  }
};
