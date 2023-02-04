import AccessibleList from "../../app/components/AccessibleList";
import { connect } from "react-redux";

import { setUpdateAccessibleList, thunk } from "../actions";
import { cloneDeep } from "lodash";
import data from "../data";
const mapState = (state) => {
  const _tempDropZones = cloneDeep(state.getDropZones);

  return {
    list: _tempDropZones,
    opened: state.getAccessibleListVisible,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (_data) => {
    const { content } = _data;
    dispatch(thunk.onDropElement(null, content));
  },
  closeList: () => {
    setTimeout(() => {
      dispatch(setUpdateAccessibleList(false));
    });
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
