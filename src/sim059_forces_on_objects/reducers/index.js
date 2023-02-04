import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const demoReducer = (state = "", { type, value }) => {
  switch (type) {
    case actions.DEMO_ACTION:
      return value;
    default:
      return state;
  }
};
const currentLayout = (state = "topbottom", action) => {
  switch (action.type) {
    case actions.CURRENT_LAYOUT:
      return action.payload;
    default:
      return state;
  }
};

const hotspots = (state = [...data.hotspots], action) => {
  switch (action.type) {
    case actions.GET_HOTSPOTS:
      return action.payload;
    default:
      return state;
  }
};

const selectedHotspot = (state = "", action) => {
  switch (action.type) {
    case actions.SELECTED_HOTSPOT:
      return action.payload;
    default:
      return state;
  }
};

const visitedHotspot = (state = [], action) => {
  switch (action.type) {
    case actions.SET_VISITED_HOTSPOT:
      return [...state, action.payload];
    case actions.RESET_VISITED_HOTSPOT:
      return [];
    default:
      return state;
  }
};

const hotSpotContinue = (state = true, action) => {
  switch (action.type) {
    case actions.GET_HOTSPOT_ALL_DATA:
      return action.payload;
    default:
      return state;
  }
};
// const videoPlayState = (state = true, action) => {
//   switch (action.type) {
//     case actions.SET_VIDEO_STATE:
//       return action.data;
//     case actions.TOGGLE_VIDEO_STATE:
//       return !state;
//     default:
//       return state;
//   }
// };

const toggleScreen = (state = false, action) => {
  switch (action.type) {
    case actions.TOGGLE_SCREEN:
      return action.payload;
    default:
      return state;
  }
};

const isVideoEnded = (state = false, action) => {
  switch (action.type) {
    case actions.VIDEO_ENDED:
      return action.payload;
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
const correctAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return val;
    default:
      return state;
  }
};
const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      //console.log('action fired', action.type, action.val)
      return action.val;
    default:
      return state;
  }
};
const questionsList = (state = [...data.screen2.questionList], action) => {
  switch (action.type) {
    case actions.FETCH_QUESTIONS:
      return action.data;
    case actions.DISABLE_DROPPABLE:
      const disableDroppable = state.map((item) => {
        if (item.answerId === action.data.answerId) {
          return {
            ...item,
            isDisable: action.data.isDisable,
            markedAnswer: action.data.markedAnswer,
            hidden: action.data.hidden,
          };
        } else return item;
      });
      console.log("disabled Droppable are", disableDroppable);
      return disableDroppable;
    default:
      return state;
  }
};

const optionsData = (state = [...data.screen2.options], action) => {
  switch (action.type) {
    case actions.FETCH_OPTIONS:
      return action.data;
    case actions.DISABLE_DRAGGABLE:
      const disabledDraggable = state.map((item) => {
        if (item.name === action.data.answerId) {
          return {
            ...item,
            isDisable: action.data.isDisable,
          };
        } else return item;
      });
      return disabledDraggable;
    default:
      return state;
  }
};

export const selectDraggableFull = (state = null, action) => {
  switch (action.type) {
    case actions.SELECT_DRAGGABLE_FULL:
      return action.data;

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
const showFinishButton = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVE_FINISH_BUTTON:
      return action.data;

    default:
      return state;
  }
};
const isTravserHotspot = (state = "", action) => {
  switch (action.type) {
    case actions.HOTSPOT_ONE_SELECTED:
      return action.payload;
    case actions.RESET_IS_TRAVSER_HOTSPOT:
      return "";
    default:
      return state;
  }
};
const isAccessibleListVisible = (state = false, action) => {
  switch (action.type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return action.payload;
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
  demoReducer,
  currentLayout,
  hotspots,
  selectedHotspot,
  visitedHotspot,
  hotSpotContinue,
  toggleScreen,
  isVideoEnded,
  answerSubmitted,
  correctAnswer,
  toastMsg,
  questionsList,
  optionsData,
  selectDraggableFull,
  setFocusOnList,
  setFocusOnDargItem,
  showFinishButton,
  isTravserHotspot,
  isAccessibleListVisible,
  currentDropZoneIndex,
  ...reducers,
});
