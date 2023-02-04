import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";

export const DEMO_ACTION = "DEMO_ACTION";
import data from "../data";
export const common = { ...actions };
export const SLIDER_DISABLED = "SLIDER_DISABLED";
export const IS_MCQ_SHOW = "IS_MCQ_SHOW";
export const SECOND_SCREEN = "SECOND_SCREEN";
export const DESCRIPTION_BOX_SHOW = "DESCRIPTION_BOX_SHOW";
export const SELECT_ANSWER = "SELECT_ANSWER";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const SHOW_RESPONSE = "SHOW_RESPONSE";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const UPDATE_SLIDER = "UPDATE_SLIDER";
export const isMcqShow = (value) => {
  return {
    value,
    type: IS_MCQ_SHOW,
  };
};
export const updateSlider = (val) => ({
  type: UPDATE_SLIDER,
  payload: val,
});

export const setSecondScreen = (id) => ({
  id,
  type: SECOND_SCREEN,
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
export const descriptionShow = (value) => ({
  type: DESCRIPTION_BOX_SHOW,
  value,
});
export const showResponse = (val) => ({
  type: SHOW_RESPONSE,
  val,
});
export const sliderDisabled = (val) => ({
  type: SLIDER_DISABLED,
  val,
});
export const thunks = {
  sliderActivity: (value) => {
    return (dispatch, getState) => {
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(updateSlider(value));
      if (value == 8) {
        dispatch(sliderDisabled(false));
      }
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(isMcqShow(false));
      dispatch(setSecondScreen(false));
      dispatch(selectedAnswer(""));
      dispatch(submitAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(wrongAnswer(false));
      dispatch(showResponse(false));
      dispatch(descriptionShow(false));
      dispatch(updateSlider(0));
      dispatch(sliderDisabled(true));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      const { mcqShow, secondScreen } = getState();
      dispatch(common.toggleToastMessage(false));
      EventManager.broadcast("STOP_ALL");
      if (mcqShow) {
        EventManager.broadcast("COMPLETION_SCREEN");
        if (secondScreen) {
          dispatch(common.togglePopup(7));
        } else {
          dispatch(common.togglePopup(5));
        }
      } else {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        dispatch(isMcqShow(true));
      }
      setTimeout(() => {
        EventManager.broadcast("SECONDARY_CLICK");
      }, 100);
      dispatch(common.setResetFocusState(true));
    };
  },
  onContinue: () => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(5));
      dispatch(setSecondScreen(true));
      dispatch(isMcqShow(false));
      dispatch(selectedAnswer(""));
      dispatch(submitAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(wrongAnswer(false));
      dispatch(showResponse(false));
      dispatch(sliderDisabled(true));
      dispatch(updateSlider(0));
    };
  },
  onSubmitButton: () => {
    return (dispatch, getState) => {
      const { selectedAnswerOption, secondScreen } = getState();
      let dataitem;
      if (secondScreen) {
        dataitem = data.secondScreenData.correctAnswer;
      } else {
        dataitem = data.firstScreenData.correctAnswer;
      }
      if (dataitem == selectedAnswerOption) {
        dispatch(submitAnswer(true));
        EventManager.broadcast("POSITIVE_FEEDBACK");
      } else {
        dispatch(wrongAnswer(true));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
      dispatch(submitButtonPressed(true));
    };
  },
};
