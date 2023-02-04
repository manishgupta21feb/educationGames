import { connect } from "react-redux";
import MCQArea from '../../app/components/MCQArea';
import data from '../data';
import { thunks } from '../actions';

const mapState = (state) => {

  const mainScreenQuestion = data.mainScreenMCQ
    .filter((q) => q.id == state.selectedHotspot)
    .map((m) => ({
      questions: m.questionText,
      questionLabel: m.questionLabel
    }));
  
  const fullScreenQuestions = data.mcqQuestions.map((m) => ({
    questions: m
  }));
  
  const { showStatic } = state;

  return {
    buttonText: data.buttonLabels.submitAnswer,
    question: showStatic ? fullScreenQuestions[state.questionCount - 1]?.questions : mainScreenQuestion[0]?.questions,
    disabled: !state.selectedOption || state.correctAnswer,
    heading: showStatic ? data.questionHeading.replace("-1-", state.questionCount) : null,
    headingLevel: showStatic ? "3" : "2",
    questionLabel: showStatic ? null : mainScreenQuestion[0]?.questionLabel 
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
