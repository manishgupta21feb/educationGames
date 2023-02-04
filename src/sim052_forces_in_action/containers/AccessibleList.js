import AccessibleList from "../../app/components/AccessibleList";
import { connect } from "react-redux";

import { setUpdateAccessibleList, thunk } from "../actions";
import { cloneDeep } from "lodash";

const mapState = (state) => {
  const _tempDropZones = cloneDeep(state.getDropZones);
  const data = state.getData;
  const updatedDrop = () => {
    let updatedStr = data.dropObjects[0].label;
    const totalDropped = state.getTotalStrength;
    let customStr = " ,";
    let includedStr = "";
    if (totalDropped.length) {
      for (let a = 0; a < totalDropped.length; a++) {
        includedStr +=
          totalDropped.length > 1 && a == totalDropped.length - 2
            ? `${data.dropZoneCustomStr.and} `
            : "";
        customStr += `${
          data.dragObjects[totalDropped[a] - 1].label
        } ${includedStr}`;
        includedStr = "";
      }
      customStr +=
        totalDropped.length > 1
          ? ` ${data.dropZoneCustomStr.are}`
          : ` ${data.dropZoneCustomStr.is}`;
      customStr += ` ${data.dropZoneCustomStr.dropped}`;
      updatedStr += customStr;
    }
    _tempDropZones[0] = { ..._tempDropZones[0], label: updatedStr };
    return _tempDropZones;
  };
  return {
    list: updatedDrop(),
    opened: state.getAccessibleListVisible,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (_data) => {
    dispatch(thunk.onDropElement(_data));
  },
  closeList: () => {
    setTimeout(() => {
      dispatch(setUpdateAccessibleList(false));
    });
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
