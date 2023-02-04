import { connect } from "react-redux";
import LeftArea from "../components/RightLeft/LeftArea";

import data from "../data";
import {
  thunks,
  answerSubmitted,
  toggleInfoDialog,
  selectDraggable,
  setResetFocusState,
  setShowDropZone,
  setAccessible,
  infoDialogIndex,
  setRevertAudio,
} from "../actions";

const mapState = (state) => {
  return {
    data,
    animalDropZone: data.animalDropZone,
    plantDropZone: data.plantDropZone,
    isPopupActive: !!state.currentPopup.length,
    selectedDraggable: state.selectedDraggable,
    plantDragableItems: state.dropedItemList.plantDragList,
    animalDraggleItems: state.dropedItemList.animalDragList,
    audioStatePlay: state.audioStatePlay,
    forcePlantHighlight: state.forcePlantHighlight,
    forceAnimalHighlight: state.forceAnimalHighlight,
    combineCellAndMembrane: data.combineDragImg,

    closeInfoBtn: data.draggableData.close,
    audioStatePlay: state.audioStatePlay,
    draggableItems: state.draggableItems,
    selectedDraggable: state.selectedDraggable,
    infoDialog: state.infoDialogState,
    infoIndex: state.infoDialogIndexValue,
    dragInfo: state.draggableItems,
    isAccessible: state.isAccessible,
    focusState: state.resetFocusState,
    showDropZone: state.showDropZone,
    altText: data.animalDropZone[0].altText,
  };
};

const mapDispatch = (dispatch) => ({
  onDrop: (isAnimalDropzone) => {
    dispatch(answerSubmitted(false));
    dispatch(thunks.onDrop(isAnimalDropzone));
  },
  toggleInfoDialog: (val) => {
    dispatch(toggleInfoDialog(val));
  },
  selectDraggable: (draggable) => dispatch(selectDraggable(draggable)),
  setResetFocusState: (val) => {
    dispatch(setResetFocusState(val));
  },
  setAccessible: (a) => {
    dispatch(setAccessible(a));
  },
  setShowDropZone: (val) => {
    dispatch(setShowDropZone(val));
  },
  setInfoIndex: (val) => {
    dispatch(infoDialogIndex(val));
  },
  setRevertAudio: (val) => {
    dispatch(setRevertAudio(val));
  },
});

export default connect(mapState, mapDispatch)(LeftArea);
