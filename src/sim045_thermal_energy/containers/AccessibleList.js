import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";
import { updateAccessibleList, thunk, currentDropZoneIndex } from "../actions";

const mapState = (state) => {
  return {
    list: state.questionsList,
    opened: state.accessibleListVisible,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (source) => {
    dispatch(currentDropZoneIndex(source.index + 1));
    dispatch(thunk.onDrop(source.answerId));
  },
  closeList: () => {
    // setTimeout(() => {
    dispatch(updateAccessibleList(false));
    // });
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
