import { connect } from "react-redux";
import { setQuestionAnswered, thunks } from "../actions";
import Checkboxes from "../components/TopBottom/Checkboxes";

import data from "../data";

const mapState = (state) => ({
  questionId: state.question?.id,
  selectedOptions: state.mcq2Answer,
  questionAnswered: state.questionAnswered,
  isPopupActive: !!state.currentPopup.length,
  checkboxes: data.mcq2Options[state.question?.id] || [],
});

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    dispatch(thunks.setMCQ2Answer(id));
  },
});

export default connect(mapState, matchDispatch)(Checkboxes);
