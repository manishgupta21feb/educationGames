import { isAndroid } from "react-device-detect";
import { connect } from "react-redux";
import { common, onScreenUpdate, thunks, updateToastMsg, updateVisited } from "../actions";
import Screen0 from "../components/Screens/Screen0";
import data from "../data/data.en";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    buttonLabels: data.buttonLabels,
    instructionText: data.onScreenTexts[0],
    screenData : data.dragAndDropArea[0],
    visited: state.visited
  };
};

const mapDispatch = (dispatch) => ({
  setVisited: (val, liveTxt) => {
    dispatch(updateVisited(val));
    dispatch(common.updateResetBtnState(false));
    if(liveTxt){
      if (isAndroid) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(liveTxt));
        }, 200);
      } else {
        dispatch(common.thunks.ariaLiveAssertive(liveTxt));
      }
    }  },
  onChangeScreen: (val) => {
    dispatch(common.onChangeScreen(val));
  },
  onUpdate: (val) => {
    dispatch(onScreenUpdate(val));
  },
  onCorrect: () => {
    EventManager.broadcast("POSITIVE_FEEDBACK");
    dispatch(updateToastMsg("correct"));
    dispatch(common.toggleToastMessage(true));
    TincanManager.data.percentage = 33;
    TincanManager.saveTincanData();
  },
  onIncorrect: (val) => {
    EventManager.broadcast("NEGATIVE_FEEDBACK");
    dispatch(updateToastMsg(val));
    dispatch(common.toggleToastMessage(true));
  },
  onNextClick: () => {
    dispatch(thunks.onNextClick(1));
  }
});

export default connect(mapState, mapDispatch)(Screen0);
