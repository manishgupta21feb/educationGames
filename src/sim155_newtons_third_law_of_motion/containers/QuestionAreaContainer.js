import { connect } from "react-redux";
import QuestionArea from "../components/QuestionArea";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    questionData: data.QuestionData[state.questionCount],
    compassData: data.compassData,
    arrowData: data.arrowData,
    questionInstruction: data.questionInstruction,
  };
};

const mapDispatch = (dispatch) => {};

export default connect(mapState)(QuestionArea);
