import { connect } from "react-redux";
import Right from "../components/Screens/Screen4/Right";

import data from "../data";
import { thunks, toggleAccessibleList } from "../actions";

const mapState = (state) => {
 
  return{
  droppedItem: state.droppedItem,
  droppedItems: state.droppedItems,
  correctAnswer: state.correctAnswer,
  draggable: state.selectedDraggable,
  nextScreenButton: state.nextScreenButton,
  ostInstruction: state.selectedDraggable.screen2Text,
}
};

const matchDispatch = (dispatch) => ({
  setDraggable: (id) => {
    dispatch(thunks.setDraggableItem(id));
  },
  toggleAccessibleList: (show) => {
    dispatch(toggleAccessibleList(show));
  },
});

export default connect(mapState, matchDispatch)(Right);
