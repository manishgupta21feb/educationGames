import { connect } from "react-redux";
import FullView from "../components/FullView";
import EventManager from "../../app/events/manager";
import data from "../data";
import { common, thunks, setSubmitBtnVisibility } from "../actions/";

const mapState = (state) => {
  return {
    rawData: data,
    counters: state.counters,
    equations: data.equations,
    arrowTail: data.arrowTail,
    question: state.selectedQuestion,
    fullViewBGAlt: data.fullViewBGAlt,
    correctAttempt: state.correctAnswer,
    continueButton: data.continueButton,
    screen1Heading: data.screen1Heading,
    selectedOption: state.selectedOption,
    counterChangeType: data.counterChangeType,
    isPopupActive: !!state.currentPopup.length,
    coefficientCounterLiveText: data.coefficientCounterLiveText,
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
  updateCountersValue: (value, id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.updateCountersValue(value, id));
    dispatch(common.updateResetBtnState(false));
    dispatch(setSubmitBtnVisibility(false));
  },
});

export default connect(mapState, matchDispatch)(FullView);
