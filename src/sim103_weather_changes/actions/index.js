import * as actions from "../../app/actions";
export const common = { ...actions };
import data from "../data";
export const SELECTED_DAY="SELECTED_DAY";
export const UPDATE_VISITED_DAYS='UPDATE_VISITED_DAYS';
export const DAYS_DATA="DAYS_DATA";
export const UPDATE_SEASONS_SEQUENCE="UPDATE_SEASONS_SEQUENCE";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const UPDATE_DROPPED_AT = "UPDATE_DROPPED_AT";
export const SELECT_DRAGGABLE="SELECT_DRAGGABLE";
export const ELEMENT_DATA="ELEMENT_DATA";
export const DISABLE_DRAGGABLE = "DISABLE_DRAGGABLE";
export const TOAST_MESSAGE="TOAST_MESSAGE"

export const FETCH_ALL_DRAGS="FETCH_ALL_DRAGS";
export const FETCH_DRAGS="FETCH_DRAGS";
export const RESET_DROPPED_AT="RESET_DROPPED_AT";
export const SET_SELECT_VALUE="SET_SELECT_VALUE";
export const SUBMIT_ANSWER="SUBMIT_ANSWER";
export const ANSWER_SUBMITTED="ANSWER_SUBMITTED";
export const GET_DROPDOWN_LIST="GET_DROPDOWN_LIST";

export const fetchAllDrags =(items) =>({
  type:FETCH_ALL_DRAGS,
  payload:items
});
export const fetchDrags=(items)=>({
  type:FETCH_DRAGS,
  payload:items
})
export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const fetchDays = (items) => ({
    type: DAYS_DATA,
    payload: items,
  });
export const setSelectedDay=(dayId) =>({
    type:SELECTED_DAY,
    payload:dayId
});
export const updateVisitedDays = (updateDay) => ({
    type: UPDATE_VISITED_DAYS,
    payload: updateDay,
  });
  export const updateSeasonsSequence = (sequence) => ({
    type: UPDATE_SEASONS_SEQUENCE,
    payload: sequence,
  });
  export const selectDraggable = (val) => ({
    type: SELECT_DRAGGABLE,
    payload:val,
  });
  export const updateDroppedAt = (name, key) => ({
    type: UPDATE_DROPPED_AT,
    payload:{name,key}
  });
  export const updateElementData = (val) => ({
    type: ELEMENT_DATA,
    payload: val,
  });
  export const disableDraggable = (dragId, isDisable = false) => ({
    type: DISABLE_DRAGGABLE,
    data: { dragId, isDisable },
  });
  export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });
export const resetDropped=()=>({
  type:RESET_DROPPED_AT
})
export const setSelectValue = (value) => ({ value, type: SET_SELECT_VALUE });
export const submitAnswer=(answered)=>({
  type:SUBMIT_ANSWER,
  payload:answered
});
export const answerSubmitted = (submitted) => ({
  submitted,
  type: ANSWER_SUBMITTED,
});

