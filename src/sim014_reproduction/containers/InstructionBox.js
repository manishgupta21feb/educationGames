import { connect } from "react-redux";
import InstructionBox from "../../app/components/DialogBox";

import data from "../data";
import {
  thunks,
  common,
  buttonClicked,
  questionCount,
  setActivityStart,
} from "../actions";

const mapState = (state) => ({
  header: "",
  id: "instructionBox",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.buttonStart,
  buttonContinueLabel: data.buttonStart,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(1));
    dispatch(setActivityStart(true));
    dispatch(buttonClicked(false));
    dispatch(questionCount(0));
    dispatch(thunks.toggleAudioBtn());
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("OUTDOOR_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(InstructionBox);
