import { connect } from "react-redux";
import InstructionBox from "../../app/components/DialogBox";

import data from "../data";
import { common, startSimulation } from "../actions";

const mapState = (state) => ({
  header: "",
  id: "instructionBox",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.buttonLabels.start,
  buttonContinueLabel: data.buttonLabels.start,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.setResetFocusState(true));
    dispatch(common.togglePopup(1));
    dispatch(startSimulation(false));
  },
});

export default connect(mapState, matchDispatch)(InstructionBox);
