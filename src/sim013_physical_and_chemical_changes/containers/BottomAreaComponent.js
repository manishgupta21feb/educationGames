import { connect } from "react-redux";
import BottomAreaComponent from "../components/activity/BottomAreaComponent";

import data from "../data";
import { selectQuestion } from "../actions";

const mapState = (state) => ({
  data,
  showIntroScreen: state.toggleQuestion,
  selectedQuestion: state.selectedQuestion,
  questionIndex: state.selectQuestionIndex,
});

const mapDispatch = (dispatch) => ({
  setQuestion: (value) => {
    dispatch(selectQuestion(value));
  },
});

export default connect(mapState, mapDispatch)(BottomAreaComponent);
