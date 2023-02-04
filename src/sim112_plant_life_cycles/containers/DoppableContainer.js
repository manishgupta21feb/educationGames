import Droppable from "../components/ViewArea/LeftArea/Droppable";
import { connect } from "react-redux";
import data from "../data";
import { thunks, common } from "../actions";
// import { selectDraggable, common, accessibleList } from "../actions";

const mapState = (state) => ({
  droppableItems: state.secondScreenValue
    ? state.dropzonesScreen2
    : state.dropzones,
  isPopupActive: !!state.currentPopup.length,
});
const mapDispatch = (dispatch) => ({
  onDrop: (value) => {
    dispatch(thunks.dropCheck(value));
  },
});

export default connect(mapState, mapDispatch)(Droppable);
