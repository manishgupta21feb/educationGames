import FullViewSection from '../components/FullViewSection';
import { connect } from "react-redux";
import data from '../data';

const mapState = (state) => ({
  instructionText: data.instructionText,
  answerAttempted: state.answerAttempted,
  correctAnswer: state.correctAnswer
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(FullViewSection);
