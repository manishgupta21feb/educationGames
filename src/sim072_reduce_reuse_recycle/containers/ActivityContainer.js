import Activity from "../components/activity";
import { connect } from "react-redux";

import data from "../data/index";
import { common } from "../actions";


const mapState = (state) => ({
    isSimulationStart: state.startSimulation,
    data: data,
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,
    correctAttempt: state.correctAnswer,
    answerAttempted: state.answerAttempted,
    audioStatePlay: state.audioStatePlay,
    questionView: state.questionView
});

const mapDispatch = (dispatch) => ({
    onStartActivity: () => {
        EventManager.broadcast("OUTDOOR_SCREEN");
        dispatch(common.togglePopup(1));
    },
});

export default connect(mapState, mapDispatch)(Activity);
