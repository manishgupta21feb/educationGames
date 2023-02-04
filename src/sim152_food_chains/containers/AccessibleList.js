import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";

import data from "../data";
import { updateAccessibleList, thunks, setDraggableItem } from "../actions";

const mapState = (state) => ({
  list: state.droppables,
  opened: state.accessibleListVisible,
});

const matchDispatch = (dispatch) => ({
  onClick: (a) => {
    dispatch(thunks.dropped(a));
  },
  closeList: () => {
    setTimeout(() => {
      dispatch(updateAccessibleList(false));
      dispatch(setDraggableItem(null));
    }, 30);
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
