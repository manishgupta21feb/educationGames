import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    buttonText: data.submitAnswer,
    showAnimation: state.showAnimation,
    answerAttempted: state.answerAttempted,
    selectedQuestion: state.selectedQuestion,
    disabled:
      !state.droppedItems.every((d) => d.length != 0) || state.correctAnswer,
    heading: data.questionHeading
      .replace("-1-", state.selectedQuestion)
      .replace("-2-", data.questionData.length),
  };
};

const mapDispatch = (dispatch) => {
  return {
    onClick: () => {
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(thunks.submitAnswer());
    },
  };
};

export default connect(mapState, mapDispatch)(MCQArea);
