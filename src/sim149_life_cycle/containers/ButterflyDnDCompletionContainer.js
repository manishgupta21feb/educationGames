import { connect } from "react-redux";
import TransitionPopup from "../../app/components/CompletionScreen";
import data from "../data";
import {
  common,
  setCount,
  setCurrentHotSpot,
  setScreen,
  setVisitedBtn,
  thunks,
  setAnswer,
  setShowToastFive,
  setDnDCount,
  setDefaultDrop,
} from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => ({
  ...data.transitionPopupButterDnD,
  id: "transitionPopup",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.togglePopup(5));
    dispatch(setScreen(true));
    dispatch(setCurrentHotSpot(""));
    dispatch(thunks.setQuestion());
    dispatch(thunks.setOst());
    dispatch(setVisitedBtn(""));
    dispatch(setAnswer(false));

    dispatch(setShowToastFive(false));
    dispatch(setDnDCount(0));
    dispatch(setDefaultDrop());
    dispatch(thunks.setDraggable());
  },
});

export default connect(mapState, mapDispatch)(TransitionPopup);
