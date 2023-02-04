import { connect } from "react-redux";
import TopSection from "../components/questionView/topSection";


import data from "../data/index";
import { common, thunk } from "../actions";

const mapState = (state) => ({
    questionNum:state.questionNum,
    options: state.questionOptions,
    questionOptions: data.questionsData[state.questionNum],
    isPopupActive: !!state.currentPopup.length
})

const matchDispatch = (dispatch) => ({
    checkAnswer: (id) => {
        dispatch(thunk.checkAnswer(id))
        EventManager.broadcast("SECONDARY_CLICK");
    }
});

export default connect(mapState, matchDispatch)(TopSection);