import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import Right from "../components/RightSection";

import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => {
  return {
    answered: state.answered,
    headingScreenone: data.heading,
    buttonFinish: data.buttonFinish,
    arrayVisited: state.arrayVisited,
    itemsVisited: state.itemsVisited,
    continueButton: data.continueButton,
    headingScreenTwo: data.headingScreenTwo,
    isPopupActive: !!state.currentPopup.length,
    totalQuestions: data.classifyingMatterContent.length,
  };
};

const matchDispatch = (dispatch) => ({
  onFinishClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(7));
    TincanManager.data.completed = true;
    TincanManager.data.percentage = 100;
    TincanManager.saveTincanData();

    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 300);
  },

  onContinueClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.onContinueClick());
  },
});

export default connect(mapState, matchDispatch)(Right);
