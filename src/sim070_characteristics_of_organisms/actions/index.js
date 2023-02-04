import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import data from "../data";
export const DEMO_ACTION = "DEMO_ACTION";
export const SET_QUESTION = " SET_QUESTION";
export const SELECTED_ANSWER = "SELECTED_ANSWER";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const QUESTION_COUNT = " QUESTION_COUNT";
export const SECOND_SCREEN = "SECOND_SCREEN";
export const BUTTON_INDEX = "BUTTON_INDEX";
export const SPECIMEN_CLICKED = "SPECIMEN_CLICKED";
export const SPECIMEN_VALUE = "SPECIMEN_VALUE";
export const MICROSCOPIC_CLICK_VIEW = "MICROSCOPIC_CLICK_VIEW";
export const IS_MCQ_SHOW = "IS_MCQ_SHOW";
export const SPECIMEN_VISITED = "SPECIMEN_VISITED";
export const RESET_BUTTON_CLICKED = " RESET_BUTTON_CLICKED";
export const QUESTION_VISITED = "QUESTION_VISITED";
export const common = { ...actions };
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
export const microscopicClickView = (value) => {
  return {
    value,
    type: MICROSCOPIC_CLICK_VIEW,
  };
};
export const buttonIndex = (value) => {
  return {
    value,
    type: BUTTON_INDEX,
  };
};
export const specimenClicked = (value) => {
  return {
    value,
    type: SPECIMEN_CLICKED,
  };
};
export const specimenValue = (value) => {
  return {
    value,
    type: SPECIMEN_VALUE,
  };
};
export const isMcqShow = (value) => {
  return {
    value,
    type: IS_MCQ_SHOW,
  };
};
export const specimenVisited = (value) => {
  return {
    value,
    type: SPECIMEN_VISITED,
  };
};
export const resetButtonClicked = () => {
  return {
    type: RESET_BUTTON_CLICKED,
  };
};
export const questionVisited = (value) => {
  return {
    type: QUESTION_VISITED,
    value,
  };
};
export const thunks = {
  microscopicView: (value) => {
    return (dispatch, getState) => {
      dispatch(microscopicClickView(value));

      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(
        common.ariaLiveText(
          data.buttonLabel[getState().buttonIndex].imageMicroscopicText
        )
      );
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 400);
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 100);
    };
  },
  onContinue: (value) => {
    return (dispatch) => {
      dispatch(common.togglePopup(4));
      dispatch(questionCount(1));
      dispatch(setQuestion(0));
      dispatch(selectedAnswer(""));
      dispatch(submitButtonPressed(false));
      dispatch(submitAnswer(false));

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
  specimenValue: (value) => {
    return (dispatch, getState) => {
      const buttoninfo = data.buttonLabel;
      const length = buttoninfo.length;
      dispatch(common.updateResetBtnState(false));
      dispatch(specimenVisited(value));
      dispatch(specimenValue(value));
      dispatch(specimenClicked(true));

      for (let i = 0; i < length; i++) {
        if (value == buttoninfo[i].id) {
          dispatch(buttonIndex(i));
        }
      }
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      const second = getState().secondScreen;
      const index = getState().setQuestion;
      const count = getState().questionCount;

      if (second) {
        const dataInfo = data.mcqQuestionData;
        TincanManager.data.percentage = parseInt(
          50 + (count / (2 * dataInfo.length)) * 100
        );
        if (TincanManager.data.percentage == 100) {
          TincanManager.data.completed = true;
        }
        TincanManager.saveTincanData();
        if (count != dataInfo.length) {
          dispatch(questionCount(count + 1));
          dispatch(setQuestion(index + 1));
          dispatch(selectedAnswer(""));
          dispatch(submitButtonPressed(false));
          dispatch(submitAnswer(false));
          dispatch(wrongAnswer(false));
        } else {
          dispatch(common.togglePopup(7));
          setTimeout(() => {
            EventManager.broadcast("COMPLETION_SCREEN");
          }, 300);
        }

        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 150);
      } else {
        const info = getState().specimenVisited;
        const questionAttempt = getState().questionAttempt;
        const buttonIndex = getState().buttonIndex;
        const McqShow = getState().isMcqShow;
        const buttonInfo = data.buttonLabel.length;

        const dataInfo = data.buttonLabel[buttonIndex].questionData;
        if (!McqShow) {
          dispatch(isMcqShow(true));

          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 150);
        } else {
          TincanManager.data.percentage = parseInt(
            (questionAttempt / (2 * buttonInfo * dataInfo.length)) * 100
          );
          TincanManager.saveTincanData();
          if (count != dataInfo.length) {
            dispatch(questionCount(count + 1));
            dispatch(setQuestion(index + 1));
            dispatch(selectedAnswer(""));
            dispatch(submitButtonPressed(false));
            dispatch(submitAnswer(false));
            dispatch(questionVisited(questionAttempt + 1));
            setTimeout(() => {
              EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
            }, 150);
          } else {
            if (info.length == buttonInfo) {
              setTimeout(() => {
                EventManager.broadcast("COMPLETION_SCREEN");
              }, 150);
              dispatch(common.togglePopup(4));
            } else {
              dispatch(specimenClicked(false));
              dispatch(specimenValue(""));
              dispatch(isMcqShow(false));
              dispatch(microscopicClickView(false));
              dispatch(questionVisited(questionAttempt + 1));
              dispatch(questionCount(1));
              dispatch(setQuestion(0));
              dispatch(selectedAnswer(""));
              dispatch(submitButtonPressed(false));
              dispatch(submitAnswer(false));

              setTimeout(() => {
                EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
              }, 150);
            }
          }
        }
      }
      dispatch(common.toggleToastMessage(false));

      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 100);
    };
  },
  submitAnswer: () => {
    return (dispatch, getState) => {
      const second = getState().secondScreen;
      const index = getState().setQuestion;
      const answerid = getState().selectedAnswerOption;
      const buttonIndex = getState().buttonIndex;
      let dataInfo;

      if (second) {
        dataInfo = data.mcqQuestionData[index];
      } else {
        dataInfo = data.buttonLabel[buttonIndex].questionData[index];
      }
      const length = dataInfo.radiobuttons.length;

      let answer;

      for (let i = 0; i < length; i++) {
        if (dataInfo.radiobuttons[i].id == answerid) {
          answer = dataInfo.radiobuttons[i].value;
        }
      }

      if (answer == dataInfo.answer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 100);
        dispatch(submitAnswer(true));
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
      dispatch(resetButtonClicked());
      dispatch(common.togglePopup(1));
      dispatch(questionCount(1));
      dispatch(setQuestion(0));
      dispatch(selectedAnswer(""));
      dispatch(submitButtonPressed(false));
      dispatch(submitAnswer(false));
      dispatch(common.updateResetBtnState(true));
      dispatch(secondScreen(false));
      dispatch(specimenClicked(false));
      dispatch(specimenValue(""));
      dispatch(isMcqShow(false));
      dispatch(microscopicClickView(false));
      dispatch(questionVisited(1));
      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
      TincanManager.resetTincanData();
    };
  },
};
