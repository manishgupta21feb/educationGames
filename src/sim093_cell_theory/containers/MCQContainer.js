import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import { thunks, common, questionCount } from "../actions";
import data from "../data";

const mapState = (state) => {
  const totalQuestion = data.mcqData.length;
  const heading = data.questionHeading
    .replace("-1-", state.questionCount)
    .replace("-2-", totalQuestion);

  return {
    heading,
    headingLevel: "3",
    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
    question: data.mcqData.filter((q) => q.id == state.setQuestion + 1)[0]
      .question,
    disabled:
      state.currentPopup.length ||
      !state.selectedAnswerOption ||
      (state.submitAnswer && state.submitButtonPressed),
  };
};
const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.submitAnswer());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};
export default connect(mapState, matchDispatch)(MCQArea);
