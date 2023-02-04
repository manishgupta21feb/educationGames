import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    id: "completionPopup4",
    ...data.transitionPopup
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.setQuestions());
    dispatch(common.setResetFocusState(true));
    setTimeout(() => {
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    })
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
