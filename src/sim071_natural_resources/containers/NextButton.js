import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import NextButton from "../../app/components/Button";
import globalCommonData from "../../app/data/data.en";
import data from "../data/data.en";
import { questionCount, thunks, common } from "../actions";

const mapState = (state) => (
  {
  text: state.secondScreen
  ? data.instructionTwo.length == state.questionCount
    ? data.finish
    : data.continue
  : data.buttonNext,
  isPopUpOpen: !!state.currentPopup.length,
  // classes: " right-arrow toast-secondary-button positive",
  classes: state.secondScreen ? data.instructionTwo.length == state.questionCount
  ?  "toast-secondary-button positive"
  :  " right-arrow toast-secondary-button positive"
  :   " right-arrow toast-secondary-button positive",

});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.nextButtonClick());
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("COMPLETION_SCREEN");
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(NextButton);
