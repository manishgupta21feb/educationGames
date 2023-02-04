import { connect } from "react-redux";
import MCQArea from '../../app/components/MCQArea';
import data from '../data';
import { thunks } from '../actions';

const mapState = (state) => {

  const { 
    questionNo,
    questionCount 
  } = state;

  return {
    buttonText: data.buttonLabels.submitAnswer,
    question: data.mcqQuestions[questionNo],
    heading: data.questionHeading.replace("-1-", questionCount),
    disabled: !state.selectedOption || state.correctAnswer,
    headingLevel: "2",
    isPopupActive: !!state.currentPopup.length
  }
};

const mapDispatch = (dispatch) => {
  return {
    onClick: () => {
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(thunks.submitAnswer());
    }
  }
};

export default connect(mapState, mapDispatch)(MCQArea);
