import * as actions from "../../app/actions";
import data from '../data';

const {
  toggleToastMessage,
  togglePopup,
  updateResetBtnState
} = actions;

export const SET_SCREEN_STATUS = "SET_SCREEN_STATUS";
export const SELECT_HOTSPOT = "SELECT_HOTSPOT";
export const UPDATE_VISITED_HOTSPOT = "UPDATE_VISITED_HOTSPOT";
export const SET_CLICKEDCYCLE = "SET_CLICKEDCYCLE";
export const ANSWER_ATTEMPT = "ANSWER_ATTEMPT";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const SELECT_OPTION = "SELECT_OPTION";
export const SET_CHECKBOX_OPTION = "SET_CHECKBOX_OPTION";
export const RESET_CHECKBOX_OPTION = "RESET_CHECKBOX_OPTION";
export const RESET_VISITED_HOTSPOT = "RESET_VISITED_HOTSPOT";

export const setScreenStatus = (status) => ({
  type: SET_SCREEN_STATUS,
  status
});

export const updateVisitedHotspot = (hotspot) => ({
  type: UPDATE_VISITED_HOTSPOT,
  hotspot
});

export const setClickedCycle = (cycle) => ({
  type: SET_CLICKEDCYCLE,
  cycle
});

export const selectOption = (option) => ({
  type: SELECT_OPTION,
  option
});

export const answerAttempt = (attempt) => ({
  type: ANSWER_ATTEMPT,
  attempt
});

export const correctAnswer = (correct) => ({
  type: CORRECT_ANSWER,
  correct
});

export const setCheckBoxOption = (option) => ({
  type: SET_CHECKBOX_OPTION,
  option
});

export const resetCheckboxOption = () => ({
  type: RESET_CHECKBOX_OPTION
});

export const resetVisitedHotspot = () => ({
  type: RESET_VISITED_HOTSPOT
});

export const thunks = {

  //Handle Next Button Click
  handleNextButtonClick: () => {
    return (dispatch, state) => {

      const {
        screenStatus,
        visitedHotSpot,
        clickedCycle
      } = state();

      dispatch(toggleToastMessage(false));
      EventManager.broadcast("STOP_ALL");

      setTimeout(() => {
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      }, 100);

      if (screenStatus == 'nitrogen-ND' ||
        screenStatus == 'carbon-and-nitrogen' ||
        screenStatus == 'nitrogen-fixation' ||
        screenStatus == 'climate'
      ) {
        dispatch(resetCheckboxOption());
        dispatch(correctAnswer(false));
        dispatch(answerAttempt(false));
        dispatch(selectOption(''));
      }

      if (clickedCycle == 'carbon-info') {

        if (screenStatus == 'carbon-info') {
          dispatch(setScreenStatus('carbon-explore'));
        }

        if (screenStatus == 'photosynthesis') {
          dispatch(setScreenStatus('respiration'));
        }

        if (screenStatus == 'respiration') {
          dispatch(setScreenStatus('carbon-explore'));
        }

        if (screenStatus == 'carbonDioxide-info') {
          dispatch(setScreenStatus('carbonDioxide-explore'));
        }

        if (visitedHotSpot.third.length !== 3) {
          if (screenStatus == 'ocean' || screenStatus == 'fossil-fuels' || screenStatus == 'climate') {
            dispatch(setScreenStatus('carbonDioxide-explore'));
          }
        } else {
          if (visitedHotSpot.second.length !== 2) {
            dispatch(setScreenStatus('carbon-explore'));
          } else {
            if (screenStatus == 'photosynthesis') {
              dispatch(setScreenStatus('respiration'));
            } else {
              dispatch(setScreenStatus('main-screen'));
            }
          }
        }
      }

      if (clickedCycle == 'nitrogen-info') {

        if (screenStatus == 'nitrogen-info') {
          dispatch(setScreenStatus('nitrogen-explore'));
        }

        if (visitedHotSpot.forth.length !== 2) {
          if (screenStatus == 'nitrogen-fixation' || screenStatus == 'nitrogen-ND') {
            dispatch(setScreenStatus('nitrogen-explore'));
          }
        } else {
          if (visitedHotSpot.first.length !== 2) {
            dispatch(setScreenStatus('main-screen'));
          }
        }
      }

      if (screenStatus == 'carbon-and-nitrogen') {
        EventManager.broadcast("STOP_ALL");
        EventManager.broadcast("COMPLETION_SCREEN");
        dispatch(togglePopup(7));
      } else {
        if (
          visitedHotSpot.first.length == 2
          && visitedHotSpot.second.length == 2
          && visitedHotSpot.third.length == 3
          && visitedHotSpot.forth.length == 2
        ) {
          if (screenStatus == 'photosynthesis') {
            dispatch(setScreenStatus('respiration'))
          } else {
            EventManager.broadcast("STOP_ALL");
            EventManager.broadcast("COMPLETION_SCREEN");
            dispatch(togglePopup(6));
          }
        }
      }

    }
  },

  //Submit Answer
  submitAnswer: () => {
    return (dispatch, state) => {

      const {
        screenStatus,
        selectedOption,
        checkboxOption
      } = state();

      const {
        carbonNitrogenCorrectAnswer,
        nitrogenFixationCorrectAnswer,
        climateCorrectAnswer
      } = data;

      var correct;

      if (screenStatus == 'nitrogen-ND') {
        correct = selectedOption === 'nitrogen-ND-true';
      } else if (screenStatus == 'carbon-and-nitrogen') {
        correct = carbonNitrogenCorrectAnswer.every(e => checkboxOption.includes(e)) && checkboxOption.length == 3;
      } else if (screenStatus == 'nitrogen-fixation') {
        correct = nitrogenFixationCorrectAnswer.every(e => checkboxOption.includes(e)) && checkboxOption.length == 2;
      } else if (screenStatus == 'climate') {
        correct = climateCorrectAnswer.every(e => checkboxOption.includes(e)) && checkboxOption.length == 5;
      }

      dispatch(answerAttempt(true));
      dispatch(toggleToastMessage(true));

      if (correct) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(correctAnswer(false));
      }

    }
  },

  //Reset Activity
  resetActivity: () => {
    return (dispatch, state) => {
      dispatch(togglePopup(1));
      dispatch(updateResetBtnState(true));
      dispatch(setScreenStatus('main-screen'));
      dispatch(setClickedCycle(''));
      dispatch(resetVisitedHotspot());
      dispatch(answerAttempt(false));
      dispatch(correctAnswer(false));
      dispatch(selectOption(''));
      dispatch(resetCheckboxOption());
      const { currentPopup } = state();
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      if (currentPopup.indexOf(8) >= 0) {
        dispatch(togglePopup(8));
      }
    }
  }

}

export const common = { ...actions };
