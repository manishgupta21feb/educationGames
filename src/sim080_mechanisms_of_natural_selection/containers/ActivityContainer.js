import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    toastMsg: state.toastMsg,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    selectedDraggable: state.selectedDraggable,
    getQuestionSet: state.getQuestionSet,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
