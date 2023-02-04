import Questions from "../../components/Dnd/Questions";
import { connect } from "react-redux";
import { thunk } from "../../actions";
import data from "../../data";

const mapState = (state) => {
  return {
    //----> From Data
    submitBtnText: data.buttonLabels.submitAnswer,

    //----> From Reducer
    droppedItems: state.droppedItems,
    opened: state.accessibleListVisible,

    dragDropData: state.dragDropDataReducer,
    ddBtnActive: state.activeDdSubmitBtnReducer,
  };
};

const mapDispatch = (dispatch) => ({
  onDropElement: (evt) => {
    dispatch(thunk.onDropElement(evt));
  },
  onAnswerSubmit: () => {
    dispatch(thunk.onAnswerSubmit());
  },
});

export default connect(mapState, mapDispatch)(Questions);