export const setDropdownList =(list) =>({
  type:GET_DROPDOWN_LIST,
  payload:list
})
export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};
export const thunks = {
  onLoad:()=>{
    return (dispatch, getState) => {
      const {seasonsSequence,getAllDragsData}=getState();
      const currentItem=getAllDragsData.allDragData.find((d) =>d.id==seasonsSequence[0])
      dispatch(fetchDrags({...currentItem}))
      dispatch(setDropdownList(helper.shuffleArray([...data.dropdownItems])))    
    }
  },
  selectDay: (id,index) => {
    return (dispatch, getState) => {
      const { resetBtnState } = getState();
      EventManager.broadcast("STOP_ALL");
      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(setSelectedDay(id));
      dispatch(common.toggleToastMessage(false));

    };
  },
  checkForDropDown:()=>{
   return(dispatch,getState)=>{
    EventManager.broadcast("STOP_ALL");
    EventManager.broadcast("SECONDARY_CLICK");
    const {getAllDragsData,getValueDropdown}=getState();
    let currentSeason=getAllDragsData.currentDragData.id;
        dispatch(answerSubmitted(true));
      if(getValueDropdown.value===currentSeason){
        dispatch(submitAnswer(true));
        dispatch(common.toggleToastMessage(true));
        dispatch(updateToastMsg("correct"));
        EventManager.broadcast("POSITIVE_FEEDBACK");
      }else{
        dispatch(submitAnswer(false));
        dispatch(setSelectValue({}));
        dispatch(common.toggleToastMessage(true));
        dispatch(updateToastMsg("incorrect"));
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
      dispatch(setSelectedDay(""));
   }
  },
  seasonChange:()=>{
     return (dispatch,getState)=>{
      const {seasonsSequence,getAllDragsData}=getState();
      EventManager.broadcast("STOP_ALL");
      dispatch(common.toggleToastMessage(false));
      EventManager.broadcast("SECONDARY_CLICK");
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(common.setResetFocusState(true));
      dispatch(setDropdownList(helper.shuffleArray([...data.dropdownItems])))    
      if( seasonsSequence.length <= 1){
        EventManager.broadcast("STOP_ALL");
        dispatch(common.togglePopup(5));
        EventManager.broadcast("COMPLETION_SCREEN");
      }else{
        const _seasonsSequence = [...seasonsSequence];
        _seasonsSequence.splice(0, 1);
        dispatch(updateSeasonsSequence(_seasonsSequence));   
        const currentItem=getAllDragsData.allDragData.find((d) =>d.id==getState().seasonsSequence[0])
        dispatch(fetchDrags({...currentItem}));
        dispatch(updateVisitedDays(data.dropZones));
        dispatch(updateAccessibleList(false));
        dispatch(setSelectedDay(""));
        dispatch(selectDraggable(null));
        dispatch(resetDropped());
        dispatch(setSelectValue({}));
        dispatch(submitAnswer(false));
        dispatch(answerSubmitted(false));
      }
     }
  },

  checkDroppedItem:(dropZone)=>{
    return (dispatch,getState) => {
      const { selectedDraggable, itemDroppedAt ,getDays,getSelectedDay:day_id } = getState();
       //console.log("itemDroppedAt",itemDroppedAt,"selectedDraggable",selectedDraggable,"on drop dropZone",dropZone);
       if (
        dropZone &&
        dropZone.id &&
        selectedDraggable &&
        selectedDraggable.target
      ){
          if (selectedDraggable.target.includes(dropZone.id)) {
            dispatch(updateDroppedAt(selectedDraggable.id, dropZone.id));
            const updatedDays = getDays.map((x) =>
            x.id === day_id ? { ...x, visited: true, hidden:true } : x
          );
          dispatch(updateVisitedDays(updatedDays));
          dispatch(common.toggleToastMessage(true));
          dispatch(updateToastMsg("correct"));
          dispatch(updateAccessibleList(false));
          dispatch(selectDraggable(null));
          EventManager.broadcast("POSITIVE_FEEDBACK");
          dispatch(setSelectedDay(""));
          dispatch(common.setResetFocusState(true));

          }else{
            EventManager.broadcast("NEGATIVE_FEEDBACK");
            dispatch(common.toggleToastMessage(true));
            dispatch(updateToastMsg("incorrect"));
            dispatch(updateAccessibleList(false));
            dispatch(selectDraggable(null));
          }
         
      }
    }
  },
    resetActivity: () => {
        return (dispatch,getState) => {
          const { currentPopup,} = getState();
            dispatch(common.togglePopup(1));
            dispatch(common.updateResetBtnState(true));
            dispatch(common.ariaLiveText(data.resetLiveText));
            dispatch(updateSeasonsSequence([...data.seasons]));
            const currentItem=getState().getAllDragsData.allDragData.find((d) =>d.id==getState().seasonsSequence[0])
            dispatch(fetchDrags({...currentItem}))
            dispatch(updateAccessibleList(false));
            dispatch(updateVisitedDays(data.dropZones));
            dispatch(selectDraggable(null));
            dispatch(resetDropped());
            dispatch(setSelectedDay(""));
            dispatch(updateToastMsg(""));
            dispatch(submitAnswer(false));
            dispatch(answerSubmitted(false));
            dispatch(setSelectValue({}));
            if (currentPopup.indexOf(3) >= 0) {
              dispatch(common.togglePopup(3));
            }
            if (currentPopup.indexOf(5) >= 0) {
              dispatch(common.togglePopup(5));
            }
            setTimeout(() => {
                dispatch(common.ariaLiveText(" "));
              }, 100);
        }
    }
}
