import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";
import {
  accessibleListVisible,
  thunks,
  updateAccessibleList,
  setDraggableValue,
} from "../actions";

const mapState = (state) => {
  const accList = state.setDroppable.filter((ele) => !ele.isNotDrop);
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
