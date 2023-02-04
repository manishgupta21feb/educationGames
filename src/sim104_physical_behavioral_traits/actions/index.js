import * as actions from "../../app/actions";
import data from "../data/";

export const VISITED_PAGE = "VISITED_PAGE";
export const SCREEN_VAL = "SCREEN_VAL";
export const SELECTED_TRAIT = "SELECTED_TRAIT";
export const UPDATED_QUESTION = "UPDATED_QUESTION";
export const SET_QUESTION = "SET_QUESTION";
export const TOTAL_QUESTION_COUNT = "TOTAL_QUESTION_COUNT";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const RADIO_OPTION = "RADIO_OPTION";
export const RESET_TRAITS = "RESET_TRAITS";

export const common = { ...actions };

export const setRestTrait = () => {
  return {
    type: RESET_TRAITS,
  };
};

export const setRadioOption = (val) => {
  return {
    val,
    type: RADIO_OPTION,
  };
};
export const setCount = (val) => {
  return {
    val,
    type: TOTAL_QUESTION_COUNT,
  };
};

export const setVisitedPage = (val) => {
  return {
    val,
    type: VISITED_PAGE,
  };
};

export const setScreenVal = (val) => {
  return {
    val,
    type: SCREEN_VAL,
  };
};

export const setTraits = (val) => {
  return {
    val,
    type: SELECTED_TRAIT,
  };
};

export const setUpdateQuestionData = (questions) => {
  return {
    questions,
    type: UPDATED_QUESTION,
  };
};

export const setCurrQuestion = (val) => {
  return {
    val,
    type: SET_QUESTION,
  };
};

export const setCorrectAnswer = (val) => {
  return {
    val,
    type: CORRECT_ANSWER,
  };
};

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
  onHotSpotClick: (id) => {
    return (dispatch, getState) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(setScreenVal("one"));
      dispatch(setTraits(id));

      dispatch(setVisitedPage(id));
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));
      const { selectedTrait, count } = getState();

      let suffeledArray = helper.shuffleArray(selectedTrait[0].mcqQuestions);

      selectedTrait[0].mcqQuestions = suffeledArray;
      dispatch(setUpdateQuestionData(selectedTrait));
      dispatch(thunks.setQuestion());
    };
  },
  setQuestion: () => {
    return (dispatch, getState) => {
      const { selectedQuestion, selectedTrait, count } = getState();
      if (count == 0) {
        dispatch(setCount(1));
      }

      dispatch(setCurrQuestion(selectedTrait[0].mcqQuestions[count - 1]));
      dispatch(setUpdateQuestionData(selectedTrait));
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      const { count, visitedPage } = getState();

      dispatch(setRadioOption(""));
      dispatch(setCorrectAnswer(false));
      dispatch(common.setResetFocusState(true));
      if (count == 8 && visitedPage.length == 1) {
        dispatch(setCount(1));
        dispatch(setScreenVal(""));
        dispatch(setRestTrait());
        dispatch(thunks.setQuestion());
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        });
      } else if (count == 8 && visitedPage.length == 2) {
        dispatch(common.togglePopup(3));

        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        });
      } else {
        dispatch(setCount(count + 1));
        dispatch(thunks.setQuestion());
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        });
      }
    };
  },

  submitAnswer: () => {
    return (dispatch, getState) => {
      const { radioOption, currectQuestion, selectedTrait } = getState();

      if (radioOption == currectQuestion.answer) {
        dispatch(setCorrectAnswer(true));

        if (selectedTrait[0].id == "physical") {
          if (currectQuestion.answer == "inherited") {
            dispatch(common.togglePopup(9));
            setTimeout(() => {
              EventManager.broadcast("POSITIVE_FEEDBACK");
            }, 500);
          } else {
            dispatch(common.togglePopup(8));
            setTimeout(() => {
              EventManager.broadcast("POSITIVE_FEEDBACK");
            }, 500);
          }
        }
        if (selectedTrait[0].id == "behavior") {
          if (currectQuestion.answer == "learned") {
            dispatch(common.togglePopup(6));
            setTimeout(() => {
              EventManager.broadcast("POSITIVE_FEEDBACK");
            }, 500);
          } else {
            dispatch(common.togglePopup(5));
            setTimeout(() => {
              EventManager.broadcast("POSITIVE_FEEDBACK");
            }, 500);
          }
        }
      } else {
        if (selectedTrait.id == "physical") {
          dispatch(common.togglePopup(10));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
        } else {
          dispatch(common.togglePopup(7));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 500);
        }
      }
    };
  },

  resetActivity: () => {
    return (dispatch, getState) => {
      let { currentPopup } = getState();
      dispatch(setScreenVal(""));
      dispatch(setVisitedPage(""));
      dispatch(setCount(1));
      dispatch(setRadioOption(""));
      dispatch(setCorrectAnswer(false));
      dispatch(common.updateResetBtnState(true));

      dispatch(setRestTrait());

      if (currentPopup.indexOf(3) >= 0) {
        dispatch(common.togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(common.togglePopup(4));
      }
      dispatch(common.togglePopup(1));
    };
  },
};
