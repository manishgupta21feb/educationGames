import { connect } from "react-redux";
import Droppable from "../components/activity/Droppable";

import data from "../data";

const mapState = (state) => {
  return {
    data: data.elementData,
    toastMsg: state.toastMsg,
    dropElement: state.dropElement,
    droppedItems: state.droppedItems,
    dropzoneLabel: data.dropzoneLabel,
    correctAnswer: state.correctAnswer,
    selectedQuestion: state.selectedQuestion,
    accessibleListVisible: state.accessibleListVisible,
    questionDesc: data.questionData.filter(
      (q) => q.id === state.selectedQuestion
    )[0].desc,
    correctSequence: data.questionData.filter(
      (q) => q.id === state.selectedQuestion
    )[0].correctSequence,
  };
};

export default connect(mapState)(Droppable);
