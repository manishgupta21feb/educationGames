import Question from "../components/Question";
import { connect } from 'react-redux';
import { thunk, common } from '../actions';
import data from '../data';

const mapState = (state) => {
  const totalQuestions = data.view[0].questions.length - 1;
  return{
    //----> From Data
    continueBtnText: state.getQuestionNumber == totalQuestions ? data.buttonLabels.next : data.buttonLabels.continue,
    questionsImages: data.questionsImages[state.getQuestionNumber], 
    
    //----> From Reducer
    showContinueBtn: state.getIsAnswerCorrect,
    questionNumber: state.getQuestionNumber  
  };
};

const mapDispatch = (dispatch) => ({
  onContinueHandler: () => {
    dispatch(thunk.continueHandler())
    dispatch(common.toggleToastMessage(false));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
  }
});

export default connect(mapState, mapDispatch)(Question)

