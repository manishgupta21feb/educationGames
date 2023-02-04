import { connect } from "react-redux";
import { thunks } from "../actions";
import Right from "../components/LeftRight/Right";
import data from "../data";

const mapState = (state) => ({
  question: state.question,
  subQuestion: state.subQuestion,
  ost: !state.subQuestion ? data.initialOST : state.subQuestion.ostText,
  bowlType: state.subQuestion
    ? state.visitedMainOptions[state.visitedMainOptions.length - 1] == "egg"
      ? data.egg
      : data.ice
    : null,
});

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    dispatch(thunks.setMcqAnswer(id));
  },
});

export default connect(mapState, matchDispatch)(Right);
