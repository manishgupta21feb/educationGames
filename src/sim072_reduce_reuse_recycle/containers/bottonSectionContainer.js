import { connect } from "react-redux";
import BottomSection from "./../components/questionView/bottomSection";

import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => ({
    answer: state.answerShow,
    heading: data.questionsData[state.questionNum].boxHeading,
    isPopupActive: !!state.currentPopup.length
})

const matchDispatch = (dispatch) => ({
});

export default connect(mapState, matchDispatch)(BottomSection);