import DroppableItem from "../components/Screens/FullView/DroppableList/DroppableItem";
import { connect } from "react-redux";
import { disableDraggable, disableDroppable, selectDraggableFull, setFocusonDragItem,setFocusOnList } from "../actions";
import data from "../data/data.en";
import { common, thunks } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    droppedItems: state.droppedItems,
    dropElement: state.dropElement,
    focusedAnswerId: state.setFocusOnList,
    selectedDraggable: state.selectDraggableFull,
    dragList: state.optionsData,
    droppableQuestion:state.questionsList,
    aria:data.screen2.aria,
    blank:data.screen2.blank
  };
};

const mapDispatch = (dispatch) => ({
  setFocusonDragItem: (answerId) => {
    dispatch(setFocusonDragItem(answerId))
  },
  selectDraggableFull: (answerId) => dispatch(selectDraggableFull(answerId)),
  setFocusOnList: (answerId) => dispatch(setFocusOnList(answerId)),
  onDrop:(accept)=>dispatch(thunks.onDrop(accept)),
});

export default connect(mapState, mapDispatch)(DroppableItem);
