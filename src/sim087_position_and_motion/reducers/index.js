import * as actions from "../actions";
import reducers from "../../app/reducers";
import { combineReducers } from "redux";
import data from "../data/index";

const homeScreen = (state = true, { type, flag }) => {
    switch (type) {
        case actions.SET_HOME_SCREEN:
            return flag;
        default:
            return state;
    }
};

const animationScreenId = (state = '', { type, id }) => {
    switch (type) {
        case actions.SET_ANIMATION_SCREEN_ID:
            return id;
        default:
            return state;
    }
};

const currentExperimentNumber = (state = 0, action) => {
    switch (action.type) {
        case actions.CURRENT_EXPERIMENT_NUMBER:
            return action.data;
        default:
            return state;
    }
};

const selectedAnswerOption = (state = "", { type, id }) => {
    switch (type) {
        case actions.SELECT_ANSWER_OPTION:
            return id;
        default:
            return state;
    }
};

const playSelectedAnimation = (state = false, { type, playState }) => {
    switch (type) {
        case actions.PLAY_SELECTED_ANIMATION:
            return playState;
        default:
            return state;
    }
}

const isContinue = (state = false, { type, flag }) => {
    switch (type) {
        case actions.IS_CONTINUE:
            return flag;
        default:
            return state;
    }
}

const isBothVideoPalyed = (state = [...data.isBothVideoPlay], { type, arrObj }) => {
    switch (type) {
        case actions.IS_BOTH_VIDEO_PLAYED:
            return [...arrObj];
        default:
            return state;
    }
}

const showVideoLevel = (state = false, { type, flag }) => {
    switch (type) {
        case actions.IS_SHOW_VIDEO:
            return flag;
        default:
            return state;
    }
}

export default combineReducers({
    homeScreen,
    animationScreenId,
    currentExperimentNumber,
    selectedAnswerOption,
    playSelectedAnimation,
    isContinue,
    isBothVideoPalyed,
    showVideoLevel, 
    ...reducers,
});
