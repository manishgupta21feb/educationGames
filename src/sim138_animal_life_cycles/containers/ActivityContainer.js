import { connect } from "react-redux";
import Root from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  data: data,
  checkboxes: state.checkboxes,
  radiobutton: state.radiobutton,
  informationText: data.infoContent,
  resetDialogText: data.resetPopupText,
  correctAttempt: state.submittedAnswer,
  answerSubmitted: state.answerSubmitted,
  showToastMessage: state.showToastMessage,
  isPopupActive: !!state.currentPopup.length,
  startDialogBox: data.instructionBoxContent,
});

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Root);
