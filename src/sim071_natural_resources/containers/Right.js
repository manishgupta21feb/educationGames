import { connect } from "react-redux";
import Right from "../components/activity/Main/Right";
import data from "../data";
import { cityBackButton, clickedValue, thunks } from "../actions";

const mapState = (state) => ({
  instruction: data.instruction,
  question: data.mcqQuestionData,
  buttonPressed: state.clickedValue,
  // questionCount: state.questionCount,
  buttonsInfo: state.buttonLabels,
  buttonLabels: data.buttonLabels[0].id,
  // question: state.questionsData[state.questionCount - 1].id,
  question: state.clickedButtonValue,
  questionCount: state.showFinishButton.length == data.buttonLabels.length,

});
export default connect(mapState)(Right);
