import { connect } from "react-redux";
import TransitionPopup from "../../app/components/CompletionScreen";
import data from "../data";
import {
  common,
  thunks,
  setScreen,
  updateDropZone,
  droppableChangeFalse,
} from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  return {
    ...state.selectedQuestion.transitionPopupOne,
    id: "transitionPopup1",
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(setScreen(false));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.togglePopup(6));
    dispatch(setScreen(false));
    dispatch(thunks.setDraggable());
    dispatch(updateDropZone());

    dispatch(thunks.handleLevelOne());
  },
});

export default connect(mapState, mapDispatch)(TransitionPopup);
