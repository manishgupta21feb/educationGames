import Button from '../../app/components/Button';
import { connect } from "react-redux";
import data from '../data';
import { 
  thunks, 
  common
} from '../actions';

const mapState = (state) => {

  const buttonText = state.screenStatus == 6 ? data.buttonLabels.finish : data.buttonLabels.next;

  const buttonClasses = state.screenStatus == 6 ? "toast-secondary-button positive" : "right-arrow toast-secondary-button positive";

  return {
    text: buttonText,
    isPopUpOpen: !!state.currentPopup.length,
    classes: buttonClasses
  }
};

const mapDispatch = (dispatch) => {
  return {
    onClick: () => {
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        dispatch(thunks.handleNextButtonClick());
        dispatch(common.setResetFocusState(true));
      }, 100);
    }
  }
};

export default connect(mapState, mapDispatch)(Button);
