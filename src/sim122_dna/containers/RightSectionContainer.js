import { connect } from "react-redux";
import RightSection from '../components/activity/LeftRightScreen/RightSection';
import data from '../data';
import { thunks } from '../actions';

const mapState = (state) => ({
  screen6QuestionText: data.screen6QuestionText,
  droppedItems: state.droppedItems,
  screen6CorrectAnswer: state.screen6CorrectAnswer
});

const mapDispatch = (dispatch) => ({
  checkDropAnswers: () => {
    dispatch(thunks.checkDropAnswers());
  }
});

export default connect(mapState, mapDispatch)(RightSection);
