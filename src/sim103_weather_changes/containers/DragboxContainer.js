import { connect } from "react-redux";
import DragBox from "../components/ActivityArea/Drag/DragBox";
import { common,selectDraggable,updateAccessibleList} from "../actions";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    currentseason:state.seasonsSequence[0],
    selectedDay:state.getSelectedDay,
    dragTag:data.dragTag,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setDraggableItem: (item) => {
    dispatch(selectDraggable(item));
  },
  updateAccessibleList:(val)=>{
    dispatch(updateAccessibleList(val));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(DragBox);
