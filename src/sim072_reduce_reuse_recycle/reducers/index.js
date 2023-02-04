import * as actions from "../actions";
import data from "./../data";

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

const answerAttempted = (state = false, { type, attempted }) => {
    switch (type) {
        case actions.ANSWER_ATTEMPTTED:
            return attempted;
        default:
            return state;
    }
};

const hotspots = (state = data.hotspots, { type, hotspotData, updateHotspot }) => {
    switch (type) {
        case actions.HOTSPOTS:
            return hotspotData;
        case actions.UPDATE_VISITED_HOTSPOTS:
            return updateHotspot;
        default:
            return state;
    }
};

export const selectedHotspot = (state = "", { type, id }) => {
    switch (type) {
        case actions.SELECT_HOTSPOT:
            return id;
        default:
            return state;
    }
};

const questionView = (state = false, { type, view }) => {
    switch (type) {
        case actions.SET_QUESTION_VIEW:
            return view;
        default:
            return state;
    }
};

const questionNum = (state = 0, { type, num }) => {
    switch (type) {
        case actions.SET_QUESTION_NUM:
            return num;
        default:
            return state;
    }
};

const questionOptions = (state = [...data.questionsData[0].options], { type, arr }) => {
    switch (type) {
        case actions.UPDATE_QUESTION_OPTIONS:
            return [...arr];
        case actions.RESET_UPDATE_QUESTION_OPTIONS:
            return []
        default:
            return state;
    }
};

const answerShow = (state = [...data.questionsData[0].answers], { type, arr }) => {
    switch (type) {
        case actions.UPDATE_ANSWER:
            return [...arr];
        case actions.RESET_UPDATE_ANSWER:
            return []
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

export default combineReducers({
    scaleChange,
    currentPopup,
    showToastMessage,
    ariaLiveText,
    soundManagerSources,
    audioStartAgain,
    hotspots,
    selectedHotspot,
    questionView,
    answerShow,
    questionNum,
    questionOptions,
    answerAttempted,
    correctAnswer,
    ...reducers,
});
