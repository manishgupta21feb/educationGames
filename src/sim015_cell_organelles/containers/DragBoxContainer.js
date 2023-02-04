import { connect } from "react-redux";
import DragBox from "../components/Screens/FullView/DragBox"
import { setFocusOnList, selectDraggableFull, thunk ,setAccessibleListVisible} from "../actions"
import data from "../data";
const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    questionsList: state.questionsList,
    focusedAnswerId: state.setFocusOnDargItem,
    audioStatePlay: state.audioStatePlay,
    dragBtnText:data.dragBtnText
  };
};
const mapDispatchToProps = (dispatch) => ({
  setFocusOnList: (answerId) => dispatch(setFocusOnList(answerId)),
  selectDraggableFull: (answerId) => dispatch(selectDraggableFull(answerId)),
  stopAudio:() =>dispatch(thunk.toggleSound()),
  updateAccessibleList: () => {
    dispatch(setAccessibleListVisible(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DragBox);
