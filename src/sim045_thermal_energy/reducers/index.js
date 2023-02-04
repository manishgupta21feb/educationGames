import data from "../data";
import * as actions from "../actions";
import { getNumber } from "../helper.js";
import reducers from "../../app/reducers";

import { combineReducers } from "redux";

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};

const audioStatePlay = (state = true, { type }) => {
  switch (type) {
    case actions.AUDIO_STATE_PLAY:
      return !state;
    case actions.AUDIO_STATE_STOP:
      return false;
    default:
      return state;
  }
};

const answerSubmitted = (state = false, { type, submitted }) => {
  switch (type) {
    case actions.ANSWER_SUBMITTED:
      return submitted;
    default:
      return state;
  }
};

const submittedAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return val;
    default:
      return state;
  }
};

//#region start
const toggleScreen = (state = "1", { type, show }) => {
  switch (type) {
    case actions.TOGGLE_SCREEN:
      return show;
    default:
      return state;
  }
};

const disabledState = (state = [...data.Screen3.options], action) => {
  switch (action.type) {
    case actions.DISABLED_STATE:
      let result = state.map((item) => {
        if (item.answerId == action.answerId) {
          return {
            ...item,
            isDisable: true,
            name: action.data,
          };
        } else return item;
      });
      return result;
    default:
      return state;
  }
};

const questionsList = (
  state = data.Screen3.questionList.map((q) => ({ ...q })),
  action
) => {
  switch (action.type) {
    case actions.FETCH_QUESTIONS:
      return action.data;
    case actions.DISABLE_DROPPABLE:
      const disableDroppable = state.map((item) => {
        if (item.answerId === action.id) {
          return {
            ...item,
            hidden: action.hidden,
            isDisable: action.isDisable,
            markedAnswer: action.droppedItem,
          };
        } else return item;
      });
      return disableDroppable;
    case actions.RESET_DND_STATE_DROP:
      return data.Screen3.questionList.map((q) => ({ ...q }));
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

const optionsData = (
  state = data.Screen3.options.map((o) => ({ ...o })),
  action
) => {
  switch (action.type) {
    case actions.FETCH_OPTIONS:
      return action.data;
    case actions.DISABLE_DRAGGABLE:
      const disabledDraggable = state.map((item) => {
        if (item.name === action.id) {
          return {
            ...item,
            isDisable: action.isDisable,
          };
        } else return item;
      });
      return disabledDraggable;
    case actions.RESET_DND_STATE_DRAG:
      return data.Screen3.options.map((o) => ({ ...o }));
    default:
      return state;
  }
};

const setFocusOnList = (state = "", action) => {
  switch (action.type) {
    case actions.SET_FOCUS_ON_LIST:
      return action.data;
    default:
      return state;
  }
};

const setFocusOnDargItem = (state = "", action) => {
  switch (action.type) {
    case actions.SET_FOCUS_ON_DRAG:
      return action.data;
    default:
      return state;
  }
};

const observationsData = (
  state = JSON.parse(JSON.stringify(data.observationsData)),
  action
) => {
  switch (action.type) {
    case actions.OBSERVATIONS_DATA:
      return action.data;
    case actions.RESET_OBSERVATIONS_DATA:
      return JSON.parse(JSON.stringify(data.observationsData));
    // case actions.CHANGE_ALT_TEXT:
    //   let newalt = state[action.data].afterAlt;
    //   state[action.data].alt = newalt;
    //   state.alt = newalt;
    //   return state;
    case actions.IS_OBSERVATION_VISITED:
      let temp = state;
      let hold = temp.map((val) => {
        if (getNumber(val.id) == action.data) {
          val.isPlayed = true;
          return val;
        }
        const temp = JSON.parse(JSON.stringify(val));
        return temp;
      });
      return hold;
    case actions.PREVIOUS_QUESTION_STATE:
      let result = state.map((val) => {
        val.isPlayed = false;
        return JSON.parse(JSON.stringify(val));
      });
      return result;
    default:
      return state;
  }
};

const currentExperimentNumber = (
  state = data.currentExperimentNumber,
  action
) => {
  switch (action.type) {
    case actions.CURRENT_EXPERIMENT_NUMBER:
      return action.data;
    default:
      return state;
  }
};

const selectDraggableFull = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_DRAGGABLE_FULL:
      return action.data;
    default:
      return state;
  }
};

const isVideoPlay = (state = false, action) => {
  switch (action.type) {
    case actions.VIDEO_PLAY:
      return action.data;
    default:
      return state;
  }
};

const isVideoEnd = (state = false, action) => {
  switch (action.type) {
    case actions.VIDEO_END:
      return action.data;
    default:
      return state;
  }
};

const showFinishButton = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVE_FINISH_BUTTON:
      return action.data;
    default:
      return state;
  }
};

const observationStateChange = (state = false, action) => {
  switch (action.type) {
    case actions.OBSERVATION_STATE_CHANGE:
      let temp = [...data.observationsData];
      let hold = temp.map((val) => {
        val.isPlayed = false;
        val.isDisable = false;
        return val;
      });
      return hold;
    default:
      return state;
  }
};

const buttonType = (state = data.buttonLabels.continue, action) => {
  switch (action.type) {
    case actions.BUTTON_TYPE:
      return action.data;
    default:
      return state;
  }
};

const selectedDraggable = (state = {}, action) => {
  switch (action.type) {
    case actions.SELECT_DRAGGABLE:
      return action.data;
    default:
      return state;
  }
};

const accessibleListVisible = (state = false, action) => {
  switch (action.type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return action.data;
    default:
      return state;
  }
};

const currentDropZoneIndex = (state = 0, action) => {
  switch (action.type) {
    case actions.CURRENT_DROP_ZONE_INDEX:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  toastMsg,
  currentDropZoneIndex,
  buttonType,
  isVideoEnd,
  optionsData,
  isVideoPlay,
  toggleScreen,
  disabledState,
  questionsList,
  audioStatePlay,
  setFocusOnList,
  answerSubmitted,
  submittedAnswer,
  observationsData,
  showFinishButton,
  selectedDraggable,
  setFocusOnDargItem,
  selectDraggableFull,
  //isObservationVisited,
  accessibleListVisible,
  observationStateChange,
  currentExperimentNumber,
  showToastMessage,
  ...reducers,
});
