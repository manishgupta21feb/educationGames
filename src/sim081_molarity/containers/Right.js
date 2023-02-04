import { connect } from "react-redux";
import Right from "../components/activity/Main/Right";
import data from "../data";
import { correctAttempt, setStepperValue, common, thunk } from "../actions";

const mapState = (state) => ({
  data: data,
  instruction: data.instruction,
  currentMolarity: state.questionsData[state.questionCount - 1].currentMolarity,
  currentVolume: state.questionsData[state.questionCount - 1].currentVolume,
  desiredMolarity: state.questionsData[state.questionCount - 1].desiredMolarity,
  currentMolarityText: data.questionsData.currentMolarity,
  currentVolumeText: data.questionsData.currentVolume,
  desiredMolarityText: data.questionsData.desiredMolarity,
  amountSolvent: data.questionsData.amountSolvent,
  stepperValue: state.stepperValue,
  correctAttempt: state.submittedAnswer,
  showToastMessage: state.showToastMessage,
});

const matchDispatch = (dispatch) => ({
  onStepperChange: (value) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.setStepperValue(value));
    dispatch(common.toggleToastMessage(false));
  },
  ariaLiveText: (text) => {
    dispatch(common.ariaLiveAssertive(text));
  },
});

export default connect(mapState, matchDispatch)(Right);
