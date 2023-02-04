import { connect } from "react-redux";
import FullView from "../components/FullView";
import EventManager from "../../app/events/manager";

import data from "../data";
import {
  common,
  thunks,
  setShowMainScreen,
  setShowFirstScreen,
  setShowSecondScreen,
  addVisitedPage,
  setSwitchState,
  setON,
  setWaveOne,
  setWaveTwo,
  setRedWave,
  setBlueWave,
  setYellowWave,
  setAnimateRadiations,
  setSwitchCondition,
  setForwardArrow,
  setReverseArrowOne,
  setReverseArrowTwo,
  setArrowThree,
  setShowTable,
  setSelectedOption,
} from "../actions/";

const mapState = (state) => {
  return {
    data: data,
    screen1Heading: data.screen1Heading,
    mainScreenText: data.mainScreenText,
    selectedOption: state.selectedOption,
    mainScreen: state.showMainScreen,
    firstScreen: state.showFirstScreen,
    secondScreen: state.showSecondScreen,
    visitedPages: state.visitedPages,
    isPopupActive: !!state.currentPopup.length,

    on: state.on,
    waveOne: state.waveOne,
    waveTwo: state.waveTwo,
    redWave: state.redWave,
    blueWave: state.blueWave,
    yellowWave: state.yellowWave,
    animateRadiations: state.animateRadiations,
    switchCondition: state.switchCondition,

    forwardArrow: state.forwardArrow,
    reverseArrowOne: state.reverseArrowOne,
    reverseArrowTwo: state.reverseArrowTwo,
    arrowThree: state.arrowThree,
    showTable: state.showTable,
  };
};

const matchDispatch = (dispatch) => ({
  onItemClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
  setResetFocusState: (focus) => {
    dispatch(common.setResetFocusState(focus));
  },
  ariaLiveText: (text) => {
    dispatch(common.ariaLiveText(text));
  },
  setShowMainScreen: (value) => {
    dispatch(setShowMainScreen(value));
  },
  setShowFirstScreen: (value) => {
    dispatch(setShowFirstScreen(value));
  },
  setShowSecondScreen: (value) => {
    dispatch(setShowSecondScreen(value));
  },
  addVisitedPage: (value) => {
    dispatch(addVisitedPage(value));
  },
  // selectedCircuit: (value) => {
  //   EventManager.broadcast("SECONDARY_CLICK");
  //   dispatch(thunks.selectedCircuit(value));
  // },
  setSwitchState: (value) => {
    dispatch(setSwitchState(value));
  },
  setOn: (value) => {
    dispatch(setON(value));
    if (value == "1") {
      dispatch(common.toggleToastMessage(false));
      EventManager.broadcast("STOP_ALL");
    }
    dispatch(common.setResetFocusState(true));
  },
  setWaveOne: (value) => {
    dispatch(setWaveOne(value));
  },
  setWaveTwo: (value) => {
    dispatch(setWaveTwo(value));
  },
  setRedWave: (value) => {
    dispatch(setRedWave(value));
  },
  setBlueWave: (value) => {
    dispatch(setBlueWave(value));
  },
  setYellowWave: (value) => {
    dispatch(setYellowWave(value));
  },
  setAnimateRadiations: (value) => {
    dispatch(setAnimateRadiations(value));
  },
  setSwitchCondition: (value) => {
    dispatch(setSwitchCondition(value));
  },
  setForwardArrow: (value) => {
    dispatch(setForwardArrow(value));
  },
  setReverseArrowOne: (value) => {
    dispatch(setReverseArrowOne(value));
  },
  setReverseArrowTwo: (value) => {
    dispatch(setReverseArrowTwo(value));
  },
  setArrowThree: (value) => {
    dispatch(setArrowThree(value));
  },
  setShowTable: (value) => {
    dispatch(setShowTable(value));
  },
  toggleMessage: () => {
    dispatch(thunks.toggleMessage());
  },
  setSelected: (id) => {
    dispatch(setSelectedOption(id));
  },
});

export default connect(mapState, matchDispatch)(FullView);
