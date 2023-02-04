import { connect } from "react-redux";
import Right from "../components/Main/Right";
import data from "../data";

const mapState = (state) => ({
  resources: data.resources,
  selectedResource: state.selectedResource,
  instructionOSTText: data.instructionOSTText,
  correctAnswerSubmitted: state.correctAnswerSubmitted,
});

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(Right);
