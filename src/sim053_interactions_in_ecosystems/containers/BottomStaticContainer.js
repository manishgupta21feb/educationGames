import { connect } from "react-redux";
import BottomStatic from "../components/BottomSection/BottomStatic.js";

const mapState = (state) => ({
    answerText: state.questionText,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(BottomStatic);