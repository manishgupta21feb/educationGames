import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";

import data from "../data";
import { updateAccessibleList, thunks, setDraggableItem } from "../actions";

const mapState = (state) => ({
  list: state.droppables,
  opened: state.accessibleListVisible,
  // opened: true,
});

const matchDispatch = (dispatch) => ({
  onClick: (a, b) => {
    // console.log("From access", a);
    dispatch(thunks.storeDroppedData(a));
    dispatch(thunks.addObjects(a));
  },
  closeList: () => {
    setTimeout(() => {
      dispatch(updateAccessibleList(false));
      dispatch(setDraggableItem(null));
    }, 30);
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
