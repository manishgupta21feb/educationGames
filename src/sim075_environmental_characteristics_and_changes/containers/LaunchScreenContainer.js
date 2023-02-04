import { connect } from "react-redux";
import LaunchScreen from "../components/Screens/LaunchScreen";
import { common, thunks } from "../actions";
import data from "../data/data.en";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    currentScreen: state.currentScreen,
    buttonLabels: data.buttonLabels,
    screenData: data.screens["screen" + state.currentScreen],
    questionCounterString: data.questionCounterString,
    selectedAnsId: state.selectedAnsId,
    starRatings: state.finalStarRating,
    resetBtnState: state.resetBtnState,
  };
};

const mapDispatch = (dispatch) => ({
  activeReset: () => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(dispatch(common.updateResetBtnState(false)));
  },
  onNextClick: (val) => {
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    }, 100);
    dispatch(thunks.onNextClick(val));
    dispatch(common.onChangeScreen(1));
  },
  setStarRating: (value) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.setStarRating(value));
  },
  setSelectedAnsId: (val) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.onNextClick(val));
  },
});

export default connect(mapState, mapDispatch)(LaunchScreen);
