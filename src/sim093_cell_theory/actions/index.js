import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import data from "../data";
export const DEMO_ACTION = "DEMO_ACTION";
export const IS_MCQ_SHOW = "IS_MCQ_SHOW";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SET_QUESTION = " SET_QUESTION";
export const SECOND_SCREEN = "SECOND_SCREEN";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const QUESTION_COUNT = " QUESTION_COUNT";
export const SELECTED_ANSWER = "SELECTED_ANSWER";
export const RESET_BUTTON_CLICKED = " RESET_BUTTON_CLICKED";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const common = { ...actions };

export const OST_COUNT = "OST_COUNT";
export const VIDEO_ENDED = "VIDEO_ENDED";
export const HIDE_SPECIMEN = "HIDE_SPECIMEN";
export const SCREEN_NUMBER = "SCREEN_NUMBER";
export const ATTEMPTED_BUTTON = "ATTEMPTED_BUTTON";
export const CLEAR_VISITED_BUTTONS = "CLEAR_VISITED_BUTTONS";
export const DISABLE_CONTINUE_BUTTON = "DISABLE_CONTINUE_BUTTON";
export const HIDE_MAGNIFICATION_KNOBS = "HIDE_MAGNIFICATION_KNOBS";

export const setQuestion = (value) => {
  return {
    value,
    type: SET_QUESTION,
  };
};
export const questionCount = (value) => {
  return {
    value,
    type: QUESTION_COUNT,
  };
};
export const selectedAnswer = (id) => {
  return {
    id,
    type: SELECTED_ANSWER,
  };
};
export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});
export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});
export const secondScreen = (value) => {
  return {
    value,
    type: SECOND_SCREEN,
  };
};

export const isMcqShow = (value) => {
  return {
    value,
    type: IS_MCQ_SHOW,
  };
};

export const resetButtonClicked = () => {
  return {
    type: RESET_BUTTON_CLICKED,
  };
};

export const ostCount = (value) => {
  return {
    value,
    type: OST_COUNT,
  };
};

export const changeScreen = (value) => {
  return {
    value,
    type: SCREEN_NUMBER,
  };
};

export const attemptedButton = (value) => {
  return {
    value,
    type: ATTEMPTED_BUTTON,
  };
};

export const clearButtonIDS = (value) => {
  return {
    value,
    type: CLEAR_VISITED_BUTTONS,
  };
};

export const hideKnobs = (value) => {
  return {
    value,
    type: HIDE_MAGNIFICATION_KNOBS,
  };
};

export const showSpecimen = (value) => {
  return {
    value,
    type: HIDE_SPECIMEN,
  };
};
export const disableContinueButton = (value) => {
  return {
    value,
    type: DISABLE_CONTINUE_BUTTON,
  };
};
export const videoEnded = (value) => {
  return {
    value,
    type: VIDEO_ENDED,
  };
};

export const thunks = {
  onContinue: (value) => {
    return (dispatch, getState) => {
      dispatch(setQuestion(0));
      dispatch(questionCount(1));
      dispatch(selectedAnswer(""));
      dispatch(submitAnswer(false));
      dispatch(common.togglePopup(4));
      dispatch(submitButtonPressed(false));

      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 100);
      dispatch(secondScreen(true));
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      const { setQuestion: q, questionCount: count } = getState();

      if (count < 4) {
        dispatch(setQuestion(q + 1));
        dispatch(selectedAnswer(""));
        dispatch(submitAnswer(false));
        dispatch(questionCount(count + 1));
        dispatch(submitButtonPressed(false));
      } else {
        dispatch(common.togglePopup(7));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 300);
      }
      dispatch(common.toggleToastMessage(false));

      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 100);
    };
  },
  submitAnswer: () => {
    return (dispatch, getState) => {
      const { setQuestion, questionCount } = getState();
      const index = getState().setQuestion;
      const answerid = getState().selectedAnswerOption;

      if (answerid == data.mcqData[index].answer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 100);
        dispatch(submitAnswer(true));

        if (questionCount < 4) {
          TincanManager.data.percentage =
            parseInt((questionCount / 4) * 50) + 50;
          TincanManager.saveTincanData();
        } else {
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        }
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 100);
        dispatch(wrongAnswer(true));
      }
      dispatch(submitButtonPressed(true));
    };
  },
  resetActivity: () => {
    return (dispatch, getState) => {
      dispatch(videoEnded(false));
      dispatch(ostCount(1));
      dispatch(setQuestion(0));
      dispatch(changeScreen(1));
      dispatch(questionCount(1));
      dispatch(isMcqShow(false));
      dispatch(hideKnobs(false));
      dispatch(clearButtonIDS());
      dispatch(selectedAnswer(""));
      dispatch(submitAnswer(false));
      dispatch(showSpecimen(false));
      dispatch(secondScreen(false));
      dispatch(resetButtonClicked());
      dispatch(common.togglePopup(1));
      dispatch(submitButtonPressed(false));
      dispatch(disableContinueButton(false));
      dispatch(common.updateResetBtnState(true));
      TincanManager.resetTincanData();

      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
    };
  },

  onMagnificationClick: () => {
    return (dispatch, getState) => {
      const {
        ostCountNumber: ostNumber,
        screenNumber,
        visitedButton,
        resetBtnState,
      } = getState();

      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }

      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      });

      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        dispatch(hideKnobs(true));
        dispatch(ostCount(ostNumber + 1));
        dispatch(changeScreen(screenNumber + 1));
        const { ostCountNumber } = getState();
        if (ostCountNumber == 2 || ostCountNumber == 3) {
          dispatch(showSpecimen(true));
        } else {
          dispatch(showSpecimen(false));
        }
        if (ostCountNumber == 5) {
          dispatch(disableContinueButton(true));
          dispatch(common.ariaLiveText(data.liveText));
          setTimeout(() => {
            dispatch(common.ariaLiveText(" "));
          }, 100);
        }
      }, 150);

      if (visitedButton.length < 2) {
        TincanManager.data.percentage = 25;
        TincanManager.saveTincanData();
      } else {
        TincanManager.data.percentage = 50;
        TincanManager.saveTincanData();
      }
    };
  },

  continueClick: () => {
    return (dispatch, getState) => {
      const { ostCountNumber } = getState();

      if (ostCountNumber < 6) {
        dispatch(common.setResetFocusState(true));
        dispatch(ostCount(ostCountNumber + 1));
      }
      if (ostCountNumber == 2) {
        setTimeout(() => {
          dispatch(showSpecimen(true));
        });
      } else if (ostCountNumber == 3) {
        setTimeout(() => {
          dispatch(hideKnobs(false));
          // dispatch(showSpecimen(true));
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
      } else if (ostCountNumber == 4 || ostCountNumber == 5) {
        setTimeout(() => {
          dispatch(showSpecimen(false));
        });
      } else if (ostCountNumber == 6) {
        dispatch(common.togglePopup(4));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 100);
      }

      setTimeout(() => {
        EventManager.broadcast("SECONDARY_CLICK");
      }, 100);
    };
  },
};
