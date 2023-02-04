import { connect } from "react-redux";
import Root from "../components/activity";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  console.log("Answers", state.getQuestionsData[state.getQuestionCount].answer);
  return {
    data: data,
    imagesArray: data.imagesArr,
    informationText: data.infoContent,
    resetDialogText: data.resetPopupText,
    correctAttempt: state.submittedAnswer,
    answerSubmitted: state.answerSubmitted,
    toastMsg: state.toastMsg,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    startDialogBox: data.instructionBoxContent,
    activityHeading: data.activityHeading,
  };
};

const mapDispatch = (dispatch) => ({
  // onStartActivity: () => dispatch(thunks.setQuestion()),
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Root);
