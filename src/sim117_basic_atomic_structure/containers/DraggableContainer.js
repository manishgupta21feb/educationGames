import { connect } from "react-redux";
import Draggable from "../components/LeftRight/Right/Draggable";

import data from "../data";
import { common, updateAccessibleList, setDraggableValue } from "../actions";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    rightHeadingText: data.rightHeadingText,
    draggable: data.draggable,
    draggableValue: state.draggableValue,
    selectedQuestion: state.selectedQuestion,
    correctAnswer: state.correctAnswer,
    disableSubmit: state.disableSubmit,
    matchedItems: state.matchedItems,
  };
};
const mapDispatchToProps = (dispatch) => ({
  updateAccessibleList: (val) => {
    dispatch(updateAccessibleList(val));
  },
  setDraggableValue: (item) => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("STOP_ALL");
    dispatch(setDraggableValue(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Draggable);
