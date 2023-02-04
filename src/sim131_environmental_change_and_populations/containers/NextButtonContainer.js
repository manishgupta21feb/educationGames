import Button from '../../app/components/Button';
import { connect } from "react-redux";
import data from '../data';
import { 
  common,
  thunks,
  isInteractive 
} from '../actions';

const mapState = (state) => {

  const nextButtonText = state.questionNo == 3 ? data.buttonLabels.finish : data.buttonLabels.continue;

  const nextButtonClasses = state.questionNo == 3 ? "toast-secondary-button positive" : "right-arrow toast-secondary-button positive"

  return {
    text: nextButtonText,
    isPopUpOpen: !!state.currentPopup.length,
    classes: nextButtonClasses
  }
};

const mapDispatch = (dispatch) => {
  return {
    onClick: () => {
      EventManager.broadcast("SECONDARY_CLICK");
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      }, 100);
      dispatch(isInteractive(true));
      dispatch(thunks.handleNextButtonClick());
    }
  }
};

export default connect(mapState, mapDispatch)(Button);
