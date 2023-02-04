import Draggables from '../components/RightSection/Draggables';
import { connect } from "react-redux";
import { 
  thunks, 
  setIsNext,
  updateAccessibleList,
  setzindexStatus 
} from '../actions';

const mapState = (state) => ({
  draggableItems: state.draggableItems,
  selectDraggable: state.selectDraggable,
  selectedDraggable: state.selectedDraggable,
  isDropped: state.isDropped,
  selectedGlass: state.selectedGlass,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  selectDraggable: (draggable) => {
    dispatch(setIsNext(false));
    if (draggable && draggable.id) {
      dispatch(thunks.selectDraggable({ ...draggable }));
    } else {
      dispatch(thunks.selectDraggable(null));
    }
  },
  updateAccessibleList: (status) => {
    dispatch(updateAccessibleList(status));
  },
  setzindexStatus: (status) => {
    dispatch(setzindexStatus(status));
  }
});

export default connect(mapState, mapDispatch)(Draggables);
