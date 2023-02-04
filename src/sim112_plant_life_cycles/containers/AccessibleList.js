import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";

import data from "../data";
import { accessibleList, thunks, selectDraggable, common } from "../actions";

const mapState = (state) => ({
  list: state.secondScreenValue ? state.dropzonesScreen2 : state.dropzones,
  opened: state.accessibleListValue,
  // opened: true,
});

const matchDispatch = (dispatch) => ({
  onClick: (a, b) => {
    // console.log("From access", a);
    dispatch(thunks.dropCheck(a.id));
    // dispatch(common.toggleToastMessage(true));
    // dispatch(thunks.addObjects(a));
  },
  closeList: () => {
    setTimeout(() => {
      dispatch(accessibleList(false));
      dispatch(selectDraggable(null));
    }, 30);
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
