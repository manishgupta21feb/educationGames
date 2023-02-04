import { connect } from "react-redux";
import Activity from "../components/activity";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    data: data,

    showToastMessage: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    correctAnswer: state.correctAnswer,
    showToastFive: state.showToastFive,
    mainImg: data.mainImg,
    selectedDraggable: state.draggableValue,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.setOst());
  },
});

export default connect(mapState, mapDispatch)(Activity);
