import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import data from "../data";
export const TOGGLE_POPUP = "TOGGLE_POPUP";
export const CLICKED_VALUE = "CLICKED_VALUE";
export const CITY_BACK_BUTTON = "CITY_BACK_BUTTON";
export const SHOW_FINISH_BUTTON = "SHOW_FINISH_BUTTON";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const COUNT_CLICK = "COUNT_CLICK";
export const CLICKED_BUTTON_VALUE = "CLICKED_BUTTON_VALUE";
export const RADIO_BUTTON_VALUE = "RADIO_BUTTON_VALUE";
export const BUTTON_LABELS = "BUTTON_LABELS";
export const RESET_FINISH_BUTTON = "RESET_FINISH_BUTTON";
export const common = { ...actions };
export const clickedValue = (value) => {
  return {
    value,
    type: CLICKED_VALUE,
  };
};
export const cityBackButton = (value) => {
  return {
    value,
    type: CITY_BACK_BUTTON,
  };
};
export const showFinishButton = (value) => {
  return {
    value,
    type: SHOW_FINISH_BUTTON,
  };
};
export const selectAnswerOption = (id) => {
  return {
    id,
    type: SELECT_ANSWER_OPTION,
  };
};
export const countClick = (value) => {
  return {
    value,
    type: COUNT_CLICK,
  };
};
export const buttonLabels = () => {
  return {
    type: BUTTON_LABELS,
  };
};
export const radioButtonValue = (value) => {
  return {
    type: RADIO_BUTTON_VALUE,
    value,
  };
};

export const clickedButtonValue = (value) => {
  return {
    type: CLICKED_BUTTON_VALUE,
    value,
  };
};
export const resetFinishButton = () => {
  return {
    type: RESET_FINISH_BUTTON,
  };
};
export const thunks = {
  cityBackButton: (value) => {
    return (dispatch, getState) => {
      const reading = value.split("")[0];
      const p = data.reading[getState().radioButtonValue];
      const readingData = p[reading];
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);
      dispatch(common.setResetFocusState(true));
      dispatch(cityBackButton(value));
      if (value) {
        dispatch(showFinishButton(value));
      }
      const length = data.buttonLabels.length;
      for (let i = 0; i < length; i++) {
        if (data.buttonLabels[i].id == value) {
          dispatch(clickedButtonValue(data.buttonLabels[i].value));
          break;
        }
      }
      if (readingData && readingData.imageAltText) {
        dispatch(common.ariaLiveText(readingData.imageAltText));
        setTimeout(() => {
          dispatch(common.ariaLiveText(" "));
        }, 400);
      }
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      const buttoninfo = getState().showFinishButton;
      const count = buttoninfo.length;
      TincanManager.data.percentage = parseInt(
        (count / getState().buttonLabels.length) * 100
      );
      if (TincanManager.data.percentage == 100) {
        TincanManager.data.completed = true;
      }
      TincanManager.saveTincanData();

      if (buttoninfo.length < 6) {
        dispatch(thunks.cityBackButton(""));
        EventManager.broadcast("SECONDARY_CLICK");
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
        dispatch(clickedValue(false));

        dispatch(selectAnswerOption(data.radioButtons[0].id));
        dispatch(radioButtonValue(0));
        dispatch(countClick(1));

        setTimeout(() => {
          dispatch(common.setResetFocusState(true));
        }, 100);
      } else {
        dispatch(common.togglePopup(7));

        EventManager.broadcast("SECONDARY_CLICK");
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 100);
      }
    };
  },
  resetActivity: () => {
    return (dispatch, getState) => {
      dispatch(resetFinishButton());
      dispatch(common.togglePopup(1));
      dispatch(common.updateResetBtnState(true));
      dispatch(clickedValue(false));
      dispatch(selectAnswerOption(data.radioButtons[0].id));
      dispatch(radioButtonValue(0));
      dispatch(common.ariaLiveText(data.resetLiveText));

      dispatch(countClick(1));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
      TincanManager.resetTincanData();
    };
  },
  selectedAnswer: (id) => {
    return (dispatch, getState) => {
      const reading = getState().cityBackButton.split("")[0];

      const counter = getState().countClick;
      const index = data.radioButtons.length;
      dispatch(selectAnswerOption(id));
      const resetBtnState = getState().resetBtnState;
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      for (let i = 0; i < index; i++) {
        if (data.radioButtons[i].id == id) {
          dispatch(radioButtonValue(i));
          break;
        }
      }

      dispatch(countClick(counter + 1));
      const p = data.reading[getState().radioButtonValue];
      const readingData = p[reading];

      dispatch(common.ariaLiveText(readingData.imageAltText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 400);
    };
  },
};
