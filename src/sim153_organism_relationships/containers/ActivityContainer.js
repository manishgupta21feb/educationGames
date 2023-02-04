import Activity from "../components/activity";
import { connect } from "react-redux";

import { common,thunks } from "../actions";
import data from "../data/data.en";

const mapState = (state) => {
  return {
    activityHeading: data.activityHeading,
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,
  submitButtonPressed: state.submitButtonPressed,
  answerAttempt: state.submitAnswer,
 
  wrongAnswer: state.wrongAnswer,
    data: data,
    secondScreen: state.secondScreen,
  };
};

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(thunks.setQuestion());
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
