import TopSection from "../components/TopSection";
import { connect } from "react-redux";
import data from "../data/index";

const mapState = (state) => ({
  imgToDisplay: data.imageData,
  answerImgIndex: state.answerImg,
  questionText: state.questionText
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(TopSection);
