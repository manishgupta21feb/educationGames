import { connect } from "react-redux";
import RadioButton from '../../app/components/RadioButton/index.jsx';
import data from '../data';
import {
  common,
  answerAttempt,
  selectOption,
  setNextButtonClick
} from '../actions';

const mapState = (state) => {

  const currentquestionNo = state.questionNo == 2 ? 1 : 0;

  const radioButtons = data.mcqOptions[currentquestionNo].map((m) => ({
    id: m.id,
    text: m.text
  }));

  return {
    selectedOption: state.selectedOption,
    isPopupActive: !!state.currentPopup.length,
    radiobuttons: radioButtons,
    disabled: state.answerAttempted && state.correctAnswer
  }
}

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectOption(id));
    dispatch(answerAttempt(false));
    dispatch(common.toggleToastMessage(false));
    dispatch(setNextButtonClick(true));
  }
});

export default connect(mapState, mapDispatch)(RadioButton);
