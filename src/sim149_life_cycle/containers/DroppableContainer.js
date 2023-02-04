import { connect } from "react-redux";
import Droppable from "../components/Screens/LeftScreen/droppable";

import data from "../data";
import { common, thunks, droppableChangeState } from "../actions";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedQuestion: state.selectedQuestion,
    getScreen: state.getScreen,
    data: data,
    visitedHotspotBtn: state.visitedHotspotBtn,
    currentHotSpot: state.currentHotSpot,
    droppables: state.setDroppable,
    matchedItems: state.matchedItems,
    accessibleListVisible: state.accessibleListVisible,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onDrop: (dropZone) => {
    dispatch(thunks.onDrop(dropZone));
  },
  droppableChangeState: (value, blnState, question) => {
    dispatch(droppableChangeState(value, blnState, question));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Droppable);
