import { connect } from "react-redux";
import Draggable from "../components/ActivityArea/Drag/index";
import data from "../data";
const mapStateToProps = (state) => {
    return {
     isPopupActive: !!state.currentPopup.length,
     currentseason:state.seasonsSequence[0],
     dragItems:state.getAllDragsData,
     dragTag:data.dragTag,
     selectedDraggable:state.selectedDraggable,
     itemDroppedAt:state.itemDroppedAt,

  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Draggable);
