import { connect } from "react-redux";
import Droppable from "../components/LeftRight/Left/Droppable";

import data from "../data";
import { common, thunks, droppableChangeState } from "../actions";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedQuestion: state.selectedQuestion,
    droppableOrbits: state.setDroppable,
    matchedItems: state.matchedItems,
    orbitThreeNoBorder: state.orbitThreeNoBorder,
    orbitTwoNoBorder: state.orbitTwoNoBorder,
    orbitOneNoBorder: state.orbitOneNoBorder,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onDrop: (dropZone) => {
    dispatch(thunks.onDrop(dropZone));
  },
  droppableChangeState: (value, blnState) => {
    dispatch(droppableChangeState(value, blnState));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Droppable);
