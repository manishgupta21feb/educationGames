import data from "../data";
import * as actions from "../../app/actions";

export const SET_QUESTION = "SET_QUESTION";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";

export const INFO_OPEN = "INFO_OPEN";
export const ACTIVITY_FINISH = "ACTIVITY_FINISH";
export const START_SIMULATION = "START_SIMULATION";

export const SET_START_AGAIN = "SET_START_AGAIN";
export const SHOW_NEXT_BUTTON = "SHOW_NEXT_BUTTON";
export const SET_AUDIO_STOPPED = "SET_AUDIO_STOPPED";
export const DISABLE_SHAPE_RADIO = "DISABLE_SHAPE_RADIO";
export const SET_TOAST_MESSAGE_TYPE = "SET_TOAST_MESSAGE_TYPE";
export const DISABLE_LONE_PAIR_RADIO = "DISABLE_LONE_PAIR_RADIO";
export const SET_SOUND_MANAGER_SOURCES = "SET_SOUND_MANAGER_SOURCES";
export const SELECT_SHAPE_ANSWER_OPTION = "SELECT_SHAPE_ANSWER_OPTION";
export const SELECT_LONEPAIR_ANSWER_OPTION = "SELECT_LONEPAIR_ANSWER_OPTION";

const {
  togglePopup,
  ariaLiveText,
  setResetFocusState,
  toggleToastMessage,
  updateResetBtnState,
} = actions;

export const common = { ...actions };
export const showNextBtn = (val) => ({ type: SHOW_NEXT_BUTTON, val });
export const submitAnswer = (answer) => ({ type: SUBMIT_ANSWER, answer });
export const questionCount = (count) => ({ type: QUESTIONS_COUNT, count });
export const setQuestion = (question) => ({ type: SET_QUESTION, question });
export const activityFinish = (value) => ({ type: ACTIVITY_FINISH, value });
export const updateQuestionsData = (data) => ({ type: QUESTIONS_DATA, data });
export const startSimulation = (value) => ({ type: START_SIMULATION, value });
export const disableShapeRadio = (val) => ({ type: DISABLE_SHAPE_RADIO, val });

export const selectShapeAnswerOption = (id) => ({
  id,
  type: SELECT_SHAPE_ANSWER_OPTION,
});

export const selectLonePairAnswerOption = (id) => ({
  id,
  type: SELECT_LONEPAIR_ANSWER_OPTION,
});

export const setAudioStopped = (stopped) => ({
  stopped,
  type: SET_AUDIO_STOPPED,
});

export const setToastMessageType = (toastType) => ({
  toastType,
  type: SET_TOAST_MESSAGE_TYPE,
});

export const disableLonePairRadio = (val) => ({
  type: DISABLE_LONE_PAIR_RADIO,
  val,
});

export const thunk = {
  toggleToastMessage: (id) => (dispatch) => {
    dispatch(toggleToastMessage(id));
    dispatch(setToastMessageType(""));
  },

  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData } = getState();
      const _questionsData = questionsData.map((q) => ({ ...q }));
      const index = Math.floor(Math.random() * _questionsData.length);
      const question = { ..._questionsData.splice(index, 1)[0] };
      dispatch(setQuestion({ ...question }));
      dispatch(updateQuestionsData([..._questionsData]));
    };
  },

  selectShapeAnswerOption: (id) => {
    return (dispatch, getState) => {
      const resetBtnState = getState().resetBtnState;
      dispatch(selectShapeAnswerOption(id));
      dispatch(toggleToastMessage(false));
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
    };
  },

  selectLonePairAnswerOption: (id) => {
    return (dispatch, getState) => {
      const resetBtnState = getState().resetBtnState;
      dispatch(selectLonePairAnswerOption(id));
      dispatch(toggleToastMessage(false));
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
    };
  },

  submitAnswer: (answer) => {
    return (dispatch, getState) => {
      const {
        selectedQuestion,
        selectedShapeAnswerOption,
        selectedLonePairAnswerOption,
        questionCount: count,
      } = getState();
      const selectedAnswer = [];
      selectedAnswer.push(selectedShapeAnswerOption);
      selectedAnswer.push(selectedLonePairAnswerOption);

      if (
        JSON.stringify(selectedQuestion.answer) ==
        JSON.stringify(selectedAnswer)
      ) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        TincanManager.data.percentage = parseInt(
          (count / data.equationsData.length) * 100
        );
        TincanManager.saveTincanData();

        dispatch(setToastMessageType("correct"));
        dispatch(showNextBtn(true));
      } else if (
        selectedQuestion.answer.indexOf(selectedShapeAnswerOption) >= 0 &&
        selectedQuestion.answer.indexOf(selectedLonePairAnswerOption) < 0
      ) {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(setToastMessageType("partialIncorrect2"));
        dispatch(disableShapeRadio(true));
      } else if (
        selectedQuestion.answer.indexOf(selectedShapeAnswerOption) < 0 &&
        selectedQuestion.answer.indexOf(selectedLonePairAnswerOption) >= 0
      ) {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);

        dispatch(setToastMessageType("partialIncorrect1"));
        dispatch(disableLonePairRadio(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);

        dispatch(setToastMessageType("incorrect"));
      }

      dispatch(toggleToastMessage(true));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      let { questionCount: count } = getState();
      if (count < data.equationsData.length) {
        dispatch(thunk.setQuestion());
        dispatch(showNextBtn(false));
        dispatch(disableShapeRadio(false));
        dispatch(disableLonePairRadio(false));
        dispatch(questionCount(count + 1));

        dispatch(selectShapeAnswerOption(""));
        dispatch(selectLonePairAnswerOption(""));

        dispatch(setResetFocusState(true));
      } else {
        dispatch(togglePopup(7));
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
        EventManager.broadcast("COMPLETION_SCREEN");
      }
    };
  },

  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(updateResetBtnState(true));
      dispatch(updateQuestionsData([...data.equationsData]));

      dispatch(thunk.setQuestion());
      dispatch(questionCount(1));
      dispatch(showNextBtn(false));
      dispatch(selectShapeAnswerOption(""));
      dispatch(selectLonePairAnswerOption(""));
      dispatch(submitAnswer(false));

      dispatch(disableShapeRadio(false));
      dispatch(disableLonePairRadio(false));

      value && dispatch(togglePopup(3));
      dispatch(ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
      setTimeout(() => {
        dispatch(togglePopup(1));
      }, 100);
      TincanManager.resetTincanData();
    };
  },
};
