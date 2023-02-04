import { connect } from "react-redux";
import BoxArea from "../components/Right/BoxArea";
import { common, thunks, getButtonId } from "../actions";

const mapState = (state) => {
  return {
    isAccessible: state.isAccessible,
    draggableItems: state.setOptions,
    isPopupActive: !!state.currentPopup.length,
    selectedDraggable: state.selectedDraggable,
    toastMsg: state.toastMsg,
    selectedOptions: state.selectedOptions,
    buttonVisible: state.buttonVisible,
    getNextQuestion: state.getNextQuestion,
    currentPopup: state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  toggleToastMessage: () => {
    dispatch(common.toggleToastMessage(false));
  },
  submitOption: (id) => {
    dispatch(thunks.submitOption(id));
  },
});

export default connect(mapState, mapDispatch)(BoxArea);
