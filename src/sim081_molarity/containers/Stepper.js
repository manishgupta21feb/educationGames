import Stepper from "../../app/components/Stepper";
import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import {
  thunks,
  common,
  setStepperValue,
  correctAttempt,
  showToastMessage,
  setPrevButtonCount,
} from "../actions";

import data from "../data";

const mapState = (state) => ({
  min: 0,
  max: 40,
  step: state.questionsData[state.questionCount - 1].step,
  titleIncrement: data.increment,
  titleDecrement: data.decrement,
  labelOne: data.labelOne,
  labelTwo: data.labelTwo,
  heading: data.questionsData.amountSolvent,
  labelledby: "eq3",
  reset: state.resetCounterValues,
  isPopupActive: !!state.currentPopup.length,
  prevCountBtnState: state.prevCountBtnState,
  stepperValue: state.stepperValue,
});

const mapDispatch = (dispatch, state) => ({
  stepperCheck: () => {
    dispatch(correctAttempt(true));
    dispatch(showToastMessage(true));
  },
});

export default connect(mapState, mapDispatch)(Stepper);
