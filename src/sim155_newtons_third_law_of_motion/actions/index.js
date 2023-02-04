import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

import data from "../data";
export const common = { ...actions };
const { togglePopup, ariaLiveText, updateResetBtnState, toggleToastMessage } =
  actions;

export const SCREEN_COUNT = "SCREEN_COUNT";
export const QUESTION_COUNT = "QUESTION_COUNT";
export const LEFT_COUNTER = "LEFT_COUNTER";
export const RIGHT_COUNTER = "RIGHT_COUNTER";
export const IS_MCQ = "IS_MCQ";
export const SELECT_OPTION = "SELECT_OPTION";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const ANIMATE_TYPE = "ANIMATE_TYPE";
export const ANIMATE_END = "ANIMATE_END";
export const NEXT_BUTTON = "NEXT_BUTTON";

export const screenCount = (count) => ({
  type: SCREEN_COUNT,
  count,
});

export const setIsMcq = (flag) => ({
  type: IS_MCQ,
  flag,
});

export const selectOption = (option) => {
  return {
    type: SELECT_OPTION,
    option,
  };
};

export const animateType = (option) => {
  return {
    type: ANIMATE_TYPE,
    option,
  };
};

export const questionCount = (count) => ({
  type: QUESTION_COUNT,
  count,
});

export const leftCounter = (count) => ({
  type: LEFT_COUNTER,
  count,
});

export const rightCounter = (count) => ({
  type: RIGHT_COUNTER,
  count,
});

export const correctAnswer = (correct) => {
  return {
    type: CORRECT_ANSWER,
    correct,
  };
};

export const answerAttempted = (attempted) => {
  return {
    type: ANSWER_ATTEMPTTED,
    attempted,
  };
};

export const animateEnd = (flag) => ({
  type: ANIMATE_END,
  flag,
});

export const nextButton = (flag) => ({
  type: NEXT_BUTTON,
  flag,
});

