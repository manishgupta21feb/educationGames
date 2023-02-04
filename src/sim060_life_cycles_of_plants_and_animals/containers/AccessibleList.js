import AccessibleList from "../../app/components/AccessibleList";
import { connect } from "react-redux";
import { setUpdateAccessibleList, thunk, setCurrentDraggingItem } from "../actions";

const mapState = (state) => {
  return{
    list: state.getDropZones,
    opened: state.getAccessibleListVisible,
  }
};

const matchDispatch = (dispatch) => ({
  onClick: (evt) => {
    dispatch(thunk.onDropElement(evt.accept, evt.label));
  },
  closeList: () => {
    setTimeout(() => {
      dispatch(setUpdateAccessibleList(false));
      dispatch(setCurrentDraggingItem(""))
    });
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
