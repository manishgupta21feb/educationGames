import Background from "../components/activity/Background";
import { connect } from "react-redux";
import { common, thunks, updateToastMsg, updateCanvasData } from "../actions";

const mapState = (state) => {
  return {
    selectedYear: state.selectedYear,
    continentData: state.continentData,
    selectedContinent: state.selectedContinent,
    toastMsg: state.toastMsg,
    resetYesClicked: state.resetYesClicked,
    isPopupActive: !!state.currentPopup.length,
    mapCompleted: state.mapCompleted,
    videoEnded: state.videoEnded,
    canvasData: state.canvasData,
    resetBtnState: state.resetBtnState,
    scaleChange: state.scaleChange,
    droppedPlates: state.droppedPlates,
    currentPopup: state.currentPopup,
  };
};

const mapDispatch = (dispatch) => ({
  fetchQuestion: () => {
    dispatch(thunks.fetchQuestion());
  },
  onDrop: (val) => {
    dispatch(updateDroppedElement(val));
  },
  onInCorrectDrop: () => {
    dispatch(updateToastMsg("incorrect"));
    dispatch(common.toggleToastMessage(true));
  },
  updateLiveText: (val) => {
    dispatch(common.ariaLiveText(val));
  },
  dropPlatesOnCanvas: (val, selectedYear, selectedPlate, resetBtnState) => {
    if (resetBtnState) {
      dispatch(common.updateResetBtnState(false));
    }
    dispatch(thunks.dropPlatesOnCanvas(val, selectedYear, selectedPlate));
  },
  updateCanvasData: (val) => {
    dispatch(updateCanvasData(val));
  },
});

export default connect(mapState, mapDispatch)(Background);
