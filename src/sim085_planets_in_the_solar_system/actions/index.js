import * as actions from "../../app/actions";

export const DEMO_ACTION = "DEMO_ACTION";
export const CLUE_CARD_INDEX = "CLUE_CARD_INDEX";
export const CLICKED_BUTTON_VALUE = "CLICKED_BUTTON_VALUE";
export const INPUT_FEILD_DISABLE = "INPUT_FEILD_DISABLE";
export const INPUT_FEILD_VALUE = "INPUT_FEILD_VALUE";
export const INPUT_FEILD_ID = "INPUT_FEILD_ID";
export const PARTIALLY_CORRECT = "PARTIALLY_CORRECT";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const SHOW_FINISH_BUTTON = "SHOW_FINISH_BUTTON";
export const RESET_FINISH_BUTTON = "RESET_FINISH_BUTTON";
export const QUESTION_COUNT = " QUESTION_COUNT";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const UPDATE_CLUE_DATA = "UPDATE_CLUE_DATA";
export const CLUE_COUNT = "CLUE_COUNT";
export const HIGHLIGHTED_VALUE = "HIGHLIGHTED_VALUE";
export const common = { ...actions };

import data from "../data";
export const highlightedValue = (value) => {
  return {
    value,
    type: HIGHLIGHTED_VALUE,
  };
};

