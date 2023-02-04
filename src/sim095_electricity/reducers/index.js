import { combineReducers } from "redux";
import * as actions from "../actions";
import reducers from "../../app/reducers";
import data from "../data";

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

const answered = (state = false, { type, value }) => {
  switch (type) {
    case actions.SET_ANSWERED:
      return value;
    default:
      return state;
  }
};

export const resetCounterValues = (state = false, { type, value }) => {
  switch (type) {
    case actions.RESET_COUNTER:
      return value;
    default:
      return state;
  }
};

export const countAttempts = (state = [], { type, value }) => {
  switch (type) {
    case actions.COUNT_ATTEMPTS:
      const indexVal = state.indexOf(value);
      if (indexVal == -1) {
        const _state = [...state, value];
        return _state;
      }

      return state;
    case actions.DELETE_ATTEMPTS:
      return [];
    default:
      return state;
  }
};

export const counterValues = (state = "", { type, value }) => {
  switch (type) {
    case actions.COUNTER_VALUES:
      return value;
    default:
      return state;
  }
};

export const showMainScreen = (state = true, { type, value }) => {
  switch (type) {
    case actions.SHOW_MAIN_SCREEN:
      return value;
    default:
      return state;
  }
};

export const showFirstScreen = (state = false, { type, value }) => {
  switch (type) {
    case actions.SHOW_FIRST_SCREEN:
      return value;
    default:
      return state;
  }
};

export const showSecondScreen = (state = false, { type, value }) => {
  switch (type) {
    case actions.SHOW_SECOND_SCREEN:
      return value;
    default:
      return state;
  }
};

export const droppedAtOne = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_ONE:
      return [...state, value];
    case actions.CLEAR_CIRCUITS:
      return [];
    default:
      return state;
  }
};

export const droppedAtTwo = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_TWO:
      return [...state, value];
    case actions.CLEAR_CIRCUITS:
      return [];
    default:
      return state;
  }
};

export const droppedAtThree = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_THREE:
      return [...state, value];
    case actions.CLEAR_CIRCUITS:
      return [];
    default:
      return state;
  }
};

export const droppedAtFour = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_FOUR:
      return [...state, value];
    case actions.CLEAR_CIRCUITS:
      return [];
    default:
      return state;
  }
};

export const droppedAtFive = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_FIVE:
      return [...state, value];
    case actions.CLEAR_CIRCUITS:
      return [];
    default:
      return state;
  }
};

export const droppedAtSix = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_SIX:
      return [...state, value];
    case actions.CLEAR_CIRCUITS:
      return [];
    default:
      return state;
  }
};

export const droppedAtSeven = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_SEVEN:
      return [...state, value];
    case actions.CLEAR_CIRCUITS:
      return [];
    default:
      return state;
  }
};

export const visitedPages = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_VISITED_PAGE:
      return [...state, value];
    case actions.CLEAR_VISITED_PAGES:
      return [];
    default:
      return state;
  }
};

export const numberOfFan = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_FAN:
      return [...state, value];
    case actions.CLEAR_DROPPED_ITEMS:
      return [];
    default:
      return state;
  }
};

export const numberOfBattery = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_BATTERY:
      return [...state, value];
    case actions.CLEAR_DROPPED_ITEMS:
      return [];
    default:
      return state;
  }
};

export const numberOfWire = (state = [], { type, value }) => {
  switch (type) {
    case actions.ADD_WIRE:
      return [...state, value];
    case actions.CLEAR_DROPPED_ITEMS:
      return [];
    default:
      return state;
  }
};

export const clearButton = (state = false, { type, value }) => {
  switch (type) {
    case actions.CLEAR_BUTTON_PRESSED:
      return value;
    default:
      return state;
  }
};

const accessibleListVisible = (state = false, { type, val }) => {
  switch (type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return val;
    default:
      return state;
  }
};

const droppedAccessible = (state = "", { type, val }) => {
  switch (type) {
    case actions.ACCESSIBLE_DROPPED_ITEM:
      return val;
    default:
      return state;
  }
};

const circuitName = (state = "", { type, value }) => {
  switch (type) {
    case actions.SELECTED_CIRCUIT:
      return value;
    default:
      return state;
  }
};

const draggableItem = (state = null, { type, item }) => {
  switch (type) {
    case actions.SET_DRAGGABLE_ITEM:
      return item;
    case actions.RESET_DRAGGABLE_ITEM:
      return null;
    default:
      return state;
  }
};

const itemDragType = (state = {}, { type, item }) => {
  switch (type) {
    case actions.DRAG_TYPE:
      return { ...item };
    default:
      return state;
  }
};

const draggables = (
  state = data.draggables.map((d) => ({ ...d })),
  { type, item, items }
) => {
  switch (type) {
    case actions.UPDATE_DRAGGABLES:
      return items;
    case actions.CLEAR_DRAGGABLES_FROM_DROP_REGION:
      return state.map((s) => ({ ...s, totalDrops: 0 }));
    default:
      return state;
  }
};

