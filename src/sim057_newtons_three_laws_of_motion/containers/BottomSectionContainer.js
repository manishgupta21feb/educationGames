import { connect } from "react-redux";
import BottomSection from "../components/BottomSection";

const mapState = (state) => ({
    investigatingStatus: state.investigatingStatus,
    answerStatus: state.answerStatus
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(BottomSection);
