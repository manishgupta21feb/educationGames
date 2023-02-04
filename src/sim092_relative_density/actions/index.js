import data from "../data";
import * as actions from "../../app/actions";
import { isMacOs, isIOS, isAndroid } from "react-device-detect";
const { togglePopup, ariaLiveText, updateResetBtnState } = actions;

export const common = {
  ...actions,
};

export const INFO_OPEN = "INFO_OPEN";
export const SET_QUESTION = "SET_QUESTION";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const QUESTIONS_DATA = "QUESTIONS_DATA";

export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const SET_START_AGAIN = "SET_START_AGAIN";

export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";

export const IS_MCQ = "IS_MCQ";
export const IS_BALL = "IS_BALL";

export const FLUID_DATA = "FLUID_DATA";
export const FLUID_TYPE = "FLUID_TYPE";
export const FLUID_POURED_COUNT = "FLUID_POURED_COUNT";

export const SPHERE_DATA = "SPHERE_DATA";
export const SPHERE_TYPE = "SPHERE_TYPE";

export const ANIMATION_INDEX = "ANIMATION_INDEX";
export const ANIMATE_END = "ANIMATE_END";
export const IS_RESET = "IS_RESET";
export const GET_OPTION_LIST = "GET_OPTION_LIST";

export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});

export const setIsMcq = (flag) => ({
  type: IS_MCQ,
  flag,
});

export const isReset = (flag) => ({
  type: IS_RESET,
  flag,
});

export const animateEnd = (flag) => ({
  type: ANIMATE_END,
  flag,
});

export const setIsBall = (flag) => ({
  type: IS_BALL,
  flag,
});

export const setFluidData = (arr) => ({
  type: FLUID_DATA,
  arr,
});

export const setFluidType = (color) => ({
  type: FLUID_TYPE,
  color,
});

export const setFluidPouredCount = (count) => ({
  type: FLUID_POURED_COUNT,
  count,
});

export const setSphereData = (arr) => ({
  type: SPHERE_DATA,
  arr,
});

export const setSphereType = (color) => ({
  type: SPHERE_TYPE,
  color,
});

export const setAnimationIndex = (index) => ({
  type: ANIMATION_INDEX,
  index,
});

export const setOptionList = (list) => ({
  type: GET_OPTION_LIST,
  payload: list,
});

export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};

export const thunks = {
  onLoad: () => {
    return (dispatch, getState) => {
      dispatch(
        setOptionList(helper.shuffleArray([...data.equationsData[0].options]))
      );
    };
  },

  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData } = getState();
      const _questionsData = questionsData.map((q) => ({
        ...q,
      }));
      const index = Math.floor(Math.random() * _questionsData.length);
      const question = {
        ..._questionsData.splice(0, 1)[0],
      };
      dispatch(
        setQuestion({
          ...question,
        })
      );
      dispatch(updateQuestionsData([..._questionsData]));
    };
  },

  selectAnswerOption: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState } = getState();
      dispatch(selectAnswerOption(id));
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
    };
  },

  submitAnswer: () => {
    return (dispatch, getState) => {
      const {
        selectedQuestion,
        selectedAnswerOption,
        questionCount: count,
      } = getState();
      if (selectedAnswerOption == selectedQuestion.answer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        // TincanManager.data.percentage = parseInt(
        //   (count / data.equationsData.length) * 100
        // );
        // TincanManager.saveTincanData();
        dispatch(submitAnswer(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(wrongAnswer(true));
      }

      dispatch(submitButtonPressed(true));
    };
  },

  onContinue: () => {
    return (dispatch, getState) => {
      let { isBall } = getState();
      if (!isBall) {
        dispatch(setIsBall(true));
      } else {
        dispatch(setIsMcq(true));
        setIsMcq;
      }
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      if (!getState().isMCQ) {
        dispatch(common.togglePopup(6));
        EventManager.broadcast("COMPLETION_SCREEN");
      } else {
        let { questionCount: count } = getState();
        if (count < data.equationsData.length) {
          dispatch(thunks.setQuestion());
          dispatch(submitAnswer(false));
          dispatch(questionCount(count + 1));
          dispatch(selectAnswerOption(""));
          dispatch(wrongAnswer(false));
          EventManager.broadcast("STOP_ALL");
          dispatch(
            setOptionList(
              helper.shuffleArray(getState().selectedQuestion.options)
            )
          );
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
        } else {
          EventManager.broadcast("STOP_ALL");
          dispatch(togglePopup(7));
          EventManager.broadcast("COMPLETION_SCREEN");
          // TincanManager.data.completed = true;
          // TincanManager.data.percentage = 100;
          // TincanManager.saveTincanData();
        }
      }
    };
  },

  resetActivity: (value) => {
    return (dispatch) => {
      dispatch(updateQuestionsData([...data.equationsData]));
      dispatch(
        setOptionList(helper.shuffleArray([...data.equationsData[0].options]))
      );
      dispatch(thunks.setQuestion());
      dispatch(questionCount(1));
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(animateEnd(false));
      dispatch(setIsMcq(false));
      dispatch(setIsBall(false));
      dispatch(setFluidData([...data.fluid]));
      dispatch(setFluidType(""));
      dispatch(setFluidPouredCount(-1));
      dispatch(setSphereData([...data.sphere]));
      dispatch(setSphereType(""));
      dispatch(setAnimationIndex(-1));

      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 600);
      // TincanManager.resetTincanData();
    };
  },

  makeTestTubeEmpty: (id) => {
    return (dispatch, getState) => {
      let { fluidData } = getState();
      const updatedfluidData = fluidData.map((x) =>
        x.id === id ? { ...x, show: false } : x
      );
      dispatch(setFluidData(updatedfluidData));
    };
  },

  hideButton: (id) => {
    return (dispatch, getState) => {
      let { fluidData } = getState();

      const updatedfluidData = fluidData.map((x) =>
        x.id === id ? { ...x, hideButton: true } : x
      );
      dispatch(setFluidData(updatedfluidData));
    };
  },

  onClickSphere: (id) => {
    return (dispatch, getState) => {
      let { sphereData } = getState();

      let updatedSphereData = sphereData.map((x) =>
        x.show === false ? { ...x, show: true } : x
      );
      updatedSphereData = updatedSphereData.map((x) =>
        x.id === id ? { ...x, show: false, visited: true } : x
      );
      dispatch(setSphereData(updatedSphereData));
      dispatch(setSphereType(id));
    };
  },

  setLiveText: (objectType, count) => {
    return (dispatch, getState) => {
      const { isBall } = getState();

      let liveText = "";

      if (isBall) {
        liveText = data.sphere.filter((e) => e.id == objectType)[0].liveAlt;
      } else {
        liveText = data.fluid.filter((e) => e.id == objectType)[0].liveAlt;
      }
      dispatch(common.ariaLiveAssertive(" "));
      setTimeout(() => {
        dispatch(common.ariaLiveAssertive(liveText));
      }, 100);
      setTimeout(() => {
        dispatch(common.ariaLiveAssertive(" "));
      }, 500);
    };
  },
};
