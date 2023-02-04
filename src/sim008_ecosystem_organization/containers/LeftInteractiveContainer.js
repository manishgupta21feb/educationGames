import { connect } from "react-redux";
import LeftInteractive from "../components/LeftArea/LeftInteractive";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    questions: data.ecosystemContent,
    startActivity: state.startActivity,
    selectedQuestion: state.selectedQuestion,
    isPopupActive: !!state.currentPopup.length,
    headingText: data.headingText,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onOrganismClick());
  },
  submitAnswer: () => {
    dispatch(thunks.organismsSelectionCompleted());
  },
});

export default connect(mapState, mapDispatch)(LeftInteractive);
