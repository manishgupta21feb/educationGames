import LeftStatic from "../components/LeftArea/LeftStatic";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => ({
  question: data.mcqData,
  selectedQuestion: state.selectedQuestion,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftStatic);
