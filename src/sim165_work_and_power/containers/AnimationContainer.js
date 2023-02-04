import { connect } from "react-redux";

import Animation from "../components/FullView/Animation";
import {
  thunk,
  common,
  setAnimationStart,
  setFreezePanel,
  setOnceDone,
  setAnyPartPlayed,
} from "../actions";
import simData from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    postureDirection: state.getDropDownData[1].text,
    postureForce: state.getDropDownData[0].text,
    begunAnimation: state.getAnimationStart,
    disableButton: !!state.currentPopup.length || state.getFreezePanel,
    sliderValue:
      state.getCurrentSection == "work"
        ? state.getUpdateSlider
        : state.getUpdateSlider == 0
        ? state.getUpdateSlider + 2
        : state.getUpdateSlider + 0.1,
    sectionData: state.getCurrentSection,
    onceDone: state.getOnceDone,

    imgAltText: Object.keys(state.getDropDownData[1]).length
      ? simData.imageAltArr[state.getDropDownData[1].text]
      : simData.imageAltArr.default,
    pushButtonLabel: simData.simButtonLabel,
    /* buttonContent: state.getAnyPartPlayed
      ? simData.buttonLabels.continue
      : simData.buttonLabels.next, */
    buttonContent: simData.buttonLabels.next,
  };
};

const mapDispatch = (dispatch) => ({
  animationData: (data) => {
    dispatch(setAnimationStart(data));
    dispatch(setFreezePanel(data));
    dispatch(thunk.liveContentAnnouncer());
    EventManager.broadcast("SECONDARY_CLICK");
  },
  animationEnd: (data) => {
    dispatch(setFreezePanel(data));
    dispatch(setOnceDone(true));
    dispatch(common.setResetFocusState(true));
  },
  resetSection: (data) => {
    dispatch(common.togglePopup(4));
    dispatch(setAnyPartPlayed(true));
    EventManager.broadcast("SECONDARY_CLICK");
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(Animation);
