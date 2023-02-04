import { connect } from "react-redux";
import GeneFunction from "../components/activity/GeneFunction";

import data from "../data";
import { common, updateCurrentTrait } from "../actions";

const mapState = (state) => {
  return {
    textData: data,
    currentTrait: state.currentTrait,
    geneFunctions: state.geneFunctions,
    isPopupActive: !!state.currentPopup.length,
    headingScreen2: data.headingScreen2,
  };
};

const mapDispatch = (dispatch) => ({
  nextBtnPressed: (currentTrait) => {
    console.log(currentTrait, "==============");
    dispatch(common.ariaLiveText(" "));
    if (currentTrait == 2) {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      // setTimeout(() => {
      dispatch(common.togglePopup(5));
      // });
      setTimeout(() => {
        EventManager.broadcast("COMPLETION_SCREEN");
      }, 300);
    } else {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.setResetFocusState(true));
      dispatch(updateCurrentTrait(currentTrait + 1));
    }
    TincanManager.data.percentage =
      (4 / 7) * 100 + ((currentTrait + 1) / 7) * 100;
    currentTrait == 2 ? (TincanManager.data.completed = true) : null;

    TincanManager.saveTincanData();
  },
});

export default connect(mapState, mapDispatch)(GeneFunction);
