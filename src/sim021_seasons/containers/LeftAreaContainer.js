import { connect } from "react-redux";
import LeftArea from "../components/activity/Left";

import data from "../data";

const mapState = (state) => ({
  questions: state.questions,
  graphcommon: data.graphCommonData,
  selectedQuestion: state.selectedQuestion,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftArea);
