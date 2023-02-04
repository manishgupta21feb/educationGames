import { connect } from "react-redux";
import DragBox from "../components/Screens/ScreenTwo/DragBox";
import { common, selectDraggable, updateAccessibleList } from "../actions";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    dragBtnText: data.dragBtnText,
    matchedItems: state.matchedItems,
    accessibleListVisible: state.accessibleListVisible,
    selectedDraggableFull: state.selectedDraggable,
  };
};
const mapDispatchToProps = (dispatch) => ({
  selectDraggableFull: (data) => {
    dispatch(selectDraggable(data));
    if (data) {
      dispatch(common.toggleToastMessage(false));
    }
  },
  updateAccessibleList: () => dispatch(updateAccessibleList(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DragBox);
