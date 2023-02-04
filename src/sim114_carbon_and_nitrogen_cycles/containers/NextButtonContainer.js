import Button from '../../app/components/Button';
import { connect } from "react-redux";
import data from '../data';
import {
  thunks,
  common
} from '../actions';

const mapState = (state) => {
  return {
    text: state.screenStatus == 'carbon-and-nitrogen' ? data.buttonLabels.finish : data.buttonLabels.next,
    isPopUpOpen: !!state.currentPopup.length,
    classes: "right-arrow toast-secondary-button positive"
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
