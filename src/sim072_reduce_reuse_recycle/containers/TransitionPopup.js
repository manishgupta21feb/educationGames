import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import TransitionPopup from "../../app/components/CompletionScreen";
import { togglePopup } from "../actions/index";
import data from "../data";
import { thunk, common } from "../actions";

const mapState = (state) => {

  let transitionPopup = {type:'warning',heading:''}
  if (!state.questionView) {
    transitionPopup = data.transitionPopup
  } else {
    if (state.questionNum === 0) {
      transitionPopup = data.transitionPopupQuestionOne
    } else if (state.questionNum === 1) {
      transitionPopup = data.transitionPopupQuestionTwo
    }
  }
  
  return {
    ...transitionPopup,
    id: "transitionPopup",
  }
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
    dispatch(thunk.onContinue());
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(TransitionPopup);
