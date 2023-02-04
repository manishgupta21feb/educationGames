import { connect } from "react-redux";
import MCQArea from '../../app/components/MCQArea';
import data from '../data';
import { thunks } from '../actions';

const mapState = (state) => {

  const { screenStatus } = state;

  const {
    nitrogenMcqQuestion,
    carbonNitrogenMcqQuestion,
    nitrogenFixationMcqQuestion,
    climateMcqQuestion
  } = data;

  const getMCQQuestion = () => {
    switch (screenStatus) {
      case 'nitrogen-ND': {
        return nitrogenMcqQuestion;
      }
      case 'carbon-and-nitrogen': {
        return carbonNitrogenMcqQuestion;
      }
      case 'nitrogen-fixation': {
        return nitrogenFixationMcqQuestion;
      }
      case 'climate': {
        return climateMcqQuestion;
      }
    }
  }

  const disabledValue = () => {
    switch (screenStatus) {
      case 'nitrogen-ND': {
        return !state.selectedOption || state.correctAnswer
      }
      case 'carbon-and-nitrogen': {
        return state.correctAnswer || state.checkboxOption.length == 0
      }
      case 'nitrogen-fixation': {
        return state.correctAnswer || state.checkboxOption.length == 0
      }
      case 'climate': {
        return state.correctAnswer || state.checkboxOption.length == 0
      }
    }
  }

  return {
    buttonText: data.buttonLabels.submitAnswer,
    question: getMCQQuestion().text,
    disabled: disabledValue(),
    headingLevel: "2",
    isPopupActive: !!state.currentPopup.length,
    questionLabel: getMCQQuestion().ariaLabel
  }
}

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.submitAnswer());
  }
});

export default connect(mapState, mapDispatch)(MCQArea);
