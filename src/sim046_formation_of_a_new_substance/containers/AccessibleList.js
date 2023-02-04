import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";
import { updateAccessibleList, thunk } from "../actions";

const mapState = (state) => ({
  list: state.dropZones,
  opened: state.accessibleListVisible,
});

const matchDispatch = (dispatch) => ({
  onClick: (evt) => {
    dispatch(thunk.onDropElement(evt.accept));
  },
  closeList: () => {
    // setTimeout(() => {
      dispatch(updateAccessibleList(false));
      //dispatch(thunk.closeAccessibleList());
    // }, 100)
    
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
