import { connect } from "react-redux";
import TopBottom from "../components/ViewArea/TopBottom/index.js";

import data from "../data";
import { thunk, setViewFrame, setSubScreen } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    viewFrame: state.viewFrame,
    ifSubScreen: state.subScreen,
    questionScreen1: state.selectedQuestion.id,
    questionScreen2:
      state.selectedQuestion?.mcqQuestion[state.questionCount - 1].id,
    text: state.selectedQuestion.screen1Txt,
    staticImgTxt: state.selectedQuestion.imgTxt,
    mcqImgTxt:
      state.selectedQuestion?.mcqQuestion[state.questionCount - 1].imgTxt,
    submitAnswer: state.answerSubmitted,
    correctAnswer: state.submittedAnswer,
    topStaticAltTxt: state.selectedQuestion.topStaticAltTxt,
    topScreen2AltTxt: state.selectedQuestion.topScreen2AltTxt,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {},
  };
};

export default connect(mapState, matchDispatch)(TopBottom);
