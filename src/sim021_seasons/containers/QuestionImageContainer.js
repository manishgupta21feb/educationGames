import { connect } from "react-redux";
import QuestionImage from "../components/activity/QuestionImage";

const mapState = (state) => ({
  question: state.selectedQuestion,
  questions: state.questionsData,
});

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(QuestionImage);
