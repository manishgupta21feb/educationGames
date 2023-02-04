import DroppableItem from "../components/Screens/FullView/DroppableList/DroppableItem";
import { connect } from "react-redux";
import { selectDraggableFull, setFocusonDragItem,setFocusOnList ,thunk} from "../actions";
import data from "../data";
const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    droppedItems: state.droppedItems,
    dropElement: state.dropElement,
    focusedAnswerId: state.setFocusOnList,
    selectedDraggable: state.selectDraggableFull,
    dragList: state.optionsData,
    droppableQuestion:state.questionsList,
    aria:data.Screen2.aria,
    blank:data.Screen2.blank
  };
};

const mapDispatch = (dispatch) => ({
  setFocusonDragItem: (answerId) => {
    dispatch(setFocusonDragItem(answerId))
  },
  selectDraggableFull: (answerId) => dispatch(selectDraggableFull(answerId)),
  setFocusOnList: (answerId) => dispatch(setFocusOnList(answerId)),
  onDrop:(accept)=>dispatch(thunk.onDropFull(accept)),

});

export default connect(mapState, mapDispatch)(DroppableItem);
