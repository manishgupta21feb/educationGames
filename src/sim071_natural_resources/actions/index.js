import * as actions from "../../app/actions";
import data from "../data";

export const DEMO_ACTION = "DEMO_ACTION";
export const ACTIVITY_START = "ACTIVITY_START";
export const CLICKED_VALUE = "CLICKED_VALUE";
export const BUTTON_LABELS = "BUTTON_LABELS";
export const SHOW_FINISH_BUTTON = "SHOW_FINISH_BUTTON";
export const CITY_BACK_BUTTON = "CITY_BACK_BUTTON";
export const CLICKED_BUTTON_VALUE = "CLICKED_BUTTON_VALUE";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const RADIO_BUTTON_VALUE = "RADIO_BUTTON_VALUE";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const SET_QUESTION = " SET_QUESTION";
export const SELECTED_ANSWER = "SELECTED_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const ON_CHANGE_SCREEN = "ON_CHANGE_SCREEN";
export const SECOND_SCREEN = "SECOND_SCREEN";
export const BUTTON_LABELS_SECOND = "BUTTON_LABELS_SECOND";
export const COUNT_ATTEMPTS = "COUNT_ATTEMPTS";
export const UPDATE_COLOR_CHANGE = "UPDATE_COLOR_CHANGE";
export const CLICKED_BUTTON_SECOND = "CLICKED_BUTTON_SECOND";
export const SET_PARTIALLY_CORRECT = "SET_PARTIALLY_CORRECT";
export const SET_SECOND_SCREEN_QUESTION = "SET_SECOND_SCREEN_QUESTION";
export const CLICKED_SECOND = "CLICKED_SECOND";
const { togglePopup, ariaLiveText } = actions;
export const common = { ...actions };

export const setActivityStart = (val) => {
  return {
    type: ACTIVITY_START,
    val,
  };
};

export const clickedValue = (value) => {
  return {
    value,
    type: CLICKED_VALUE,
  };
};

export const clickedSecond = (value) => {
  return {
    value,
    type: CLICKED_SECOND,
  };
};

export const buttonLabels = () => {
  return {
    type: BUTTON_LABELS,
  };
};

export const buttonLabelsSecond = () => {
  return {
    type: BUTTON_LABELS_SECOND,
  };
};

export const showFinishButton = (value) => {
  return {
    value,
    type: SHOW_FINISH_BUTTON,
  };
};

export const cityBackButton = (value) => {
  return {
    value,
    type: CITY_BACK_BUTTON,
  };
};

export const clickedButtonValue = (value) => {
  return {
    type: CLICKED_BUTTON_VALUE,
    value,
  };
};

export const selectAnswerOption = (id) => {
  return {
    id,
    type: SELECT_ANSWER_OPTION,
  };
};

export const radioButtonValue = (value) => {
  return {
    type: RADIO_BUTTON_VALUE,
    value,
  };
};

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});

export const setQuestion = (value) => {
  return {
    type: SELECTED_ANSWER,
    value,
  };
};

export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});

export const onChangeScreen = (val) => ({
  val,
  type: ON_CHANGE_SCREEN,
});

export const secondScreen = (value) => {
  return {
    value,
    type: SECOND_SCREEN,
  };
};

export const clickedButtonSecond = (value) => {
  return {
    type: CLICKED_BUTTON_SECOND,
    value,
  };
};

export const setPartiallyCorrect = (correct) => ({
  correct,
  type: SET_PARTIALLY_CORRECT,
});
export const setSecondScreenQuestion = (value) => {
  return {
    type: SET_SECOND_SCREEN_QUESTION,
    value,
  };
};
export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });

