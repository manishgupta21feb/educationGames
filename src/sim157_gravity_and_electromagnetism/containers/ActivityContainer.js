import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    infoText: data.infoTextOne,
    showToastMessage: state.showToastMessage,
    correctAttempt: state.correct,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Activity);
