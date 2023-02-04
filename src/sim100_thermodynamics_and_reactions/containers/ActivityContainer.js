import { connect } from "react-redux";
import Root from "../components/activity";

import data from "../data";
import { thunk, common, updateQuestionsData } from "../actions";

const mapState = (state) => {
  let wrongCount = 0;
  let correctCount = 0;
  for (const [key, value] of Object.entries(state.getWrongAnswerValue)) {
    if (value) {
      wrongCount = wrongCount + 1;
    } else {
      correctCount = correctCount + 1;
    }
  }

  return {
    data: data,
    correctAnswer: correctCount == 4 ? true : false,
    wrongAnswer: correctCount != 4 ? true : false,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(updateQuestionsData());
    //dispatch(thunk.setQuestion());
    dispatch(common.togglePopup(1));
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, mapDispatch)(Root);
