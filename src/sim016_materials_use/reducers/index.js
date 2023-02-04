import * as actions from "../actions";
import reducers from "../../app/reducers";

import data from "../data";
import { combineReducers } from "redux";

/*Remove it later No use */
const answerAttempted = (state = false, { type, attempted }) => {
  switch (type) {
    case actions.ANSWER_ATTEMPTTED:
      return attempted;
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
      // console.log('action fired', type, val)

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

/* Screen 3 */
const draggableList = (state = [], { data, type }) => {
  switch (type) {
    case actions.ADD_DRAGGABLE_ITEM:
      return [...state, data];
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

const showPrimaryText = (state = false, { type, show }) => {
  switch (type) {
    case actions.SHOW_PRIMARY_TEXT:
      return show;
    default:
      return state;
  }
};

const toggleContinue = (state = "", { type, val }) => {
  switch (type) {
    case actions.TOGGLE_CONTINUE:
      return val;
    default:
      return state;
  }
};
const startSimulation = (state = true, { type, value }) => {
  switch (type) {
    case actions.START_SIMULATION:
      return value;
    default:
      return state;
  }
};
const toggleNext = (state = "", { type, val }) => {
  switch (type) {
    case actions.TOGGLE_NEXT:
      return val;
    default:
      return state;
  }
};

const draggableItems = (
  state = data.draggableData.draggables.map((d) => ({ ...d })),
  action
) => {
  switch (action.type) {
    case actions.FETCH_DRAGGABLES:
      return action.data;

    case actions.ADD_PLANT_DROPPABLE:
    case actions.ADD_ANIMAL_DROPPABLE:
      const updatedState = state.map((item) => ({
        ...item,
        isSelected: item.srNo === action.data.zIndex ? true : item.isSelected,
      }));

      return updatedState;

    default:
      return state;
  }
};

const selectedDraggable = (state = null, action) => {
  switch (action.type) {
    case actions.SELECT_DRAGGABLE:
      //console.log('action fired',action.data, typeof action.data)
      return action.data;
    default:
      // console.log('default',state);
      return state;
  }
};

const dropedItemList = (
  state = { plantDragList: [], animalDragList: [] },
  action
) => {
  switch (action.type) {
    case actions.ADD_PLANT_DROPPABLE:
      // console.log('action.draggableItem', [...state, action.draggableItem])
      return {
        ...state,
        plantDragList: [...state.plantDragList, action.data],
      };
    case actions.ADD_ANIMAL_DROPPABLE:
      // console.log('action.draggableItem', [...state, action.draggableItem])
      return {
        ...state,
        animalDragList: [...state.animalDragList, action.data],
      };
    case actions.RESET_DROPPABLES: {
      return { plantDragList: [], animalDragList: [] };
    }
    default:
      return state;
  }
};

const forceAnimalHighlight = (state = false, action = { type: "" }) => {
  switch (action.type) {
    case actions.FORCE_ANIMAL_HIGHLIGHT:
      return action.data;

    default:
      return state;
  }
};

const forcePlantHighlight = (state = false, action = { type: "" }) => {
  switch (action.type) {
    case actions.FORCE_PLANT_HIGHLIGHT:
      return action.data;
    default:
      return state;
  }
};
const resetDialogNoSelected = (state = false, { type, value }) => {
  switch (type) {
    case actions.SET_RESET_DIALOG_NO_SELECTED:
      return value;
    default:
      return state;
  }
};

const setPreviousSound = (state = "", { type, data }) => {
  switch (type) {
    case actions.SET_PREVIOUS_SOUND:
      //console.log("sound set complete: " +  data)
      return data;

    default:
      return state;
  }
};
// const optionsData = (state = [...data.Screen2.options], action) => {
//   switch (action.type) {
//     case actions.FETCH_OPTIONS:
//       return action.data;
//     case actions.DISABLE_DRAGGABLE:
//       const disabledDraggable = state.map((item) => {
//         if (item.name === action.data.answerId) {
//           return {
//             ...item,
//             isDisable: action.data.isDisable,
//           };
//         } else return item;
//       });
//       // console.log("disabled draggables are", disabledDraggable);
//       return disabledDraggable;
//     default:
//       return state;
//   }
// };

// const questionsList = (state = [...data.Screen2.questionList], action) => {
//   switch (action.type) {
//     case actions.FETCH_QUESTIONS:
//       return action.data;
//     case actions.DISABLE_DROPPABLE:
//       const disableDroppable = state.map((item) => {
//         if (item.answerId === action.data.answerId) {
//           return {
//             ...item,
//             isDisable: action.data.isDisable,
//             markedAnswer: action.data.markedAnswer,
//           };
//         } else return item;
//       });
//       // console.log("disabled Droppable are", disableDroppable);
//       return disableDroppable;
//     default:
//       return state;
//   }
// };

const accessibleListVisible = (state = false, { type, val }) => {
  switch (type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return val;
    default:
      return state;
  }
};

const showFinishButton = (state = false, action) => {
  switch (action.type) {
    case actions.ACTIVE_FINISH_BUTTON:
      // console.log(" action.data", action.data)
      return action.data;

    default:
      return state;
  }
};

const selectDraggableFull = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_DRAGGABLE_FULL:
      //console.log("SELECT_DRAGGABLE_FULL ACTION", action.data)
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

const infoDialogState = (state = false, action) => {
  switch (action.type) {
    case actions.HELP_POPUP:
      return action.val;
    default:
      return state;
  }
};

const infoDialogIndexValue = (state = -1, action) => {
  switch (action.type) {
    case actions.INFO_INDEX:
      return action.val;
    default:
      return state;
  }
};

const videoFeedbackState = (state = false, action) => {
  switch (action.type) {
    case actions.VIDEO_FEEDBACK:
      return action.val;
    default:
      return state;
  }
};

const isAccessible = (state = false, { type, accessible }) => {
  switch (type) {
    case actions.ACCESSIBILITY_ENABLED_ON_ITEM:
      return accessible;
    default:
      return state;
  }
};

export const currentPopup = (state = [], { type, id }) => {
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

export const resetFocusState = (state = false, { type, focus }) => {
  switch (type) {
    case actions.SET_RESET_FOCUS_STATE:
      return focus;
    default:
      return state;
  }
};

export const showHelpPopup = (state = false, { type, val }) => {
  switch (type) {
    case actions.SHOW_HELP_POPUP:
      return val;
    default:
      return state;
  }
};

export const showDropZone = (state = false, { type, val }) => {
  switch (type) {
    case actions.SHOW_DROPZONE:
      return val;
    default:
      return state;
  }
};

const revertAudio = (state = true, action) => {
  switch (action.type) {
    case actions.REVERT_AUDIO:
      return action.val;
    default:
      return state;
  }
};

export default combineReducers({
  toastMsg,
  toggleNext,
  // optionsData,
  revertAudio,
  showDropZone,
  showHelpPopup,
  isAccessible,
  correctAnswer,
  draggableList,
  // questionsList,
  audioStatePlay,
  setFocusOnList,
  draggableItems,
  toggleContinue,
  dropedItemList,
  answerAttempted,
  answerSubmitted,
  showPrimaryText,
  startSimulation,
  infoDialogState,
  showFinishButton,
  setPreviousSound,
  selectedDraggable,
  setFocusOnDargItem,
  videoFeedbackState,
  forcePlantHighlight,
  selectDraggableFull,
  forceAnimalHighlight,
  infoDialogIndexValue,
  resetDialogNoSelected,
  accessibleListVisible,
  ...reducers,
});
