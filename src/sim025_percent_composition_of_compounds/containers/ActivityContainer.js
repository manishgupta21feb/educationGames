import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => {
  const elementData =
    state.viewType == "burger" ? data.draggablesBurger : data.draggablesWater;

  return {
    data: data,
    toastMsg: state.toastMsg,
    simulationEnd: state.simulationEnd,
    resetDialogBoxText: data.resetPopupText,
    infoDialogBoxText: data.helpInfoMessagge,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    startUpDialogBoxText: data.startUpInfoMessage,
    massInfo: state.viewType == "burger",
    QuestionInfo:
      state.viewType == "burger"
        ? data.questionInfoMessagge
        : data.questionInfoWaterMessagge,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  fetchElements: () => {
    dispatch(thunks.fetchElements());
  },
});

export default connect(mapState, mapDispatch)(Activity);
