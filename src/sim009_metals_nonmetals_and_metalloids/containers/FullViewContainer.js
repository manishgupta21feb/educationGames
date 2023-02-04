import { connect } from "react-redux";
import FullView from "../components/Screens/Screen0/FullView/index";

import data from "../data";
import { thunks, selectDraggable, setFocusOnList } from "../actions";

const mapState = (state) => ({
  feedback: state.feedback,
  screen0Alt: data.screen0AltText,
  experimentTitle: data.experimentTitle,
  focussedDrop: state.setFocusOnDropArea,
  focusOnDragItem: state.focusOnDragItem,
  draggableItems: state.fetchDraggableItems,
  droppableItems: state.fetchDroppableItems,
  selectedDraggable: state.selectedDraggable,
  headingLevel1: data.globalUsedText.screen0Heading,
  accessibleListVisible: state.accessibleListVisible,
  lastFocussedDraggable: state.lastFocussedDraggable,
});

const mapDispatch = (dispatch) => ({
  onLoad: () => {
    dispatch(thunks.setExperimentSetUp());
  },
  setFocusOnList: (index) => dispatch(setFocusOnList(index)),
  selectDraggable: (item) => dispatch(selectDraggable(item)),
  setFocusOnDragItem: (index) => {
    dispatch(thunks.setFocusOnDrag(index));
  },
  onDrop: (item) => {
    dispatch(thunks.onDrop(item));
  },
});

export default connect(mapState, mapDispatch)(FullView);
