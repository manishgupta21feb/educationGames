import RightViewB from "../components/RightView/ViewB";
import { connect } from "react-redux";
import simData from "../data";
import { common, thunk } from "../actions";

const mapState = (state) => {
  return {
    question: state.getAssessmentData[state.getCurrentQuestion],
    currentQuestion: state.getCurrentQuestion + 1,
    questionLength: state.getAssessmentData.length,
    isPopupActive: !!state.currentPopup.length,

    selectedOptions: state.selectedOptions,
    checkboxes: simData.checkBoxes,
    data: simData,
    returnAnswer: state.submittedAnswer,
    isNextButtonEnable: state.isNextButtonEnable,
    radioDisabled: state.getAnswerState,
    questionCount: simData.questionCount,
    selectedOptions: state.getAssessmentSelection,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  toggleOption: (id) => {
    dispatch(thunk.toggleOption(id));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(RightViewB);
