import { connect } from "react-redux";
import NuclearComponent from "../components/activity/NuclearChemistry";

import data from "../data/index";
import { thunks } from "../actions";

const mapStateToProps = (state) => ({
  data: data,
  answerOptions: data.answerOptions,
  correctAttempt: state.submittedAnswer,
  answerSubmitted: state.answerSubmitted,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () => {
    dispatch(thunks.submitAnswer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NuclearComponent);
