import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";

import data from "../data";
import { thunks, toggleAccessibleList } from "../actions";

const mapState = (state) => ({
  opened: state.showAccessibleList,
  list:
    state.currentScreen == 0 ? data.dropzones.screen0 : state.dropzonesScreen4,
});

const matchDispatch = (dispatch) => ({
  onClick: (item) => {
    dispatch(thunks.onAccessibleItemClick(item));
  },
  closeList: () => {
    dispatch(toggleAccessibleList(false));
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
