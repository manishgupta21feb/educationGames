import FullSection from '../components/activity/FullSection';
import { connect } from "react-redux";

const mapState = (state) => ({
  answerAttempted: state.answerAttempted,
  correctAttempt: state.correctAnswer    
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(FullSection);
