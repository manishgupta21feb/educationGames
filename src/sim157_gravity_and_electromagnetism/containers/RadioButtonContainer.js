import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import EventManager from "../../app/events/manager";

import {
  common,
  selectedAnswer,
  resetCounterValues,
  setMassOne,
  setMassTwo,
  setChargeOne,
  setChargeTwo,
  setDistance,
  clearAllValues,
  setCounterButton,
  setTestButtonState,
} from "../actions";

import data from "../data";

const mapState = (state) => {
  return {
    radiobuttons: data.mcqData[0].radiobuttons,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
    disabled: state.submitAnswer,
    labelledby: "heading",
  };
};
const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    dispatch(setTestButtonState(true));
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(selectedAnswer(id));
    dispatch(common.updateResetBtnState(false));
    dispatch(resetCounterValues(true));
    dispatch(setMassOne(100));
    dispatch(setMassTwo(100));
    dispatch(setChargeOne(0));
    dispatch(setChargeTwo(0));
    dispatch(setDistance(0));
    dispatch(clearAllValues());
    dispatch(setCounterButton(""));
  },
});
export default connect(mapState, mapDispatch)(RadioButton);
