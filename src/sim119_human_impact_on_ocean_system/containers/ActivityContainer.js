import Activity from "../components/activity";
import { connect } from "react-redux";
import { common } from "../actions";
import data from '../data';

const mapState = (state) => ({
  data: data,
  isPopupActive: !!state.currentPopup.length,
  correctAttempt: state.correctAnswer,
  answerAttempted: state.answerAttempted,
  showStatic: state.showStatic,
  showToastMessage: state.showToastMessage,
  activityHeading: data.activityHeading,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
