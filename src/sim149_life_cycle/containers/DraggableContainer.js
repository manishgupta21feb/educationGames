import { connect } from "react-redux";
import Draggable from "../components/Screens/RightScreen/draggable";

import data from "../data";
import { common, setDraggableValue, updateAccessibleList } from "../actions";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedQuestion: state.selectedQuestion,
    getScreen: state.getScreen,
    draggables:
      state.selectedQuestion.id == "frog"
        ? data.draggables2
        : state.draggableData,
    data: data,
    matchedItems: state.matchedItems,
    draggableValue: state.draggableValue,
    correctAnswer: state.correctAnswer,
    showToastMessage: state.showToastMessage,
    dndCount: state.dndCount,
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
