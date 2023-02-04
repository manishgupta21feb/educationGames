import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";

import data from "../data";
import { updateAccessibleList, thunks } from "../actions";

const mapState = (state) => ({
  list: data.droppableZones,
  opened: state.accessibleListVisible,
});
const matchDispatch = (dispatch) => ({
  onClick: (item) => {
    dispatch(thunks.matchDraggedItem({ ...item }));
  },
  closeList: () => {
    dispatch(updateAccessibleList(false));
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
