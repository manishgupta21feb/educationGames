import Options from "../../components/Dnd/Options";
import { connect } from "react-redux";
import {
  common,
  setCurrentDraggingItem,
  updateAccessibleList,
} from "../../actions";

const mapState = (state) => {
  return {
    //----> From Reducer
    droppedItems: state.droppedItems,
    dragDropData: state.dragDropDataReducer,
  };
};

const mapDispatch = (dispatch) => ({
  onDragElement: (evt) => {
    dispatch(setCurrentDraggingItem(evt));
    dispatch(common.toggleToastMessage(false));
  },
  onEnterKey: (evt) => {
    dispatch(updateAccessibleList(true));
    dispatch(setCurrentDraggingItem(evt));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(Options);
