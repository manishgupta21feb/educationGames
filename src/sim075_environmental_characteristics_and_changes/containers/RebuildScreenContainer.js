import { connect } from "react-redux";
import RebuildScreen from "../components/Screens/RebuildScreen";
import { common, thunks } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    starRatings: state.finalStarRating,
    selectedAnsId: state.selectedAnsId,
    screenData: data.screens["screen" + state.currentScreen],
    buttonLabels: data.buttonLabels,
  };
};

const mapDispatch = (dispatch) => ({
  focusToReset: () => {
    dispatch(common.setResetFocusState(true));
  },
  setStarRating: (value) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.setStarRating(value));
  },
  onFinishClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 100);
    dispatch(common.togglePopup(4));
    TincanManager.data.percentage = 100;
    TincanManager.data.completed = true;
    TincanManager.saveTincanData();
  },
});

export default connect(mapState, mapDispatch)(RebuildScreen);
