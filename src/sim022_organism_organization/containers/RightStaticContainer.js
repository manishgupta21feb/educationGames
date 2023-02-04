import { connect } from "react-redux";
import RightStatic from "../components/RightArea/RightStatic";

import data from "../data";

const mapState = (state) => ({
  questions: data.ecosystemContent,
  selectedQuestionId: state.selectedQuestion,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightStatic);
