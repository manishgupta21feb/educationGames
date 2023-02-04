import { connect } from "react-redux";
import { selectDraggable, forceAnimalHighlight, forcePlantHighlight, setPreviousSound ,thunk} from "../actions";
import Draggables from "../components/RightLeft/Draggables";
import data from "../data/index"

const mapState = (state) => {
  return {
    closeInfoBtn: data.draggableData.close,
    isPopupActive: !!state.currentPopup.length,
    audioStatePlay: state.audioStatePlay,
    draggableItems: state.draggableItems,
    selectedDraggable: state.selectedDraggable,
    dropDown: data.introImages
  };
};

const mapDispatch = (dispatch) => ({
  selectDraggable: (draggable) => (
    dispatch(selectDraggable(draggable))
    ),
  onDrop: (isAnimalDropzone) => dispatch(thunk.onDrop(isAnimalDropzone)),
  forceAnimalHighlight: (val) => dispatch(forceAnimalHighlight(val)),
  forcePlantHighlight: (val) => dispatch(forcePlantHighlight(val)),
  setPreviousSound: (sound) => dispatch(setPreviousSound(sound))
});

export default connect(mapState, mapDispatch)(Draggables);
