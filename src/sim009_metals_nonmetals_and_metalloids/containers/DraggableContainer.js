import { connect } from "react-redux";
import Draggables from "../components/Screens/Screen0/Draggables/Drag";

import {
  thunks,
  common,
  selectDraggable,
  setFocusOnList,
  lastFocussedDrag,
  updateAccessibleList,
} from "../actions";

const mapState = (state) => ({
  focusOnDragItem: state.focusOnDragItem,
  isPopupActive: !!state.currentPopup.length,
  selectedDroppable: state.selectedDroppable,
  selectedDraggable: state.selectedDraggable,
});

const mapDispatch = (dispatch) => ({
  selectDraggable: (item) => dispatch(selectDraggable(item)),
  setFocusOnList: (index) => dispatch(setFocusOnList(index)),
  setFocusOnDragItem: (index) => {
    dispatch(thunks.setFocusOnDrag(index));
  },
  lastFocussedDrag: (visitedItemIndex) => {
    dispatch(lastFocussedDrag(visitedItemIndex));
  },
  updateResetBtn: () => {
    dispatch(common.updateResetBtnState(false));
  },
  updateAccessibleList:() =>{
    dispatch(updateAccessibleList(true));
  }
});

export default connect(mapState, mapDispatch)(Draggables);