export const thunks = {
  leftCounter: (value) => (dispatch, getState) => {
    const { leftCounter: lc } = getState();
    if (value !== undefined && lc != value) {
      dispatch(leftCounter(value));
      if (value < lc) {
        dispatch(thunks.setAnimationLeftDecr());
      } else if (value > lc) {
        dispatch(thunks.setAnimationLeftIncr());
      }
    }
  },
  rightCounter: (value) => (dispatch, getState) => {
    const { rightCounter: rc } = getState();
    if (value !== undefined && rc != value) {
      dispatch(rightCounter(value));
      if (value < rc) {
        dispatch(thunks.setAnimationRightDecr());
      } else if (value > rc) {
        dispatch(thunks.setAnimationRightIncr());
      }
    }
  },
  resetActivity: () => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(setIsMcq(false));
      dispatch(leftCounter(50));
      dispatch(rightCounter(50));
      dispatch(questionCount(0));
      dispatch(screenCount(0));
      dispatch(correctAnswer(false));
      dispatch(answerAttempted(false));
      dispatch(selectOption(""));
      dispatch(toggleToastMessage(false));
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      dispatch(animateEnd(false));
      dispatch(animateType("none"));
      dispatch(nextButton(false));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },

  setAnimationLeftIncr: () => {
    return (dispatch, getState) => {
      const animate = getState().animateType;
      const left = getState().leftCounter;
      const right = getState().rightCounter;
      const text = data.animationLabel.leftIncrement + left + data.label.newton;
      dispatch(thunks.setLiveText(text));
      if (
        animate == "none" ||
        animate == "rightBackward" ||
        animate == "leftBackward"
      ) {
        dispatch(animateType("rightForward"));
        dispatch(animateEnd(true));
        setTimeout(() => {
          dispatch(animateEnd(false));
          dispatch(nextButton(true));
        }, 3000);
      } else if (animate == "leftForward" && left == right) {
        dispatch(animateType("leftBackward"));
        dispatch(animateEnd(true));
        setTimeout(() => {
          dispatch(animateEnd(false));
        }, 3000);
      }
    };
  },

  setAnimationLeftDecr: () => {
    return (dispatch, getState) => {
      const animate = getState().animateType;
      const left = getState().leftCounter;
      const right = getState().rightCounter;
      const text = data.animationLabel.leftDecrement + left + data.label.newton;
      dispatch(thunks.setLiveText(text));
      if (
        animate == "none" ||
        animate == "rightBackward" ||
        animate == "leftBackward"
      ) {
        dispatch(animateType("leftForward"));
        dispatch(animateEnd(true));
        setTimeout(() => {
          dispatch(animateEnd(false));
          dispatch(nextButton(true));
        }, 3000);
      } else if (animate == "rightForward" && left == right) {
        dispatch(animateType("rightBackward"));
        dispatch(animateEnd(true));
        setTimeout(() => {
          dispatch(animateEnd(false));
        }, 3000);
      } else if (animate == "leftForward" && left == right) {
        dispatch(animateType("leftBackward"));
        dispatch(animateEnd(true));
        setTimeout(() => {
          dispatch(animateEnd(false));
        }, 3000);
      }
    };
  },

  setAnimationRightIncr: () => {
    return (dispatch, getState) => {
      const animate = getState().animateType;
      const left = getState().leftCounter;
      const right = getState().rightCounter;
      const text =
        data.animationLabel.rightIncrement + right + data.label.newton;
      dispatch(thunks.setLiveText(text));
      if (
        animate == "none" ||
        animate == "rightBackward" ||
        animate == "leftBackward"
      ) {
        dispatch(animateType("leftForward"));
        dispatch(animateEnd(true));
        setTimeout(() => {
          dispatch(animateEnd(false));
          dispatch(nextButton(true));
        }, 3000);
      } else if (animate == "rightForward" && left == right) {
        dispatch(animateType("rightBackward"));
        dispatch(animateEnd(true));
        setTimeout(() => {
          dispatch(animateEnd(false));
        }, 3000);
      }
    };
  },

  setAnimationRightDecr: () => {
    return (dispatch, getState) => {
      const animate = getState().animateType;
      const left = getState().leftCounter;
      const right = getState().rightCounter;
      const text =
        data.animationLabel.rightDecrement + right + data.label.newton;
      dispatch(thunks.setLiveText(text));
      if (
        animate == "none" ||
        animate == "rightBackward" ||
        animate == "leftBackward"
      ) {
        dispatch(animateType("rightForward"));
        dispatch(animateEnd(true));
        setTimeout(() => {
          dispatch(animateEnd(false));
          dispatch(nextButton(true));
        }, 3000);
      } else if (animate == "rightForward" && left == right) {
        dispatch(animateType("rightBackward"));
        dispatch(animateEnd(true));
        setTimeout(() => {
          dispatch(animateEnd(false));
        }, 3000);
      } else if (animate == "leftForward" && left == right) {
        dispatch(animateType("leftBackward"));
        dispatch(animateEnd(true));
        setTimeout(() => {
          dispatch(animateEnd(false));
        }, 3000);
      }
    };
  },

  submitAnswer: () => {
    return (dispatch, getState) => {
      const { questionCount, selectedOption } = getState();
      const answer = data.QuestionData[questionCount].answer;
      const check = answer === selectedOption;
      dispatch(toggleToastMessage(true));
      dispatch(answerAttempted(true));
      dispatch(correctAnswer(check));
      setTimeout(() => {
        EventManager.broadcast(
          check ? "POSITIVE_FEEDBACK" : "NEGATIVE_FEEDBACK"
        );
      }, 200);
    };
  },

  nextButtonClick: () => {
    return (dispatch, getState) => {
      if (getState().isMCQ) {
        const ques = getState().questionCount + 5;
        const len =
          data.QuestionData.length + data.firstSectionScreenData.length;
        if (getState().questionCount == 3) {
          dispatch(togglePopup(6));
          dispatch(toggleToastMessage(false));
          EventManager.broadcast("STOP_ALL");
          EventManager.broadcast("COMPLETION_SCREEN");
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        } else {
          dispatch(questionCount(getState().questionCount + 1));
          dispatch(correctAnswer(false));
          dispatch(answerAttempted(false));
          dispatch(selectOption(""));
          dispatch(toggleToastMessage(false));
          EventManager.broadcast("STOP_ALL");
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
        }
        TincanManager.data.percentage = parseInt((ques / len) * 100);
        TincanManager.saveTincanData();
      } else {
        const screen = getState().screenCount + 1;
        if (getState().screenCount == 3) {
          dispatch(togglePopup(5));
          EventManager.broadcast("STOP_ALL");
          EventManager.broadcast("COMPLETION_SCREEN");
        } else {
          dispatch(screenCount(getState().screenCount + 1));
          EventManager.broadcast("STOP_ALL");
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
        }
        TincanManager.data.percentage = parseInt(
          (screen / data.firstSectionScreenData.length) * 50
        );
        TincanManager.saveTincanData();
      }
    };
  },
  setLiveText: (text) => {
    return (dispatch, getState) => {
      dispatch(common.ariaLiveAssertive(" "));
      setTimeout(() => {
        dispatch(common.ariaLiveAssertive(text));
      }, 100);
      setTimeout(() => {
        dispatch(common.ariaLiveAssertive(" "));
      }, 500);
    };
  },
};
