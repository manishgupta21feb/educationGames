import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data/index";
import { thunks } from "../actions";

const mapState = (state) => {
  const totalQuestions = data.Questions[state.toggleQuestion].questions.length;
  const selected1 = JSON.stringify(state.selectedOption) === JSON.stringify({});
  const selected2 =
    JSON.stringify(state.selectedOptionSecond) === JSON.stringify({});
  const isSecondOption =
    data.Questions[state.toggleQuestion].questions[state.questionCount].options2
      .length > 0;

  const check = () => {
    if (isSecondOption) {
      if (selected1 && selected2) {
        return true;
      } else if (selected1 || selected2) {
        return true;
      } else {
        return false;
      }
    } else {
      if (selected1) {
        return true;
      } else {
        return false;
      }
    }
  };

  return {
    buttonText: data.submitAnswer,
    disabled: check() || state.correctAnswer,
    headingLevel: "2",
    heading: data.questionHeading
      .replace("-1-", state.questionCount + 1)
      .replace("-4-", totalQuestions),
    isPopupActive: !!state.currentPopup.length,
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
