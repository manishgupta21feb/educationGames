import { connect } from "react-redux";
import AnimationScreen from "../components/AnimationScreen";
import data from "../data";

import { thunk, setPlaySelectedAnimation, setShowVideoLevel } from "../actions";

const mapState = (state) => {

    let animationScreenData = state.animationScreenId === 'seesaw' ? data.seesawData : data.baseballData

    return {
        heading: animationScreenData.activityHeading,
        imgAlt: animationScreenData.imageAlt,
        selectedAnswer: state.selectedAnswerOption,
        startActivity: state.startActivity,
        isPopupActive: !!state.currentPopup.length,
        buttonLabels: data.buttonLabels,
        observationsData: animationScreenData.observationsData,
        currentExperimentNumber: state.currentExperimentNumber,
        currentPopup: state.currentPopup,
        equationOptions: animationScreenData.equationOptions,
        playSelectedAnimation: state.playSelectedAnimation,
        animationScreenId: state.animationScreenId,
        isContinue: state.isContinue
    }
};

const matchDispatch = (dispatch, state) => ({
    togglePopup: (id) => {
        dispatch(common.togglePopup(id));
    },
    setPlayFocus: () => {
        dispatch(common.setResetFocusState(true));
    },
    onAnimationStart: () => {
        dispatch(setShowVideoLevel(true));
    },
    onAnimationEnd: () => {
        dispatch(setPlaySelectedAnimation(false));
        dispatch(thunk.showContinue());
    }
});

export default connect(mapState, matchDispatch)(AnimationScreen);