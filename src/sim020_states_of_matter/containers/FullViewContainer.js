import { connect } from "react-redux";
import FullView from "../components/FullView";
import EventManager from "../../app/events/manager";

import data from "../data";
import {
  selectQuestion,
  thunk,
  tempButtonClick,
  setArrayValues,
  deleteArrayValues,
} from "../actions/activity";
import { ariaLiveText } from "../actions";

const mapState = (state) => ({
  answered: state.answered,
  fullViewBGAlt: data.fullViewBGAlt,
  continueButton: data.continueButton,
  selectedQuestion: state.selectedQuestion,
  questions: data.classifyingMatterContent,
  isPopupActive: !!state.currentPopup.length,
  mainScreenText: data.mainScreenText,
  arrayValues: state.arrayValues,
  selectedQuestion: state.selectedQuestion,
  activityHeading: data.activityHeading,
});

const matchDispatch = (dispatch) => ({
  onItemClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.verifyItem(id));
    dispatch(selectQuestion(id));
  },
  onContinueClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.onContinueClick());
  },
  tempButtonClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
  },
  setArrayValues: (val) => {
    dispatch(setArrayValues(val));
  },
  deleteArrayValues: (val) => {
    dispatch(deleteArrayValues(val));
  },
  ariaLiveText: (text) => {
    dispatch(ariaLiveText(text));
  },
});

export default connect(mapState, matchDispatch)(FullView);
