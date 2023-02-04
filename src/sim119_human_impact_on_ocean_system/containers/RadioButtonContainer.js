import { connect } from "react-redux";
import RadioButton from '../../app/components/RadioButton/index.jsx';
import data from '../data';
import { 
  common, 
  answerAttempt, 
  selectOption 
} from '../actions';

const mapState = (state) => {

  const radioButtons = data.mainMCQOptions.map((m) => ({
    id: m,
    text: m
  }));

  const radioText = data.mcqOptions.map((m) => ({
    text: m,
    id: m
  }));

  const { showStatic } = state;

  return {
    selectedOption: state.selectedOption,
    isPopupActive: !!state.currentPopup.length,
    radiobuttons: showStatic ? radioText : radioButtons,
    disabled: (state.answerAttempted && state.correctAnswer) || state.isVideoEnded
  }
}

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectOption(id));
    dispatch(answerAttempt(false));
    dispatch(common.toggleToastMessage(false));
  }
});

export default connect(mapState, mapDispatch)(RadioButton);
