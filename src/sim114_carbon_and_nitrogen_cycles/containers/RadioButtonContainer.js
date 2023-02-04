import { connect } from "react-redux";
import RadioButton from '../../app/components/RadioButton/index.jsx';
import data from '../data';
import {
  common,
  selectOption
} from "../actions";

const mapState = (state) => {

  const radioButtons = data.nitrogenNDMcqOptions.map((m) => ({
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
    dispatch(common.updateResetBtnState(false));
  }
});

export default connect(mapState, mapDispatch)(RadioButton);
