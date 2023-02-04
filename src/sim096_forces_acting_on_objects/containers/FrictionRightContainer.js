import FrictionRight from "../components/sections/friction/rightSection";
import { connect } from "react-redux";
import EventManager from "../../app/events/manager";

import simData from "../data";
import { thunks, common, setCurrentFriction, setRunningTest } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    sectionContent: simData[state.getCurrentSection].content,
    questionContent: simData[state.getCurrentSection].questionContent,
    nextButton: simData.buttonLabels.next,
    frictionTest: state.getFrictionTest,
    simData,
  };
};

const mapDispatch = (dispatch) => ({
  updateCurrentFriction: (data) => {
    dispatch(setCurrentFriction(data));
    dispatch(setRunningTest(true));
    dispatch(thunks.setFrictionLiveText());
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  resetActivity: () => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(FrictionRight);
