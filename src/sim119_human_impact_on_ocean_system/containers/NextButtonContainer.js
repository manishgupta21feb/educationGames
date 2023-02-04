import Button from '../../app/components/Button';
import { connect } from "react-redux";
import { common, thunks } from '../actions';
import data from '../data';

const mapState = (state) => {

  const nextBtnText = state.showStatic ?
    (state.questionCount == 4 ? data.buttonLabels.finish : data.buttonLabels.continue) :
    (state.questionCount == 2 ? data.buttonLabels.next : data.buttonLabels.continue);

  return {
    text: nextBtnText,
    isPopUpOpen: !!state.currentPopup.length,
    classes: nextBtnText == "Finish" ? "toast-secondary-button positive" : "right-arrow toast-secondary-button positive"
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
