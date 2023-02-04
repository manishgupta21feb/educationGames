import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

const {
  togglePopup,
  ariaLiveText,
  setResetFocusState,
  toggleToastMessage,
  updateResetBtnState,
} = actions;

export const SET_STATIC = "SET_STATIC";
export const SELECT_OPTION = "SELECT_OPTION";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const ACTIVITY_START = "ACTIVITY_START";
export const RESET_QUESTION = "RESET_QUESTION";
export const SELECT_ORGANISM = "SELECT_ORGANISM";
export const RESET_ORGANISMS = "RESET_ORGANISMS";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const AUDIO_PLAY_STATE = "AUDIO_PLAY_STATE";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const FEEDBACK_NARRATION = "FEEDBACK_NARRATION";
export const SELECT_MCQ_QUESTION = "SELECT_MCQ_QUESTION";
export const AUDIO_STATE_STOP = "AUDIO_STATE_STOP";
export const SET_PREVIOUS_SOUND = "SET_PREVIOUS_SOUND";

export const common = { ...actions };

export const selectOrganism = (id) => {
  return {
    type: SELECT_ORGANISM,
    id,
  };
};

export const resetOrganisms = () => {
  return {
    type: RESET_ORGANISMS,
  };
};

export const selectQuestion = () => {
  return {
    type: SELECT_QUESTION,
  };
};

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

export const selectOption = (option) => {
  return {
    type: SELECT_OPTION,
    option,
  };
};

export const selectMcqQuestion = () => {
  return {
    type: SELECT_MCQ_QUESTION,
  };
};

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

export const setAudioPlayState = (playState) => ({
  playState,
  type: AUDIO_PLAY_STATE,
});
export const setAudioStateStop = (playState) => ({
  playState,
  type: AUDIO_STATE_STOP,
});
export const setPreviousSound = (sound) => ({
  type: SET_PREVIOUS_SOUND,
  data: sound,
});
export const thunks = {
  generateNextQuestion: () => {
    return (dispatch, state) => {
      const { showStatic, selectedQuestion } = state();
      if (!showStatic) {
        const question = data.ecosystemContent.filter(
          (e) => e.id == selectedQuestion
        )[0];
        if (question.id === 4) {
          dispatch(togglePopup(2));
          dispatch(togglePopup(8));
          EventManager.broadcast("STOP_ALL");
          EventManager.broadcast("COMPLETION_SCREEN");
          TincanManager.data.percentage =
            ((question.id / question.id) * 100) / 2;
          TincanManager.data.completed = true;
          TincanManager.saveTincanData();
        } else {
          TincanManager.data.percentage = ((question.id / 4) * 100) / 2;
          TincanManager.saveTincanData();
          dispatch(togglePopup(2));
          dispatch(selectQuestion());
          const { selectedQuestion: s, audioPlayState } = state();
          EventManager.broadcast("SECONDARY_CLICK");
          setTimeout(() => {
            EventManager.broadcast("SCREEN_CHANGE", {
              audioPlayState,
              selectedQuestion: s,
            });
          }, 300);
        }
      }
      dispatch(resetOrganisms());
    };
  },

  selectOrganism: (id, selectedState) => {
    return (dispatch, state) => {
      dispatch(selectOrganism(id));
      const {
        selectedOrganisms,
        showStatic,
        selectedQuestion,
        audioStatePlay,
      } = state();
      if (!showStatic) {
        const question = data.ecosystemContent.filter(
          (e) => e.id == selectedQuestion
        )[0];
        const check = question.animals.every(
          (a) => selectedOrganisms.indexOf(a.id) != -1
        );
        if (check) {
          dispatch(togglePopup(2));
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
            EventManager.broadcast("POSITIVE_DIALOG", {
              selectedQuestion,
              showStatic,
              audioStatePlay,
            });
          }, 750);
        } else {
          if (!selectedState) {
            dispatch(ariaLiveText(data.selected));
            setTimeout(() => {
              dispatch(ariaLiveText(" "));
            }, 300);
          } else {
            dispatch(ariaLiveText(data.alreadySelected));
            setTimeout(() => {
              dispatch(ariaLiveText(" "));
            }, 300);
          }
        }
      }
    };
  },

  submitAnswer: () => {
    return (dispatch, state) => {
      const { selectedOption, showStatic, selectedQuestion } = state();
      if (showStatic) {
        dispatch(toggleToastMessage(true));
        dispatch(answerAttempted(true));
        const question = data.mcqData.filter(
          (e) => e.id == selectedQuestion
        )[0];
        const check = question.answer == selectedOption;
        if (check) {
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
          dispatch(correctAnswer(true));
          TincanManager.data.percentage =
            50 + ((question.id / data.mcqData.length) * 100) / 2;
          question.id === "5" ? (TincanManager.data.completed = true) : null;
          TincanManager.saveTincanData();
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
      const { selectedOption, showStatic, selectedQuestion } = state();
      if (showStatic) {
        const question = data.mcqData.filter(
          (e) => e.id == selectedQuestion
        )[0];
        const check = question.answer == selectedOption;
        if (check) {
          if (selectedQuestion >= 5) {
            dispatch(togglePopup(7));
            EventManager.broadcast("COMPLETION_SCREEN");
          } else {
            dispatch(selectQuestion());
            dispatch(selectOption(""));
            dispatch(setResetFocusState(true));
          }
        }
      }
    };
  },

  onOrganismClick: () => {
    return (dispatch, getState) => {
      EventManager.broadcast("STOP_ALL_AND_PLAY", { id: "SECONDARY_CLICK" });
      if (getState().resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
    };
  },

  organismsSelectionCompleted: () => {
    return (dispatch, getState) => {
      const { audioPlayState, selectedQuestion } = getState();
      dispatch(togglePopup(2));
      setTimeout(() => {
        EventManager.broadcast("POSITIVE_DIALOG", {
          audioPlayState,
          selectedQuestion,
        });
      }, 400);
    };
  },
  setAudioPlayState: (playState) => (dispatch, getState) => {
    const { showStatic, selectedQuestion, audioPlayState } = getState();
    dispatch(setAudioPlayState(!audioPlayState));
    if (!showStatic && !audioPlayState) {
      EventManager.broadcast("PLAY_SFX_AUDIO", { selectedQuestion });
    }
  },
  resumeNaration: () => {
    return (dispatch, getState) => {
      const { audioPlayState, setPreviousSound } = getState();
      if (audioPlayState) {
        EventManager.broadcast(setPreviousSound);
      }
    };
  },
};
