import Drop from "../components/Droppable/index";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks, common, updateAccessibleList, rightCircuit } from "../actions";
import { connect } from "react-redux";

const mapState = (state) => ({
  animate: state.animate,
  items: state.droppables,
  clear: state.clearButton,
  answered: state.answered,
  correct: state.correctAnswer,
  circuitName: state.circuitName,
  leftCircuit: state.leftCircuit,
  rightCircuit: state.rightCircuit,
  droppedAtOne: state.droppedAtOne,
  droppedAtSix: state.droppedAtSix,
  droppedAtTwo: state.droppedAtTwo,
  droppedAtFour: state.droppedAtFour,
  droppedAtFive: state.droppedAtFive,
  dropZoneImages: data.dropZoneImages,
  droppedAtThree: state.droppedAtThree,
  droppedAtSeven: state.droppedAtSeven,
  selectedDraggable: state.draggableItem,
  leftClosedCircuit: data.leftCircuitComplete,
  rightClosedCircuit: data.rightCircuitComplete,
  dropZoneImages: data.dropZoneImages,
});
const matchDispatch = (dispatch) => ({
  onDrop: (a) => {
    dispatch(thunks.storeDroppedData(a));
    dispatch(thunks.addObjects());
    dispatch(updateAccessibleList(false));
  },
});

export default connect(mapState, matchDispatch)(Drop);
