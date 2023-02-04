import Draggable from "../components/activity/FirstScreen/Draggable";
import { connect } from "react-redux";
import data from "../data";
import { common, accessibleList, thunks } from "../actions";

const mapState = (state) => {
  return {

    draggableItems: data.draggableItems,
    selectedDraggable: state.selectedDraggable,
    isPopupActive: !!state.currentPopup.length,
    matchedItems: state.matchedItems,
    getDNDHeading: state.getDNDHeading,
    getHeading: data.dragAndDropHeading[state.getDNDHeading],
  };
};
const mapDispatch = (dispatch) => ({
  selectedButtonValue: (value) => {
    dispatch(thunks.draggedItem(value));
    dispatch(common.toggleToastMessage(false));
  },
  
  updateAccessibleList: (value) => {
    dispatch(accessibleList(true));
  },
});

export default connect(mapState, mapDispatch)(Draggable);
