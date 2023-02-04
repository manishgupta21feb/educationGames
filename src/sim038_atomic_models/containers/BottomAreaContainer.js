import { connect } from "react-redux";
import BottomArea from "../components/activity/BottomArea";

import data from "../data";
import { clearCorrectOptions } from "../actions";

const mapState = (state) => {
  return {
    data: data.equationsData,
    array: state.correctOptions,
    answerAttempt: state.answered,
    questionCount: state.questionCount,
    selectedQuestion: state.selectedQuestion,
    submitButtonPressed: state.submitButtonPressed,
  };
};

const mapDispatch = (dispatch) => {
  return {
    clearOptions: () => {
      dispatch(clearCorrectOptions());
    },
  };
};

export default connect(mapState, mapDispatch)(BottomArea);
