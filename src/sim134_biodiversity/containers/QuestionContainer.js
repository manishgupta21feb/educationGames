import { connect } from "react-redux";
import Question from "../components/locations/lowerSection/question";
import EventManager from "../../app/events/manager";

import data from "../data";
import {
  common,
  answerSubmitted,
  currentOptionState,
  setAttempts,
  thunk,
} from "../actions";

const mapState = (state) => {
  const buttonData = () => {
    const isLaunchCompleted = Object.values(state.updateTabsData).every(
      (element) => element.visited
    );
    if (isLaunchCompleted) {
      return data.buttonLabels.finish;
    } else {
      return data.buttonLabels.next;
    }
  };
  return {
    correctAnswer: data[state.currentLocation].correctAnswer,
    currentOptionUpdate: state.currentOptionUpdate,
    currentAttempts: state.getAttempts,
    isPopupActive: !!state.currentPopup.length,
    nextBtnContent: buttonData(),
  };
};

const matchDispatch = (dispatch) => ({
  onSubmitUpdate: (data) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(answerSubmitted(data));
    dispatch(thunk.onSubmitLocationsAnswer());
  },
  onWindowUpdate: (data) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.setSceneData(data));
  },
  onOptionUpdate: (data) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(currentOptionState(data));
    dispatch(common.toggleToastMessage(false));
  },
  onSetReset: () => {
    dispatch(common.setResetFocusState(true));
  },
  onAttemptUpdate: (data) => {
    dispatch(setAttempts(data));
  },
});

export default connect(mapState, matchDispatch)(Question);
