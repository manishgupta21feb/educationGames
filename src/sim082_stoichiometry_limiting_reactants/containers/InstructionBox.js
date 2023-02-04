import { connect } from "react-redux";
import InstructionBox from '../../app/components/DialogBox';
import data from '../data';
import { common } from "../actions";

const mapState = (state) => ({
  header: "",
  id: "instructionBox",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.buttonLabels.start,
  buttonContinueLabel: data.buttonLabels.start,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(1));
  }
});

export default connect(mapState, mapDispatch)(InstructionBox);
