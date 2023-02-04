import { connect } from "react-redux";
import DragBox from "../components/activity/quizScreen/DragBox";
import {
  thunk,
  setFocusOnList,
  selectDraggableFull,
  updateAccessibleList,
} from "../actions";
const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    questionsList: state.questionsList,
    focusedAnswerId: state.setFocusOnDargItem,
    audioStatePlay: state.audioStatePlay,
    observationsData: state.observationsData,
  };
};
const mapDispatchToProps = (dispatch) => ({
  updateAccessibleList: () => {
    dispatch(updateAccessibleList(true));
  },
  setFocusOnList: (answerId) => {
    dispatch(setFocusOnList(answerId));
  },
  selectDraggableFull: (answerId) => dispatch(selectDraggableFull(answerId)),
  stopAudio: () => dispatch(thunk.toggleSound()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DragBox);
