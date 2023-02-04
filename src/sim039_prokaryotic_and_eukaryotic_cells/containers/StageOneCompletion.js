import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  const selectedStage = state.selectedStage;
  return {
    type: "attention",
    buttonClasses: "right-arrow",
    heading: data[selectedStage].reward.header,
    content: data[selectedStage].reward.instruction,
    buttonText: data[selectedStage].reward.buttonText,
    buttonLabel: data[selectedStage].reward.buttonText,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(5));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(thunks.onStageOneComplete());
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
