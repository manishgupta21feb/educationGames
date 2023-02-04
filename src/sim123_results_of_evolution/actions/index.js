import * as actions from "../../app/actions";
import data from "../data";
export const BUTTON_CLICK_COUNT = "BUTTON_CLICK_COUNT";
export const DEMO_ACTION = "DEMO_ACTION";
export const SET_SCREEN = "SET_SCREEN";
export const MCQ_SCREEN = "MCQ_SCREEN";
export const SCENERIO_COUNT = " SCENERIO_COUNT";
export const SELECT_ANSWER = "SELECT_ANSWER";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const common = { ...actions };
export const setScreen = (value) => ({
  type: SET_SCREEN,
  value,
});
export const mcqScreen = (value) => ({
  type: MCQ_SCREEN,
  value,
});
export const scenerioCount = (value) => ({
  type: SCENERIO_COUNT,
  value,
});
export const selectedAnswer = (id) => ({
  type: SELECT_ANSWER,
  id,
});
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
export const buttonClickCountValue = (value) => ({
  value,
  type: BUTTON_CLICK_COUNT,
});
export const thunks = {
  onClickButton: (value) => {
    return (dispatch, getState) => {
      const { buttonClickCount, setScreenValue } = getState();
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(common.updateResetBtnState(false));
      if (value == "flood") {
        dispatch(buttonClickCountValue(buttonClickCount + 2));
      } else {
        dispatch(buttonClickCountValue(buttonClickCount + 1));
      }
      const dataValue =
        data.rightScreenData[setScreenValue].liveText[buttonClickCount];

      dispatch(common.ariaLiveAssertive(" "));
      setTimeout(() => {
        dispatch(common.ariaLiveAssertive(dataValue));
      }, 100);
      setTimeout(() => {
        dispatch(common.ariaLiveAssertive(" "));
      }, 500);
    };
  },
  onSubmitButton: () => {
    return (dispatch, getState) => {
      const { setScreenValue, selectedAnswerOption } = getState();
      const correctAnswer = data.rightScreenData[setScreenValue].answer;
      const count = setScreenValue + 1;
      const totalLength = data.rightScreenData.length;
      if (correctAnswer == selectedAnswerOption) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 100);
        dispatch(submitAnswer(true));
        TincanManager.data.percentage = parseInt((count / totalLength) * 100);
        if (TincanManager.data.percentage == 100) {
          TincanManager.data.completed = true;
        }
        TincanManager.saveTincanData();
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 100);
        dispatch(wrongAnswer(true));
      }
      dispatch(submitButtonPressed(true));
    };
  },

  onNextButton: (value) => {
    return (dispatch, getState) => {
      const { setScreenValue, mcqScreenValue, scenerioCountValue } = getState();
      const totalScenerioLength = data.rightScreenData.length;

      if (scenerioCountValue == totalScenerioLength) {
        dispatch(common.togglePopup(7));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 300);
      } else {
        if (mcqScreenValue) {
          dispatch(setScreen(setScreenValue + 1));
          dispatch(buttonClickCountValue(0));
          dispatch(mcqScreen(false));
          dispatch(selectedAnswer(""));
        } else {
          dispatch(mcqScreen(true));
          dispatch(scenerioCount(scenerioCountValue + 1));
        }
      }
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 100);
      dispatch(submitAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(wrongAnswer(false));
      dispatch(common.toggleToastMessage(false));
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(buttonClickCountValue(0));
      dispatch(submitButtonPressed(false));
      dispatch(submitAnswer(false));
      dispatch(wrongAnswer(false));
      dispatch(mcqScreen(false));
      dispatch(scenerioCount(0));
      dispatch(selectedAnswer(""));
      dispatch(setScreen(0));
      dispatch(buttonClickCountValue(0));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },
};
