import Activity from "../components/activity";
import { connect } from "react-redux";

import { common, thunks } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    data: data,
    selectedDraggable: state.draggableValue,
    correctAnswer: state.correctAnswer,
    showToastMessage: state.showToastMessage,
    partialCorrect: state.partialCorrect,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.setMandatoryData());
  },
});

export default connect(mapState, mapDispatch)(Activity);
