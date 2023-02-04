import { isAndroid } from "react-device-detect";
import { connect } from "react-redux";
import { common, onScreen2Reset, onScreenUpdate, updateToastMsg, updateVisited } from "../actions";
import Screen2 from "../components/Screens/Screen2";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    instructionText: data.onScreenTexts[2],
    screenData: data.dragAndDropArea[2],
    visited: state.visited,
    buttonLabels: data.buttonLabels
  };
};

const mapDispatch = (dispatch) => ({
  setVisited: (val, liveTxt) => {
    dispatch(updateVisited(val));
    if(liveTxt){
      if (isAndroid) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(liveTxt));
        }, 200);
      } else {
        dispatch(common.thunks.ariaLiveAssertive(liveTxt));
      }
    }
  },
  onCorrect: () => {
    EventManager.broadcast("POSITIVE_FEEDBACK");
    dispatch(updateToastMsg("correct"));
    dispatch(common.toggleToastMessage(true));
    TincanManager.data.percentage = 100;
    TincanManager.data.completed = true;
    TincanManager.saveTincanData();
  },
  onIncorrect: () => {
    EventManager.broadcast("NEGATIVE_FEEDBACK");
    dispatch(updateToastMsg("incorrect"));
    dispatch(onScreenUpdate({}));
    dispatch(common.toggleToastMessage(true));
  },
  onNextClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(updateToastMsg(""));
    dispatch(common.toggleToastMessage(true));
    dispatch(common.togglePopup(4));
  },
  onScreen2Reset: () => {
    dispatch(onScreen2Reset());
  }
});

export default connect(mapState, mapDispatch)(Screen2);
