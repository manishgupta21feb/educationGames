import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const getDays = (state =[...data.dropZones], action) => {
  switch (action.type) {
    case actions.DAYS_DATA:
      return action.payload;
    case actions.UPDATE_VISITED_DAYS:
      return action.payload;
    default:
      return state;
  }
};
const getSelectedDay=(state="",action) =>{
  switch (action.type) {
    case actions.SELECTED_DAY:
      return action.payload;
    default:
      return state;
  }
}
const seasonsSequence = (
  state = [...data.seasons],action
) => {
  switch (action.type) {
    case actions.UPDATE_SEASONS_SEQUENCE:
      return [...action.payload];
    default:
      return state;
  }
};

const getAllDragsData=(state={ allDragData:[...data.dragingData], currentDragData:{}},action)=>{
   switch (action.type) {
     case actions.FETCH_ALL_DRAGS:
       return actions.payload;
     case actions.FETCH_DRAGS: 
      return {
        ...state,
        currentDragData:action.payload
      };
     default:  
    return state;
   }
}
const selectedDraggable = (state = "", action) => {
  switch (action.type) {
    case actions.SELECT_DRAGGABLE:
      if (action.payload) {
        return { ...action.payload };
      }
      return action.payload;
    default:
      return state;
  }
};
const itemDroppedAt = (state = {}, action) => {
  switch (action.type) {
    case actions.UPDATE_DROPPED_AT:
      const { name, key } = action.payload;
      if (state[name]) {
        const check = state[name].indexOf(key) == -1;
        if (check) {
          const temp = { ...state };
          temp[name] = [...temp[name], key];
          return temp;
        }
        return state;
      } else {
        const temp = { ...state };
        temp[name] = [key];
        return temp;
      }
    case actions.RESET_DROPPED_AT:
      return {};
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

const toastMsg = (state = "", action) => {
  switch (action.type) {
    case actions.TOAST_MESSAGE:
      return action.val;
    default:
      return state;
  }
};
const getValueDropdown = (state = {}, { type, value }) => {
  switch (type) {
    case actions.SET_SELECT_VALUE:
      return value;
    default:
      return state;
  }
};
const submitAnswer=(state=false,action)=>{
  switch (action.type) {
    case actions.SUBMIT_ANSWER:
      return action.payload
    default:
    return state
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

const getDropdownList =(state=[...data.dropdownItems],action)=>{
  switch (action.type) {
    case actions.GET_DROPDOWN_LIST:
      return [...action.payload]
    default:
    return state
  }
}
export default combineReducers({
  seasonsSequence,
  getAllDragsData,
  getSelectedDay,
  getDays,
  selectedDraggable,
  itemDroppedAt,
  accessibleListVisible,
  toastMsg,
  getValueDropdown,
  submitAnswer,
  answerSubmitted,
  getDropdownList,
  ...reducers,
});
