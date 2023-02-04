import data from "../data";
import EventManager from "../../app/events/manager";
import {
  togglePopup,
  toggleToastMessage,
  ariaLiveText,
  setAudioStatePlay,
  toggleAudioBtn,
} from ".";
export const DEMO_ACTION = "DEMO_ACTION";
export const SELECT_ORGANISMS = "SELECT_ORGANISMS";
export const RESET_ORGANISMS = "RESET_ORGANISMS";
export const SELECT_QUESTION = "SELECT_QUESTION";
export const RESET_QUESTION = "RESET_QUESTION";
export const UPDATE_SELECTED_ORGANISMS = "UPDATE_SELECTED_ORGANISMS";
export const SET_STATIC = "SET_STATIC";
export const SELECT_OPTION = "SELECT_OPTION";
export const SELECT_MCQ_QUESTION = "SELECT_MCQ_QUESTION";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const RESET_FOCUS = "RESET_FOCUS";
export const RESET_BTN_STATE = "RESET_BTN_STATE";
export const ACTIVITY_START = "ACTIVITY_START";
export const FEEDBACK_NARRATION = "FEEDBACK_NARRATION";
export const COUNT_ATTEMPTS = "COUNT_ATTEMPTS";

export const scaleChange = () => ({ type: DEMO_ACTION });

export const selectOrganisms = (id) => {
  return {
    type: SELECT_ORGANISMS,
    id,
  };
};
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
export const resetOrganism = () => {
  return {
    type: RESET_ORGANISM,
  };
};
export const updateOrganisms = (organisms) => {
  return {
    type: UPDATE_SELECTED_ORGANISMS,
    organisms,
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

export const setResetFocusState = (focus) => {
  return {
    type: RESET_FOCUS,
    focus,
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

export const updateResetBtnState = (val) => ({ val, type: RESET_BTN_STATE });

export const countAttempts = (value) => {
  return {
    type: COUNT_ATTEMPTS,
    value,
  };
};

export const thunk = {
  generateNextQuestion: () => {
    return (dispatch, state) => {
      const {
        selectedOrganisms,
        showStatic,
        selectedQuestion,
        toggleToastMessage,
        audioStatePlay,
        countAttempts: count,
      } = state();

      if (!showStatic) {
        const question = data.ecosystemContent.filter(
          (e) => e.id == selectedQuestion
        )[0];
        const check = question.animals.every(
          (a) => selectedOrganisms.indexOf(a.id) != -1
        );
        // if (check) {
        if (question.id === 5) {
          dispatch(togglePopup(2));
          dispatch(togglePopup(8));
          EventManager.broadcast("COMPLETION_SCREEN");
          // dispatch(countAttempts(count + 1));
        } else {
          dispatch(togglePopup(2));
          dispatch(selectQuestion());
          EventManager.broadcast("SECONDARY_CLICK");
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }
        // }
      }
      dispatch(resetOrganisms());
    };
  },

  selectOrganism: (id, selectedState) => {
    return (dispatch, state) => {
      dispatch(selectOrganisms(id));
      const {
        selectedOrganisms,
        showStatic,
        selectedQuestion,
        countAttempts: count,
      } = state();

      if (!showStatic) {
        const question = data.ecosystemContent.filter(
          (e) => e.id == selectedQuestion
        )[0];
        const check = selectedOrganisms.every(
          (a) => question.correctAnswer.indexOf(a) >= 0
        );
        const correct =
          check && selectedOrganisms.length == question.correctAnswer.length;

        if (selectedQuestion == 5) {
          if (correct) {
            dispatch(togglePopup(2));
            setTimeout(() => {
              EventManager.broadcast("POSITIVE_FEEDBACK");
            }, 500);
            dispatch(countAttempts(count + 1));
          } else {
            dispatch(togglePopup(4));
            setTimeout(() => {
              EventManager.broadcast("NEGATIVE_FEEDBACK");
            }, 500);
          }
        } else {
          if (correct) {
            setTimeout(() => {
              EventManager.broadcast("POSITIVE_FEEDBACK");
            }, 500);
            dispatch(togglePopup(2));
            dispatch(countAttempts(count + 1));
          }
          // else {
          //   if (!selectedState) {
          //     dispatch(ariaLiveText(data.selected));
          //     setTimeout(() => {
          //       dispatch(ariaLiveText(" "));
          //     }, 300);
          //   } else {
          //     dispatch(ariaLiveText(data.alreadySelected));
          //     setTimeout(() => {
          //       dispatch(ariaLiveText(" "));
          //     }, 300);
          //   }
          // }
        }
      }
      if (count < 10) {
        TincanManager.data.percentage = parseInt((count / 10) * 100);
        TincanManager.saveTincanData();
      }
    };
  },

  submitAnswer: () => {
    return (dispatch, state) => {
      const {
        selectedOption,
        showStatic,
        selectedQuestion,
        countAttempts: count,
      } = state();
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
          dispatch(countAttempts(count + 1));
        } else {
          dispatch(setResetFocusState(true));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
          dispatch(correctAnswer(false));
        }
      }
      if (count < 10) {
        TincanManager.data.percentage = parseInt((count / 10) * 100);
        TincanManager.saveTincanData();
      } else {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
    };
  },

  generateNextMCQ: () => {
    return (dispatch, state) => {
      const {
        selectedOption,
        showStatic,
        selectedQuestion,
        countAttempts: count,
      } = state();

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
            // dispatch(setResetFocusState(true));
            EventManager.broadcast("SECONDARY_CLICK");
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }
        }
      }
    };
  },

  reset: () => {
    return (dispatch, state) => {
      // TincanManager.data.completed = true;
      // TincanManager.data.time_spent = true;
      // TincanManager.saveTincanData();
      // dispatch(resetQuestion());
      // dispatch(selectOption(""));
      // dispatch(setAnswered(false));
      // dispatch(ariaLiveText(data.resetLiveText));
      // dispatch(updateResetBtnState(true));
      // dispatch(setActivityStart(false));
      // dispatch(selectQuestion(""));
      // dispatch(deleteArrayValues());

      // dispatch(togglePopup(6));
      // dispatch(togglePopup(1));
      dispatch(setStatic(false));
      dispatch(resetQuestion());
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));
      dispatch(setActivityStart(false));
      dispatch(resetOrganisms());
      dispatch(countAttempts(1));
      TincanManager.resetTincanData();

      const { currentPopup } = state();
      if (currentPopup.indexOf(6) >= 0) {
        dispatch(togglePopup(6));
      }
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      dispatch(togglePopup(1));
    };
  },
};
