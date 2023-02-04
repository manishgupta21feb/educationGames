import { connect } from "react-redux";
import DisasterScreen from "../components/Screens/DisasterScreen";
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
  onNextClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    }, 100);
    dispatch(common.onChangeScreen(2));
    dispatch(common.setResetFocusState(true));
    TincanManager.data.percentage = 75;
    TincanManager.saveTincanData();
  },
});

export default connect(mapState, mapDispatch)(DisasterScreen);
