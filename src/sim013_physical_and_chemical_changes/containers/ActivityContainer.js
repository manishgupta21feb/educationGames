import { connect } from "react-redux";
import RootActivity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  data: data,
  isPopupActive: !!state.currentPopup.length,
  isToggleQuestion: state.toggleQuestion,
  correctAttempt: state.submittedAnswer,
  answerSubmitted: state.answerSubmitted,
  showToastMessage: state.showToastMessage,
});
const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(RootActivity);
