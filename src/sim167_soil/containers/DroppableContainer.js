import Droppable from "../components/FullView/Droppable";
import { connect } from "react-redux";
import { common, thunk, setCurrentDraggable } from "../actions";
import { cloneDeep } from "lodash";
import data from "../data";

const mapState = (state) => {
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

    return updatedStr;
  };
  return {
    //From Reducer
    dropZones: cloneDeep(state.getDropZones),
    currentStrength: state.getTotalStrength,
    draggableData: state.getDragData,
    updatedLabel: updatedDrop(),
  };
};

const mapDispatch = (dispatch) => ({
  onDropElement: (dragSoil, dropSoil) => {
    dispatch(common.toggleToastMessage(false));

    dispatch(thunk.onDropElement(dragSoil, dropSoil));
  },
});

export default connect(mapState, mapDispatch)(Droppable);
