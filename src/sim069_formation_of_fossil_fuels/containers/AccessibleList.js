import AccessibleList from "../../app/components/AccessibleList";
import { connect } from "react-redux";
import { setUpdateAccessibleList, thunk } from "../actions";

const mapState = (state) => {
  const length = state.getOperatablesData[state.getFossil]
    ? state.getOperatablesData[state.getFossil].length
    : 0;
  return {
    classes: state.getFossil,
    list: state.getPlacementZones.slice(0, length),
    opened: state.getAccessibleListVisible,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (evt) => {
    dispatch(thunk.onPlacement(evt.accept));
  },
  closeList: () => {
    // setTimeout(() => {
    dispatch(setUpdateAccessibleList(false));
    // });
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
