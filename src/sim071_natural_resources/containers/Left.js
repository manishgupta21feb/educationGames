import { connect } from "react-redux";
import Left from "../components/activity/Main/Left";
import {
  cityBackButton,
  clickedValue,
  thunks,
 questionCount,
  updateQuestionsData,
} from "../actions";
import data from "../data";

const mapState = (state) => ({
  buttonsInfo: state.buttonLabels,
  buttonPressed: state.clickedValue,
  buttonList: state.showFinishButton,
  buttonLabels: data.buttonLabels,
  questionsData: state.questionsData,
  // question: state.questionsData[state.questionCount - 1],
  question: state.clickedButtonValue,
  submitButtonPressed: state.submitButtonPressed,
  answerAttempt: state.submitAnswer,
  activeButton: state.clickedButtonSecond,
  isPopupActive: !!state.currentPopup.length,
  mainImageAlt:data.mainImageAlt,
  ImageAlt: data.ImageAlt,

});
const matchDispatch = (dispatch) => ({
  onClickValue: (value) => {
    dispatch(thunks.cityBackButton(value));
    EventManager.broadcast("SECONDARY_CLICK");

  },
});
export default connect(mapState, matchDispatch)(Left);
