import * as actions from "../../app/actions";

export const IS_VISITED = "IS_VISITED";
export const DEMO_ACTION = "DEMO_ACTION";
export const IS_VISTED_BOTH = "IS_VISTED_BOTH";
export const RESET_IS_VISTED_BOTH = "RESET_IS_VISTED_BOTH";
export const RESET_VISITED_NODE = "RESET_VISITED_NODE";
export const UPDATE_VISITED_NODE = "UPDATE_VISITED_NODE";
export const UPDATE_SLIDER = "UPDATE_SLIDER";
export const SCREEN_NUMBER = "SCREEN_NUMBER";
export const BUTTON_ID = "BUTTON_ID";
export const GET_SCREEN_ID = "GET_SCREEN_ID";
export const SLIDER_VISITED = "SLIDER_VISITED";
export const RESET_SLIDER_VISITED = " RESET_SLIDER_VISITED";
export const IS_RESET = "IS_RESET";
export const common = { ...actions };

export const setIsVisited = (value) => {
  return {
    type: IS_VISITED,
    value,
  };
};

export const setScreenID = (value) => {
  return {
    type: GET_SCREEN_ID,
    value,
  };
};
export const setIsVisitedBoth = (value) => {
  return {
    type: IS_VISTED_BOTH,
    value,
  };
};

export const setResetIsVisitedBoth = (value) => {
  return {
    type: RESET_IS_VISTED_BOTH,
  };
};

export const updateVisitedNodes = (node) => ({
  node,
  type: UPDATE_VISITED_NODE,
});

export const resetVisitedNodes = () => ({
  type: RESET_VISITED_NODE,
});

export const setUpdateSlider = (value) => ({
  type: UPDATE_SLIDER,
  value,
});

export const setScreenNumber = (value) => {
  return {
    type: SCREEN_NUMBER,
    value,
  };
};

export const setButtonId = (value) => ({
  type: BUTTON_ID,
  value,
});

export const sliderVisited = (val) => ({
  type: SLIDER_VISITED,
  val,
});
export const resetSliderVisited = () => ({
  type: RESET_SLIDER_VISITED,
});

export const setIsRest = () => ({
  type: IS_RESET,
});

export const thunk = {
  onNextClick: (e) => {
    return (dispatch, getState) => {
      let { getIsVisited } = getState();
      if (getIsVisited.length) {
        dispatch(common.togglePopup(4));
        EventManager.broadcast("COMPLETION_SCREEN");
      } else {
        dispatch(setIsVisited(e.target.id));
        dispatch(setScreenID(""));
        dispatch(setUpdateSlider(1));
        dispatch(resetSliderVisited());
        dispatch(common.setResetFocusState(true));
        dispatch(setButtonId(""));
        EventManager.broadcast("SECONDARY_CLICK");
      }
    };
  },

  sliderActivityValue: (value) => {
    return (dispatch, getState) => {
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(common.updateResetBtnState(false));
      dispatch(setUpdateSlider(value));
      if (!getState().sliderVisitedValue.includes(value)) {
        dispatch(sliderVisited(value));
      }
    };
  },

  submitAnswerHandler: () => {
    return (dispatch, getState) => {
      const { getSelectedOption, getQuestionNumber } = getState();

      const index = getQuestionNumber;
      const answer = data.view[0].questions[index].answer;
      const submitedAns = getSelectedOption;

      if (answer === submitedAns) {
        dispatch(setIsAnswerCorrect(true));
        dispatch(setRadioBtnChecked(true));
        EventManager.broadcast("POSITIVE_FEEDBACK");
      } else {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }

      dispatch(common.toggleToastMessage(true));
    };
  },

  resetFunctions: () => {
    return (dispatch) => {};
  },

  continueHandler: () => {
    return (dispatch, getState) => {
      const { getQuestionNumber } = getState();

      const totalQuestions = data.view[0].questions.length - 1;

      if (getQuestionNumber == totalQuestions) {
        dispatch(thunk.resetFunctions());
      } else {
        dispatch(setQuestionNumber(getQuestionNumber + 1));
      }

      EventManager.broadcast("STOP_ALL");
      setTimeout(() => {
        EventManager.broadcast("SECONDARY_CLICK");
      }, 150);

      dispatch(setIsAnswerCorrect(false));
      dispatch(setRadioBtnChecked(false));
    };
  },

  viewHandler: (id) => {
    return (dispatch, getState) => {
      const { getViewPlayed, visitedNodes } = getState();

      if (id && visitedNodes.indexOf(id) == -1) {
        dispatch(updateVisitedNodes(id));
      }
    };
  },

  resetActivity: () => {
    return (dispatch) => {
      dispatch(thunk.resetFunctions());
      // dispatch(setUpdateSlider(1));
      dispatch(resetSliderVisited());
    };
  },

  resetAllActivity: () => {
    return (dispatch) => {
      dispatch(setScreenNumber({ screen: 1, btn: 0 }));
      dispatch(common.togglePopup(1));
      dispatch(setResetIsVisitedBoth());
      dispatch(common.updateResetBtnState(true));
      dispatch(setResetIsVisitedBoth([]));
      dispatch(setScreenID(""));
      dispatch(setIsRest([]));
      dispatch(setButtonId(""));
      // dispatch(setIsVisited([]));
      dispatch(resetVisitedNodes());
      dispatch(resetSliderVisited());
      dispatch(setUpdateSlider(1));
    };
  },
};
