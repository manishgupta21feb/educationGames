import { connect } from "react-redux";
import data from '../data';
import { thunks } from '../actions';
import FullViewScreen2 from '../components/activity/FullViewScreen/FullViewScreen2';

const mapState = (state) => ({
  screen2QuestionText1: data.screen2QuestionText1,
  screen2QuestionText2: data.screen2QuestionText2,
  screen2GreenStrandData: data.screen2GreenStrandData,
  screen2BlueStrandData: data.screen2BlueStrandData,
  answerAttempted: state.answerAttempted,
  correctAttempt: state.correctAnswer,
  imgAltTexts: data.imgAltTexts
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.submitScreen2Answer(id));
  }
});

export default connect(mapState, mapDispatch)(FullViewScreen2);
