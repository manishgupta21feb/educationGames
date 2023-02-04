import LeftStatic from "../components/LeftArea/LeftStatic";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => ({
  question: data.mcqData,
  text: data.screentext2,
  correctAttempt: state.correctAnswer,
  selectedQuestion: state.selectedQuestion,
  imageAlt: data.activityAlts.mcqsScreenPyramid,
});

export default connect(mapState)(LeftStatic);
