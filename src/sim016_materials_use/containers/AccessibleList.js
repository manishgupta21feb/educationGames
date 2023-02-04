import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";

import data from "../data";
import {
  thunks,
  setAccessible,
  setShowDropZone,
  answerSubmitted,
  selectDraggable,
  toggleInfoDialog,
} from "../actions";

const mapState = (state) => ({
  list: data.animalDropZone,
  opened: state.isAccessible && state.showDropZone,
});

const matchDispatch = (dispatch) => ({
  closeList: (val) => {
    dispatch(setShowDropZone(val));
  },

  onClick: (item) => {
    dispatch(answerSubmitted(false));
    dispatch(thunks.onDrop(true));
    dispatch(toggleInfoDialog(true));
    dispatch(setAccessible(false));
    dispatch(selectDraggable(null));
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
