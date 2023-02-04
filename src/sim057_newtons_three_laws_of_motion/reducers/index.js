import * as actions from "../actions";

import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const scaleChange = (state = 1, { type, scale }) => {
    switch (type) {
        case actions.SCALE_CHANGE:
            return scale;
        default:
            return state;
    }
};

const currentPopup = (state = [], { type, id }) => {
    switch (type) {
        case actions.TOGGLE_POPUP:
            if (state.indexOf(id) == -1) {
                return [...state, id];
            } else {
                const _state = [...state];
                _state.splice(_state.indexOf(id), 1);
                return [..._state];
            }
        default:
            return state;
    }
};

const showToastMessage = (state = false, { toggle, type }) => {
    switch (type) {
        case actions.TOGGLE_TOAST_MESSAGE:
            return toggle;
        default:
            return state;
    }
};

const ariaLiveText = (state = "", { type, text }) => {
    switch (type) {
        case actions.ARIA_LIVE_TEXT:
            return text;
        default:
            return state;
    }
}

const soundManagerSources = (state = "", { type, sources }) => {
    switch (type) {
        case actions.SET_SOUND_MANAGER_SOURCES:
            if (Array.isArray(sources)) {
                return [...sources];
            }
            return sources;
        default:
            return state;
    }
};

const audioStartAgain = (state = false, { type, startAgain }) => {
    switch (type) {
        case actions.SET_START_AGAIN:
            return startAgain;
        default:
            return state;
    }
};

const nonInvestigatingId = (state = 0, { type, id }) => {
    switch (type) {
        case actions.SET_NON_INVESTIGATING_ID:
            return id;
        default:
            return state;
    }
};

const investigatingStatus = (state = false, { type, invStatus }) => {
    switch (type) {
        case actions.SET_INVESTIGATING_STATUS:
            return invStatus;
        default:
            return state;
    }
};

const investigatingQuestionId = (state = 0, { type, id }) => {
    switch (type) {
        case actions.SET_INVESTIGATING_QUESTION_ID:
            return id;
        default:
            return state;
    }
};

const questionId = (state = 0, { type, id }) => {
    switch (type) {
        case actions.SET_QUESTION_ID:
            return id;
        default:
            return state;
    }
};

const selectedOption = (state = "", { type, option }) => {
    switch (type) {
        case actions.SELECT_OPTION:
            return option;
        default:
            return state;
    }
};

const answerAttempted = (state = false, { type, attempted }) => {
    switch (type) {
        case actions.ANSWER_ATTEMPTTED:
            return attempted;
        default:
            return state;
    }
};

const correctAnswer = (state = false, { type, correct }) => {
    switch (type) {
        case actions.CORRECT_ANSWER:
            return correct;
        default:
            return state;
    }
};

const answerStatus = (state = false, { type, value }) => {
    switch (type) {
        case actions.SET_ANSWER_STATUS:
            return value;
        default:
            return state;
    }
};

const hideInteractiveImage = (state = false, { type, value }) => {
    switch (type) {
        case actions.SET_HIDE_INTERCTIVE_IMAGE:
            return value;
        default:
            return state;
    }
};

const hideInteractiveVideo = (state = true, { type, value }) => {
    switch (type) {
        case actions.SET_HIDE_INTERCTIVE_VIDEO:
            return value;
        default:
            return state;
    }
};

const screenText = (state = "", { type, value }) => {
    switch (type) {
        case actions.SET_SCREEN_TEXT:
            return value;
        default:
            return state;
    }
};

const showForceOnAppleOne = (state = false, { type, value }) => {
    switch (type) {
        case actions.SET_FORCE_ON_APPLE_ONE:
            return value;
        default:
            return state;
    }
};

const showForceOnAppleTwo = (state = false, { type, value }) => {
    switch (type) {
        case actions.SET_FORCE_ON_APPLE_TWO:
            return value;
        default:
            return state;
    }
};

const showForceOnAppleThree = (state = false, { type, value }) => {
    switch (type) {
        case actions.SET_FORCE_ON_APPLE_THREE:
            return value;
        default:
            return state;
    }
};

export const videoPlayState = (state = false, { type, item }) => {
    switch (type) {
      case actions.VIDEO_PLAY_STATE:
        return item;
      default:
        return state;
    }
  };

export default combineReducers({
    scaleChange,
    currentPopup,
    showToastMessage,
    ariaLiveText,
    soundManagerSources,
    audioStartAgain,
    investigatingStatus,
    investigatingQuestionId,
    questionId,
    selectedOption,
    answerAttempted,
    correctAnswer,
    answerStatus,
    nonInvestigatingId,
    hideInteractiveImage,
    hideInteractiveVideo,
    showForceOnAppleOne,
    showForceOnAppleTwo,
    showForceOnAppleThree,
    screenText,
    videoPlayState,
    ...reducers,
});
