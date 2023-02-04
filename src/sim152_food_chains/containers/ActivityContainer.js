import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    infoText:
      state.screenChangeState == true ? data.infoTextTwo : data.infoTextOne,
    showToastMessage: state.showToastMessage,
    correctAttempt: state.correct,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Activity);
