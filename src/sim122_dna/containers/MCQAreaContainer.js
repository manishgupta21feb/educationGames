import { connect } from "react-redux";
import MCQArea from '../../app/components/MCQArea';
import data from '../data';
import { thunks } from '../actions';

const mapState = (state) => ({
  buttonText: data.buttonLabels.submitAnswer,
  question: data.screen3QuestionText,
  disabled: !state.selectedOption || state.correctAnswer,
  headingLevel: "2",
  isPopupActive: !!state.currentPopup.length
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.submitAnswer());
  }
});

export default connect(mapState, mapDispatch)(MCQArea);
