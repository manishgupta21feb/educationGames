import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";
import {
  accessibleListVisible,
  thunks,
  updateAccessibleList,
  setDraggableValue,
  setDND1DragItems,
} from "../actions";
import data from "../data";
import { getNumbers } from "../helper.js";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  const accList =
    getNumbers(screenData.id) == 11
      ? state.getAccessibleItem2
      : state.getAccessibleItem1;

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
      dispatch(setDND1DragItems(""));
      dispatch(updateAccessibleList(false));
    }, 50);
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
