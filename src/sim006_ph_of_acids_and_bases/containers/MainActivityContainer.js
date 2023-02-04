import { connect } from "react-redux";
import MainActivity from "../components/MainActivity";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  const selectedStage = state.selectedStage;
  return {
    showNext: state.showNext,
    selectedStage: selectedStage,
    elementData: state.elementData,
    resetBtnState: state.resetBtnState,
    isPopupActive: !!state.currentPopup.length,
    instructionText: data[selectedStage].instructionText,
  };
};

const mapDispatch = (dispatch) => ({
  onCorrectDrop: (currentOption) => {
    dispatch(thunks.onCorrectDrop(currentOption));
  },
  onInCorrectDrop: () => {
    dispatch(thunks.onInCorrectDrop());
  },
  updateAttempt: (val) => {
    dispatch(thunks.updateAttempt(val));
  },
  showToastMessage: (state) => {
    dispatch(common.toggleToastMessage(state));
  },
});

export default connect(mapState, mapDispatch)(MainActivity);
