import { connect } from "react-redux";
import TopBottom from "../components/TopBottom";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  const finish = state.questionCount == 5;

  return {
    data: data,
    screenTwoTxt: state.selectedQuestion.screenTwoTxt,
    imgText: state.selectedQuestion.imgText,
    imgId: state.selectedQuestion.answer,
    ifSubScreen: state.subScreen,
    mcqImgTxt: state.selectedQuestion.label,
    mcqImgId: state.selectedQuestion.id,
    submitAnswerMcq: state.submitAnswerMcq,
    submitButtonPressed: state.submitButtonPressed,
    altText: state.selectedQuestion.alt,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(TopBottom);
