import Activity from "../components/activity";
import { connect } from "react-redux";
import { common, thunks } from "../actions";
import data from '../data';

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,
    answerAttempted: state.answerAttempted,
    correctAttempt: state.correctAnswer,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.generateQuestion());
  },
});

export default connect(mapState, mapDispatch)(Activity);
