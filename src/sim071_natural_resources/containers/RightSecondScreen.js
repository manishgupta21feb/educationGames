import { connect } from "react-redux";
import Right from "../components/SecondScreen/Right";
import data from "../data";
import { cityBackButton, clickedValue, thunks } from "../actions";

const mapState = (state) => (
  {
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
  }
);
export default connect(mapState)(Right);
