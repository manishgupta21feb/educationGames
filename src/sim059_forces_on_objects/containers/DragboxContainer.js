import { connect } from "react-redux";
import DragBox from "../components/Screens/FullView/DragBox";
import {
  setFocusOnList,
  selectDraggableFull,
  setAccessibleListVisible,
} from "../actions";
const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    questionsList: state.questionsList,
    focusedAnswerId: state.setFocusOnDargItem,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setFocusOnList: (answerId) => dispatch(setFocusOnList(answerId)),
  selectDraggableFull: (answerId) => dispatch(selectDraggableFull(answerId)),
  updateAccessibleList: () => {
    dispatch(setAccessibleListVisible(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DragBox);
