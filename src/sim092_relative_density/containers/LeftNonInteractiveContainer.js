import { connect } from "react-redux";
import NonInteractive from "../components/left/nonInteractive";

import data from "../data";

const mapState = (state) => ({
    questions: data.equationsData,
    currentPopup: state.currentPopup,
    question: state.selectedQuestion,
});

const matchDispatch = (dispatch) => ({
});

export default connect(mapState, matchDispatch)(NonInteractive);
