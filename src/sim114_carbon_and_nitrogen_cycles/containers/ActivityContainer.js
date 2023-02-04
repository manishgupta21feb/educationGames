import Activity from "../components/activity";
import { connect } from "react-redux";
import { common } from "../actions";
import data from '../data';

const mapState = (state) => ({
  data: data,
  isPopupActive: !!state.currentPopup.length,
  screenStatus: state.screenStatus,
  allImagesData: data.allImagesData,
  answerAttempted: state.answerAttempted,
  correctAttempt: state.correctAnswer,
  showToastMessage: state.showToastMessage,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
