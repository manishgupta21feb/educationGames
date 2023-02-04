import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import data from "../data";
export const SET_QUESTION = " SET_QUESTION";
export const QUESTION_COUNT = " QUESTION_COUNT";
export const DEMO_ACTION = "DEMO_ACTION";
export const CLICKED_BUTTON_VALUE = "CLICKED_BUTTON_VALUE";
export const ANSWER_CORRECT = "ANSWER_CORRECT";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const RESET_CORRECT_ANSWER = "RESET_CORRECT_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const PARTIALLY_CORRECT = "PARTIALLY_CORRECT";
export const SELECTED_BUTTON = "SELECTED_BUTTON";
export const RESET_CLICKED_BUTTON = "RESET_CLICKED_BUTTON";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const RESET_SELECTED_BUTTON = "RESET_SELECTED_BUTTON";
export const SELECTED_ANSWER = " SELECTED_ANSWER";
export const QUESTION_VISITED = " QUESTION_VISITED";
export const DISABLED_BUTTON = "DISABLED_BUTTON";
export const CLICKED_BUTTON = "CLICKED_BUTTON";
export const RESET_QUESTION_VISITED = "RESET_QUESTION_VISITED";
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
export const clickedButtonValue = (value) => {
  return {
    value,
    type: CLICKED_BUTTON_VALUE,
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
export const selectedButton = (value) => ({
  type: SELECTED_BUTTON,
  value,
});
export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});
export const partiallyCorrect = (pressed) => ({
  pressed,
  type: PARTIALLY_CORRECT,
});
export const questionVisited = (value) => ({
  type: QUESTION_VISITED,
  value,
});
export const resetQuestionVisited = (value) => ({
  type: RESET_QUESTION_VISITED,
});
export const answerCorrect = (value) => ({
  type: ANSWER_CORRECT,
  value,
});
export const resetClickedButton = () => ({
  type: RESET_CLICKED_BUTTON,
});
export const resetCorrectAnswer = () => ({
  type: RESET_CORRECT_ANSWER,
});
export const resetSelectedButton = () => ({
  type: RESET_SELECTED_BUTTON,
});
export const selectedAnswer = (id) => {
  return {
    id,
    type: SELECTED_ANSWER,
  };
};
export const disabledButton = (value) => {
  return {
    value,
    type: DISABLED_BUTTON,
  };
};
export const clickedButtons = (value) => {
  return {
    value,
    type: CLICKED_BUTTON,
  };
};
export const thunks = {
  onClickedButton: (value) => {
    return (dispatch, getState) => {
      const { setQuestion, selectedButton } = getState();
      const answerData = data.mcqData[setQuestion].correctAnswer;
      const button = getState().clickedButtons;

      dispatch(common.updateResetBtnState(false));
      dispatch(common.toggleToastMessage(false));

      if (
        !(
          getState().clickedButtonValue.includes(value) ||
          (selectedButton && selectedButton.includes(value))
        )
      ) {
        dispatch(clickedButtonValue(value));
        dispatch(clickedButtons(button + 1));
      }

      if (getState().clickedButtons == answerData.length) {
        dispatch(disabledButton(true));
      }
    };
  },
  onSubmitButton: () => {
    return (dispatch, getState) => {
      const {
        clickedButtonValue,
        setQuestion,
        selectedAnswerOption,
        questionCount,
      } = getState();
      const totalLength = data.mcqData.length;
      TincanManager.data.percentage = parseInt(
        (questionCount / totalLength) * 100
      );
      if (TincanManager.data.percentage == 100) {
        TincanManager.data.completed = true;
      }
      TincanManager.saveTincanData();

      const answerData = data.mcqData[setQuestion].correctAnswer;
      if (!data.mcqData[setQuestion].radioButton) {
        for (let i = 0; i < clickedButtonValue.length; i++) {
          if (
            answerData.includes(clickedButtonValue[i]) &&
            !getState().answerCorrect.includes(clickedButtonValue[i])
          ) {
            dispatch(answerCorrect(clickedButtonValue[i]));
            dispatch(selectedButton(clickedButtonValue[i]));
          }
        }
        let answer = getState().answerCorrect;

        dispatch(clickedButtons(answer.length));
        if (answer.length == answerData.length) {
          dispatch(submitAnswer(true));
          dispatch(questionVisited(data.mcqData[setQuestion].id));
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
        } else {
          dispatch(disabledButton(false));
          if (answer.length == 0) {
            dispatch(wrongAnswer(true));
          } else {
            dispatch(partiallyCorrect(true));
          }
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
        }
      } else {
        if (answerData == selectedAnswerOption) {
          dispatch(submitAnswer(true));
          dispatch(questionVisited(data.mcqData[setQuestion].id));
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
        } else {
          dispatch(wrongAnswer(true));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
        }
      }
      if (getState().submitAnswer && questionCount > 1) {
        setTimeout(() => {
          dispatch(common.ariaLiveText(data.mcqData[setQuestion].liveText));
        }, 400);
        setTimeout(() => {
          dispatch(common.ariaLiveText(" "));
        }, 800);
      }
      dispatch(resetClickedButton());
      dispatch(submitButtonPressed(true));
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      EventManager.broadcast("STOP_ALL");
      if (getState().questionCount != data.mcqData.length) {
        dispatch(clickedButtons(0));
        dispatch(setQuestion(getState().setQuestion + 1));
        dispatch(questionCount(getState().questionCount + 1));
        dispatch(submitAnswer(false));
        dispatch(disabledButton(false));
        dispatch(submitButtonPressed(false));
        dispatch(wrongAnswer(false));
        dispatch(resetCorrectAnswer());
        dispatch(resetClickedButton());
        dispatch(partiallyCorrect(false));
        dispatch(selectedAnswer(""));
      } else {
        dispatch(common.togglePopup(7));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 300);
      }
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 150);
      dispatch(common.toggleToastMessage(false));
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 100);
    };
  },
  resetActivity: () => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(clickedButtons(0));
      dispatch(common.updateResetBtnState(true));
      dispatch(setQuestion(0));
      dispatch(questionCount(1));
      dispatch(submitAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(resetCorrectAnswer());
      dispatch(wrongAnswer(false));
      dispatch(disabledButton(false));
      dispatch(resetClickedButton());
      dispatch(selectedAnswer(""));
      dispatch(partiallyCorrect(false));
      dispatch(resetSelectedButton());
      dispatch(resetQuestionVisited());

      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },
};
