import { connect } from "react-redux";
import Bottom from "../components/TopBottom/Bottom";

import { thunks } from "../actions";

const mapState = (state) => ({
  question: state.question,
  currentScreen: state.currentScreen,
  questionAnswered: state.questionAnswered,
});

const matchDispatch = (dispatch) => ({
  onRadioButtonChange: (id) => {
    dispatch(thunks.setMCQ1Answer(id));
  },
});

export default connect(mapState, matchDispatch)(Bottom);
