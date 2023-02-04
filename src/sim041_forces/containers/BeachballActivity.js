import { connect } from "react-redux";
import BeachballActivity from "../components/activity/BeachballActivity";

const mapState = (state) => ({
  selectedDirection: state.arrowDirection,
  questionDirection:
    (state.selectedQuestion && state.selectedQuestion.value) || "",
});

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(BeachballActivity);
