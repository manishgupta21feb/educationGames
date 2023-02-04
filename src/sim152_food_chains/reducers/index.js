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

const visitedButtons = (state = [], { type, value }) => {
  switch (type) {
    case actions.VISITED_BUTTONS:
      return [...state, value];
    case actions.CLEAR_VISITED_BUTTONS:
      return [];
    default:
      return state;
  }
};

const screenChangeState = (state = false, { type, value }) => {
  switch (type) {
    case actions.SCREEN_CHANGE:
      return value;
    default:
      return state;
  }
};

const buttonId = (state = "", { type, value }) => {
  switch (type) {
    case actions.BUTTON_ID:
      return value;
    case actions.CLEAR_BUTTON_ID:
      return "";
    default:
      return state;
  }
};

const draggableItem = (state = null, { type, item }) => {
  switch (type) {
    case actions.SET_DRAGGABLE_ITEM:
      // console.log("Dragged from Reducer: ", item);
      return item;
    case actions.RESET_DRAGGABLE_ITEM:
      return null;
    default:
      return state;
  }
};

const droppedItem = (
  state = {
    dropzone1: [],
    dropzone2: [],
    dropzone3: [],
    dropzone4: [],
    dropzone5: [],
  },
  action
) => {
  switch (action.type) {
    case actions.STORE_DROPPED_DATA:
      // console.log("From Dropped Reducer", action);
      const itemKey = `${action.key}-${action.item}`;
      const temp = { ...state };
      temp[action.drop] = [{ id: itemKey, text: action.item }];
      return temp;
    case actions.RESET_DROPPED_DATA:
      return {
        dropzone1: [],
        dropzone2: [],
        dropzone3: [],
        dropzone4: [],
        dropzone5: [],
      };
    default:
      return state;
  }
};

const dropIds = (state = [], { type, id }) => {
  switch (type) {
    case actions.DROPPABLE_IDS:
      // console.log("Redu ====>>>>>>>", id);
      return [...state, id];
    case actions.CLEAR_DROPPABLE_IDS:
      return [];
    default:
      return state;
  }
};

const dragIds = (state = [], { type, id }) => {
  switch (type) {
    case actions.STORE_DRAGGABLE_IDS:
      // console.log("Redu ====>>>>>>>", id);
      const indexVal = state.indexOf(id);
      if (indexVal == -1) {
        const _state = [...state, id];
        return _state;
      }
      return state;
      return [...state, id];
    case actions.CLEAR_DRAGGABLE_IDS:
      return [];
    default:
      return state;
  }
};

const dropzoneOne = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_ONE:
      // console.log("DropAtOne", value);
      return [...state, value];
    case actions.CLEAR_DROPZONES:
      return [];
    default:
      return state;
  }
};

const dropzoneTwo = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_TWO:
      return [...state, value];
    case actions.CLEAR_DROPZONES:
      return [];
    default:
      return state;
  }
};

const dropzoneThree = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_THREE:
      return [...state, value];
    case actions.CLEAR_DROPZONES:
      return [];
    default:
      return state;
  }
};

const dropzoneFour = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_FOUR:
      return [...state, value];
    case actions.CLEAR_DROPZONES:
      return [];
    default:
      return state;
  }
};
const dropzoneFive = (state = [], { type, value }) => {
  switch (type) {
    case actions.DROPZONE_FIVE:
      return [...state, value];
    case actions.CLEAR_DROPZONES:
      return [];
    default:
      return state;
  }
};

const droppables = (
  state = data.droppables.map((d) => ({ ...d })),
  { type, item, items }
) => {
  switch (type) {
    case actions.UPDATE_DROPPABLES:
      return items;
    case actions.RESET_DROPPABLES:
      return data.droppables.map((d) => ({ ...d }));
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

const correct = (state = false, { type, value }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
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

export default combineReducers({
  demoReducer,
  buttonId,
  visitedButtons,
  screenChangeState,
  draggableItem,
  droppedItem,
  dropIds,
  dragIds,
  dropzoneOne,
  dropzoneTwo,
  dropzoneThree,
  dropzoneFour,
  dropzoneFive,
  droppables,
  draggables,
  correct,
  accessibleListVisible,
  ...reducers,
});
