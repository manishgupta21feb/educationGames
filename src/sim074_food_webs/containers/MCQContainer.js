import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import { thunks, common, questionCount } from "../actions";
import data from "../data";

const mapState = (state) => {
  const heading = data.questionHeading
    .replace("-1-", state.questionCount)
    .replace("-2-", data.mcqData.length);
  const dataSet = data.mcqData[state.setQuestion];
  const disk = dataSet.radioButton
    ? !state.selectedAnswerOption
    : state.clickedButtons != dataSet.correctAnswer.length;

  return {
    heading,

    headingLevel: "2",
    buttonText: data.buttonLabels.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
    question: data.mcqData[state.setQuestion].mcqQuestion,
    disabled:
      state.currentPopup.length ||
      disk ||
      (state.submitAnswer && state.submitButtonPressed),
  };
};
const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunks.onSubmitButton());
      dispatch(common.toggleToastMessage(true));
      EventManager.broadcast("PRIMARY_CLICK");
    },
  };
};
export default connect(mapState, matchDispatch)(MCQArea);