export const thunks = {
  onContinue: (value) => {
    return (dispatch) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(questionCount(1));
      dispatch(showFinishButton([]));
      dispatch(setSecondScreenQuestion(0));
      dispatch(clickedButtonSecond([]));
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 100);
      dispatch(secondScreen(true));
      dispatch(submitAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(common.togglePopup(6));
      dispatch(common.toggleToastMessage(false));

    };
  },

  onClickedButton: (value) => {
    return (dispatch, getState) => {
      if (getState().secondScreen) {
        const buttonList = [...getState().showFinishButton];
        buttonList.splice(buttonList.indexOf(value), 1);
        dispatch(showFinishButton(buttonList));
      }
    };
  },

  cityBackButton: (value) => {
    return (dispatch, getState) => {
      if (getState().secondScreen) {
        const buttonList = getState().showFinishButton;
        const newBtnList = [...buttonList, value];
        dispatch(showFinishButton(newBtnList));
      } else {
        const activeButton = getState().clickedButtonSecond;
        const newActiveBtn = [...activeButton, value];
        dispatch(clickedButtonSecond(newActiveBtn));
        setTimeout(() => {
          dispatch(common.setResetFocusState(true));
        }, 100);
      }
      dispatch(cityBackButton(value));
      dispatch(clickedValue(true));
      dispatch(clickedSecond(true));
      dispatch(submitAnswer(false));
      dispatch(selectAnswerOption(""));
      dispatch(submitButtonPressed(false));
      dispatch(common.updateResetBtnState(false));
      // dispatch(common.setResetFocusState(true));

      const length = data.buttonLabels.length;
      const tempData = [...data.buttonLabels];
      for (let i = 0; i < length; i++) {
        if (data.buttonLabels[i].id == value) {
          dispatch(clickedButtonValue(data.buttonLabels[i].question));
          dispatch(setQuestion(i));
          tempData[i].active = true;
          dispatch(updateQuestionsData(tempData));
        }
      }
    };
  },

  selectAnswerOption: (id) => {
    return (dispatch, getState) => {
      dispatch(selectAnswerOption(id));
    };
  },

  submitAnswer: () => {
    return (dispatch, getState) => {
      // let { questionCount: count } = getState();
      const index = getState().setQuestion;
      let buttonList = getState().showFinishButton;
      const count = buttonList.length+1;
      const cityButton = getState().cityBackButton;
      const answerid = getState().selectedAnswerOption;
      const length = data.radioButtons.length;
      let answer;
      dispatch(clickedSecond(false));

      for (let i = 0; i < length; i++) {
        if (data.radioButtons[i].id == answerid) {
          answer = data.radioButtons[i].value;
        }
      }
      if (answer == data.buttonLabels[index].answer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        TincanManager.data.percentage = parseInt(
          (count / getState().buttonLabels.length) * 100/2
        );
        TincanManager.saveTincanData();
        dispatch(submitAnswer(true));
        buttonList.push(cityButton);
        dispatch(showFinishButton(buttonList));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(wrongAnswer(true));
      }
      dispatch(submitButtonPressed(true));
      dispatch(common.toggleToastMessage(false));
    };
  },

  submitAnswerButtons: () => {
    return (dispatch, getState) => {
      const answerList = getState().showFinishButton;
      const count = getState().questionCount;
      const answerCorrect = getState().clickedButtonSecond;
      const index = getState().setSecondScreenQuestion;

      const correctAnswer = data.buttonAnswers[index];
      const length = answerList.length;
      for (let i = 0; i < length; i++) {
        if (correctAnswer.includes(answerList[i])) {
          answerCorrect.push(answerList[i]);
        }
      }
      dispatch(clickedSecond(false));
      if (answerCorrect.length == correctAnswer.length) {
        dispatch(submitAnswer(true));
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
      } else {
        if (answerCorrect.length == 0) {
          dispatch(wrongAnswer(true));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
        } else {
          dispatch(setPartiallyCorrect(true));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
        }
      }
      dispatch(showFinishButton([]));
      dispatch(clickedButtonSecond(answerCorrect));
      dispatch(submitButtonPressed(true));
      dispatch(common.toggleToastMessage(false));
    };
  },

  resetActivity: () => {
    return (dispatch, getState) => {
      dispatch(showFinishButton([]));
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(clickedValue(false));
      dispatch(clickedSecond(false));
      dispatch(submitAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(secondScreen(false));
      dispatch(clickedButtonSecond([]));
      dispatch(cityBackButton(""));
      dispatch(selectAnswerOption(""));
      dispatch(setPartiallyCorrect(false));
      dispatch(wrongAnswer(false));
      // dispatch(setSecondScreenQuestion(0));
      // dispatch(radioButtonValue(0));
      dispatch(common.ariaLiveText(data.resetLiveText));

      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 600);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },

  nextButtonClick: () => {
    return (dispatch, getState) => {
      if (getState().secondScreen) {
        const count = getState().questionCount;
        const index = getState().setSecondScreenQuestion;
        dispatch(common.toggleToastMessage(false));

        if (data.instructionTwo.length != getState().questionCount) {
          dispatch(setSecondScreenQuestion(index + 1));
          dispatch(showFinishButton([]));
          dispatch(clickedButtonSecond([]));
          dispatch(questionCount(count + 1));
          dispatch(submitAnswer(false));
          dispatch(submitButtonPressed(false));
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 75;
          TincanManager.saveTincanData();    
        } else {
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();  
          dispatch(common.togglePopup(7));
          EventManager.broadcast("SECONDARY_CLICK");
          setTimeout(() => {
            EventManager.broadcast("COMPLETION_SCREEN");
          }, 100);
        }
      } else {
        dispatch(common.togglePopup(6));
      }
      dispatch(common.toggleToastMessage(false));
    };
  },
};
