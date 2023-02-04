import { connect } from "react-redux";
import { selectQuestion } from "../../sim031_changes_from_heat/actions";
import Screen2 from "../components/Screens/Screen2";
import data from "../data";
import { setQuestion } from "../actions/activity";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    headingTop: data.questionHeading2,
    selectedQuestion: state.selectedQuestion,
    questions: data.questionsData,
    questionCount: state.questionCount,
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
  };
};

const mapDispatch = (dispatch) => ({
  changeScreen: (val) => {},
  setQuestion: (questions) => {
    dispatch(setQuestion(questions));
  },
});

export default connect(mapState, mapDispatch)(Screen2);
