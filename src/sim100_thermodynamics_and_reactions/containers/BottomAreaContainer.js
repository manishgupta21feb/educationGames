import { connect } from "react-redux";
import BottomArea from "../components/activity/BottomArea";

import data from "../data";
import { setAnswerValue } from "../actions";

const mapState = (state) => {
  return {
    data: data.equationsData,
    array: state.correctOptions,
    questionCount: state.questionCount,
    selectedQuestion: state.selectedQuestion,
    _hValue: state.getAnswerValue._h,
    energyValue: state.getAnswerValue.energy,
    getAnswerValue: state.getAnswerValue,
    questionsData: state.questionsData,
    activeQuestions: state.questionsData.find((x) => x.isActive == true),
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateValue: (params) => {
      dispatch(setAnswerValue(params));
    },
  };
};

export default connect(mapState, mapDispatch)(BottomArea);
