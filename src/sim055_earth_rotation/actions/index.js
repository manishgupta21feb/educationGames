import * as actions from "../../app/actions";
import data from '../data';

export const VIDEO_END = "VIDEO_END";
export const SELECT_OPTION = "SELECT_OPTION";
export const CHECKED_OPTION = "CHECKED_OPTION";
export const IS_ANSWER_CORRECT = "IS_ANSWER_CORRECT";
export const QUESTION_NUMBER = "QUESTION_NUMBER"; 
export const LEVEL_ONE = "LEVEL_ONE"; 
export const UPDATE_SLIDER = "UPDATE_SLIDER"; 
export const LEVEL = "LEVEL"; 
export const VIEW_PLAYED = "VIEW_PLAYED"; 

export const common = { ...actions };

export const setVideoEnd = (value) => {
  return {
    type: VIDEO_END,
    value
  }
}

export const setSelectedOption = (value) => {
  return {
    type: SELECT_OPTION,
    value,
  };
};

export const setRadioBtnChecked = (value) => {
  return {
    type: CHECKED_OPTION,
    value,
  };
};

export const setIsAnswerCorrect = (value) => {
  return {
    type: IS_ANSWER_CORRECT,
    value,
  };
};

export const setQuestionNumber = (value) => {
  return {
    type: QUESTION_NUMBER,
    value,
  };
};

export const setLevelOneComplete = (value) => {
  return {
    type: LEVEL_ONE,
    value,
  };
};

export const setUpdateSlider = (value) => ({
  type: UPDATE_SLIDER,
  value,
})

export const setLevel = (value) => ({
  type: LEVEL,
  value,
})

export const setViewPlayed = (value) => ({
  type: VIEW_PLAYED,
  value,
});

export const thunk = {
  submitAnswerHandler: () => {
    return (dispatch, getState) => {
      const {
        getSelectedOption,
        getQuestionNumber,
      } = getState();

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
    return(dispatch) => {
      dispatch(setLevelOneComplete(true));
      dispatch(setVideoEnd(false));
      dispatch(setSelectedOption(""));
      dispatch(setRadioBtnChecked(false));
      dispatch(setQuestionNumber(0));
      dispatch(setLevel(0));
    }
  },
    
  continueHandler: () => {
    return (dispatch, getState) => {
      const {
        getQuestionNumber
      } = getState();

      const totalQuestions = data.view[0].questions.length - 1;

      if(getQuestionNumber == totalQuestions){
        dispatch(thunk.resetFunctions())
      }else {
        dispatch(setQuestionNumber(getQuestionNumber + 1));
        dispatch(setLevelOneComplete(false));
      }
      
      EventManager.broadcast("STOP_ALL");
      setTimeout(() => {
        EventManager.broadcast("SECONDARY_CLICK");
      }, 150)
      
      dispatch(setIsAnswerCorrect(false));
      dispatch(setRadioBtnChecked(false));
    };
  },
  
  viewHandler: () => {
    return(dispatch, getState) => {
      const {
        getViewPlayed
      } = getState();
      
      if(getViewPlayed.length == 2){
        TincanManager.data.percentage = 100;
        TincanManager.data.completed = true;
        TincanManager.saveTincanData();
      }
    }
  },

  resetActivity: () => {
    return(dispatch) => {
      dispatch(thunk.resetFunctions());
      dispatch(setIsAnswerCorrect(false));
      dispatch(setUpdateSlider(0));
    }
  },
} 