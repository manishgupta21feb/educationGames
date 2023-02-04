import Drop from "../components/FullViewComponent/Droppables/Droppables";
import EventManager from "../../app/events/manager";

import data from "../data";
import {
  thunks,
  common,
  updateAccessibleList,
  storeDroppedData,
  addDroppableId,
  addDraggableId,
} from "../actions";
import { connect } from "react-redux";

const mapState = (state) => {
  // console.log("DROP IDS", state.dropIds);
  return {
    // animate: state.animate,
    items: state.droppables,
    // clear: state.clearButton,
    // answered: state.answered,
    // correct: state.correctAnswer,
    selectedDraggable: state.draggableItem,
    droppedItem: state.droppedItem,
    dropIds: state.dropIds,
  };
};
const matchDispatch = (dispatch) => ({
  onDrop: (a) => {
    // console.log("================>>>>>>>>>>", a);
    dispatch(storeDroppedData(a.drag, a.label, a.id));
    // dispatch(thunks.addObjects());
    dispatch(updateAccessibleList(false));
    dispatch(thunks.dropped(a));
    dispatch(addDroppableId(a.id));
    dispatch(addDraggableId(a.drag));
  },
});

export default connect(mapState, matchDispatch)(Drop);
