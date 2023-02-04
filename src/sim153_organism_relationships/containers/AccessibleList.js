import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";
import { accessibleList, thunks, selectDraggable, common } from "../actions";

const mapState = (state) => ({
  list: state.dropzones,
  opened: state.accessibleListValue,
});

const matchDispatch = (dispatch) => ({
  onClick: (a, b) => {
    dispatch(thunks.dropCheck(a.id));

  },
  closeList: () => {
    setTimeout(() => {
      dispatch(accessibleList(false));
      dispatch(selectDraggable(null));
    }, 30);
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
