import { connect } from "react-redux";
import RightArea from "../components/ViewArea/RightArea";
import EventManager from "../../app/events/manager";
import data from "../data/data.en";

const mapStateToProps = (state) => ({
  answerAttempt: state.submitAnswer,
  submitButtonPressed: state.submitButtonPressed,
  radioButton: data.mcqData[state.setQuestion].radioButton,
});

export default connect(mapStateToProps)(RightArea);
