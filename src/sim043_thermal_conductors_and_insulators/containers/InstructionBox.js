import { connect } from "react-redux";
import InstructionBox from '../../app/components/DialogBox';
import data from '../data';
import { 
  common,
  setStartActivity 
} from "../actions";

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
    dispatch(setStartActivity(true));
  }
});

export default connect(mapState, mapDispatch)(InstructionBox);
