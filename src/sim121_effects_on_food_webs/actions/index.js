
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import data from "../data/data.en";

export const SET_QUESTION = "SET_QUESTION";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const DEMO_ACTION = "DEMO_ACTION";
export const IS_MCQ_SHOW = "IS_MCQ_SHOW";
export const SECOND_SCREEN = "SECOND_SCREEN";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const PARTIALLY_CORRECT = "PARTIALLY_CORRECT";

export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const RESET_VISITED_HOTSPOTS = "RESET_VISITED_HOTSPOTS";
export const UPDATE_VISITED_HOTSPOTS = "UPDATE_VISITED_HOTSPOTS";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const RESET_CORRECT_ANSWER = "RESET_CORRECT_ANSWER";
export const UPDATE_CHART = "UPDATE_CHART";
export const DROP_DOWN_ONE = "DROP_DOWN_ONE";
export const DROP_DOWN_TWO = "DROP_DOWN_TWO";
export const DROP_DOWN_THREE = "DROP_DOWN_THREE";
export const ANIMATION_END = "ANIMATION_END";


export const common = { ...actions };

export const setAnimationEnd = (value) => {
  return {
    value,
    type: ANIMATION_END,
  };
};

export const isMcqShow = (value) => {
  return {
    value,
    type: IS_MCQ_SHOW,
  };
};
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

export const setSecondScreen = (id) => ({
  id,
  type: SECOND_SCREEN,
});
////

export const setWrongAnswer = (id) => ({
  id,
  type: WRONG_ANSWER,
});
export const setSubmitAnswer = (id) => ({
  id,
  type: SUBMIT_ANSWER,
});
export const setPartiallyCorrect = (id) => ({
  id,
  type: PARTIALLY_CORRECT,
});
export const setSubmitButtonPressed = (id) => ({
  id,
  type: SUBMIT_BUTTON_PRESSED,
});
export const selectHotspot = (id) => {
  return {
    type: SELECT_HOTSPOT,
    id,
  };
};
export const setCorrectAnswer = (id) => {
  return {
    type: CORRECT_ANSWER,
    id,
  };
};
export const updateVisitedHotspots = (hotspot) => ({
  hotspot,
  type: UPDATE_VISITED_HOTSPOTS,
});

export const resetVisitedHotspots = () => ({
  type: RESET_VISITED_HOTSPOTS,
});
export const setUpdateChart = (chart) => ({
  chart,
  type: UPDATE_CHART,
});

export const setDropDownOne = (dropone) => ({
  dropone,
  type: DROP_DOWN_ONE,
});
export const setDropDownTwo = (droptwo) => ({
  droptwo,
  type: DROP_DOWN_TWO,
});

export const setDropDownThree = (dropthree) => ({
  dropthree,
  type: DROP_DOWN_THREE,
});

export const setResetCorrectAnswer = () => ({
  type: RESET_CORRECT_ANSWER,
});

