import { connect } from "react-redux";
import { common } from "../actions";
import ScreenTwo from "../components/ViewArea/ScreenTwo";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    selectedTrait: state.selectedTrait,
    currectQuestion: state.currectQuestion,
    correctAnswer: state.correctAnswer,
    data: data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenTwo);
