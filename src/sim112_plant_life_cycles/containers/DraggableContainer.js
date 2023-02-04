import Draggable from "../components/ViewArea/RightArea/Draggable";
import { connect } from "react-redux";
import data from "../data";
import { common, accessibleList, thunks, setzindexStatus } from "../actions";

const mapState = (state) => {
  const draggableItem = state.secondScreenValue
    ? data.draggableItemsScreen2
    : data.draggableItemsScreen1;
  return {
    matchedItems: state.matchedItems,
    draggableItems: draggableItem[state.scenerioVisitedValue].dragItem,
    selectedDraggable: state.selectedDraggable,
    isPopupActive: !!state.currentPopup.length,
  };
};
const mapDispatch = (dispatch) => ({
  selectedButtonValue: (value) => {
    // console.log(value, "kkkkk");
    dispatch(thunks.draggedItem(value));
    dispatch(common.toggleToastMessage(false));
  },
  updateAccessibleList: (value) => {
    dispatch(accessibleList(true));
  },
  setzindexStatus: (status) => {
    dispatch(setzindexStatus(status));
  },
});

export default connect(mapState, mapDispatch)(Draggable);
