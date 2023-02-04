import Droppable from "../components/Droppable";
import { connect } from "react-redux";
import { thunk } from "../actions";

const mapState = (state) => {
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

    return updatedStr;
  };
  return {
    //From Reducer
    currentStrength: state.getTotalStrength,
    updatedLabel: updatedDrop(),
  };
};

const mapDispatch = (dispatch) => ({
  onDropElement: (data) => {
    dispatch(thunk.onDropElement(data));
  },
});

export default connect(mapState, mapDispatch)(Droppable);
