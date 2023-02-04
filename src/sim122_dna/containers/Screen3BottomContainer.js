import { connect } from "react-redux";
import Screen3Bottom from '../components/activity/TopBottomScreen/BottomSection/Screen3Bottom';

const mapState = (state) => ({
  answerAttempted: state.answerAttempted,
  correctAttempt: state.correctAnswer
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Screen3Bottom);