export const clueCardIndex = (value) => {
  return {
    value,
    type: CLUE_CARD_INDEX,
  };
};
export const updateClueCardData = (value) => {
  return {
    value,
    type: UPDATE_CLUE_DATA,
  };
};
export const clickedButtonValue = (value) => {
  return {
    value,
    type: CLICKED_BUTTON_VALUE,
  };
};
export const inputFeildDisable = (value) => ({
  type: INPUT_FEILD_DISABLE,
  value,
});
export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});
export const inputFeildValue = (value) => ({
  type: INPUT_FEILD_VALUE,
  value,
});
export const inputFeildId = (value) => ({
  type: INPUT_FEILD_ID,
  value,
});
export const partiallyCorrect = (pressed) => ({
  pressed,
  type: PARTIALLY_CORRECT,
});
export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});
export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});
export const showFinishButton = (value) => {
  return {
    value,
    type: SHOW_FINISH_BUTTON,
  };
};
export const resetFinishButton = () => {
  return {
    type: RESET_FINISH_BUTTON,
  };
};
export const questionCount = (value) => {
  return {
    value,
    type: QUESTION_COUNT,
  };
};
export const clueCount = (value) => {
  return {
    value,
    type: CLUE_COUNT,
  };
};
export const thunks = {
  inputFeildId: (value) => {
    return (dispatch, getState) => {
      dispatch(common.updateResetBtnState(false));
      dispatch(common.toggleToastMessage(false));
      if (getState().inputFeildValue) {
        dispatch(inputFeildId(value));
      } else {
        dispatch(inputFeildId(""));
      }
    };
  },

  onSetClueData: () => {
    return (dispatch, getState) => {
      const array = getState().updateClueCardData;
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      dispatch(updateClueCardData(array));
    };
  },
  onClickValue: (value) => {
    return (dispatch, getState) => {
      dispatch(clickedButtonValue(value));
      dispatch(inputFeildDisable(false));
      dispatch(common.updateResetBtnState(false));
      dispatch(common.toggleToastMessage(false));
      EventManager.broadcast("STOP_ALL");
    };
  },

  onCheckButton: () => {
    return (dispatch, getState) => {
      const { updateClueCardData, clueCardCount } = getState();
      const index = getState().clueCardIndex;
      const dataset = updateClueCardData[index].clueButton;
      const count = getState().questionCount;
      let indexValue;
      const clickedValue = data.planetName.find(
        (items) => items.id == getState().clickedButtonValue
      );
      const id = getState().inputFeildId;
      const inputValue = getState().inputFeildValue;
      const dataid = data.typingPlanet;
      for (let i = 0; i < dataid.length; i++) {
        if (id == dataid[i].id) {
          indexValue = i;
          break;
        }
      }
      if (getState().questionCount > data.planetName.length) {
        EventManager.broadcast("STOP_ALL");
        dispatch(submitAnswer(false));
        dispatch(partiallyCorrect(false));
        dispatch(wrongAnswer(false));
        dispatch(common.togglePopup(7));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 300);
      } else {
        if (
          dataset ==
            (clickedValue.text.toLowerCase() && inputValue.toLowerCase()) &&
          inputValue.toLowerCase() ==
            dataid[indexValue].altText.toLowerCase() &&
          clickedValue.text.toLowerCase() == inputValue.toLowerCase()
        ) {
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 100);
          TincanManager.data.percentage = parseInt(
            (clueCardCount / dataid.length) * 100
          );
          if (TincanManager.data.percentage == 100) {
            TincanManager.data.completed = true;
          }
          TincanManager.saveTincanData();
          dispatch(highlightedValue(id));
          dispatch(submitAnswer(true));
          dispatch(partiallyCorrect(false));
          dispatch(wrongAnswer(false));
          dispatch(clickedButtonValue(""));
          dispatch(showFinishButton(id));
          dispatch(showFinishButton(clickedValue.id));
          var foc = (document.getElementById(id).value =
            dataid[indexValue].altText);
          dispatch(inputFeildValue(foc));
          if (count == data.planetName.length) {
            dispatch(questionCount(count + 1));
          } else {
            dispatch(questionCount(count + 1));
            dispatch(clueCount(clueCardCount + 1));
            // dispatch(inputFeildDisable(true));
            dispatch(clueCardIndex(index + 1));

            dispatch(inputFeildId(""));
            dispatch(inputFeildValue(""));
          }
        } else {
          if (
            dataset != clickedValue.text.toLowerCase() &&
            inputValue.toLowerCase() == dataid[indexValue].altText.toLowerCase()
          ) {
            dispatch(clickedButtonValue(""));
            dispatch(partiallyCorrect(true));
            dispatch(submitAnswer(false));
            dispatch(wrongAnswer(false));

            if (dataset == inputValue.toLowerCase()) {
              var focval = (document.getElementById(id).value =
                dataid[indexValue].altText);
              dispatch(inputFeildDisable(true));
            } else {
              var focval = (document.getElementById(id).value = "");
              dispatch(inputFeildId(""));
              dispatch(wrongAnswer(true));
              // dispatch(inputFeildDisable(true));
              dispatch(partiallyCorrect(false));
              dispatch(submitAnswer(false));
            }

            dispatch(inputFeildValue(focval));
          } else {
            if (dataset == clickedValue.text.toLowerCase()) {
              dispatch(clickedButtonValue(clickedValue.id));
              dispatch(partiallyCorrect(true));
              dispatch(submitAnswer(false));
              dispatch(wrongAnswer(false));
            } else {
              dispatch(clickedButtonValue(""));
              dispatch(wrongAnswer(true));
              // dispatch(inputFeildDisable(true));
              dispatch(partiallyCorrect(false));
              dispatch(submitAnswer(false));
            }

            var values = (document.getElementById(id).value = "");
            dispatch(inputFeildId(""));
            dispatch(inputFeildValue(values));
          }
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 100);
        }
      }
      setTimeout(() => {
        EventManager.broadcast("SECONDARY_CLICK");
      }, 150);

      dispatch(common.toggleToastMessage(true));
      dispatch(submitButtonPressed(true));
      dispatch(common.setResetFocusState(true));
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(common.toggleToastMessage(false));
      dispatch(clickedButtonValue(""));
      dispatch(clueCardIndex(0));
      dispatch(highlightedValue(""));
      // dispatch(inputFeildDisable(true));
      dispatch(resetFinishButton());
      dispatch(questionCount(1));
      dispatch(clueCount(1));
      dispatch(submitAnswer(false));
      dispatch(submitButtonPressed(false));
      dispatch(partiallyCorrect(false));
      dispatch(wrongAnswer(false));
      const dataid = data.typingPlanet;
      for (let i = 0; i < dataid.length; i++) {
        var value = (document.getElementById(dataid[i].id).value = "");
        dispatch(inputFeildValue(value));
      }
      dispatch(inputFeildId(""));
      dispatch(updateClueCardData([...data.clueCards]));
      dispatch(thunks.onSetClueData());
      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
      dispatch(common.updateResetBtnState(true));
      TincanManager.resetTincanData();
    };
  },
};
