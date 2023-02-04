import { connect } from "react-redux";
import InstructionBox from "../../app/components/DialogBox";

import data from "../data";
import { common, buttonClicked, questionCount } from "../actions";

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
    dispatch(buttonClicked(false));
    dispatch(questionCount(0));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(InstructionBox);
