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
  selectedCircuit,
} from "../actions/";

const mapState = (state) => {
  const dropZonesFilled =
    state.droppedAtOne.length > 0 &&
    state.droppedAtTwo.length > 0 &&
    state.droppedAtThree.length > 0 &&
    state.droppedAtFour.length > 0 &&
    state.droppedAtFive.length > 0 &&
    state.droppedAtSix.length > 0 &&
    state.droppedAtSeven.length > 0;

  return {
    continueButton: data.continueButton,
    screen1Heading: data.screen1Heading,
    mainScreenText: data.mainScreenText,
    selectedOption: state.selectedOption,
    isPopupActive: !!state.currentPopup.length,

    data: data,
    pins: data.pins,
    mainScreen: state.showMainScreen,
    firstScreen: state.showFirstScreen,
    secondScreen: state.showSecondScreen,
    visitedPages: state.visitedPages,

    answered: state.answered,
    correct: state.correctAnswer,
    isPopupActive: !!state.currentPopup.length,
    droppablesFull: dropZonesFilled,
    circuitAlt: state.correctAnswer ? state.dynamicAltText : data.circuitAlt,
  };
};

const matchDispatch = (dispatch) => ({
  onItemClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.verifyItem(id));
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
  selectedCircuit: (value) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.selectedCircuit(value));
  },
});

export default connect(mapState, matchDispatch)(FullView);
