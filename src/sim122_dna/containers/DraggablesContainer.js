import { connect } from "react-redux";
import Draggables from '../components/activity/FullViewScreen/Draggables';
import data from '../data';
import {
  selectDraggable,
  updateAccessibleList,
  setZIndexStatus
} from '../actions';

const mapState = (state) => ({
  draggableItems: data.draggables,
  selectedDraggable: state.selectedDraggable,
  screen4CorrectAnswer: state.screen4CorrectAnswer,
  droppedItems: state.droppedItems,
  screen6Draggables: data.screen6Draggables,
  screenStatus: state.screenStatus,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  selectDraggable: (id) => {
    dispatch(selectDraggable(id));
  },
  updateAccessibleList: (status) => {
    dispatch(updateAccessibleList(status));
  },
  setZIndexStatus: (status) => {
    dispatch(setZIndexStatus(status));
  }
});

export default connect(mapState, mapDispatch)(Draggables);
