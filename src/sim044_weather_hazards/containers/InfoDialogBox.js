import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import data from "../data";
import { togglePopup } from "../actions/index";

const mapState = (state) => ({
  dialogType: "attention",
  buttonClasses: "right-arrow",
  header: data.instructionBoxHeader,
  content: data.instructionBoxContent,
  buttonContinueText: data.buttonStart,
  buttonContinueLabel: data.buttonStart,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
