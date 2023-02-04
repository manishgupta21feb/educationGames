import { connect } from "react-redux";
import data from "../data";
import LeftArea from "../components/ViewArea/LeftArea";
import EventManager from "../../app/events/manager";
import { thunks } from "../actions";
const mapStateToProps = (state) => {
  const imageAltText = state.submitAnswer
    ? data.mcqData[state.setQuestion].imageAltText2
    : data.mcqData[state.setQuestion].imageAltText;

  return {
    buttonInformation: data.buttonInformation,
    buttonList: state.clickedButtonValue,
    selectedButton: state.selectedButton,
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    questionVisited: state.questionVisited,
    imageAltText: imageAltText,
    disabledButton: state.disabledButton,
    answerCorrect: state.selectedButton,
    linesInfo: data.linesInfo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clickedValue: (value) => {
    dispatch(thunks.onClickedButton(value));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftArea);
