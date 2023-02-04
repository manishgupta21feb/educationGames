import { connect } from "react-redux";
import RootActivity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    correctAttempt: state.submittedAnswer,
    answerSubmitted: state.answerSubmitted,
    showToastMessage: state.showToastMessage,
    observationMotive: data.observationMotive,
    showIntroScreen: state.toggleScreen,
  };
};
const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(RootActivity);
