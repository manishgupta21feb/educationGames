import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";

import data from "../data";
import { updateAccessibleList, thunks, selectDraggable } from "../actions";

const mapState = (state) => ({
  list: data.venDiagramData.dropZones,
  opened: state.accessibleListVisible,
});

const matchDispatch = (dispatch) => ({
  onClick: (source) => {
    dispatch(thunks.onDrop(source));
  },
  closeList: () => {
    setTimeout(() => {
      dispatch(updateAccessibleList(false));
    }, 50);
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
