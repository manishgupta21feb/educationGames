import { connect } from "react-redux";
import Droppable from "../components/ViewArea/BottomArea/Droppable/Droppable.js";

import data from "../data";
import {
  setAccessible,
  selectDraggable,
  thunks,
  droppableChangeState,
} from "../actions";

const mapState = (state) => ({
  data: data,
  buttonLabels: data.buttonLabels,
  isAccessible: state.isAccessible,

  currentPopup: state.currentPopup,
  matchedItems: state.matchedItems,
  activeDropzone: state.activeDropzone,
  isPopupActive: !!state.currentPopup.length,
  selectedDraggable: state.selectedDraggable,
  count: state.questionCount,

  question: state.selectedQuestion,
});

const mapDispatch = (dispatch) => ({
  onDrop: (item) => {
    dispatch(thunks.onDrop(item));
  },
  droppableChangeState: (value, blnState, count) => {
    dispatch(droppableChangeState(value, blnState, count));
  },
});

export default connect(mapState, mapDispatch)(Droppable);
