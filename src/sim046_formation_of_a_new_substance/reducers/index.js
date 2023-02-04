import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const initialState = {
  _tempDataOptions: JSON.parse(JSON.stringify(data.options)),
  _tempDataDragDrop: JSON.parse(JSON.stringify(data.dragDrop)),
  aboutScreen: true,
  optionTrigger: false,
  questionNumber: 0,
  questionIndex: 0,
  radioBtnId: "",
  toastMassage: false,
  checkAns: false,
  radioBtnChecked: false,
  showContinueBtn: false,
  questionCount: 0,
  levelOneComplete: false,
  levelTwoComplete: false,
  videoEnded: false,
  dragElementEvents: {},
  dragElementIndex: 0,
  dragDropComplete: false,
  countDroppedElement: 1,
  ddSubmitBtn: true,
};

const accessibleListVisible = (state = false, { type, val }) => {
  switch (type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return val;
    default:
      return state;
  }
};

const dropZones = (
  state = data.dragDrop.questions.map((q) => ({ ...q })),
  { type, items }
) => {
  switch (type) {
    case actions.RESET_DROP_ZONES:
      return data.dragDrop.questions.map((q) => ({ ...q }));
    case actions.UPDATE_DROP_ZONES:
      return items;
    default:
      return state;
  }
};

const aboutScreenReducer = (
  state = initialState.aboutScreen,
  { type, value }
) => {
  switch (type) {
    case actions.ABOUT_SCREEN:
      return value;

    default:
      return state;
  }
};

const optionTriggerReducer = (
  state = initialState.optionTrigger,
  { type, value }
) => {
  switch (type) {
    case actions.OPTION_TRIGGER:
      return value;

    default:
      return state;
  }
};

const questionIndexReducer = (
  state = initialState.questionIndex,
  { type, value }
) => {
  switch (type) {
    case actions.QUESTION_INDEX:
      return value;

    default:
      return state;
  }
};

const questionNumberReducer = (
  state = initialState.questionNumber,
  { type, value }
) => {
  switch (type) {
    case actions.QUESTION_NUMBER:
      return value;

    default:
      return state;
  }
};

export const selectAnswerOptionReducer = (
  state = initialState.radioBtnId,
  { type, value }
) => {
  switch (type) {
    case actions.SELECT_ANSWER_OPTION:
      return value;

    default:
      return state;
  }
};

export const checkAnswerReducer = (
  state = initialState.checkAns,
  { type, value }
) => {
  switch (type) {
    case actions.CHECK_ANSWER:
      return value;

    default:
      return state;
  }
};

export const radioBtnCheckedReducer = (
  state = initialState.radioBtnChecked,
  { type, value }
) => {
  switch (type) {
    case actions.RADIO_BTN_CHECKED:
      return value;

    default:
      return state;
  }
};

export const showContinueBtnReducer = (
  state = initialState.showContinueBtn,
  { type, value }
) => {
  switch (type) {
    case actions.SHOW_CONTINUE_BTN:
      return value;

    default:
      return state;
  }
};

export const questionCountReducer = (
  state = initialState.questionCount,
  { type, value }
) => {
  switch (type) {
    case actions.QUESTION_COUNT:
      return value;

    default:
      return state;
  }
};

export const levelOneCompleteReducer = (
  state = initialState.levelOneComplete,
  { type, value }
) => {
  switch (type) {
    case actions.LEVEL_ONE:
      return value;

    default:
      return state;
  }
};

export const levelTwoCompleteReducer = (
  state = initialState.levelTwoComplete,
  { type, value }
) => {
  switch (type) {
    case actions.LEVEL_TWO:
      return value;

    default:
      return state;
  }
};

export const optionDataReducer = (
  state = initialState._tempDataOptions,
  { type, value }
) => {
  switch (type) {
    case actions.OPTION_DATA:
      return value;

    default:
      return state;
  }
};

export const videoEndedReducer = (
  state = initialState.videoEnded,
  { type, value }
) => {
  switch (type) {
    case actions.VIDEO_ENDED:
      return value;

    default:
      return state;
  }
};

export const dragDropDataReducer = (
  state = initialState._tempDataDragDrop,
  { type, value }
) => {
  switch (type) {
    case actions.DRAG_DROP_DATA:
      return value;

    default:
      return state;
  }
};

export const incorrectToastCountReducer = (state = 0, { type, value }) => {
  switch (type) {
    case actions.INCORRECT_TOAST_COUNT:
      return value;

    default:
      return state;
  }
};

export const countDroppedElementReducer = (
  state = initialState.countDroppedElement,
  { type, value }
) => {
  switch (type) {
    case actions.DROPPED_ELEMENT:
      return value;

    default:
      return state;
  }
};

export const activeDdSubmitBtnReducer = (
  state = initialState.ddSubmitBtn,
  { type, value }
) => {
  switch (type) {
    case actions.DD_BTN_ACTIVE:
      return value;

    default:
      return state;
  }
};

export const currentDraggingItem = (state = null, { type, item }) => {
  switch (type) {
    case actions.CURRENT_DRAGGING_ITEM:
      return item;

    default:
      return state;
  }
};

export const getAltTextMerger = (state = "default", { type, item }) => {
  switch (type) {
    case actions.ALT_TEXT_MERGER:
      if (state == "default" || item == "default") {
        return item;
      } else {
        return state + item;
      }

    default:
      return state;
  }
};

export const getVideoLiveText = (state = "", { type, item }) => {
  switch (type) {
    case actions.VIDEO_LIVE_TEXT:
      return item;

    default:
      return state;
  }
};

export const droppedItems = (
  state = initialState.dragElementEvents,
  { type, source, accept, items }
) => {
  switch (type) {
    case actions.ADD_DND_PAIR:
      return {
        ...state,
        [accept]: {
          accept,
          title: source.title,
          source: source.source,
        },
      };

    case actions.UPDATE_DND_PAIR:
      return {
        ...items,
      };
    default:
      return state;
  }
};

export const dragDropCompleteReducer = (
  state = initialState.dragDropComplete,
  { type, value }
) => {
  switch (type) {
    case actions.DRAG_DROP_COMPLETE:
      return value;

    default:
      return state;
  }
};

export const videoEnded = (state = false, { type, endState }) => {
  switch (type) {
    case actions.ON_VIDEO_ENDED:
      return endState;
    default:
      return state;
  }
};

export const videoPlayState = (state = null, { type, playState }) => {
  switch (type) {
    case actions.SET_VIDEO_PLAY_STATE:
      return playState;
    default:
      return state;
  }
};

export default combineReducers({
  aboutScreenReducer,
  optionTriggerReducer,
  questionNumberReducer,
  selectAnswerOptionReducer,
  questionIndexReducer,
  checkAnswerReducer,
  radioBtnCheckedReducer,
  showContinueBtnReducer,
  questionCountReducer,
  levelOneCompleteReducer,
  levelTwoCompleteReducer,
  optionDataReducer,
  videoEndedReducer,
  dragDropDataReducer,
  dragDropCompleteReducer,
  countDroppedElementReducer,
  activeDdSubmitBtnReducer,
  accessibleListVisible,
  dropZones,
  currentDraggingItem,
  droppedItems,
  incorrectToastCountReducer,
  getAltTextMerger,
  getVideoLiveText,
  videoEnded,
  videoPlayState,
  ...reducers,
});
