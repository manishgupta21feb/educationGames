import Activity from "../components/activity";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    initialInformationText: data,
    data: data,
    resetPopupText: data.resetPopupText,
    correctAttempt: state.correctAttempt,
    showToastMessage: state.showToastMessage,
    partiallyCorrect: state.partiallyCorrect,

  };
};

const mapDispatch = (dispatch) => ({

  onStartActivity: () => {
    dispatch(common.togglePopup(1));
    // dispatch(common.updateResetBtnState(false));

  },
});

export default connect(mapState, mapDispatch)(Activity);
