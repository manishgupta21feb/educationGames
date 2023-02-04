import { connect } from "react-redux";
import { isAllObservationDone } from "../helper.js";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  let currentExpNo =
    state.toggleScreen != 3
      ? isAllObservationDone(state.toggleScreen, state.observationsData)
      : 1;
  return {
    id: currentExpNo == 3 ? "teNextScreenBtn" : "teCompleteScreenBtn",
    content:
      currentExpNo == 3
        ? data.nextScreenCompletion.text
        : data.finishBoxContent,
    type: currentExpNo == 3 ? "attention" : "positive",
    heading:
      currentExpNo == 3
        ? data.nextScreenCompletion.heading
        : data.finsihBoxHeader,
    buttonText:
      currentExpNo == 3
        ? data.nextScreenCompletion.button
        : data.buttonLabels.reset,
    buttonLabel:
      currentExpNo == 3
        ? data.nextScreenCompletion.button
        : data.buttonLabels.reset,
    buttonClasses:
      currentExpNo == 3 ? "right-arrow" : "reset-white reverse icon",
  };
};

const mapDispatch = (dispatch, state) => ({
  onClick: (e) => {
    dispatch(thunk.resetActivity(false));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
