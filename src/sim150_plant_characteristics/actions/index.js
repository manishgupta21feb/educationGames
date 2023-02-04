import * as actions from "../../app/actions";

export const DEMO_ACTION = "DEMO_ACTION";
export const HOT_SPOTS = "HOT_SPOTS";
export const ASSESSMENT_DATA = "ASSESSMENT_DATA";
export const LOCATION_QUESTION = "LOCATION_QUESTION";
export const CURRENT_PART = "CURRENT_PART";
export const CURRENT_QUESTION = "CURRENT_QUESTION";
export const ACTIVITY_MODE = "ACTIVITY_MODE";
export const CURRENT_QUESTION_LEVEL = "CURRENT_QUESTION_LEVEL";
export const SUBMIT_ACTIVE = "SUBMIT_ACTIVE";
export const USER_SELECTION = "USER_SELECTION";
export const SELECTION_DATA = "SELECTION_DATA";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const NEXT_BUTTON_ENABLE = "NEXT_BUTTON_ENABLE";
export const ASSESSMENT_SELECTION = "ASSESSMENT_SELECTION";
export const SUBMIT_FOCUS = "SUBMIT_FOCUS";
import { helper } from "../helper";
import { cloneDeep } from "lodash";
import data from "../data";

export const common = { ...actions };

export const setUpdateTabsData = (data) => {
  return {
    type: HOT_SPOTS,
    _data: data,
  };
};
export const setAssessmentData = (data) => {
  return {
    type: ASSESSMENT_DATA,
    _data: data,
  };
};

export const locationQuestion = (data) => {
  // Plant part question
  return {
    type: LOCATION_QUESTION,
    _data: data,
  };
};

export const setCurrentPart = (data) => {
  // Assessment question counter
  return {
    type: CURRENT_PART,
    _data: data,
  };
};
export const setCurrentQuestion = (data) => {
  return {
    type: CURRENT_QUESTION,
    _data: data,
  };
};

export const setActivityMode = (data) => {
  return {
    type: ACTIVITY_MODE,
    _data: data,
  };
};

export const setQuestionLevel = (data) => {
  return {
    type: CURRENT_QUESTION_LEVEL,
    _data: data,
  };
};

export const setUserSelection = (data) => {
  return {
    type: USER_SELECTION,
    _data: data,
  };
};
export const setSubmitActive = (data) => {
  return {
    type: SUBMIT_ACTIVE,
    _data: data,
  };
};
export const setSelectionData = (data) => {
  return {
    type: SELECTION_DATA,
    _data: data,
  };
};
export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});
export const isNextButtonEnable = (val) => ({
  type: NEXT_BUTTON_ENABLE,
  val,
});

export const setAssessmentSelection = (data) => {
  return { type: ASSESSMENT_SELECTION, _data: data };
};

