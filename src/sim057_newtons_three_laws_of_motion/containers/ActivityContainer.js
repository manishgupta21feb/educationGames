import Activity from "../components/activity";
import { connect } from "react-redux";

import data from "../data/index";
import { common, setScreenText } from "../actions";


const mapState = (state) => {
    return {
        isSimulationStart: state.startSimulation,
        data: data,
        infoText: state.investigatingStatus ? data.InfoBoxContentScreenTwo :data.InfoBoxContentScreenOne,
        altInfoText: state.investigatingStatus ? data.altInfoBoxContentTwo :data.altInfoBoxContentOne,
        isPopupActive: !!state.currentPopup.length,
        showToastMessage: state.showToastMessage,
        correctAttempt: state.correctAnswer,
        answerAttempted: state.answerAttempted,
        audioStatePlay: state.audioStatePlay,
        transitionPopup: data.transitionPopup,
    }
};

const mapDispatch = (dispatch) => ({
    onStartActivity: () => {
        EventManager.broadcast("OUTDOOR_SCREEN");
        dispatch(setScreenText(data.nonInvestigatingData[0].text))
        dispatch(common.togglePopup(1));
    },
});

export default connect(mapState, mapDispatch)(Activity);
