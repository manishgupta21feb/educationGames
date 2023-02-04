import { connect } from "react-redux";
import Left from "../components/SecondScreen/Left";
import {
  cityBackButton,
  clickedValue,
  thunks,
  common,
  questionCount,
} from "../actions";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  buttonsInfoSecond: state.buttonLabelsSecond,
  buttonPressed: state.clickedSecond,
  buttonList: state.showFinishButton,
  answerList: state.clickedButtonSecond,
  buttonLabels: data.buttonLabels,
  // question: state.questionsData[state.questionCount - 1],
  question: state.clickedButtonSecond,
  submitButtonPressed: state.submitButtonPressed,
  answerAttempt: state.submitAnswer,
  questionCount: state.questionCount,
  ImageAlt: data.ImageAlt,
  mainImageAlt: data.mainImageAlt,
  isPopupActive: !!state.currentPopup.length,
});
const matchDispatch = (dispatch, getState) => ({
  onClickSecond: (value) => {
    dispatch(thunks.cityBackButton(value));
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClickedButton: (value) => {
    dispatch(thunks.onClickedButton(value));
  },
});
export default connect(mapState, matchDispatch)(Left);