const seriesDraggbale = (
  state = data.seriesDraggable.map((d) => ({ ...d })),
  { type, items, dataArray }
) => {
  switch (type) {
    case actions.UPDATE_DRAGGABLE_SERIES:
      return items;
    case actions.CLEAR_DRAGGABLE_FROM_DROP_REGION_SERIES:
      return state.map((s) => ({ ...s, totalDrops: 0 }));
    case actions.SET_DRAGGABLE_SERIES_FROM_MCQ:
      const stateData = [...state];

      let _drags = [];
      _drags = stateData.filter((drag) => dataArray.includes(drag.id));

      return _drags;
    case actions.RESET_SERIES_DRAGGABLE:
      return data.seriesDraggable.map((dr) => ({ ...dr }));
    default:
      return state;
  }
};

const droppables = (
  state = data.dropzones.map((d) => ({ ...d })),
  { type, item, items }
) => {
  switch (type) {
    case actions.UPDATE_DROPPABLES:
      return items;
    case actions.RESET_DROPPABLES:
      return data.dropzones.map((d) => ({ ...d }));
    case actions.RESET_DRAGTYPE_FROM_DROPPABLES:
      return state.map((s) => {
        const _s = { ...s };
        delete _s.dragType;
        _s.hidden = false;
        return _s;
      });
    default:
      return state;
  }
};

const leftCircuit = (state = false, { type, value }) => {
  switch (type) {
    case actions.LEFT_CIRCUIT:
      return value;
    default:
      return state;
  }
};

const rightCircuit = (state = false, { type, value }) => {
  switch (type) {
    case actions.RIGHT_CIRCUIT:
      return value;
    default:
      return state;
  }
};

const animate = (state = false, { type, value }) => {
  switch (type) {
    case actions.ANIMATE:
      return value;
    default:
      return state;
  }
};

const questionsData = (state = [...data.mcqQuestion], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
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

const submitBtnDisabled = (state = true, { type, answer }) => {
  switch (type) {
    case actions.SUBMIT_BTN_DISABLE:
      return answer;
    default:
      return state;
  }
};

const selectedQuestion = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return { ...question };
    default:
      return state;
  }
};
const getCount = (state = 1, { type, count }) => {
  switch (type) {
    case actions.SET_COUNT:
      return count;
    default:
      return state;
  }
};
const mcqScreen = (state = true, { type, bln }) => {
  switch (type) {
    case actions.MCQ_SCREEN:
      return bln;
    default:
      return state;
  }
};
const getKeepImages = (state = [], { type, val }) => {
  switch (type) {
    case actions.KEEP_IMAGES:
      if (val != "") {
        return [...state, val];
      } else {
        return [];
      }

    default:
      return state;
  }
};
const checkButton = (state = false, { type, val }) => {
  switch (type) {
    case actions.CHECK_BUTTON:
      return val;
    default:
      return state;
  }
};

const storeDropzone = (state = "", { type, dropzone }) => {
  switch (type) {
    case actions.STORE_DORPZONE:
      if (dropzone != "") {
        return [...state, dropzone];
      } else {
        return [];
      }

    default:
      return state;
  }
};

const showNext = (state = false, { type, val }) => {
  switch (type) {
    case actions.SHOW_NEXT:
      return val;
    default:
      return state;
  }
};

const showBright = (state = false, { type, val }) => {
  switch (type) {
    case actions.SHOW_BRIGHT:
      return val;
    default:
      return state;
  }
};
const batteryCorrect = (state = false, { type, val }) => {
  switch (type) {
    case actions.ONLY_BATTERT_CORRECT:
      return val;
    default:
      return state;
  }
};
const dynamicAltText = (state = "", { type, value }) => {
  switch (type) {
    case actions.DYNAMIC_ALTTEXT:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  storeDropzone,
  questionsData,
  selectedAnswerOption,
  submitBtnDisabled,
  selectedQuestion,
  getCount,
  mcqScreen,
  getKeepImages,
  seriesDraggbale,
  checkButton,
  answered,
  correctAnswer,
  showNext,
  answerAttempted,
  showBright,
  batteryCorrect,
  showMainScreen,
  showFirstScreen,
  showSecondScreen,
  droppedAtOne,
  droppedAtTwo,
  droppedAtThree,
  droppedAtFour,
  droppedAtFive,
  droppedAtSix,
  droppedAtSeven,
  visitedPages,

  numberOfFan,
  numberOfBattery,

  numberOfWire,
  clearButton,
  accessibleListVisible,
  droppedAccessible,
  circuitName,
  draggableItem,
  itemDragType,
  droppables,
  draggables,
  rightCircuit,
  leftCircuit,
  animate,
  dynamicAltText,
  ...reducers,
});
