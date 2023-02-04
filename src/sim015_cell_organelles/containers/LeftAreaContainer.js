import { connect } from "react-redux";
import LeftArea from "../components/RightLeft/LeftArea"
import data from "../data/index"
import { thunk, answerSubmitted } from "../actions"

const mapState = (state) => {
  //console.log("answerSubmitted in draggable",state.dropedItemList.plantDragList)
  return {
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
  }
};

const mapDispatch = (dispatch) => ({
  onDrop: (isAnimalDropzone) => {
    dispatch(answerSubmitted(false));
    dispatch(thunk.onDrop(isAnimalDropzone))
  },
});

export default connect(mapState, mapDispatch)(LeftArea);
