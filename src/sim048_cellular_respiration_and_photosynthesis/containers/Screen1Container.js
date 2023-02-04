import { connect } from "react-redux";
import {
  common,
  onScreenUpdate,
  showToastMessage,
  thunks,
  updateToastMsg,
  updateVisited,
} from "../actions";
import Screen1 from "../components/Screens/Screen1";
import { isAndroid } from "react-device-detect";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    instructionText: data.onScreenTexts[1],
    screenData: data.dragAndDropArea[1],
    visited: state.visited,
    buttonLabels: data.buttonLabels,
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
    TincanManager.data.percentage = 67;
    TincanManager.saveTincanData();
  },
  onIncorrect: () => {
    EventManager.broadcast("NEGATIVE_FEEDBACK");
    dispatch(updateToastMsg("incorrect"));
    dispatch(onScreenUpdate({}));
    dispatch(common.toggleToastMessage(true));
  },
  onNextClick: () => {
    dispatch(thunks.onNextClick(2));
  },
});

export default connect(mapState, mapDispatch)(Screen1);
