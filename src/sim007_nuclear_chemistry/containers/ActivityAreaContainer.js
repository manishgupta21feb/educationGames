import { connect } from "react-redux";
import Activity from "../components/activity/ActivityArea";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  data,
  showDialog: state.showDialog,
  question: state.selectedQuestion,
  returnAnswer: state.submittedAnswer,
  answerSubmitted: state.answerSubmitted,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => dispatch(thunks.setQuestion()),
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Activity);
