import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import {
  thunks,
  common,
  setStatic,
  resetQuestion,
  jumpToMCQScreen,
} from "../actions";

const mapState = (state) => ({
  id: "completionContinue",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
    dispatch(setStatic(true));
    dispatch(resetQuestion());
    dispatch(jumpToMCQScreen(true));
    dispatch(thunks.continueButtonClick());
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
