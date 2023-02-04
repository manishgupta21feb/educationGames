import LeftView from "../components/LeftView";
import { connect } from "react-redux";
import { thunk, common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    //----> From Data
    question: data.questions[state.getQuestionNumber],
    observationMotive: data.observationMotive,

    //From State
    questionNumber: state.getQuestionNumber,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftView);
