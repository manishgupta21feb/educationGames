import { connect } from "react-redux";
import data from "../data";
import { thunks, common } from "../actions";
import FullViewContainer from "../components/FullViewComponent";

const mapState = (state) => {
  return {
    headingLevelOne: data.pageHeadingOne,
    isPopupActive: !!state.currentPopup.length,
    imageAlt: data.imageAlt,
    value: state.selectedAnswerOption,
    massOne: state.massCounterOne,
    massTwo: state.massCounterTwo,
    chargeOne: state.chargeCounterOne,
    chargeTwo: state.chargeCounterTwo,
    distance: state.distanceCounter,
    previousValue: state.previousValue,
    prevMassOne: state.previousMassOne,
    prevMassTwo: state.previousMassTwo,
    prevChargeOne: state.previousChargeOne,
    prevChargeTwo: state.previousChargeTwo,
    ballData: data.ballData,
    visited: state.visitedForce,
    counters: data.counterComponents,
  };
};

const matchDispatch = (dispatch) => {
  return {
    addVisitedButtons: (id) => {},
    setButtonID: (id) => {
      dispatch(common.updateResetBtnState(false));
    },
  };
};

export default connect(mapState, matchDispatch)(FullViewContainer);
