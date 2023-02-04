import { connect } from "react-redux";
import Droppable from "../components/activity/Droppable";

import data from "../data";

const mapState = (state) => {
  const selectedQuestion = state.selectedQuestion;
  let wavelengthMapData;
  if (selectedQuestion === 1 || selectedQuestion === 2) {
    wavelengthMapData = data.wavelengthData1;
  } else if (selectedQuestion === 3 || selectedQuestion === 4) {
    wavelengthMapData = data.wavelengthData2;
  }
  return {
    data: wavelengthMapData,
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
