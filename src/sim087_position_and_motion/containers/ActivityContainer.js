import Activity from "../components/activity";
import { connect } from "react-redux";

import data from "../data/index";
import { common } from "../actions";


const mapState = (state) => ({
    isSimulationStart: state.startSimulation,
    data: data,
    infoBox: state.homeScreen ? data.InfoBoxContentHome : state.animationScreenId === 'baseball' ? data.InfoBoxContentHit : data.InfoBoxContentPush,
    homeScreen: state.homeScreen,
    isPopupActive: !!state.currentPopup.length,
    showToastMessage: state.showToastMessage,
    correctAttempt: state.correctAnswer,
    answerAttempted: state.answerAttempted,
    audioStatePlay: state.audioStatePlay,
});

const mapDispatch = (dispatch) => ({
    onStartActivity: () => {
        EventManager.broadcast("OUTDOOR_SCREEN");
        dispatch(common.togglePopup(1));
    },
});

export default connect(mapState, mapDispatch)(Activity);
