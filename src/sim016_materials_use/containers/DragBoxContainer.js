import { connect } from "react-redux";
import DragBox from "../components/Screens/FullView/DragBox";
import { setFocusOnList, selectDraggableFull, thunks } from "../actions";
const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    questionsList: state.questionsList,
    focusedAnswerId: state.setFocusOnDargItem,
    audioStatePlay: state.audioStatePlay,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setFocusOnList: (answerId) => dispatch(setFocusOnList(answerId)),
  selectDraggableFull: (answerId) => dispatch(selectDraggableFull(answerId)),
  stopAudio: () => dispatch(thunks.toggleSound()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DragBox);
