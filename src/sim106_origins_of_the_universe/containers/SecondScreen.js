import { connect } from "react-redux";
import Screen2 from "../components/SecondScreen/index";
import data from "../data";
import { setQuestion, common } from "../actions/index";

const mapState = (state) => {
  return {
    continueBtnText:
      state.getQuestionNumber == 3
        ? data.buttonLabels.next
        : data.buttonLabels.continue,
    isPopupActive: !!state.currentPopup.length,
    headingTop: data.questionHeading2,
    selectedQuestion: state.selectedQuestion,
    questions: data.questionsData,
    questionCount: state.questionCount,
    submitButtonPressed: state.submitButtonPressed,
    answerAttempt: state.submitAnswer,
    showContinueBtn: state.getIsAnswerCorrect,
    checkAnswer: state.getIsAnswerCorrect,
    getScreenNumber: state.getScreenNumber,
    pieContent: data.pieContent,
    getIsAnswerCorrect: state.getIsAnswerCorrect,
    cosmicImageAlt: data.cosmicImageAlt,
    videoLiveText: data.view[0].questions[0].ariaLiveText,

  };
};

const mapDispatch = (dispatch) => ({
  changeScreen: (val) => {},
  setQuestion: (questions) => {
    dispatch(setQuestion(questions));
  },

  onClick: (liveText) => {
    dispatch(common.ariaLiveText(liveText));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  }

});

export default connect(mapState, mapDispatch)(Screen2);
