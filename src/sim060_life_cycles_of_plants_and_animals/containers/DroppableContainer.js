import Droppable from "../components/Droppable";
import { connect } from "react-redux";
import { thunk } from "../actions";
import data from "../data";
const mapState = (state) => {
  return {
    //From Reducer
    droppableData: state.getDropZones,
    lifeName: state.getDndScreenFor,
    currentDragItem: state.getCurrentDraggingItem,
    getDroppedItems: state.getDroppedItems,
    isPopupActive: !!state.currentPopup.length,
    observationMotive: data.observationMotive,
    accessibleListOpened: state.getAccessibleListVisible,
    itemLength: state.getDndScreenFor == "cricket" ? 3 : 4,
  };
};

const mapDispatch = (dispatch) => ({
  onDropElement: (accept, label) => {
    dispatch(thunk.onDropElement(accept, label));
  },
});

export default connect(mapState, mapDispatch)(Droppable);
