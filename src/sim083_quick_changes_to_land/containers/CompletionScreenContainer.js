import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import {
  common,
  startSimulation,
  questionCount,
  selectOption,
  selectOptionSecond,
  thunks,
} from "../actions";

const mapState = (state) => ({
  id: "completionContinue",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.nextSectionContinue());
    setTimeout(() => {
      dispatch(startSimulation(true));
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(questionCount(0));
      dispatch(selectOption({}));
      dispatch(selectOptionSecond({}));
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
