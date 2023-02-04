import DroppableItem from "../components/activity/quizScreen/DroppableList/DroppableItem";

import data from "../data";
import { thunk } from "../actions";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    dropzone: data.dropzone,
    dropzoneText: data.dropzoneText,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onDrop: (accept) => {
    dispatch(thunk.onDrop(accept));
  },
});

export default connect(mapState, mapDispatch)(DroppableItem);
