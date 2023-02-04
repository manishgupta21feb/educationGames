import DroppableItem from "../components/Screens/ScreenTwo/Droppable/DroppableItem";
import { connect } from "react-redux";
import data from "../data";
import { thunks, droppableChangeState } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    matchedItems: state.matchedItems,
  };
};

const mapDispatch = (dispatch) => ({
  onDrop: (source) => {
    dispatch(thunks.onDrop(source));
  },
  droppableChangeState: (value, blnState) => {
    dispatch(droppableChangeState(value, blnState));
  },
});

export default connect(mapState, mapDispatch)(DroppableItem);
