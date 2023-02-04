import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";

import data from "../data";
import { updateAccessibleList, thunks } from "../actions";

const mapState = (state) => ({
  list: state.fetchDroppableItems,
  opened: state.accessibleListVisible,
  classes:"access-listing",
});

const matchDispatch = (dispatch) => ({
  onClick: (source) => {
    dispatch(thunks.onDrop(source));
  },
  closeList: () => {
      dispatch(updateAccessibleList(false));
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
