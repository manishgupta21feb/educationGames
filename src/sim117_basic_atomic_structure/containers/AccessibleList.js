import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";
import data from "../data";
import {
  accessibleListVisible,
  setDraggableValue,
  thunks,
  updateAccessibleList,
} from "../actions";

const mapState = (state) => {
  const accList = state.setDroppable;

  return {
    list: accList,
    opened: state.accessibleListVisible,
    classes: "accessible-container",
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (item) => {
    dispatch(thunks.onDrop(item));
  },
  closeList: () => {
    setTimeout(() => {
      dispatch(updateAccessibleList(false));
      dispatch(setDraggableValue(null));
    }, 50);
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
