import * as actions from "../../app/actions";
import data from "../data";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const DEMO_ACTION = "DEMO_ACTION";
export const UPDATE_MCQ_DATA = "UPDATE_MCQ_DATA";
export const SET_QUESTION = "SET_QUESTION";
export const SET_LIVING_ORGANISM = "SET_LIVING_ORGANISM";
export const SET_CLASSIFY = "SET_CLASSIFY";
export const SET_ENERGY = "SET_ENERGY";
export const PARTIALLY_CORRECT = "PARTIALLY_CORRECT";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const RESET_CORRECT_ANSWER = "RESET_CORRECT_ANSWER";
export const RESET_INCORRECT_ANSWER = "RESET_INCORRECT_ANSWER";
export const CORRECT_ANSWER_PERFORMED = "CORRECT_ANSWER_PERFORMED";
export const INCORRECT_ANSWER_PERFORMED = "INCORRECT_ANSWER_PERFORMED";
export const common = { ...actions };
export const setQuestion = (value) => {
  return {
    type: SET_QUESTION,
    value,
  };
};
export const questionCount = (value) => {
  return {
    type: QUESTIONS_COUNT,
    value,
  };
};
export const updateMcqData = (value) => {
  return {
    value,
    type: UPDATE_MCQ_DATA,
  };
};
export const setLivingOrganism = (value) => {
  return {
    value,
    type: SET_LIVING_ORGANISM,
  };
};
export const setClassify = (value) => {
  return {
    value,
    type: SET_CLASSIFY,
  };
};
export const setEnergy = (value) => {
  return {
    value,
    type: SET_ENERGY,
  };
};
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
export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});
export const correctAnswerPerformed = (value) => ({
  value,
  type: CORRECT_ANSWER_PERFORMED,
});
export const incorrectAnswerPerformed = (value) => ({
  value,
  type: INCORRECT_ANSWER_PERFORMED,
});
export const resetCorrectAnswer = () => ({
  type: RESET_CORRECT_ANSWER,
});
export const resetIncorrectAnswer = () => ({
  type: RESET_INCORRECT_ANSWER,
});
export const thunks = {
  onSetMcqData: () => {
    return (dispatch, getState) => {
      const array = getState().updateMcqData;
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

      dispatch(updateMcqData(array));
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      const { setQuestionValue, questionCountValue } = getState();
      dispatch(common.toggleToastMessage(false));
      if (questionCountValue == data.mcqData.length) {
        dispatch(common.togglePopup(7));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        }, 300);
      } else {
        dispatch(setQuestion(setQuestionValue + 1));
        dispatch(questionCount(questionCountValue + 1));
        dispatch(setLivingOrganism({}));
        dispatch(setClassify({}));
        dispatch(setEnergy({}));
        setTimeout(() => {
          dispatch(common.setResetFocusState(true));
        }, 100);
      }
      dispatch(submitAnswer(false));
      dispatch(resetCorrectAnswer());
      dispatch(resetIncorrectAnswer());
      dispatch(wrongAnswer(false));
      dispatch(partiallyCorrect(false));
      dispatch(submitButtonPressed(false));
      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 150);
    };
  },
  onSubmitButton: () => {
    return (dispatch, getState) => {
      const {
        updateMcqData,
        setQuestionValue,
        setLivingOrganismValue,
        setClassifyValue,
        setEnergyValue,
        correctAnswer,
        questionCountValue,
      } = getState();
      const totalLength = data.mcqData.length;
      const correctLivingAnswer = updateMcqData[setQuestionValue].correctLiving;
      const correctConsumerAnswer =
        updateMcqData[setQuestionValue].correctConsumer;
      const correctEnergyAnswer = updateMcqData[setQuestionValue].correctEnergy;
      if (!correctAnswer.includes(data.livingOrganismHeading)) {
        if (correctLivingAnswer == setLivingOrganismValue.value) {
          dispatch(correctAnswerPerformed(data.livingOrganismHeading));
        } else {
          dispatch(incorrectAnswerPerformed(data.livingOrganismHeading));
          // setTimeout(() => {
          dispatch(setLivingOrganism({}));
          // }, 1000);
        }
      }
      if (!correctAnswer.includes(data.classifyHeading)) {
        if (correctConsumerAnswer == setClassifyValue.value) {
          dispatch(correctAnswerPerformed(data.classifyHeading));
        } else {
          dispatch(incorrectAnswerPerformed(data.classifyHeading));
          // setTimeout(() => {
          dispatch(setClassify({}));
          // }, 1000);
        }
      }
      if (!correctAnswer.includes(data.energyHeading)) {
        if (correctEnergyAnswer == setEnergyValue.value) {
          dispatch(correctAnswerPerformed(data.energyHeading));
        } else {
          dispatch(incorrectAnswerPerformed(data.energyHeading));
          // setTimeout(() => {
          dispatch(setEnergy({}));
          // }, 1000);
        }
      }
      if (getState().correctAnswer.length == 3) {
        TincanManager.data.percentage = parseInt(
          (questionCountValue / totalLength) * 100
        );
        if (TincanManager.data.percentage == 100) {
          TincanManager.data.completed = true;
        }
        TincanManager.saveTincanData();
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 100);
        dispatch(submitAnswer(true));
      } else if (getState().correctAnswer.length == 0) {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 100);
        dispatch(wrongAnswer(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 100);
        dispatch(partiallyCorrect(true));
      }
      dispatch(submitButtonPressed(true));
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(true));
      dispatch(updateMcqData([...data.mcqData]));
      dispatch(thunks.onSetMcqData());
      dispatch(submitAnswer(false));
      dispatch(wrongAnswer(false));
      dispatch(partiallyCorrect(false));
      dispatch(submitButtonPressed(false));
      dispatch(setQuestion(0));
      dispatch(questionCount(1));
      dispatch(setLivingOrganism({}));
      dispatch(setClassify({}));
      dispatch(setEnergy({}));
      dispatch(resetCorrectAnswer());
      dispatch(resetIncorrectAnswer());
      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },
};
