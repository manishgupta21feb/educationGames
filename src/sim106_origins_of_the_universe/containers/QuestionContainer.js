import Question from "../components/Question";
import { connect } from "react-redux";
import { thunk, common, setIsOptionSelected } from "../actions";
import data from "../data";

const mapState = (state) => {
  const totalQuestions = data.view[0].questions.length - 1;
  return {
    //----> From Data
    continueBtnText:
      state.getQuestionNumber == totalQuestions
        ? data.buttonLabels.next
        : data.buttonLabels.continue,
    questionsImages: data.questionsImages[state.getQuestionNumber],
    stateModel: data.stateModel,
    bigBang: data.bigBang,
    imagesAltText: data.imagesAltText,
    
    //----> From Reducer
    showContinueBtn: state.getIsAnswerCorrect,
    questionNumber: state.getQuestionNumber,
    getScreenNumber: state.getScreenNumber,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onContinueHandler: () => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunk.continueHandler());
    dispatch(common.toggleToastMessage(false));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    dispatch(setIsOptionSelected(true));
  },
});

export default connect(mapState, mapDispatch)(Question);