export const setSubmitFocus = (data) => {
  return { type: SUBMIT_FOCUS, _data: data };
};
export const thunk = {
  submitAnswer: () => {
    return (dispatch, getState) => {
      const {
        getQuestionLevel,
        getCurrentPart,
        getLocationQuestion,
        getUserSelection,
      } = getState();
      EventManager.broadcast("SECONDARY_CLICK");
      const currentAnswerData =
        getLocationQuestion[getCurrentPart][`level${getQuestionLevel + 1}`];
      dispatch(common.toggleToastMessage(true));
      if (currentAnswerData.answer == getUserSelection) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(updateToastMsg("correct"));
        dispatch(isNextButtonEnable(false));
        dispatch(setSubmitActive(true));
      } else {
        dispatch(common.setResetFocusState(true));
        dispatch(updateToastMsg("incorrect"));
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500); //wrong toast msg
      }
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      const {
        getQuestionLevel,
        getCurrentPart,
        updateTabsData,
        getUserSelection,
        getLocationQuestion,
        getActivityMode,
        getCurrentQuestion,
        getAssessmentData,
      } = getState();
      EventManager.broadcast("STOP_ALL");
      if (getActivityMode != "structure") {
        if (getAssessmentData.length - 1 == getCurrentQuestion) {
          dispatch(common.togglePopup(4));
          EventManager.broadcast("COMPLETION_SCREEN");

          // Tincan//

          TincanManager.data.percentage = 100;
          TincanManager.data.completed = true;
          TincanManager.saveTincanData();
        } else {
          EventManager.broadcast("SECONDARY_CLICK");
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
          dispatch(setCurrentQuestion(getCurrentQuestion + 1));
          dispatch(setAssessmentSelection([]));
          dispatch(isNextButtonEnable(true));
        }
        return;
      }
      // Plant section next handling
      const finish =
        getCurrentPart == getLocationQuestion.length - 1 &&
        getQuestionLevel > 0;

      if (getQuestionLevel == 0) {
        dispatch(setQuestionLevel(getQuestionLevel + 1));

        const _updatedTabs = { ...updateTabsData };
        _updatedTabs[getUserSelection] = {
          ..._updatedTabs[getUserSelection],
          visited: true,
        };
        //
        dispatch(setUpdateTabsData(_updatedTabs));
        //
        dispatch(setSelectionData(new Object()));
        dispatch(setUserSelection(""));
        EventManager.broadcast("SECONDARY_CLICK");
      } else {
        if (finish) {
          /* dispatch(setCurrentPart(0));
          dispatch(setSelectionData({}));
          dispatch(setUserSelection(""));
          dispatch(setQuestionLevel(0)); */
          dispatch(common.togglePopup(3));
          EventManager.broadcast("COMPLETION_SCREEN");
          // Tincan//

          TincanManager.data.percentage = 50;
          TincanManager.data.completed = false;
          TincanManager.saveTincanData();
        } else {
          dispatch(setQuestionLevel(0));
          dispatch(setUserSelection(""));
          dispatch(setCurrentPart(getCurrentPart + 1));
          EventManager.broadcast("SECONDARY_CLICK");
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
        }
      }
      dispatch(isNextButtonEnable(true));
    };
  },
  toggleOption: (id) => {
    return (dispatch, getState) => {
      const { getAssessmentSelection } = getState();

      const _assessmentSelection = [...getAssessmentSelection];

      let index = _assessmentSelection.indexOf(id);
      if (index >= 0) {
        _assessmentSelection.splice(index, 1);
      } else {
        _assessmentSelection.push(id);
      }
      dispatch(setAssessmentSelection(_assessmentSelection));

      let _isActive = _assessmentSelection.length ? false : true;
      dispatch(setSubmitActive(_isActive));
    };
  },

  assessmentSubmit: (e) => {
    return (dispatch, getState) => {
      const { getAssessmentData, getCurrentQuestion, getAssessmentSelection } =
        getState();

      const currentAnswer = getAssessmentData[getCurrentQuestion].answer;
      let isCorrect = false;
      if (currentAnswer.length == getAssessmentSelection.length) {
        isCorrect = currentAnswer.every((_element, _index) => {
          return getAssessmentSelection.includes(_element);
        });
      }
      dispatch(common.toggleToastMessage(true));
      if (isCorrect) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(updateToastMsg("correct"));
        dispatch(isNextButtonEnable(false));
        dispatch(setSubmitActive(true));
      } else {
        dispatch(common.setResetFocusState(true));
        dispatch(updateToastMsg("incorrect"));
        dispatch(setAssessmentSelection(new Array()));
        dispatch(setSubmitActive(true));
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500); //wrong toast msg
      }
    };
  },

  resetActivity: (e) => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(updateToastMsg(""));
      dispatch(isNextButtonEnable(true));
      dispatch(setSubmitActive(true));
      dispatch(common.toggleToastMessage(false));
      dispatch(
        locationQuestion(helper.shuffle(cloneDeep(data.plantQuestions)))
      );
      dispatch(setAssessmentSelection(new Array()));
      dispatch(setSelectionData(new Object()));
      dispatch(setActivityMode("structure"));
      dispatch(setUserSelection(""));
      dispatch(setCurrentQuestion(0));
      dispatch(setQuestionLevel(0));
      dispatch(setCurrentPart(0));
      dispatch(common.updateResetBtnState(true));
      dispatch(setUpdateTabsData(cloneDeep(data.plantData.hotSpots)));

      // Tincan //

      TincanManager.data.percentage = 0;
      TincanManager.data.completed = false;
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
  setSubmitFocus: () => {
    return (dispatch) => {
      dispatch(setSubmitFocus(true));
      setTimeout(() => {
        dispatch(setSubmitFocus(false));
      }, 200);
    };
  },
};
