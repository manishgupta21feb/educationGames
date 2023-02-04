import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const {
    mcq1,

    mcq1Answer,
    currentPopup,
    currentScreen,
    questionAnswered,
  } = state;
  const check = currentScreen == 0;
  const current = check ? mcq1.length : data.questionData.length;
  const total = check ? data.mcq1.length : data.questionData.length;
  const _current = total - current;
  let disabled = questionAnswered || !!currentPopup.length;
  if (check) {
    disabled = disabled || !mcq1Answer;
  }
  return {
    headingLevel: "2",
    disabled: disabled,
    buttonText: data.submitAnswer,
    heading: data.mcqQuestionHeading
      .replace("-1-", _current)
      .replace("-2-", total),
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.submitMCQAnswer());
  },
});

export default connect(mapState, matchDispatch)(MCQArea);
