import { connect } from "react-redux";
import RightInteractive from '../components/RightSection/RightInteractive';

const mapState = (state) => ({
  answerAttempted: state.answerAttempted,
  correctAttempt: state.correctAnswer,
  questionNo: state.questionNo
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightInteractive);
