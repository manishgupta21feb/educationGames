import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    headingLevel: state.selectedQuestion <= 8 ? "2" : "1",
    buttonText: data.buttonLabels.submitAnswer,
    question: state.questions.filter((q) => q.id == state.selectedQuestion)[0]
      .textContent,
    disabled: !state.selectedOption || state.correctAnswer,
    heading:
      state.selectedQuestion <= 8
        ? data.questionHeading.replace(
            "-1-",
            ((state.selectedQuestion - 1) % 2) + 1
          )
        : "",
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
