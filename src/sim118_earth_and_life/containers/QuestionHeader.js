import { connect } from "react-redux";
import QuestionHeader from "../components/Question/QuestionCount";

import data from "../data";

const mapState = (state) => {
  return {
    countTotal: data.questions.length,
    countCurrent: state.getQuestionNumber + 1,
    content: data.questionText,
  };
};

const matchDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, matchDispatch)(QuestionHeader);
