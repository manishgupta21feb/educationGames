import { connect } from "react-redux";
import Right from "../components/Screens/Screen1/Right";

import data from "../data";
import { thunks, toggleAccessibleList } from "../actions";

const mapState = (state) => ({
 isPopupActive: !!state.currentPopup.length,
  droppedItem: state.droppedItem,
  droppedItems: state.droppedItems,
  draggables: data.draggables.screen0,
  nextScreenButton: state.nextScreenButton,
  ostInstruction: data.screen1RightOSTInstruction,
});

const matchDispatch = (dispatch) => ({
  setDraggable: (id) => {
    dispatch(thunks.setDraggableItem(id));
  },
  toggleAccessibleList: (show) => {
    dispatch(toggleAccessibleList(show));
  },
});

export default connect(mapState, matchDispatch)(Right);