export const thunks = {
  clickButton: (value) => {
    return (dispatch, getState) => {
      dispatch(common.toggleToastMessage(false));
      const array = getState().visitedHotspots;
      const index = array.indexOf(value);
      if (index > -1) {
        array.splice(index, 1);
      } else if (!getState().correctAnswer.includes(value)) {
        dispatch(updateVisitedHotspots(value));
      }
      const { visitedHotspots, setQuestionValue, correctAnswer } = getState();
      if (
        visitedHotspots.length + correctAnswer.length ==
        data.mcqData[setQuestionValue].correctAnswer.length
      ) {
        dispatch(selectHotspot(true));
      }

    
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      const { mcqShow, secondScreen, setQuestionValue, questionCountValue } =
        getState();
      
      const dataLength = secondScreen
        ? data.secondScreenData.length
        : data.mcqData.length;
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));
      if (mcqShow) {
        if (questionCountValue == dataLength) {
          if (secondScreen) {
            dispatch(common.togglePopup(8));
          } else {
            dispatch(common.togglePopup(7));
          }
         
          EventManager.broadcast("COMPLETION_SCREEN");
        } else {
          
          dispatch(setUpdateChart(false));
          dispatch(setQuestion(setQuestionValue + 1));
          dispatch(questionCount(questionCountValue + 1));
          dispatch(selectHotspot(false));
          dispatch(resetVisitedHotspots());
          dispatch(setResetCorrectAnswer());
        }
      } else {
      
        dispatch(isMcqShow(true));
      }
     
      dispatch(setSubmitAnswer(false));
      dispatch(common.toggleToastMessage(false));
      dispatch(selectHotspot(false));
      dispatch(setSubmitAnswer(false));
      dispatch(setPartiallyCorrect(false));
      dispatch(setWrongAnswer(false));
      dispatch(setDropDownOne({}));
      dispatch(setDropDownTwo({}));
      dispatch(setDropDownThree({}));
    };
  },
  onContinue: () => {
    return (dispatch, getState) => {
     
      dispatch(setSecondScreen(true));
      dispatch(isMcqShow(false));
      dispatch(setQuestion(0));
      dispatch(questionCount(1));
      dispatch(common.togglePopup(7));
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));
     
      TincanManager.data.percentage = 50;
      TincanManager.saveTincanData();
    };
  },
  mcqButtonClicked: () => {
    return (dispatch, getState) => {
      const { secondScreen,setQuestionValue,questionCountValue } = getState(); 
  
      if (secondScreen) {
        const liveText = data.graphData[setQuestionValue].graphliveText;
       
        dispatch(setUpdateChart(true));
        dispatch(setAnimationEnd(true));

        dispatch(common.setResetFocusState(true));
        dispatch(common.ariaLiveAssertive(" "));
        setTimeout(() => {
          dispatch(common.ariaLiveAssertive(liveText));
        }, 100);
        setTimeout(() => {
          dispatch(common.ariaLiveAssertive(" "));
        }, 500);
        TincanManager.data.percentage = parseInt(
         50 + ( (questionCountValue/ 2) * 50)
        );
        if (TincanManager.data.percentage == 100) {
          TincanManager.data.completed = true;
        }
        TincanManager.saveTincanData();
      } else {
        TincanManager.data.percentage = parseInt(
          (questionCountValue/ 3) * 50
        );
        TincanManager.saveTincanData();
        dispatch(thunks.onSubmitButton());
      }
    };
  },
  onSubmitButton: () => {
    return (dispatch, getState) => {
      const { visitedHotspots, setQuestionValue, questionCountValue } =
        getState();
      let answer;
      if (questionCountValue == 2) {
        answer = data.mcqData[setQuestionValue].correctAnswer2;
      } else {
        answer = data.mcqData[setQuestionValue].correctAnswer;
      }

      for (let i = 0; i < visitedHotspots.length; i++) {
        if (answer.includes(visitedHotspots[i])) {
          dispatch(setCorrectAnswer(visitedHotspots[i]));
        }
      }
      let result = visitedHotspots.every(
        (value) => answer.indexOf(value) != -1
      );
      let partial = visitedHotspots.some(
        (value) => answer.indexOf(value) != -1
      );

      if (result) {
        dispatch(setSubmitAnswer(true));

        EventManager.broadcast("POSITIVE_FEEDBACK");
      } else if (partial) {
        if (questionCountValue == 2) {
          dispatch(setSubmitAnswer(true));
          EventManager.broadcast("POSITIVE_FEEDBACK");
        } else {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
          dispatch(selectHotspot(false));
          dispatch(setPartiallyCorrect(true));
        }
      } else {
        EventManager.broadcast("NEGATIVE_FEEDBACK");
        dispatch(selectHotspot(false));
        dispatch(setWrongAnswer(true));
      }
      dispatch(setSubmitButtonPressed(true));
      dispatch(common.toggleToastMessage(true));
      dispatch(resetVisitedHotspots());
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      dispatch(common.togglePopup(1));
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(true));
      dispatch(isMcqShow(false));
      dispatch(setQuestion(0));
      dispatch(questionCount(1));
      dispatch(setSecondScreen(false));
      dispatch(setWrongAnswer(false));
      dispatch(setSubmitAnswer(false));
      dispatch(setPartiallyCorrect(false));
      dispatch(setSubmitButtonPressed(false));
      dispatch(selectHotspot(false));
      dispatch(setResetCorrectAnswer());
      dispatch(resetVisitedHotspots());
      dispatch(setUpdateChart(false));
      dispatch(setDropDownOne({}));
      dispatch(setDropDownTwo({}));
      dispatch(setDropDownThree({}));
      TincanManager.resetTincanData();
      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
    };
  },
};
