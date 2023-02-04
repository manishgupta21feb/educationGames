import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  let visitedHotspot = "";

  if (screenData.id == screenData.id) {
    visitedHotspot = state.getCurrentScreenData.filter(
      (x) => x.prevNode == screenData.id && x.isVisited == true
    );
  }

  return {
    data: data,
    toastMsg: state.toastMsg,
    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    selectedDraggable: state.getDND1DragItems,
    observationMotive: data.observationMotive,
    screenNumber: screenData.id,
    visitedHotspot: visitedHotspot,
    currentScreen: screenData.currentScreen,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
